// === reducer-gen_models.js ===
const FILTERS_RESET = "FILTERS_RESET"
const INITIAL_TEMPERATURE_RANGE_ARRAY = "INITIAL_TEMPERATURE_RANGE_ARRAY"


const FILTER_FREQUENCY_FREE_APPLY = "FILTER_FREQUENCY_FREE_APPLY"
//const FILTER_STATE_UPDATE = "FILTER_STATE_UPDATE";

const FILTER_FREQUENCY_UPDATE = "FILTER_FREQUENCY_UPDATE";
const FILTER_FREQUENCY_APPLY = "FILTER_FREQUENCY_APPLY";

const FILTER_TEMPERATURE_RANGE_UPDATE = "FILTER_TEMPERATURE_RANGE_UPDATE";
const MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY = "MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY"
const CREATE_TEMP_RANGE_STABILITY_ARRAY = "CREATE_TEMP_RANGE_STABILITY_ARRAY"


const initialState = {
  models: [
    {
      "id": "1",
      "name": "XBO8",
      "frequencyRange": "8-150 MHz",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 3 ppb",
      "packaging": "DIP8 15.3x16x10 mm",
      "pictureTag": "type1",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "2",
      "name": "XBO8S",
      "frequencyRange": "8-150 MHz",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 3 ppb",
      "packaging": "SMD 15.3x16x9.5 mm",
      "pictureTag": "type2",
      "features": [
        "3 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "3",
      "name": "XBO14",
      "frequencyRange": "8-150 MHz",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb",
      "packaging": "DIP14 15.3x20.5x10 mm",
      "pictureTag": "type4",
      "features": [
        "2 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "4",
      "name": "XBO14S",
      "frequencyRange": "8-150 MHz",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb",
      "packaging": "SMD 15.3x20.5x9.5 mm",
      "pictureTag": "type3",
      "features": [
        "2 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "5",
      "name": "XBO20",
      "frequencyRange": "8-150 MHz",
      "frequencyMin": "8",
      "frequencyMax": "150",
      "frequencyType": "fundamental",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 0.5 ppb",
      "packaging": "20.2x20.2x12.0 mm",
      "pictureTag": "type5",
      "features": [
        "0.5 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -110dBc/Hz @ 1Hz, -173 dBc/Hz floor",
        "to 0.3 ppb/G sensitivity",
        "to 75 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "6",
      "name": "XBOH20",
      "frequencyRange": "24-300 MHz Multiplication",
      "frequencyMin": "24",
      "frequencyMax": "300",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 0.5 ppb",
      "packaging": "20.2x20.2x12.0 mm",
      "pictureTag": "type5",
      "features": [
        "0.5 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -100dBc/Hz @ 1Hz (30MHz OCXO)",
        "to 0.3 ppb/G sensitivity",
        "to 90 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "7",
      "name": "XBOH14",
      "frequencyRange": "24-300 MHz Multiplication",
      "frequencyMin": "24",
      "frequencyMax": "300",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "DIP14 15.3x20.5x10 mm",
      "pictureTag": "type4",
      "features": [
        "10 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -100dBc/Hz @ 1Hz (30MHz OCXO)",
        "to 0.3 ppb/G sensitivity",
        "to 90 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    },
    {
      "id": "8",
      "name": "XBOH14S",
      "frequencyRange": "24-300 MHz Multiplication",
      "frequencyMin": "24",
      "frequencyMax": "300",
      "frequencyType": "with multiplication",
      "temperatureRange": "(-40+85)℃",
      "temperatureStability": "To 2 ppb ",
      "packaging": "SMD 15.3x20.5x9.5 mm",
      "pictureTag": "type3",
      "features": [
        "10 ppb in -40 +85ºC range",
        "to 0.1 ppb/day, 15 ppb/year",
        "to -100dBc/Hz @ 1Hz, (30MHz OCXO)",
        "to 0.3 ppb/G sensitivity",
        "to 90 mW consumption",
        "to 45s frequency warm-up"
      ],
      "isActive": true,
      "temperatureRangeSelected": "",
      "stabilityLimit": ""
    }
  ],
  temperatureRange: [
    {
      "id": "1",
      "name": 'A',
      "range": '0..50ºC',
      "modelsStability": [
        { modelId: "2" ,
          model: 'XBO8' ,
         stabilityLimit: 2,
         stabilityVsTemperature:
         {
          frequency:[10, 100, 150],
          stability:[2, 5, 10],
         },
         continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,14.16],
            sWave5V: [10,12,100,17,9.381],
            hsmos5V: [10,9,100,13,9.381],
            hsmos3p3V: [10,6,100,8.7,14.16],
          },
        },
         },
        { modelId: "2" ,
          model: 'XBO8S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[2, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,14.16],
            sWave5V: [10,12,100,17,9.381],
            hsmos5V: [10,9,100,13,9.381],
            hsmos3p3V: [10,6,100,8.7,14.16],
          },
        },
        },
        { modelId: "3" ,
          model: 'XBO14' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[1, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,14.16],
            sWave5V: [10,12,100,17,9.381],
            hsmos5V: [10,9,100,13,9.381],
            hsmos3p3V: [10,6,100,8.7,14.16],
          },
        },
        },
        { modelId: "4" ,
          model: 'XBO14S' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[1, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,14.16],
            sWave5V: [10,12,100,17,9.381],
            hsmos5V: [10,9,100,13,9.381],
            hsmos3p3V: [10,6,100,8.7,14.16],
          },
        },
        },
        { modelId: "5" ,
          model: 'XBO20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[0.3, 3, 6],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,14.16],
            sWave5V: [10,12,100,17,9.381],
            hsmos5V: [10,9,100,13,9.381],
            hsmos3p3V: [10,6,100,8.7,14.16],
          },
        },
        },
        { modelId: "6" ,
          model: 'XBOH20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[0.3, 3, 6],
         frequency40:[50, 500, 750],
         stability40:[0.3, 3, 6],         
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,14.16],
            sWave5V: [10,16.248,100,23.018,9.381],
            hsmos5V: [10,12.186,100,17.602,9.381],
            hsmos3p3V: [10,8.124,100,11.7798,14.16],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,14.16],
            sWave5V: [10,16.248,100,23.018,9.381],
            hsmos5V: [10,12.186,100,17.602,9.381],
            hsmos3p3V: [10,8.124,100,11.7798,14.16],
          },
        },
        },
        { modelId: "7" ,
          model: 'XBOH14' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[5, 20, 10],
         frequency40:[50, 500, 750],
         stability40:[5, 20, 10],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,14.16],
            sWave5V: [10,16.248,100,23.018,9.381],
            hsmos5V: [10,12.186,100,17.602,9.381],
            hsmos3p3V: [10,8.124,100,11.7798,14.16],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,14.16],
            sWave5V: [10,16.248,100,23.018,9.381],
            hsmos5V: [10,12.186,100,17.602,9.381],
            hsmos3p3V: [10,8.124,100,11.7798,14.16],
          },
        },
        },
        { modelId: "8" ,
          model: 'XBOH14S' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[5, 20, 10],
         frequency40:[50, 500, 750],
         stability40:[5, 20, 10],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,14.16],
            sWave5V: [10,16.248,100,23.018,9.381],
            hsmos5V: [10,12.186,100,17.602,9.381],
            hsmos3p3V: [10,8.124,100,11.7798,14.16],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,14.16],
            sWave5V: [10,16.248,100,23.018,9.381],
            hsmos5V: [10,12.186,100,17.602,9.381],
            hsmos3p3V: [10,8.124,100,11.7798,14.16],
          },
        },
        },
      ]
    },
    {
      "id": "2",
      "name": 'B',
      "range": '-10..60ºC',
      "modelsStability": [
        { modelId: "1" ,
          model: 'XBO8' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[2, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,17.265],
            sWave5V: [10,12,100,17,11.422],
            hsmos5V: [10,9,100,13,11.422],
            hsmos3p3V: [10,6,100,8.7,17.265],
          },
        },
        },
        { modelId: "2" ,
          model: 'XBO8S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[2, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,17.265],
            sWave5V: [10,12,100,17,11.422],
            hsmos5V: [10,9,100,13,11.422],
            hsmos3p3V: [10,6,100,8.7,17.265],
          },
        },
        },
        { modelId: "3" ,
          model: 'XBO14' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[1, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,17.265],
            sWave5V: [10,12,100,17,11.422],
            hsmos5V: [10,9,100,13,11.422],
            hsmos3p3V: [10,6,100,8.7,17.265],
          },
        },
        },
        { modelId: "4" ,
          model: 'XBO14S' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[1, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,17.265],
            sWave5V: [10,12,100,17,11.422],
            hsmos5V: [10,9,100,13,11.422],
            hsmos3p3V: [10,6,100,8.7,17.265],
          },
        },
        },
        { modelId: "5" ,
          model: 'XBO20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[0.3, 3, 6],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,17.265],
            sWave5V: [10,12,100,17,11.422],
            hsmos5V: [10,9,100,13,11.422],
            hsmos3p3V: [10,6,100,8.7,17.265],
          },
        },
        },
        { modelId: "6" ,
          model: 'XBOH20' , stabilityLimit: 0.3,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[0.3, 3, 6],
         frequency40:[50, 500, 750],
         stability40:[0.3, 3, 6],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,17.265],
            sWave5V: [10,16.248,100,23.018,11.422],
            hsmos5V: [10,12.186,100,17.602,11.422],
            hsmos3p3V: [10,8.124,100,11.7798,17.265],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,17.265],
            sWave5V: [10,16.248,100,23.018,11.422],
            hsmos5V: [10,12.186,100,17.602,11.422],
            hsmos3p3V: [10,8.124,100,11.7798,17.265],
          },
        },
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[5, 30, 60],
         frequency40:[50, 500, 750],
         stability40:[5, 30, 60],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,17.265],
            sWave5V: [10,16.248,100,23.018,11.422],
            hsmos5V: [10,12.186,100,17.602,11.422],
            hsmos3p3V: [10,8.124,100,11.7798,17.265],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,17.265],
            sWave5V: [10,16.248,100,23.018,11.422],
            hsmos5V: [10,12.186,100,17.602,11.422],
            hsmos3p3V: [10,8.124,100,11.7798,17.265],
          },
        },
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[5, 30, 60],
         frequency40:[50, 500, 750],
         stability40:[5, 30, 60],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,17.265],
            sWave5V: [10,16.248,100,23.018,11.422],
            hsmos5V: [10,12.186,100,17.602,11.422],
            hsmos3p3V: [10,8.124,100,11.7798,17.265],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,17.265],
            sWave5V: [10,16.248,100,23.018,11.422],
            hsmos5V: [10,12.186,100,17.602,11.422],
            hsmos3p3V: [10,8.124,100,11.7798,17.265],
          },
        },
        },
      ]
    },
    {
      "id": "3",
      "name": 'E',
      "range": '-30..70ºC',
      "modelsStability": [
        { modelId: "1",
          model: 'XBO8' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[2, 10, 20],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,21.881],
            sWave5V: [10,12,100,17,14.446],
            hsmos5V: [10,9,100,13,14.446],
            hsmos3p3V: [10,6,100,8.7,21.881],
          },
        },
        },
        { modelId: "2",
          model: 'XBO8S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[2, 10, 20],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,21.881],
            sWave5V: [10,12,100,17,14.446],
            hsmos5V: [10,9,100,13,14.446],
            hsmos3p3V: [10,6,100,8.7,21.881],
          },
        },
        },
        { modelId: "3",
          model: 'XBO14' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[1, 10, 20],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,21.881],
            sWave5V: [10,12,100,17,14.446],
            hsmos5V: [10,9,100,13,14.446],
            hsmos3p3V: [10,6,100,8.7,21.881],
          },
        },
        },
        { modelId: "4",
          model: 'XBO14S' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[1, 10, 20],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,21.881],
            sWave5V: [10,12,100,17,14.446],
            hsmos5V: [10,9,100,13,14.446],
            hsmos3p3V: [10,6,100,8.7,21.881],
          },
        },
        },
        { modelId: "5",
          model: 'XBO20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[0.5, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,21.881],
            sWave5V: [10,12,100,17,14.446],
            hsmos5V: [10,9,100,13,14.446],
            hsmos3p3V: [10,6,100,8.7,21.881],
          },
        },
        },
        { modelId: "6",
          model: 'XBOH20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[0.5, 5, 10],
         frequency40:[50, 500, 750],
         stability40:[.5, 5, 10],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,21.881],
            sWave5V: [10,16.248,100,23.018,14.446],
            hsmos5V: [10,12.186,100,17.602,14.446],
            hsmos3p3V: [10,8.124,100,11.7798,21.881],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,21.881],
            sWave5V: [10,16.248,100,23.018,14.446],
            hsmos5V: [10,12.186,100,17.602,14.446],
            hsmos3p3V: [10,8.124,100,11.7798,21.881],
          },
        },
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[10, 50, 100],
         frequency40:[50, 500, 750],
         stability40:[10, 50, 100],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,21.881],
            sWave5V: [10,16.248,100,23.018,14.446],
            hsmos5V: [10,12.186,100,17.602,14.446],
            hsmos3p3V: [10,8.124,100,11.7798,21.881],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,21.881],
            sWave5V: [10,16.248,100,23.018,14.446],
            hsmos5V: [10,12.186,100,17.602,14.446],
            hsmos3p3V: [10,8.124,100,11.7798,21.881],
          },
        },
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[10, 50, 100],
         frequency40:[50, 500, 750],
         stability40:[10, 50, 100],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,21.881],
            sWave5V: [10,16.248,100,23.018,14.446],
            hsmos5V: [10,12.186,100,17.602,14.446],
            hsmos3p3V: [10,8.124,100,11.7798,21.881],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,21.881],
            sWave5V: [10,16.248,100,23.018,14.446],
            hsmos5V: [10,12.186,100,17.602,14.446],
            hsmos3p3V: [10,8.124,100,11.7798,21.881],
          },
        },
        },
      ]
    },
    {
      "id": "4",
      "name": 'F',
      "range": '-40..85ºC',
      "modelsStability": [
        { modelId: "1",
          model: 'XBO8' , stabilityLimit: 3,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[3, 15, 30],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "2",
          model: 'XBO8S' , stabilityLimit: 3,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[3, 15, 30],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "3",
          model: 'XBO14' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[2, 10, 20],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "4",
          model: 'XBO14S' , stabilityLimit: 2,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[2, 10, 20],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "5",
          model: 'XBO20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[0.5, 5, 10],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "6",
          model: 'XBOH20' , stabilityLimit: 0.5,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[.5, 5, 10],
         frequency40:[50, 500, 750],
         stability40:[.5, 5, 10],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
        },
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[10, 100, 200],
         frequency40:[50, 500, 750],
         stability40:[10, 100, 200],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
        },
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[10, 100, 200],
         frequency40:[50, 500, 750],
         stability40:[10, 100, 200],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
        },
        },
      ]
    },
    {
      "id": "5",
      "name": 'Q',
      "range": '-60..85ºC',
      "modelsStability": [
        { modelId: "1",
          model: 'XBO8' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[10, 30, 60],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "2",
          model: 'XBO8S' , stabilityLimit: 10,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[10, 30, 60],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "3",
          model: 'XBO14' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[5, 30, 60],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "4",
          model: 'XBO14S' , stabilityLimit: 5,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[5, 30, 60],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "5",
          model: 'XBO20' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[10, 100, 150],
         stability:[1, 10, 20],
        },
        continuousCurrent: {
          ccF: {
            sWave3p3V: [10,8,100,11.3,29.23],
            sWave5V: [10,12,100,17,19.233],
            hsmos5V: [10,9,100,13,19.233],
            hsmos3p3V: [10,6,100,8.7,29.23],
          },
        },
        },
        { modelId: "6",
          model: 'XBOH20' , stabilityLimit: 1,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[1, 10, 20],
         frequency40:[50, 500, 750],
         stability40:[1, 10, 20],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
        },
        },
        { modelId: "7",
          model: 'XBOH14' , stabilityLimit: 30,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[30, 100, 200],
         frequency40:[50, 500, 750],
         stability40:[30, 100, 200],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
        },
        },
        { modelId: "8",
          model: 'XBOH14S' , stabilityLimit: 30,
        stabilityVsTemperature:
        {
          frequency:[30, 300, 450],
         stability:[30, 100, 200],
         frequency40:[50, 500, 750],
         stability40:[30, 100, 200],
        },
        continuousCurrent: {
          ccM: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
          ccM40: {
            sWave3p3V: [10,10.832,100,15.3002,29.23],
            sWave5V: [10,16.248,100,23.018,19.233],
            hsmos5V: [10,12.186,100,17.602,19.233],
            hsmos3p3V: [10,8.124,100,11.7798,29.23],
          },
        },
        },
      ]
    }
  ],
  temperatureRangeArray: [],  //* ["0ºC..50ºC","-10ºC..60ºC","-30ºC..70ºC","-40ºC..85ºC","-60ºC..85ºC"] */
  stabilityLimit: [], /* [10,5,20] */
  selRangeModelsExactStabilityArray: [], //["XBO8","XBO8S","XBO14","XBO14S","XBO20","XBOH20","XBOH14","XBOH14S"]
  filterFrequencyType: '', //"with multiplication" "fundamental"
  filterTemperatureRange: '', 
  filterStabilityLimit: '',  

};

