//aqui van las peticiones
export const traer = (url) => {
    fetch(url)
        .then(resp => resp.json())
        .then(resp => { return resp })

}

export const crear = async (info) => {

    try {
        const response = await fetch("http://localhost:3000/Products", {
            method: 'POST',
            headres: { 'content-pyte': 'application/json' },
            body: JSON.stringify(info)
        })

        if (info.ok) {
            const infoResp = await info.json()
            console.log(infoResp)
        }
    }
    catch (error) {
        console.log(error)
    }

}

export const editar = async (info) => {

    try {
        const response = await fetch(`http://localhost:3000/Products/${info.id}`, {
            method: 'PUT',
            headres: { 'content-pyte': 'application/json' },
            body: JSON.stringify(info)
        })
        if (info.ok) {
            const infoResp = await info.json()
            console.log(infoResp)
        }

    }
    catch (error) {
        console.log(error)
    }

}

export const borrar = async (info) => {
    let id = info.id
    try {
        const response = await fetch(`http://localhost:3000/Products/${id}`, {
            method: 'DELETE',
            headres: { 'content-pyte': 'application/json' },
            // body: JSON.stringify(id)
        })
        // if (info.ok){
        //     const infoResp= await info.json()
        //     console.log(infoResp)
        // }
    }
    catch (error) {
        console.log(error)
    }

}
