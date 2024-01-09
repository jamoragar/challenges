console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        for(let i = 0; i <= 5; i++){
            console.log(data.results[i])
            if(data.results[i].name === 'R2-D2'){
                console.log(`The eye color of R2-D2 are: ${data.results[i].eye_color}`);
            }
        }

    }catch(err){
        throw new Error(err);
    }

}

fetchData();
