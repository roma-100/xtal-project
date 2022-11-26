// === reducer-spec-form.js ===
const RESET_SPEC_FORM_DATA = "RESET_SPEC_FORM_DATA";
const INPUT_SET_STEP2 = "INPUT_SET_STEP2";
const INIT_SPECIFICATION_ID = "INIT_SPECIFICATION_ID"
//const INPUT_SET_STEP3 = "INPUT_SET_STEP3";
const SET_STEPS_LEVEL_FINISH = "SET_STEPS_LEVEL_FINISH"; //stepsLevel=10
const INIT_SELECTED_MODEL = "INIT_SELECTED_MODEL";
const INIT_SELECTED_STABILITY_VS_TEMPERATURE ="INIT_SELECTED_STABILITY_VS_TEMPERATURE";
const INIT_CONTINUOUS_CURRENT= "INIT_CONTINUOUS_CURRENT";
const INIT_AGING_PER_DAY= "INIT_AGING_PER_DAY";
const INIT_AGING_PER_DAY_DEF= "INIT_AGING_PER_DAY_DEF";
const INIT_AGING_PER_DAY_MIN= "INIT_AGING_PER_DAY_MIN";
//filterTemperatureRange
const SET_MODEL_TEMPERATURE_RANGE= "SET_MODEL_TEMPERATURE_RANGE";
//agingPerDayArraySet //dispatch(initcontinuousCurrent(continuousCurrent)); INIT_CONTINUOUS_CURRENT
const INIT_XLS_DATA = "INIT_XLS_DATA"
const SET_FREQUENCY_BLUR = "SET_FREQUENCY_BLUR";
const SET_STABILITY_VS_TEMPERATURE_BLUR = "SET_STABILITY_VS_TEMPERATURE_BLUR";
const SET_EMAIL_DATA = "SET_EMAIL_DATA";
const UPDATE_EMAIL_DATA = "UPDATE_EMAIL_DATA";
const PHASE_NOISE_SWITCH_TOGGLE = "PHASE_NOISE_SWITCH_TOGGLE";
const INIT_BLUR_DATASET = "INIT_BLUR_DATASET"
const UPDATE_CONTINUOUS_CURRENT_DATA_SET = "UPDATE_CONTINUOUS_CURRENT_DATA_SET"
const UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET = "UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET"
const UPDATE_AGING_PER_DAY_DATA_SET= "UPDATE_AGING_PER_DAY_DATA_SET";
const UPDATE_AGING_PER_DAY_DEF_DATA_SET= "UPDATE_AGING_PER_DAY_DEF_DATA_SET";
const UPDATE_AGING_PER_DAY_MIN_DATA_SET= "UPDATE_AGING_PER_DAY_MIN_DATA_SET";

/*     agingPerDayDefResult: 0,
    agingPerDayMinResult: 0, */
const SET_VOLTAGE_BLUR = "SET_VOLTAGE_BLUR";
const SET_OUTPUT_TYPE_BLUR = "SET_OUTPUT_TYPE_BLUR";
const ADD_SPECIAL_REQUIREMENTS = "ADD_SPECIAL_REQUIREMENTS"

const initialState = {
  selectedModel: {},
  blurDataset: {
    temperatureRange: '',
    frequency: 0,
    stabilityVsTemperature: 0,
    voltage: "3.3", //default value
    outputType: "Sine-wave", //default value
    continuousCurrentResult: 0,
    agingPerDayResult: 0,
    agingPerDayDefResult: 0,
    agingPerDayMinResult: 0,
    phaseNoise1Hz: 0,
    phaseNoise10Hz: 0,
    phaseNoise100Hz: 0,
    phaseNoise1KHz: 0,
    phaseNoise10KHz: 0,
    phaseNoise100KHz: 0,  
  },
  stepsLevel: 1,
  specificationId: 0,
  agingPerDay: {},
  agingPerDayDef: {},
  agingPerDayMin: {},
  stabilityVsTemperature: {},
  stabilityVsTemperature: {},
  submitData: {},
  xlsData: {},
  emailData: {},
  dateUtc: '',
  service: {
    specifificationsCreated: 'specifificationsCreated.log',
    specifificationsSubmitted: 'specifificationsSubmitted.log',
    visitorInfo: 'visitorInfo.log',
  }
};

