// axios.get("https://swapi.dev/api/people/1") //it returns a promise
//     .then(res => {
//         console.log("RESPONSE", res);
//     })
//     .catch(e => {
//         console.log("ERORR!", e);
//     });

const getStarWarsPerson = async (id) =>{
    try{
        const config = {headers: {Acct: 'application/json', otherHeader: 'xyz'}};

        // const res = await axios.get(`https://swapi.dev/api/people/${id}`, config);
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data.joke);
    }catch(e){
        console.log("ERORR", e);
    }
}