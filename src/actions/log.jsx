import { traer } from "../req/req"

export const login=(values)=>{
    const usuariosDb= traer
   const encontrado = usuariosDb.some((usuario)=>{return (usuario.name==values.username )&&(usuario.contrasena== values.password)})
  return encontrado
}
export const logout=()=>{
    userState(false)
}
     