const specFormReducer = (state = initialState, action) => {
  if (action.type === RESET_SPEC_FORM_DATA) {
    //debugger
    const stateCopy = {
      ...initialState,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INIT_SPECIFICATION_ID) {
    function uid1() {
      return (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
    };
    function uid2() {
      var array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      //console.log(array)
      return array[0];
  /*     for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
      } */
    }
        /* uid: 1nm0ixmd1j08ijg
      random number: 2695751178 */

    const stateCopy = {
      ...state,
      specificationId: uid2()
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INPUT_SET_STEP2) {
    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
     
    function formatDate(date) {
      return (
        [
          date.getFullYear(),
          padTo2Digits(date.getUTCMonth() + 1),
          padTo2Digits(date.getUTCDate()),
        ].join('-') +
        ' ' +
        [
          padTo2Digits(date.getUTCHours()),
          padTo2Digits(date.getUTCMinutes()),
          padTo2Digits(date.getUTCSeconds()),
        ].join(':')
      );
    }

    const continuousCurrentDefaultVAlue = !action.submitDataArr.submitData.continuousCurrent
      ? state.blurDataset.continuousCurrentResult + 5 
      : action.submitDataArr.submitData.continuousCurrent

      const aginPerDayDefaultVAlue = !action.submitDataArr.submitData.aginPerDay
      ? state.blurDataset.agingPerDayDefResult 
      : action.submitDataArr.submitData.aginPerDay

    const stateCopy = {
      ...state,
      submitData: {...action.submitDataArr.submitData, 
        continuousCurrent: continuousCurrentDefaultVAlue,
        aginPerDay: aginPerDayDefaultVAlue,
      },
      //need for e-mail data{} and for banner2
      blurDataset: {...state.blurDataset, 
        ...action.submitDataArr.submitData, 
        continuousCurrent: continuousCurrentDefaultVAlue,
        aginPerDay: aginPerDayDefaultVAlue,
      },
      dateUtc: formatDate(new Date()) + ' UTC',
      stepsLevel: 2,
    };
    //debugger
    return stateCopy;
  }



  if (action.type === INIT_CONTINUOUS_CURRENT) {
    //console.log(action.continuousCurrent)
    //action.selectedModel
    const stateCopy = {
      ...state,
      continuousCurrentData: action.continuousCurrent,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === SET_STABILITY_VS_TEMPERATURE_BLUR) {
    //console.log(action.continuousCurrent)
    //action.selectedModel
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, stabilityVsTemperature: action.stabilityVsTemperatureBlurValue}
    };
    //debugger
    return stateCopy;
  }

//UPDATE_EMAIL_DATA
if (action.type === UPDATE_EMAIL_DATA) {
  let emailData = {}
  const a = state.blurDataset

  if (a.temperatureRange) 
    {emailData = {...emailData, ...{["Temperature Range"]: a.temperatureRange,}}}

  if (a.frequency) 
    {emailData = {...emailData, ...{["Frequency"]: a.frequency + ' MHz',}}}

  if (state.selectedModel.frequencyType === "with multiplication")
    {emailData = {...emailData, ...{["FrequencyType"]: 'MULTIPLICATION',}}}

    if (a.stabilityVsTemperature) 
    {emailData = {...emailData, ...{["Stability vs Temperature"]: '±' + a.stabilityVsTemperature + ' ppb',}}}
    if (a.voltage ) 
    {emailData = {...emailData, ...{["Supply Voltage"]: a.voltage + ' V',}}}

  if (a.outputType) 
  {emailData = {...emailData, ...{["Output Type"]: a.outputType.toUpperCase(),}}}

  if (state.selectedModel.frequencyType === "with multiplication")
    {emailData = {...emailData, ...{["Subharmonics Level"]: a.subharmonicsLevel + ' dBc',}}}

    if (a.continuousCurrent) 
    {emailData = {...emailData, ...{["Continuous current max limit"]: a.continuousCurrent + ' mA',}}}

    if (a.aginPerDay) 
    {emailData = {...emailData, ...{["Agin per Day"]: '±' + a.aginPerDay + ' ppb',}}}

    if (a.phaseNoise1Hz) 
    {emailData = {...emailData, ...{["Phase noise 1Hz"]: a.phaseNoise1Hz + ' dBc/Hz',}}}

    if (a.phaseNoise10Hz) 
    {emailData = {...emailData, ...{["Phase noise 10Hz"]: a.phaseNoise10Hz + ' dBc/Hz',}}}

    if (a.phaseNoise100Hz) 
    {emailData = {...emailData, ...{["Phase noise 100Hz"]: a.phaseNoise100Hz + ' dBc/Hz',}}}

    if (a.phaseNoise1KHz) 
    {emailData = {...emailData, ...{["Phase noise 1KHz"]: a.phaseNoise1KHz + ' dBc/Hz',}}}

    if (a.phaseNoise10KHz) 
    {emailData = {...emailData, ...{["Phase noise 10KHz"]: a.phaseNoise10KHz + ' dBc/Hz',}}}

    if (a.phaseNoise100KHz) 
    {emailData = {...emailData, ...{["Phase noise 100KHz"]: a.phaseNoise100KHz + ' dBc/Hz',}}}


  const stateCopy = {
    ...state,
    emailData: emailData, 
  };
  //debugger
  return stateCopy;
}

  
  if (action.type === INIT_SELECTED_MODEL) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      selectedModel: action.selectedModel,
      stepsLevel: 1,
      phaseNoiseSwitch: false,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INIT_SELECTED_STABILITY_VS_TEMPERATURE) {
    const stateCopy = {
      ...state,
      stabilityVsTemperature: action.selectedModelStabilityVsTemperature,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INIT_AGING_PER_DAY) {
    const stateCopy = {
      ...state,
      agingPerDay: action.agingPerDayArraySet,
    };
    //debugger
    return stateCopy;
  }  

  if (action.type === INIT_AGING_PER_DAY_DEF) {
    const stateCopy = {
      ...state,
      agingPerDayDef: action.agingPerDayDefArraySet,
    };
    //debugger
    return stateCopy;
  }  

  if (action.type === INIT_AGING_PER_DAY_MIN) {
    const stateCopy = {
      ...state,
      agingPerDayMin: action.agingPerDayMinArraySet,
    };
    //debugger
    return stateCopy;
  }  

  /* const INIT_AGING_PER_DAY_DEF= "INIT_AGING_PER_DAY_DEF";
const INIT_AGING_PER_DAY_MIN= "INIT_AGING_PER_DAY_MIN"; */
//const INIT_AGING_PER_DAY= "INIT_AGING_PER_DAY";

  if (action.type === UPDATE_AGING_PER_DAY_DATA_SET) {
    //state.agingPerDay {apd} {apd40}
    //console.log('hello' + state.blurDataset.frequency)
    const apdArray = () => {
      //console.log(state.selectedModel.frequencyType)
      //console.log(state.agingPerDay)
      if (state.selectedModel.frequencyType === "with multiplication") {
        if (state.blurDataset.frequency >= 40) return state.agingPerDay.apd40;
        return state.agingPerDay.apd
      }
      if (state.selectedModel.frequencyType === "fundamental") return state.agingPerDay.apd
    }

    const getAgingPerDay = () => {
      const a = apdArray()
      const frequency = state.blurDataset.frequency
      if (frequency === 0) return 0
      if (frequency <= a[0]) return a[1]
      if (frequency <= a[2]) return a[3]
      if (frequency <=a [4]) return a[5]
      if (frequency <=a [6]) return a[7]
      if (frequency <=a [8]) return a[9]
      return a[11]
      //IF(frequency<=a[0],a[1],  (frequency<=a[2],a[3],IF(frequency<=a[4],a[5],IF(frequency<=a[6],a[7],IF(frequency<=a[8],a[9],a[11])))))
    }
    const stateCopy = {
      ...state,
      blurDataset: {...state.blurDataset, 
        agingPerDayResult: getAgingPerDay()}
    };
    //debugger
    return stateCopy;
  }  
  
  if (action.type === UPDATE_AGING_PER_DAY_DEF_DATA_SET) {
    //state.agingPerDay {apd} {apd40}
    //console.log('hello' + state.blurDataset.frequency)
    const apdDefArray = () => {
      //console.log(state.selectedModel.frequencyType)
      //console.log(state.agingPerDay)
      if (state.selectedModel.frequencyType === "with multiplication") {
        if (state.blurDataset.frequency >= 40) return state.agingPerDayDef.apdDef40;
        return state.agingPerDayDef.apdDef
      }
      if (state.selectedModel.frequencyType === "fundamental") return state.agingPerDayDef.apdDef
    }

    const getAgingPerDayDef = () => {
      const a = apdDefArray()
      const f = state.blurDataset.frequency
      if (f === 0) return 0
      if (f <= a[0]) return a[1]
      if (f <= a[2]) return a[3]
      if (f <=a [4]) return a[5]
      if (f <=a [6]) return a[7]
      if (f <=a [8]) return a[9]
      return a[11]
    }
    const stateCopy = {
      ...state,
      blurDataset: {...state.blurDataset, 
        agingPerDayDefResult: getAgingPerDayDef()}
    };
    //debugger
    return stateCopy;
  } 

  if (action.type === UPDATE_AGING_PER_DAY_MIN_DATA_SET) {
    //state.agingPerDay {apd} {apd40}
    //console.log('hello' + state.blurDataset.frequency)
    const apdMinArray = () => {
      //console.log(state.selectedModel.frequencyType)
      //console.log(state.agingPerDay)
      if (state.selectedModel.frequencyType === "with multiplication") {
        if (state.blurDataset.frequency >= 40) return state.agingPerDayMin.apdMin40;
        return state.agingPerDayMin.apdMin
      }
      if (state.selectedModel.frequencyType === "fundamental") return state.agingPerDayMin.apdMin
    }

    const getAgingPerDayMin = () => {
      const a = apdMinArray()
      const f = state.blurDataset.frequency
      if (f === 0) return 0
      if (f <= a[0]) return a[1]
      if (f <= a[2]) return a[3]
      if (f <=a [4]) return a[5]
      if (f <=a [6]) return a[7]
      if (f <=a [8]) return a[9]
      return a[11]
      //IF(frequency<=a[0],a[1],  (frequency<=a[2],a[3],IF(frequency<=a[4],a[5],IF(frequency<=a[6],a[7],IF(frequency<=a[8],a[9],a[11])))))
    }
    const stateCopy = {
      ...state,
      blurDataset: {...state.blurDataset, 
        agingPerDayMinResult: getAgingPerDayMin()}
    };
    //debugger
    return stateCopy;
  } 

  if (action.type === INIT_BLUR_DATASET) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, 
        temperatureRange: state.selectedModel.temperatureRange}
    };
    //debugger
    return stateCopy;
  }

   if (action.type === ADD_SPECIAL_REQUIREMENTS) {
    console.log(action.txt)
    
    let txt = action.txt /*  //.replace(/\r?\n/g, '</p><p>') */
    const stateCopy = {
      ...state,
      xlsData: {...state.xlsData, specialRequirements: txt},
      stepsLevel: 3,
    };
    //debugger
    return stateCopy;
  } 

  if (action.type === UPDATE_CONTINUOUS_CURRENT_DATA_SET) {
    //console.log('Hello')
    const nominalFrequency = state.blurDataset.frequency
    const voltage = state.blurDataset.voltage
    const outputType = state.blurDataset.outputType

    const getContinuousCurrentArray = () => {

      if (nominalFrequency > 0) {

        const frequencyType = state.selectedModel.frequencyType
        // if (voltage === "3.3" && outputType === "Sine-wave" && frequencyType === 'with multiplication' &&  )
        if (frequencyType === 'with multiplication' ) {
          if (nominalFrequency < 40) {
            if (voltage === "3.3" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM.sWave3p3V
            }
            if (voltage === "5" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM.sWave5V
            }
            if (voltage === "3.3" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM.hsmos3p3V
            }
            if (voltage === "5" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM.hsmos5V
            }
          }
          if (nominalFrequency >= 40) {
            if (voltage === "3.3" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM40.sWave3p3V
            }
            if (voltage === "5" && outputType === "Sine-wave") {
              return state.continuousCurrentData.ccM40.sWave5V
            }
            if (voltage === "3.3" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM40.hsmos3p3V
            }
            if (voltage === "5" && outputType === "HCMOS") {
              return state.continuousCurrentData.ccM.hsmos5V
            }
          }
        }

        if (frequencyType === 'fundamental' ) {
          if (voltage === "3.3" && outputType === "Sine-wave") {
            return state.continuousCurrentData.ccF.sWave3p3V
          }
          if (voltage === "5" && outputType === "Sine-wave") {
            return state.continuousCurrentData.ccF.sWave5V
          }
          if (voltage === "3.3" && outputType === "HCMOS") {
            return state.continuousCurrentData.ccF.hsmos3p3V
          }
          if (voltage === "5" && outputType === "HCMOS") {
            return state.continuousCurrentData.ccF.hsmos5V
          }
        }
      }
      //default value
      return 0      
    }

    const continuousCurrentTypical = () => {
      const a = getContinuousCurrentArray()
      if (!a) {
        if (voltage === "3.3") { return  37 }
        if (voltage === "5") { return  31 }
      }
      const cc = ((a[3]-a[1])*(nominalFrequency-a[0])/(a[2]-a[0])+a[1])+a[4]
      return cc.toFixed(0)
    }
    //console.log(continuousCurrentTypical())

    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, continuousCurrentResult: Number(continuousCurrentTypical())}
    };
    //debugger
    return stateCopy;
  }

  if (action.type === UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET) {
      const frequency = state.blurDataset.frequency;
      let frequencyArr = state.stabilityVsTemperature.frequency;
      let stabilityArr = state.stabilityVsTemperature.stability;
      if (
        state.selectedModel.frequencyType === "with multiplication" &&
        frequency >= 40
      ) {
        frequencyArr = state.stabilityVsTemperature.frequency40;
        stabilityArr = state.stabilityVsTemperature.stability40;
      }

      const getStability = () => {
        if (frequency < frequencyArr[0]) return stabilityArr[0];
        if (frequency < frequencyArr[1]) {
          const result =
            ((stabilityArr[1] - stabilityArr[0]) *
              (frequency - frequencyArr[0])) /
              (frequencyArr[1] - frequencyArr[0]) +
            stabilityArr[0];
          return result;
        }
        if (frequency <= frequencyArr[2]) {
          const result =
            ((stabilityArr[2] - stabilityArr[1]) *
              (frequency - frequencyArr[1])) /
              (frequencyArr[2] - frequencyArr[1]) +
            stabilityArr[1];
          return result;
        }
        return state.selectedModel.stabilityLimit;
      };
      //console.log("getStability->: " + getStability())
      //debugger
      const stateCopy = {
        ...state,
        blurDataset: { ...state.blurDataset, stabilityVsTemperature: getStability().toFixed(1)}
      };
      //debugger
      return stateCopy;
    }

  if (action.type === SET_FREQUENCY_BLUR) {
    //console.log("ffooo")
    const frequencyBlurValue = action.frequencyBlurValue;
    //debugger
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, frequency: frequencyBlurValue}
    };
    //debugger
    return stateCopy;
  }

 if (action.type === SET_VOLTAGE_BLUR) {

    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, voltage: action.value}
    };
    return stateCopy;
  }

  if (action.type === SET_OUTPUT_TYPE_BLUR) {
    const stateCopy = {
      ...state,
      blurDataset: { ...state.blurDataset, outputType: action.value}
    };
    return stateCopy;
  }

  if (action.type === SET_EMAIL_DATA) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      emailData: action.emailData,
    };
    //debugger
    return stateCopy;
  }
  
  if (action.type === PHASE_NOISE_SWITCH_TOGGLE) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      phaseNoiseSwitch: !state.phaseNoiseSwitch,
    };
    //debugger
    return stateCopy;
  }
  
  if (action.type === SET_MODEL_TEMPERATURE_RANGE) {

    const stateCopy = {
      ...state,
      selectedModel: {...state.selectedModel, temperatureRange: action.value},
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INIT_XLS_DATA) {
    const data = state.submitData

    const waveForm = (outputType, voltage) => {
      if (outputType === "Sine-wave") {return ["Sine-wave"]} 
      if (outputType === "HCMOS") {
        if (outputType === "HCMOS") {
          if (voltage === "5") return ["HCMOS 4.2V", 4.75, 5, 5.25]
          if (voltage === "3.3") return ["HCMOS 2.8V", 3.15, 3.3, 3.45]/* 3.15	3.3	3.45 */
      }
      } 
    }
    const getHcmosRiseFallTimeMax = (f) => {
      const a = [10, 10, 100, 3]
      if (f < a[0]) return a[1]
      if (f < a[2]) return (a[3]-a[1])*(f-a[0])/(a[2]-a[0])+a[1]
      return a[3]
    }
//console.log(getHcmosRiseFallTimeMax(55))
    const getAgingFirstYear =(AgingPerDay) => {
      const agingFirstYear = [0.1,0.15,0.2,0.1]
      const a = agingFirstYear
      if (AgingPerDay < a[0]) return AgingPerDay*a[1]
      if (AgingPerDay < a[2]) return AgingPerDay*((AgingPerDay-a[0])*(a[3]-a[1])/(a[2]-a[0])+a[1])
      return AgingPerDay*a[3]
    }

    const getInitialTolerance = (f, frequencyType) => {

      const aF = [8, 0.1, 40, 0.15, 80, 0.2, 110, 0.3]
      const aM = [24, 0.1, 120, 0.15, 240, 0.2, 330, 0.3]
      const aM40 = [40, 0.1, 200, 0.15, 400, 0.2, 550, 0.3]

      const a = frequencyType !== "with multiplication"
                ? aF
                : f >= 40
                  ? aM40
                  : aM

      if (f < a[2]) return a[1]
      if (f < a [4]) return a[3]
      if (f < a[6]) return a[5]
      return a[7]
    }

    const getSubHarmonicsConditions = (f, frequencyType) => {
      if (frequencyType === "with multiplication") {
        if (f >= 40 ) return 'fSH=f0±(n*f0/5)  n=1,2,3...'
        return 'fSH=f0±(n*f0/3)  n=1,2,3...'
      }
      return null
    }

    const frequencyTurningRange = () => {
      const a = [0.35, 0.5, 0.5, 1.5, 1, 5, 1.3] 
      const aginPerDay = state.submitData.aginPerDay
      if (aginPerDay < a[1]) return a[0]
      if (aginPerDay < a[3]) return a[2]
      if (aginPerDay < a[5]) return a[4]
      return a[6]
    }
//specificationId
    const stateCopy = {
      ...state,
      xlsData: {
        row1modelNameCode: state.selectedModel.name + '-' + state.specificationId,
        row1SpecDate:  'Date: ' + state.dateUtc,
        cellG5nominalFrequencyValue: state.submitData.nominalFrequency,
        /* ["Sine-wave"] , ["HCMOS 4.2V", 4.75, 5, 5.25], ["HCMOS 2.8V", 3.15, 3.3, 3.45] */
        cellH5InitialToleranceValue: '±' + getInitialTolerance(state.submitData.nominalFrequency, state.selectedModel.frequencyType ),
        cellG7waveFormValue: waveForm(data.outputType, data.voltage),
        row8__10_waveFormVisible: data.outputType === "Sine-wave" ? true : false,
        cellF8waveLevelValue: data.voltage === "3.3" ? 4 : 7,

        row11__15_waveFormVisible: data.outputType === "HCMOS" ? true : false,
        cellF11hcmosHighVoltageValue: data.voltage === "3.3" ? 2.4 : 3.8,

        row15HcmosRiseFallTimeVisible: data.outputType === "Sine-wave" ? true : false,
        cellH15HcmosRiseFallTimeMaxValue: getHcmosRiseFallTimeMax(state.submitData.nominalFrequency),

        row16subHarmonicsVisible: state.selectedModel.frequencyType === "with multiplication" ? true : false,
        cellD16subHarmonicsConditions: getSubHarmonicsConditions(state.submitData.nominalFrequency, state.selectedModel.frequencyType ),
        cellH16subHarmonicsValue: data.subharmonicsLevel ? data.subharmonicsLevel : null, /* Not empty value like "" */
        cellH20VoltageRangeValue: data.voltage === "3.3" ? 2.8 : 4.2,
        row21PresetControlVoltageeArray: data.voltage === "3.3" ? [1.2, 1.4, 1.6] : [1.9, 2.1, 2.3],
        cellH24FrequencyTurningRange: frequencyTurningRange() * -1,
        cellF26FrequencyTurningRange: frequencyTurningRange(),
        row27ReferenceVoltageArray: data.voltage === "3.3" ? [2.7, 2.8, 3.1] : [4, 4.2, 4.3],
        row30inputVoltageArray: data.voltage === "3.3" ? [3.15, 3.3, 3.45] : [4.75, 5, 5.25],
        cellD31warmUpCurrentValue: data.voltage === "3.3" ? "Vcc=3.3V": "Vcc=5.0V",
        cellD32warmUpCurrentValue: data.voltage === "3.3" ? "at +25°C, Vcc=3.3V": "at +25°C, Vcc=5.0V",
        cellG32continuousCurrentValue: state.blurDataset.continuousCurrentResult,
        cellH32continuousCurrentValue: data.continuousCurrent,
        cellH33WarmUpTimeValue: data.voltage === "3.3" ? 100: 80,
        cellH35stabilityVsTemperatureValue: '±' + data.stabilityVsTemperature,
        cellH39PhazeNoise1HzValue: data.phaseNoise1Hz ? data.phaseNoise1Hz : "",
        cellH40PhazeNoise10HzValue: data.phaseNoise10Hz ? data.phaseNoise10Hz : "",
        cellH41PhazeNoise100HzValue: data.phaseNoise100Hz ? data.phaseNoise100Hz : "",
        cellH42PhazeNoise1KHzValue: data.phaseNoise1KHz ? data.phaseNoise1KHz : "",
        cellH43PhazeNoise10KHzValue: data.phaseNoise10KHz ? data.phaseNoise10KHz : "",
        cellH44PhazeNoise100KHzValue: data.phaseNoise100KHz ? data.phaseNoise100KHz : "",
        cellH45aginPerDayValue: '±' + data.aginPerDay,
        cellH46agingFirstYearValue: '±' + getAgingFirstYear(data.aginPerDay).toFixed(3), //getAgingFirstYear
        row48powerVoltage: `-0.5 to ${(data.voltage * 1.2).toFixed(1)} V`,
        row49controlVoltage: `-1.0 to ${(data.voltage * 1.2).toFixed(1)} V`,
        row51operatingTemperatureRange: state.selectedModel.temperatureRange,
        row53humidityValue: state.selectedModel.humidity,
        row53mechanicalShock: state.selectedModel.mechanicalShock,
        row53vibration: state.selectedModel.vibration,
        specialRequirements: '',
        bottomImgCase: '..' + state.selectedModel.pictureCase,
        bottomImgPinout: '..' + state.selectedModel.picturePinout,

      }
    };
    //debugger
    return stateCopy;
  }
  
  if (action.type === SET_STEPS_LEVEL_FINISH) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      stepsLevel: 10,
    };
    //debugger
    return stateCopy;
  }

  //debugger
  return state;
};

