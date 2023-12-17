import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    email: null,
    token: null,
    id: null,
    ads: [],
    personalInfo: {
        name: '',
        surname: '',
        city: '',
        phone: ''
    },
}

const userSlise = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
        setAds(state,action) {
            state.ads = action.payload;
        },
        personalInfo: (state, action) => {
            state.personalInfo = action.payload
        }
    },
})

export const {setUser, removeUser, setAds, personalInfo} = userSlise.actions

export default userSlise.reducer