const gen_modelsReducer = (state = initialState, action) => {
  //debugger placeholderType: 'fundamental / with multiplication',
  //console.log('44action' + action.valueType);
  if (action.type === FILTER_FREQUENCY_FREE_APPLY) {
    //set free all models
    let stateCopy = {
      ...state,
      models: state.models.map ( //возвр новый объект
      model => { 
          return ({...model,isActive: true})
      }
    )
    }
  
    return stateCopy
  }

  if (action.type === FILTERS_RESET) {
    //set free all models
    let stateCopy = {...initialState}
  
    return stateCopy
  }
  
  if (action.type === INITIAL_TEMPERATURE_RANGE_ARRAY) {
    //set free all models
    let stateCopy = {
      ...state,
      temperatureRangeArray: state.temperatureRange.map(element => {
        return element.range
    })
    }
  
    return stateCopy
  }

  if (action.type === FILTER_FREQUENCY_UPDATE) {
    const stateCopy = { 
        ...state,
        filterFrequencyType: action.valueType
    }
    return stateCopy
  } 

  if (action.type === FILTER_TEMPERATURE_RANGE_UPDATE) {
    //console.log('gggg' + action.valueTemperatureRange.target.value)
    const stateCopy = { 
        ...state,
        filterTemperatureRange: action.valueRange
    }
    return stateCopy
  } 

  if (action.type === CREATE_TEMP_RANGE_STABILITY_ARRAY) {
    const selRange = state.temperatureRange.filter(rangeItem => rangeItem.range === state.filterTemperatureRange)
    const selRangeModelsArray = selRange[0].modelsStability
    const selRangeModelStabilityArray = selRangeModelsArray.map(item => item.stabilityLimit)
          .filter((value, index, self) => self.indexOf(value) === index)
    const stateCopy = { 
        ...state,
        stabilityLimit: selRangeModelStabilityArray
    }
    return stateCopy
  } 

  if (action.type === MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY) {
    
    const selRange = state.temperatureRange.filter(rangeItem => rangeItem.range === state.filterTemperatureRange)
    /* [{"id":5,"name":"E","range":"-60ºC..85ºC","modelsStability":[{"model":"XBO8","stability":200,"stabilityLimit":10},{"model":"XBO8S","stability":200,"stabilityLimit":10},{"model":"XBO14","stability":200,"stabilityLimit":5},{"model":"XBO14S","stability":200,"stabilityLimit":5},{"model":"XBO20","stability":200,"stabilityLimit":5},{"model":"XBOH20","stability":200,"stabilityLimit":5},{"model":"XBOH14","stability":200,"stabilityLimit":20},{"model":"XBOH14S","stability":200,"stabilityLimit":20}]}] */
    const selRangeModelsArray = selRange[0].modelsStability
    /* [{"model":"XBO8","stability":200,"stabilityLimit":10},{"model":"XBO8S","stability":200,"stabilityLimit":10},{"model":"XBO14","stability":200,"stabilityLimit":5},{"model":"XBO14S","stability":200,"stabilityLimit":5},{"model":"XBO20","stability":200,"stabilityLimit":5},{"model":"XBOH20","stability":200,"stabilityLimit":5},{"model":"XBOH14","stability":200,"stabilityLimit":20},{"model":"XBOH14S","stability":200,"stabilityLimit":20}] */
    //console.log(Array.from(new Set([...state.models, ...selRangeModelsArray])))
    
    const selRangeModelStabilityArray = selRangeModelsArray.map(item => item.stabilityLimit)
          .filter((value, index, self) => self.indexOf(value) === index)
    /* [10,5,20]  Not need*/
    
    const updateModelsRangeAndStability = state.models
      .map((model, index) => { 
        const stabilityLim = selRangeModelsArray.filter((value) => value.model === model.name)[0].stabilityLimit
        return {...model,
          stabilityLimit: stabilityLim,
          temperatureRangeSelected: state.filterTemperatureRange
        }
        //return selRangeModelsArray.filter((value) => value.model === model.name)
      })
      //const test2 = selRangeModelsArray.filter((value) => value.model === "XBO8")
      //console.log('selRangeModelsArray: ' + selRangeModelsArray)
      //console.log('test2 ' + test2)
      //console.log('test ' + updateModelsRangeAndStability)

      //debugger

    const stateCopy = { 
        ...state,
        models: updateModelsRangeAndStability
    }
    return stateCopy
  } 

  if (action.type === FILTER_FREQUENCY_APPLY) {

    if (!state.filterFrequencyType) {return {...state}}  //empty test

    const stateCopy = { 
      ...state,
      models: state.models.map ( //возвр новый объект
      model => { 
          return (model.frequencyType === state.filterFrequencyType)
           ? {...model,isActive: true} : {...model,isActive: false};
      }
    ),

  }
  return stateCopy
} 
/* --- */


//debugger
return state

};

