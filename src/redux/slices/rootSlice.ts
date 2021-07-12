import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Camel Man',
        ability: "Withhold Fluid intake for extended hours",
        description: "",
        camera_quality: '4k',
        flight_time: 'Approx 20mins',
        max_speed: '140 kph',
        Origin: '255 x 312 x 127mm',
        weight: 'Approx 795g',
        cost_of_prod: '450.00',
        series: 'DJI FPV Series'
    },
    reducers: {
        chooseName: (state: { name: any; }, action: { payload: any; }) => { state.name = action.payload},
        chooseability: (state: { ability: any; }, action: { payload: any; }) => { state.ability = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseability, } = rootSlice.actions;