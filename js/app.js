const containerElement=window.document.querySelector(".browse-content")
async function getData () {
    const url = 'https://itunes.apple.com/search?country=us&media=podcast&term=popular';
const options = {
	method: 'GET',
		}

try {
	const response = await fetch(url, options);
	const result = await response.json();
	result.results.map((item) =>{
        console.log(item)
        const {collectionName, artworkUrl100, trackViewUrl}=item;
        console.log(collectionName, artworkUrl100, trackViewUrl)
        const itemElement=window.document.createElement("div")
        const collectionNameElement=window.document.createElement("h2")
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
getData()