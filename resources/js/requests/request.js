const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function getAllTodos() {
    const result = await fetch("http://localhost/api/todos", {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
    })
    const json = await result.json()
    return json
}

export async function getSingleTodo(todo) {
    const result = await fetch(`http://localhost/api/todos/${ todo.id }`, {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders,
    })
    const json = await result.json()
    return json
}

export async function updateTodo(todo) {
    const result = await fetch(`http://localhost/api/todos/${ todo.id }`, {
        method: 'POST',
        body: JSON.stringify(todo),
        redirect: 'follow',
        headers: myHeaders,
    })
    const json = await result.json()
    return json
}

export async function deleteTodo(todo) {
    const result = await fetch(`http://localhost/api/todos/delete/${ todo.id }`, {
        method: 'POST',
        redirect: 'follow',
        headers: myHeaders,
    })
    const json = await result.json()
    return json
}

export async function createTodo(text) {
    const result = await fetch(`http://localhost/api/todos`, {
        method: 'POST',
        body: JSON.stringify({
            text: text
        }),
        headers: myHeaders,
        redirect: 'follow'
    })
    const json = await result.json()
    return json
}