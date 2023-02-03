const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameID = 'D4oo8fZXNfgmwr94xZgZ';
const scoresite = `${APIurl}games/${gameID}/scores`;

export const saveScore = async (player,score) => {
    if(player.value && score.value){
        await fetch(scoresite, {
            method: 'POST',
            body: JSON.stringify({
            user: player.value,
            score: score.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },        
        })
    }
}

export const retrieveScore = async () => {
    const response = await fetch(scoresite);
    const retrieved = await response.json();
    return retrieved;
}

