const input = document.getElementById('input');
const txt = document.getElementById('txt');
const value = input.value
convert.onclick = async function (event){
    const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '254659b2c2mshacf29a23b60648dp1a43d4jsn1cd80dbc7a82',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        body: new URLSearchParams({
            from: 'auto',
            to: language.value,
            text: input.value
        })
    };
    
    try {
        txt.textContent = ""
        txt.classList.add("loader")
        const response = await fetch(url, options);
        const result = await response.json();
        txt.textContent = result.trans
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally{
        txt.classList.remove("loader")

    }
} 