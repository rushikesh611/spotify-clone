import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists : [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    token: null,
    //set token to null after developing 
    // token: 'BQDLOoDFbPkU3yk9xBuK8dvgdzSQ6rCUPVP-JSTTdc4hNZo4c_Ia6chR1ddNmdeAnwq0t9Q_8jDzo8kp-CyqPxmiKjzttT9HGkln-g98nuqePJIT4OUsWOeFah4dO3yTLndodLMpbEFidmg4TlGnfVv7nvYOYPrWHK28TmF__bKnB5VV',
};

const reducer = (state,action) => {
    console.log(action);
    // action has a type and a [payload]
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
          
        default:
            return state;
    }
};

export default reducer;