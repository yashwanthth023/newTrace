import { createSlice } from '@reduxjs/toolkit'

export const versionSlice = createSlice(
    {
        name: 'versionInfo',
        initialState: {
            versionDetails: {},
            componentDetails: [],
        },
        reducers: {
            setVersionDetails: (state, action) => {
                state.versionDetails = action.payload
            },
            setPrototypeDetails: (state, action) => {
                state.versionDetails.prototypeName = action.payload.prototypeName;
                state.versionDetails.prototypeDescription = action.payload.description;
                state.versionDetails.prototypeRemarks = action.payload.remarks;
            },
            setComponentDetails: (state, action) => {
                state.componentDetails = action.payload
            },
            setInsertComponentDetails: (state, action) => {
                if (action.payload?.id) {
                    const updatedComponent = state.componentDetails.filter((component) => component.id !== action.payload?.id)
                    state.componentDetails = [action.payload, ...updatedComponent];
                } else {
                    state.componentDetails = [action.payload, ...state.componentDetails];;
                }
            }
        },
    },
)

export const { setVersionDetails, setPrototypeDetails, setComponentDetails, setInsertComponentDetails } = versionSlice.actions

export default versionSlice.reducer