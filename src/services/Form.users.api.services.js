let baseUrl = 'http://jsonplaceholder.typicode.com/users'

let postFetch = (value) =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(value)
    })
        .then(value => value.json())

export {postFetch}