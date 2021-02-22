//Reducers
import { combineReducers } from "redux";
const songsReducer=()=>{
    return[
        {
            title: 'Intensions',
            duration: '2:45'
        },{
            title: 'Yummy',
            duration: '3:15'
        },{
            title: 'Monster',
            duration: '2:15'
        },{
            title: 'Boyfriend',
            duration: ' 3.45'
        },{
            title: 'lion King',
            duration: '4.05'
        }
    ];
};

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});



