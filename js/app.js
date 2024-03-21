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
        const {collectionName, artworkUrl100, trackViewUrl, collectionViewUrl}=item;
        console.log(collectionName, artworkUrl100, trackViewUrl)
        const itemElement=window.document.createElement("a")
        itemElement.setAttribute("href", collectionViewUrl)
        const collectionNameElement=window.document.createElement("h3")
        const imageElement=window.document.createElement("img")
        imageElement.setAttribute("src", artworkUrl100)
        collectionNameElement.textContent=collectionName
        itemElement.append(imageElement)
        containerElement.append(itemElement)
    });
} catch (error) {
	console.error(error);
}
}
getData("popular")
getData("trending")