function firstjokes() {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            const joke = document.getElementsByClassName("joke")[0];
            joke.innerHTML = data.joke;
        })
        .catch(() => alert("Just Give Up!!"));
}

export default firstjokes;