const specFormInputStep2AC = (submitDataArr) => ({ type: INPUT_SET_STEP2, submitDataArr});
//export const specFormInputStep3 = (submitDataArr) => ({ type: INPUT_SET_STEP3, submitDataArr});
const initSpecificationId = () => ({ type: INIT_SPECIFICATION_ID });
const updateContinuousCurrentDataSetAC = () => ({ type: UPDATE_CONTINUOUS_CURRENT_DATA_SET });
const updateAgingPerDayDataSetAC = () => ({ type: UPDATE_AGING_PER_DAY_DATA_SET });
const updateAgingPerDayDefDataSetAC = () => ({ type: UPDATE_AGING_PER_DAY_DEF_DATA_SET });
const updateAgingPerDayMinDataSetAC = () => ({ type: UPDATE_AGING_PER_DAY_MIN_DATA_SET });
const updateStabilityVsTemperatureDataSetAC = () => ({ type: UPDATE_STABILITY_VS_TEMPERATURE_DATA_SET });

const initBlurDataSetSetAC = () => ({ type: INIT_BLUR_DATASET });
const setFrequencyBlurAC = (frequencyBlurValue) => ({ type: SET_FREQUENCY_BLUR, frequencyBlurValue,
});
const setStabilityVsTemperatureBlurAC = (stabilityVsTemperatureBlurValue) => ({ type: SET_STABILITY_VS_TEMPERATURE_BLUR, 
  stabilityVsTemperatureBlurValue, });
