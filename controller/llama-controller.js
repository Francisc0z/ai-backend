const { response } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const axios = require('axios');

const getList = async(req, res = response) => {
    //const itemList = req.query.items;
    const itemList = ['c++']
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    let resp;
    let promptParameters = '';
    try {
        for (let index = 0; index < itemList.length; index++) {
            const element = itemList[index];
            promptParameters = promptParameters + ` ${element} and `
        }
        prompt = `hello llama, give me a list of 20 items with more priority of ${promptParameters}`
        await axios.get(apiUrl)
            .then(response => {
                // Manejar la respuesta exitosa
                resp = response.data
            })
            .catch(error => {
                console.log(error)
                // Manejar errores en caso de que la solicitud falle
                throw error('Error al obtener los datos de usuarios:', error)
            });
        resp = '1. Tipos de datos primitivos; 2. Estructuras de control (if, else, switch); 3. Bucles (for, while, do-while); 4. Funciones y procedimientos; 5. Clases y objetos; 6. Herencia; 7. Polimorfismo; 8. Encapsulación; 9. Plantillas (templates); 10. Punteros y referencias; 11. Gestión de memoria (new, delete); 12. Sobrecarga de operadores; 13. Manejo de excepciones; 14. Biblioteca estándar (STL); 15. Vectores y listas; 16. Mapas y conjuntos; 17. Archivos de entrada/salida; 18. Directivas de preprocesador (#include, #define); 19. Funciones lambda; 20. Programación orientada a objetos (POO).'
        // Generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            resp
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

}


const postText = async(req, res = response) => {

    const { items } = req.body;
    const itemList = ['c++']
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    try {

        // for (let index = 0; index < itemList.length; index++) {
        //     const element = itemList[index];
        //     promptParameters = promptParameters + ` ${element} and `
        // }
        // prompt = `hello llama, give me a list of 20 items with more priority of ${promptParameters}`
        await axios.get(apiUrl)
            .then(response => {
                // Manejar la respuesta exitosa
                resp = response.data
            })
            .catch(error => {
                // Manejar errores en caso de que la solicitud falle
                throw error('Error al obtener los datos de usuarios:', error)
            });
        resp = 'Los tipos de datos primitivos en C++ son las categorías fundamentales que se utilizan para representar diferentes tipos de valores. Estos tipos incluyen enteros para representar números enteros, punto flotante para números con decimales, caracteres para representar caracteres individuales, booleanos para valores lógicos verdadero o falso, void para indicar la ausencia de tipo o valor, y wchar_t para representar caracteres ampliados o caracteres Unicode. Keywords: ;enteros;punto flotante;caracteres;booleanos;void;wchar_t;puntero;valores;'
        // Generar respuesta exitosa
        return res.status(200).json({
            ok: true,
            resp
        });



    } catch (error) {
        console.log(error);

        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const revalidarToken = async(req, res = response ) => {

    const { uid } = req;

    // Leer la base de datos
    const dbUser = await Usuario.findById(uid);

    // Generar el JWT
    const token = await generarJWT( uid, dbUser.name );

    return res.json({
        ok: true,
        uid, 
        name: dbUser.name,
        email: dbUser.email,
        token
    });

}



module.exports = {
    getList,
    postText
}