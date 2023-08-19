import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('fetch/greeting', async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3000');
    return response.data;
  } catch (error) {
    return error;
  }
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: fetchGreeting.message,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.message = action.payload.greeting;
    });
  },
});

// Action creators are generated for each case reducer function
export default greetingSlice.reducer;
