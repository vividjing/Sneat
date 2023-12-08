import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const email = localStorage.getItem("email");
  const color = localStorage.getItem("color");
  const phone = localStorage.getItem("phone");
  const address = localStorage.getItem("address");
  const state = localStorage.getItem("state");
  const zip = localStorage.getItem("zip");
  const bgColor = localStorage.getItem("bgColor");
  return {
    activeMenu: "true",
    currentColor: color ? color : "#34cff0",
    userEmail: email ? email : "",
    phoneNumber: phone ? phone : "",
    address: address ? address : "",
    state: state ? state : "",
    zipCode: zip ? zip : "",
    mode: "light",
    isActive: "dashboard",
    screenSize: 1024,
    themeSettings: false,
    bgColor: bgColor ? bgColor : "#d6f5fc",
    calendarfilter: ["personal", "family", "holiday", "business", "etc"],
    checkall: true,
    isLogged: false,
    token: token ? token : "",
    userName: token ? userName : "",
    isEventActive: false,
    eventStartTime: "",
    eventEndTime: "",
    eventUpdate: false,
    eventTitle: "",
    eventCategory: "",
    eventId: "",
  };
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setCurrentColor: (state, action) => {
      state.currentColor = action.payload;
    },
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setScreenSize: (state, action) => {
      state.screenSize = action.payload;
    },
    setThemeSettings: (state, action) => {
      state.themeSettings = action.payload;
    },
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
    setIsEventActive: (state, action) => {
      state.isEventActive = action.payload;
    },
    setEventStartTime: (state, action) => {
      state.eventStartTime = action.payload;
    },
    setEventEndTime: (state, action) => {
      state.eventEndTime = action.payload;
    },
    setEventUpdate: (state, action) => {
      state.eventUpdate = action.payload;
    },
    setEventTitle: (state, action) => {
      state.eventTitle = action.payload;
    },
    setEventCategory: (state, action) => {
      state.eventCategory = action.payload;
    },
    setEventId: (state, action) => {
      state.eventId = action.payload;
    },
    setCalendarFilter: (state, action) => {
      if (state.calendarfilter.includes(action.payload)) {
        state.calendarfilter = state.calendarfilter.filter(
          (item) => item !== action.payload
        );
      } else {
        state.calendarfilter.push(action.payload);
      }

      if (state.calendarfilter.length === 5) {
        state.checkall = true;
      } else {
        state.checkall = false;
      }
    },
    setCheckAll: (state, action) => {
      state.checkall = !state.checkall;
      if (state.checkall) {
        state.calendarfilter = [
          "personal",
          "business",
          "family",
          "holiday",
          "etc",
        ];
      } else {
        state.calendarfilter = [];
      }
    },
  },
});

export const {
  setIsLogged,
  setToken,
  setUserName,
  setAddress,
  setState,
  setUserEmail,
  setZipCode,
  setPhoneNumber,
  setActiveMenu,
  setScreenSize,
  setMode,
  setIsActive,
  setThemeSettings,
  setCurrentColor,
  setBgColor,
  setCalendarFilter,
  setCheckAll,
  setIsEventActive,
  setEventStartTime,
  setEventEndTime,
  setEventUpdate,
  setEventTitle,
  setEventCategory,
  setEventId,
} = globalSlice.actions;
export default globalSlice.reducer;