const setVoltageBlurAC = (value) => ({ type: SET_VOLTAGE_BLUR, value });
const setOutputTypeBlurAC = (value) => ({ type: SET_OUTPUT_TYPE_BLUR, value });
const setModelTemperatureRange = (value) => ({ type: SET_MODEL_TEMPERATURE_RANGE, value });
const addSpecialRequirements = (txt) => ({ type: ADD_SPECIAL_REQUIREMENTS, txt });
export const initSelectedModel = (selectedModel) => ({ type: INIT_SELECTED_MODEL, selectedModel, });
export const initcontinuousCurrent= (continuousCurrent) => ({ type: INIT_CONTINUOUS_CURRENT, continuousCurrent, });
const initAgingPerDayArray= (agingPerDayArraySet) => ({ type: INIT_AGING_PER_DAY, agingPerDayArraySet, });
const initAgingPerDayDefArray= (agingPerDayDefArraySet) => ({ type: INIT_AGING_PER_DAY_DEF, agingPerDayDefArraySet, });
const initAgingPerDayMinArray= (agingPerDayMinArraySet) => ({ type: INIT_AGING_PER_DAY_MIN, agingPerDayMinArraySet, });

//agingPerDayArraySet //dispatch(initcontinuousCurrent(continuousCurrent)); INIT_CONTINUOUS_CURRENT
export const initsselectedModelStabilityVsTemperature = ( selectedModelStabilityVsTemperature ) => ({
  type: INIT_SELECTED_STABILITY_VS_TEMPERATURE,
  selectedModelStabilityVsTemperature,
});
export const setEmailDataAC = (emailData) => ({ type: SET_EMAIL_DATA, emailData, });
export const updateEmailData = () => ({ type: UPDATE_EMAIL_DATA });
export const setStepsLevelFinish = () => ({ type: SET_STEPS_LEVEL_FINISH });
export const resetSpecFormDataAC = () => ({ type: RESET_SPEC_FORM_DATA });
export const phaseNoiseSwitchToggleAC = () => ({ type: PHASE_NOISE_SWITCH_TOGGLE });

