import { newSave } from "./pagefunctions";

const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'D4oo8fZXNfgmwr94xZgZ';
const scoresite = `${APIurl}games/${gameID}/scores`;

export const saveScore = async () => {
    const newData = newSave();
    if(newData){
        await fetch(scoresite, {
         method: 'POST',
         body: JSON.stringify(newData),
         headers: {
            'Content-type': 'application/json;',
         },        
        })
        .then((response) => response.json())
    }
}

export const retrieveScore = async () => {
    const response = await fetch(scoresite);
    return response.json();
}
