function fetchAnyUrl(url)
{
    console.log("bla bla fetch")
    return fetch(url).then(response => response.json())
}

export {fetchAnyUrl}