const initXlsData = () => ({ type: INIT_XLS_DATA });

/* ========= THUNK PART ================ */
// FRom GenModelsHello.jsx
export const specFormInitStep2TC = (
  selectedModel,
  selectedModelStabilityVsTemperature,
  continuousCurrent,
  agingPerDayArraySet,
  agingPerDayDefArraySet,
  agingPerDayMinArraySet,
  modelTemperatureRange
) => {
  return (dispatch) => {
    dispatch(initSelectedModel(selectedModel));
    dispatch(setModelTemperatureRange(modelTemperatureRange));
    
    dispatch(initSpecificationId());
    dispatch(
      initsselectedModelStabilityVsTemperature(
        selectedModelStabilityVsTemperature
      )
    );
    dispatch(initcontinuousCurrent(continuousCurrent));
    dispatch(initBlurDataSetSetAC());
    dispatch(initAgingPerDayArray(agingPerDayArraySet));
    dispatch(initAgingPerDayDefArray(agingPerDayDefArraySet));
    dispatch(initAgingPerDayMinArray(agingPerDayMinArraySet));

    dispatch(updateContinuousCurrentDataSetAC());
    dispatch(updateStabilityVsTemperatureDataSetAC());
    dispatch(updateAgingPerDayDataSetAC());
    dispatch(updateAgingPerDayDefDataSetAC());
    dispatch(updateAgingPerDayMinDataSetAC());
    dispatch(updateEmailData());
  };
};


