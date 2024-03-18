import {atom} from "recoil";
export const updateCount = atom({
    key:"UPDATE_COUNT",
    default:{
        count:0
    }
})