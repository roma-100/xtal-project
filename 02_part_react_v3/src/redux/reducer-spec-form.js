// === reducer-spec-form.js ===
const INPUT_SET_STEP2 = "INPUT_SET_STEP2"
const SET_STEPS_LEVEL_FINISH = "SET_STEPS_LEVEL_FINISH" //stepsLevel=10
const INIT_SELECTED_MODEL = "INIT_SELECTED_MODEL"
const INIT_SELECTED_STABILITY_VS_TEMPERATURE = "INIT_SELECTED_STABILITY_VS_TEMPERATURE"
const INIT_FREQUENCY_BLUR = "INIT_FREQUENCY_BLUR"
const SET_FREQUENCY_BLUR = "SET_FREQUENCY_BLUR"
const GET_STABILITY_VS_TEMPERATURE = "GET_STABILITY_VS_TEMPERATURE"


const initialState = {
  selectedModel: {},
    frequencyBlur: 0,
    stabilityFromFrequencyBlur: 0,
    stepsLevel: 0,
    inputValueStep2: {
      /*       "nominalFrequency": "",
            "stabilityVsTemperature": "",
            "voltage": "", */
          },
};

const specFormReducer = (state = initialState, action) => {
  
if (action.type === INPUT_SET_STEP2) {
  //console.log("ffooo")  
  const inputValueStep2 = action.pushValueStep2
  //debugger
  const stateCopy = { 
      ...state,
      ...inputValueStep2,
      stepsLevel: 2
  }
  //debugger
  return stateCopy
}

if (action.type === INIT_SELECTED_MODEL) {
  //action.selectedModel
  const stateCopy = { 
      ...state,
      selectedModel: action.selectedModel,
      stabilityFromFrequencyBlur: state.selectedModel.stabilityLimit,
      stepsLevel: 1
  }
  //debugger
  return stateCopy
}

if (action.type === INIT_SELECTED_STABILITY_VS_TEMPERATURE) {

  const stateCopy = { 
      ...state,
      stabilityVsTemperature: action.selectedModelStabilityVsTemperature
  }
  //debugger
  return stateCopy
}

if (action.type === INIT_FREQUENCY_BLUR) {
  //console.log("ffooo")  
  const stateCopy = { 
      ...state,
      frequencyBlur: state.selectedModel.frequencyMin | 0
  }
  //debugger
  return stateCopy
}

if (action.type === SET_FREQUENCY_BLUR) {
  //console.log("ffooo")  
  const frequencyBlurValue = action.frequencyBlurValue
  //debugger
  const stateCopy = { 
      ...state,
      frequencyBlur: frequencyBlurValue
  }
  //debugger
  return stateCopy
}

if (action.type === GET_STABILITY_VS_TEMPERATURE) {
  //console.log("ffooo: " + GET_STABILITY_VS_TEMPERATURE)  
  const frequency = state.frequencyBlur
  const frequencyArr = state.stabilityVsTemperature.frequency
  const stabilityArr = state.stabilityVsTemperature.stability
/*   console.log("frequency->: " + frequency) 
  console.log("frequencyArr->: " + frequencyArr) 
  console.log("stabilityArr->: " + stabilityArr) */ 
  const getStability = () => {
    if (frequency < frequencyArr[0]) return stabilityArr[0]
    if (frequency < frequencyArr[1]) {
      const result = (stabilityArr[1] - stabilityArr[0]) * (frequency - frequencyArr[0]) / (frequencyArr[1] - frequencyArr[0]) + stabilityArr[0]
      return result
    }
    if (frequency <= frequencyArr[2]) {
      const result = (stabilityArr[2] - stabilityArr[1]) * (frequency - frequencyArr[1]) / (frequencyArr[2] - frequencyArr[1]) + stabilityArr[1]
      return result
    }
    return state.selectedModel.stabilityLimit
  }
  //console.log("getStability->: " + getStability()) 
  //debugger
  const stateCopy = { 
      ...state,
      stabilityFromFrequencyBlur: getStability().toFixed(1), //round till to 1 decimal digit
  }
  //debugger
  return stateCopy
}

if (action.type === SET_STEPS_LEVEL_FINISH) {
  //action.selectedModel
  const stateCopy = { 
      ...state,
      stepsLevel: 10
  }
  //debugger
  return stateCopy
}

//debugger
return state

};

export const specFormInputStep2 = (pushValueStep2) => ({type: INPUT_SET_STEP2, pushValueStep2});
export const initFrequencyBlurAC = () => ({type: INIT_FREQUENCY_BLUR});
const setFrequencyBlurAC = (frequencyBlurValue) => ({type: SET_FREQUENCY_BLUR, frequencyBlurValue});
const getStabilityVsTemperature = () => ({type: GET_STABILITY_VS_TEMPERATURE});
export const initSelectedModel = (selectedModel) => ({type: INIT_SELECTED_MODEL, selectedModel});
export const initsselectedModelStabilityVsTemperature = (selectedModelStabilityVsTemperature) => ({type: INIT_SELECTED_STABILITY_VS_TEMPERATURE, selectedModelStabilityVsTemperature});
export const setStepsLevelFinish = () => ({type: SET_STEPS_LEVEL_FINISH});
//FREQUENCY_BLUR
export const specFormInitStep2TC = (selectedModel, selectedModelStabilityVsTemperature) =>{ //temperatureRange has been already selested
  //console.log("specFormInitStep2TC  ffooo")
  //window.bc = selectedModel
  return (dispatch) => {
    dispatch(initSelectedModel(selectedModel))
    dispatch(initsselectedModelStabilityVsTemperature(selectedModelStabilityVsTemperature))
    dispatch(initFrequencyBlurAC())

    //dispatch(frequencyBlurAC(event.target.value))
    //dispatch(filterFrequencyFreeApplyAC)
    //dispatch(filterFrequencyUpdateAC (valueType))
    //dispatch(filterFrequencyApplyAC)
    

  }
}

export const setStabilituVsTemperature = (event) =>{

  return (dispatch) => {
    dispatch(setFrequencyBlurAC(event.target.value | 0))
    dispatch(getStabilityVsTemperature())
  }
}

export default specFormReducer;
