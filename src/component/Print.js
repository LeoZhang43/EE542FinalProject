import React from "react";
const data = [
    [
        {"time":1700954915158,"location":0,"fill":8,"humidity":20},
        {"time":1700954976283,"location":0,"fill":31,"humidity":20},
        {"time":1700955038588,"location":0,"fill":48,"humidity":20},
        {"time":1700955102350,"location":0,"fill":56,"humidity":20},
        {"time":1700955163319,"location":0,"fill":56,"humidity":20},
        {"time":1700955227412,"location":0,"fill":61,"humidity":20},
        {"time":1700955288012,"location":0,"fill":83,"humidity":20},
        {"time":1700955349887,"location":0,"fill":100,"humidity":20},
        {"time":1700955413746,"location":0,"fill":100,"humidity":20}
    ],
    [
        {"time":1700955473239,"location":0,"fill":8,"humidity":20},
        {"time":1700955535638,"location":0,"fill":36,"humidity":20},
        {"time":1700955596354,"location":0,"fill":61,"humidity":20},
        {"time":1700955657412,"location":0,"fill":60,"humidity":20},
        {"time":1700955719602,"location":0,"fill":60,"humidity":20},
        {"time":1700955780624,"location":0,"fill":75,"humidity":20},
        {"time":1700955843432,"location":0,"fill":70,"humidity":20},
        {"time":1700955903868,"location":0,"fill":75,"humidity":20},
        {"time":1700955965960,"location":0,"fill":75,"humidity":20},
        {"time":1700956027087,"location":0,"fill":75,"humidity":20},
        {"time":1700956089200,"location":0,"fill":88,"humidity":20},
        {"time":1700956153022,"location":0,"fill":88,"humidity":20},
        {"time":1700956212422,"location":0,"fill":100,"humidity":20},
        {"time":1700956275538,"location":0,"fill":100,"humidity":20},
        {"time":1700956335562,"location":0,"fill":100,"humidity":20}
    ]
]
export default function Print(){
    const arrayOfTime = data.map(innerArray => innerArray.map(obj => obj.time));
    const arrayOfFill = data.map(innerArray => innerArray.map(obj => obj.fill));
    console.log('Array of Time:', arrayOfTime);
    console.log('Array of Fill:', arrayOfFill);
}