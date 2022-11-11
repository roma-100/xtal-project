// === reducer-spec-form.js ===
const RESET_SPEC_FORM_DATA = "RESET_SPEC_FORM_DATA";
const INPUT_SET_STEP2 = "INPUT_SET_STEP2";
const INPUT_SET_STEP3 = "INPUT_SET_STEP3";
const SET_STEPS_LEVEL_FINISH = "SET_STEPS_LEVEL_FINISH"; //stepsLevel=10
const INIT_SELECTED_MODEL = "INIT_SELECTED_MODEL";
const INIT_SELECTED_STABILITY_VS_TEMPERATURE =
  "INIT_SELECTED_STABILITY_VS_TEMPERATURE";
const INIT_FREQUENCY_BLUR = "INIT_FREQUENCY_BLUR";
const SET_FREQUENCY_BLUR = "SET_FREQUENCY_BLUR";
const GET_STABILITY_VS_TEMPERATURE = "GET_STABILITY_VS_TEMPERATURE";
const SET_EMAIL_DATA = "SET_EMAIL_DATA";
const PHASE_NOISE_SWITCH_TOGGLE = "PHASE_NOISE_SWITCH_TOGGLE";
const INIT_CONTINUOUS_CURRENT= "INIT_CONTINUOUS_CURRENT";