export const setFrequencyBlurTC = (event) => {
  return (dispatch) => {
    dispatch(setFrequencyBlurAC(event.target.value | 0));
    dispatch(updateContinuousCurrentDataSetAC());
    dispatch(updateStabilityVsTemperatureDataSetAC());
    dispatch(updateAgingPerDayDataSetAC());
    dispatch(updateAgingPerDayDefDataSetAC());
    dispatch(updateAgingPerDayMinDataSetAC());
    dispatch(updateEmailData());
  };
};

//stabilityVsTemperatureBlurValue
export const setstabilityVsTemperatureBlurValueBlurTC = (event) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(setStabilityVsTemperatureBlurAC(event.target.value));
    dispatch(updateEmailData());
  };
};

export const updateVoltageBlurTC = (event) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(setVoltageBlurAC(event.target.value));
    dispatch(updateContinuousCurrentDataSetAC());
    dispatch(updateEmailData());
  };
};

//stabilityVsTemperatureBlurValue
export const updateOutputTypeBlurTC = (event) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(setOutputTypeBlurAC(event.target.value));
    dispatch(updateContinuousCurrentDataSetAC());
    dispatch(updateEmailData());
  };
};

export const specFormInputStep2TC = (submitDataArr) => {
  //console.log(event.target.value)
  return (dispatch) => {
    dispatch(specFormInputStep2AC(submitDataArr))
    dispatch(updateEmailData())
    dispatch(initXlsData())
/*     dispatch(specFormInputStep2AC(submitDataArr));
    dispatch(updateEmailData()); */
  };
};

export const clickHandlerAddSpecialRequirementsTC = (data) => {
  //console.log(data.specialRequirements)
  const txt = data.specialRequirements
  return (dispatch) => {
    dispatch(addSpecialRequirements(txt))
  }

};

export default specFormReducer;
