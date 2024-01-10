function fetchAnyUrl(url)
{
    console.log("fetch any url" + url)
    return fetch(url).then(response => response.json())
}

export {fetchAnyUrl}