const initialState = {
  selectedModel: {},
  frequencyBlur: 0,
  stabilityFromFrequencyBlur: 0,
  stepsLevel: 1,
  inputValueSteps: {
    /*       "nominalFrequency": "",
            "stabilityVsTemperature": "",
            "voltage": "", */
  },
  emailData: {},
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

  if (action.type === INPUT_SET_STEP2) {
    //console.log("ffooo")
    const submitData = action.submitDataArr.inputValueSteps;

    const getContinuousCurrentArray = () => {
      const {nominalFrequency, voltage, outputType} = submitData
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
      //console.log(nominalFrequency+ '; ' +frequencyType+ '; ' +voltage + '; '+outputType)
    }

    //console.log(getContinuousCurrentArray())
    const continuousCurrentTypical = () => {
      const {nominalFrequency} = submitData
      const a = getContinuousCurrentArray()
      const cc = ((a[3]-a[1])*(nominalFrequency-a[0])/(a[2]-a[0])+a[1])+a[4]
      return cc.toFixed(2)
    }

    const emailData = () => {
      const part1 = {
        Model: state.selectedModel.name,
        Packaging: state.selectedModel.packaging,
      }
      const part2 = {
        Frequency: submitData.nominalFrequency + " MHz",
        "Temperature Range": state.selectedModel.temperatureRangeSelected,
        "Stability vs Temperature":
          submitData.stabilityVsTemperature + " ppb",
        "Supply Voltage": submitData.voltage + " V",
        "Output Type": submitData.outputType.toUpperCase(),

      }      
      if (state.selectedModel.frequencyType === "with multiplication") {
        return {
          ...part1,  
          FrequencyType: "MULTIPLICATION",
          ...part2
        };
      }
      return { ...part1, ...part2 };
    };

    //debugger
    const stateCopy = {
      ...state,
      inputValueSteps: {...action.submitDataArr.inputValueSteps, 
                        continuousCurrentArray: getContinuousCurrentArray(), 
                        continuousCurrentTypical: continuousCurrentTypical()},
      emailData: emailData(),
      stepsLevel: 2,
      //continuousCurrentData: {}
    };
    //debugger
    return stateCopy;
  }

  if (action.type === INPUT_SET_STEP3) {
    const submitData = action.submitDataArr.inputValueSteps;

    let emailData = {}
/*           "subharmonicsLevel": data.subharmonicsLevel,
          "continuousCurrent": data.continuousCurrent,
          //"gSensitivity": data.gSensitivity,
          "aginPerDay": data.aginPerDay,

          "phaseNoise1Hz": data.phaseNoise1Hz,
          "phaseNoise10Hz": data.phaseNoise10Hz,
          "phaseNoise100Hz": data.phaseNoise100Hz,
          "phaseNoise1KHz": data.phaseNoise1KHz,
          "phaseNoise10KHz": data.phaseNoise10KHz,
          "phaseNoise100KHz": data.phaseNoise100KHz */
/*     for (const [key, value] of Object.entries(submitData)) {
      //console.log(`${key}: ${value}`);
      if (value) {
        emailData = {...emailData, ...{[key]: value,}} 
      }
    } */
    if (submitData.subharmonicsLevel) 
    {emailData = {...emailData, ...{["Subharmonics Level"]: submitData.subharmonicsLevel + ' dBc',}}}

    if (submitData.continuousCurrent) 
    {emailData = {...emailData, ...{["Continuous current max limit"]: submitData.continuousCurrent + ' mA',}}}

    if (submitData.aginPerDay) 
    {emailData = {...emailData, ...{["Agin per Day"]: submitData.aginPerDay + ' ppb',}}}

    if (submitData.phaseNoise1Hz) 
    {emailData = {...emailData, ...{["Phase noise 1Hz"]: submitData.phaseNoise1Hz + ' dBc/Hz',}}}

    if (submitData.phaseNoise10Hz) 
    {emailData = {...emailData, ...{["Phase noise 10Hz"]: submitData.phaseNoise10Hz + ' dBc/Hz',}}}

    if (submitData.phaseNoise100Hz) 
    {emailData = {...emailData, ...{["Phase noise 100Hz"]: submitData.phaseNoise100Hz + ' dBc/Hz',}}}

    if (submitData.phaseNoise1KHz) 
    {emailData = {...emailData, ...{["Phase noise 1KHz"]: submitData.phaseNoise1KHz + ' dBc/Hz',}}}

    if (submitData.phaseNoise10KHz) 
    {emailData = {...emailData, ...{["Phase noise 10KHz"]: submitData.phaseNoise10KHz + ' dBc/Hz',}}}

    if (submitData.phaseNoise100KHz) 
    {emailData = {...emailData, ...{["Phase noise 100KHz"]: submitData.phaseNoise100KHz + ' dBc/Hz',}}}


    //debugger
    const stateCopy = {
      ...state,
      inputValueSteps: { ...state.inputValueSteps,
        ...action.submitDataArr.inputValueSteps },
      emailData: {...state.emailData, ...emailData}, 
      stepsLevel: 3,
    };
    //debugger
    return stateCopy;
  }

  
  if (action.type === INIT_SELECTED_MODEL) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      selectedModel: action.selectedModel,
      stabilityFromFrequencyBlur: state.selectedModel.stabilityLimit,
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

  if (action.type === INIT_FREQUENCY_BLUR) {
    //console.log("ffooo")
    const stateCopy = {
      ...state,
      frequencyBlur: state.selectedModel.frequencyMin | 0,
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
      frequencyBlur: frequencyBlurValue,
    };
    //debugger
    return stateCopy;
  }

  if (action.type === GET_STABILITY_VS_TEMPERATURE) {
    //console.log("ffooo: " + GET_STABILITY_VS_TEMPERATURE)
    const frequency = state.frequencyBlur;
    let frequencyArr = state.stabilityVsTemperature.frequency;
    let stabilityArr = state.stabilityVsTemperature.stability;
    if (
      state.selectedModel.frequencyType === "with multiplication" &&
      frequency >= 40
    ) {
      frequencyArr = state.stabilityVsTemperature.frequency40;
      stabilityArr = state.stabilityVsTemperature.stability40;
    }
    /*   console.log('frequencyType: ' + state.selectedModel.frequencyType)
  console.log("frequency->: " + frequency) 
  console.log("frequencyArr->: " + frequencyArr) 
  console.log("stabilityArr->: " + stabilityArr) */
    /*   console.log("frequency->: " + frequency) 
  console.log("frequencyArr->: " + frequencyArr) 
  console.log("stabilityArr->: " + stabilityArr) */
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
      stabilityFromFrequencyBlur: getStability().toFixed(1), //round till to 1 decimal digit
    };
    //debugger
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

  if (action.type === INIT_CONTINUOUS_CURRENT) {
    //action.selectedModel
    const stateCopy = {
      ...state,
      continuousCurrentData: action.continuousCurrent,
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

export const specFormInputStep2 = (submitDataArr) => ({ type: INPUT_SET_STEP2, submitDataArr});
export const specFormInputStep3 = (submitDataArr) => ({ type: INPUT_SET_STEP3, submitDataArr});

export const initFrequencyBlurAC = () => ({ type: INIT_FREQUENCY_BLUR });
const setFrequencyBlurAC = (frequencyBlurValue) => ({ type: SET_FREQUENCY_BLUR, frequencyBlurValue,
});
const getStabilityVsTemperature = () => ({ type: GET_STABILITY_VS_TEMPERATURE, });
export const initSelectedModel = (selectedModel) => ({ type: INIT_SELECTED_MODEL, selectedModel, });
export const initcontinuousCurrent= (continuousCurrent) => ({ type: INIT_CONTINUOUS_CURRENT, continuousCurrent, });
export const initsselectedModelStabilityVsTemperature = ( selectedModelStabilityVsTemperature ) => ({
  type: INIT_SELECTED_STABILITY_VS_TEMPERATURE,
  selectedModelStabilityVsTemperature,
});
export const setEmailDataAC = (emailData) => ({ type: SET_EMAIL_DATA, emailData, });
export const setStepsLevelFinish = () => ({ type: SET_STEPS_LEVEL_FINISH });
export const resetSpecFormDataAC = () => ({ type: RESET_SPEC_FORM_DATA });
export const phaseNoiseSwitchToggleAC = () => ({ type: PHASE_NOISE_SWITCH_TOGGLE });

//FREQUENCY_BLUR
export const specFormInitStep2TC = (
  selectedModel,
  selectedModelStabilityVsTemperature,
  continuousCurrent
) => {
  //temperatureRange has been already selested
  //console.log("specFormInitStep2TC  ffooo")
  //window.bc = selectedModel
  return (dispatch) => {
    dispatch(initSelectedModel(selectedModel));
    dispatch(
      initsselectedModelStabilityVsTemperature(
        selectedModelStabilityVsTemperature
      )
    );
    dispatch(initcontinuousCurrent(continuousCurrent));
    dispatch(initFrequencyBlurAC());

    //dispatch(frequencyBlurAC(event.target.value))
    //dispatch(filterFrequencyFreeApplyAC)
    //dispatch(filterFrequencyUpdateAC (valueType))
    //dispatch(filterFrequencyApplyAC)
  };
};

export const setStabilituVsTemperature = (event) => {
  return (dispatch) => {
    dispatch(setFrequencyBlurAC(event.target.value | 0));
    dispatch(getStabilityVsTemperature());
  };
};

export default specFormReducer;
