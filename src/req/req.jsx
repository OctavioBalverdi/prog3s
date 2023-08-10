//aqui van las peticiones
export const traer= ()=>{
    fetch("http://localhost:3000/Products")
.then(resp => resp.json())
.then(resp=>console.log(resp))
}



// export const crear= async (info)=>{
//     const info=info
//     try{
//         const response= await fetch("http://localhost:3000/Products",{
//             method: 'POST',
//             headres: {'content-pyte':'application/json'},
//             body: JSON.stringify(info)
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
   
// }

// export const editar = async (info)=>{
//     const info=info
//     try{
//         const response= await fetch("http://localhost:3000/Products",{
//             method: 'POST',
//             headres: {'content-pyte':'application/json'},
//             body: JSON.stringify(info)
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
   
// }

// export const borrar = async (info)=>{
//     const info=info
//     try{
//         const response= await fetch("http://localhost:3000/Products",{
//             method: 'POST',
//             headres: {'content-pyte':'application/json'},
//             body: JSON.stringify(info)
//         })
//     }
//     catch(error){
//         console.log(error)
//     }
   
// }
