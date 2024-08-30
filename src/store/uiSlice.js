import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpen: false,
    isScrollBtnVisible: false,
    isAtTop: true,
    isContactVisible: false,
    isSideTextVisible: false,
    isModalVideoOpen: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsModalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        setIsModalVideoOpen: (state, action) => {
            state.isModalVideoOpen = action.payload;
        },
        setIsScrollBtnVisible: (state, action) => {
            state.isScrollBtnVisible = action.payload;
        },
        setIsAtTop: (state, action) => {
            state.isAtTop = action.payload;
        },
        setIsContactVisible: (state, action) => {
            state.isContactVisible = action.payload;
        },
        setIsSideTextVisible: (state, action) => {
            state.isSideTextVisible = action.payload;
        },
    },
});

export const {
    setIsModalVideoOpen,
    setIsModalOpen,
    setIsScrollBtnVisible,
    setIsAtTop,
    setIsContactVisible,
    setIsSideTextVisible,
} = uiSlice.actions;

export default uiSlice.reducer;
