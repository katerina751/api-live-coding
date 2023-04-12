const host = "https://webdev-hw-api.vercel.app/api/v2/todos";


// передать параметр токен
export function getTodo({ token }) {
    return fetch(host, {
        method: "GET",
        headers: {
            Authorization: token,
        },
    })
        .then((response) => {
            if (response.status === 401) {
                throw new Error('Нет авторизации');
            }

            return response.json();
        })
}

export function deleteTodo({ token, id, }) {
    return fetch("https://webdev-hw-api.vercel.app/api/todos/" + id, {
        method: "DELETE",
        headers: {
            Authorization: token,
        },
    })
        .then((response) => {
            return response.json();
        })
}

export function addTodo({ text, token }) {
    return fetch(host, {
        method: "POST",
        body: JSON.stringify({
            text,
        }),
        headers: {
            Authorization: token,
        },
    })
        .then((response) => {
            return response.json();
        })
}