import {createSlice} from "@reduxjs/toolkit";


const mainSlice = createSlice({
    name: "main", initialState: {
        menuActive: 0,
        profileMenuActive:0,
    }, reducers: {
        CHANGE_MENU_ACTIVE: (state, action) => {
            state.menuActive = action.payload;
        },
        CHANGE_PROFILE_MENU_ACTIVE:(state, action) => {
            state.profileMenuActive = action.payload;
        }
    }
})
export default mainSlice.reducer;
export const {CHANGE_MENU_ACTIVE,CHANGE_PROFILE_MENU_ACTIVE} = mainSlice.actions;