//debuggerexport const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage});
//CLEAR_ALL_FILTERS
const filtersReset = ({type: FILTERS_RESET});
const initTemperatureRangeArray = ({type: INITIAL_TEMPERATURE_RANGE_ARRAY});

const filterFrequencyFreeApplyAC = ({type: FILTER_FREQUENCY_FREE_APPLY});

const filterFrequencyUpdateAC = valueType => ({type: FILTER_FREQUENCY_UPDATE, valueType});
const filterFrequencyApplyAC = ({type: FILTER_FREQUENCY_APPLY});
//MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY
const filterTemperatureRangeUpdateAC = valueRange => ({type: FILTER_TEMPERATURE_RANGE_UPDATE, valueRange});
const createTemperatureRangeStabilityArray = ({type: CREATE_TEMP_RANGE_STABILITY_ARRAY});
const mark_mdels_by_temperature_range_and_stability = ({type:MARK_MODELS_BY_TEMPERATURE_RANGE_AND_STABILITY})

export const filterFrequencyTypeTC = (event) =>{
  
  //value="Fundamental"  value="withMultiplication"
  const valueType = event.target.value
  //console.log('lookk1: ' + valueType);
  return (dispatch) => {
    //dispatch(filterFrequencyFreeApplyAC)
    dispatch(filterFrequencyUpdateAC (valueType))
    dispatch(filterFrequencyApplyAC)
    

  }
}

export const filterTemperatureRangeTC = (event) =>{
  const valueRange = event.target.value
  return (dispatch) => {
    dispatch(filterTemperatureRangeUpdateAC(valueRange))
    dispatch(createTemperatureRangeStabilityArray)
    dispatch(mark_mdels_by_temperature_range_and_stability)

  }
}

export const filterInitTC = () => {
    //console.log('gggg')
  return (dispatch) => {
    dispatch(filtersReset)
    dispatch(filterFrequencyFreeApplyAC)
    dispatch(initTemperatureRangeArray)

  }
}

export default gen_modelsReducer;