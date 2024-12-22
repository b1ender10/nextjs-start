import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface HomeState {
  header: any;
  home: any;
  faqs: any;
  news: any;
  footer: any;
}

const initialState: HomeState = {
  header: [],
  home: [],
  faqs: [],
  news: [],
  footer: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHeader(state, action: PayloadAction<any>) {
      state.header = action.payload;
    },
    setHome(state, action: PayloadAction<any>) {
      state.home = action.payload;
    },
    setFAQs(state, action: PayloadAction<any>) {
      state.faqs = action.payload;
    },
    setNews(state, action: PayloadAction<any>) {
      state.news = action.payload;
    },
    setFooter(state, action: PayloadAction<any>) {
      state.footer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE as string, (state, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload.homeReducer
      };
    });
  },
});

export const { setHome, setFAQs, setNews, setHeader, setFooter } = homeSlice.actions;
export default homeSlice.reducer;