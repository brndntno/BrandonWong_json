async function displayUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/')
    const user = await response.json()
    return user
}
displayUser()
.then((json) => {
    for (let i = 0; i < 10; i++) {
        let user = document.getElementById("user" + i)
        user.innerHTML += "Name: " + removeQuotations(JSON.stringify(json[i].name))
        console.log(JSON.stringify(json[i].name))
        user.innerHTML += " Email: " + removeQuotations(JSON.stringify(json[i].email))
        console.log(JSON.stringify(json[i].email))
        user.innerHTML += " Street: " + removeQuotations(JSON.stringify(json[i].address.street))
        console.log(JSON.stringify(json[i].address.street))
        user.innerHTML += " Suite: " + removeQuotations(JSON.stringify(json[i].address.suite))
        console.log(JSON.stringify(json[i].address.suite))
        user.innerHTML += " City: " + removeQuotations(JSON.stringify(json[i].address.city))
        console.log(JSON.stringify(json[i].address.city))
        user.innerHTML += " Zipcode: " + removeQuotations(JSON.stringify(json[i].address.zipcode))
        console.log(JSON.stringify(json[i].address.zipcode))
    }
})
async function displayComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/')
    const comment = await response.json()
    return comment
}
displayComments()
.then((json) => {
    for (let i = 0; i < 10; i++) {
        let comment = document.getElementById("comment" + i)
        comment.innerHTML += "Title: " + removeQuotations(JSON.stringify(json[i].name))
        console.log(JSON.stringify(json[i].name))
        comment.innerHTML += " Description: " + removeQuotations(JSON.stringify(json[i].body))
        console.log(JSON.stringify(json[i].body))
    }
})
async function displayToDo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const todo = await response.json()
    return todo
}
displayToDo()
.then((json) => {
    for (let i = 0; i < 10; i++) {
        let todo = document.getElementById("todo" + i)
        todo.innerHTML += "Act for Redemption: " + removeQuotations(JSON.stringify(json[i].title))
        console.log(JSON.stringify(json[i].title))
        todo.innerHTML += " Completed? " + JSON.stringify(json[i].completed)
        console.log(JSON.stringify(json[i].completed))
    }
})

function removeQuotations(text) {
    return text.substring(1, text.length - 1)
}