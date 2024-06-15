var fs = require("fs");

const leer = ()=>{
    try{
    // Synchronous read
    var data = fs.readFileSync('citas.json','utf-8');
    return data.toString();
    } catch (error){
        console.log("error al leer archivo")
    }

}

const registrar = (nombre=null, edad=null, tipo=null, color=null, enfermedad=null)=>{
    try{
        const data = leer();
        const citas = JSON.parse(data)
        citas.push({nombre,edad,tipo,color,enfermedad})
        fs.writeFileSync('citas.json',JSON.stringify(citas))
        return "paciente guardado con éxito"
        } catch (error){
            console.log("No se pudo ingresar la información")
        }
}
module.exports = {leer, registrar}