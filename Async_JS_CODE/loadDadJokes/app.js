const btn = document.querySelector("button");
const p = document.querySelector("p");

const loadDadJokes = async () => {
    try{
        const res = await fetch("https://icanhazdadjoke.com", {
            method: 'GET',
            headers: {
                'Accept' : 'application/json'
            }
        });
        const data = await res.json();
        // console.log(data['joke']);
        return data['joke'];

    }catch(e) {
        console.log("Some error occurred", e);
    }
}

btn.addEventListener('click', async () => {
    const joke = await loadDadJokes();
    p.innerText = joke;
});



