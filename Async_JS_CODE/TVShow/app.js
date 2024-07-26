const form = document.querySelector("#searchForm");
const container = document.querySelector(".container");

form.addEventListener("submit",async  function(e){
    e.preventDefault();
    container.innerHTML = '';
    const shownName = form.elements.query.value;
    const showsArray = await makeRequest(shownName);
    displayShows(showsArray);
    form.elements.query.value = "";
})

const makeRequest = async (shownName) => {  
    try{
        const config = { params: { q: shownName}};
        const res = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
        return res.data;
    }catch(e){
        console.log("ERORR: ", e);
    }

}

const displayShows = (showsArray) => {
    for(let result of showsArray){
        if(result.show.image){
            const imageContainer = document.createElement('div');
            const img = document.createElement('img');
            const name = document.createElement("span");
            name.innerText = result.show.name;
            img.src = result.show.image.medium;
            imageContainer.append(img);
            imageContainer.append(name);
            container.append(imageContainer);
        }
    }
}