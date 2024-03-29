async function getData (type) {
    const url = 'https://itunes.apple.com/search?country=us&media=podcast&term=' + type;
    const containerElement=window.document.querySelector("."+type+"-content")
const options = {
	method: 'GET',
		}

try {
	const response = await fetch(url, options);
	const result = await response.json();
	result.results.map((item) =>{
        console.log(item)
        const {collectionName, artworkUrl600, trackViewUrl, collectionViewUrl, primaryGenreName}=item;
        console.log(collectionName, artworkUrl600, trackViewUrl, collectionViewUrl, primaryGenreName);
        const itemElement=window.document.createElement("a");
        itemElement.setAttribute("href", collectionViewUrl);
        const collectionNameElement=window.document.createElement("h2");
        const imageElement=window.document.createElement("img");
        const genreElement=window.document.createElement("small");
        itemElement.style.marginRight = "20px";
        imageElement.classList.add('podcast-image');
        genreElement.classList.add('small-genre');
        genreElement.textContent = primaryGenreName;
        imageElement.setAttribute("src", artworkUrl600);
        genreElement.setAttribute("src", primaryGenreName);
        itemElement.appendChild(imageElement);
        itemElement.appendChild(genreElement);
        containerElement.appendChild(itemElement);
    });
} catch (error) {
	console.error(error);
}
}
getData("popular")
getData("trending")