const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'D4oo8fZXNfgmwr94xZgZ';
const scoresite = `${APIurl}games/${gameID}/scores`;

export const saveScore = async () => {
    const saver = await fetch(scoresite, {
        method: 'POST',
        body: JSON.stringify(playerData),
        headers: {
            'Content-type': 'application/json;',
        },        
    })
    return saver;
}

export const retrieveScore = async () => {
    const response = await fetch(scoresite);
    return response.json();
}
