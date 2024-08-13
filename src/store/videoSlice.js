import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        hoveredVideo: null,
    },
    reducers: {
        setHoveredVideo: (state, action) => {
            state.hoveredVideo = action.payload;
        }
    },
});

export const { setHoveredVideo } = videoSlice.actions;
export default videoSlice.reducer;
