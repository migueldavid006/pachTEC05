

// function minMaz(arr){
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)

//     return [`max ${max}, min ${min}, total ${max+min}`]
//     return [`${ } ${ } ${ } ${ } `]
// }
// console.log(
// minMaz([34 ,3, 16 ,6,85,9,8,2,])
  
// )



const students =[
    {id:1, name:'david', correo:'correo@correo'},
    {id:22, name:'david1', correo:'corre1o@correo'},
    {id:33, name:'david2', correo:'correo2@correo'},
    {id:44, name:'david3', correo:'correo3@correo'},
    {id:55, name:'david4', correo:'correo4@3correodfgsdfgdfgdfg'}
]

const idStudents = students.map( ({id})=>  id)
console.log(idStudents)

// for(prop in students){
//     console.log( students[prop])
// }


// const students2={
//     name: 'juan',
//     edad:66,
//     estudiios:true,
// }

// for( let [llave,valor] of Object.entries(students2)){
//     console.log(llave);
// console.log(valor);
// }


// students2.forEach(est =>{
//     console.log(est.name)
// })

// for( prop in students2){
//     console.log(students2[prop])
// }

// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     console.log([element]===students)
    
// }
// console.log(students)



// students.forEach((element,index) => {
//     console.log(element)
//     console.log(index-1)
// });

// const numeros = [12,23,45]
// for(let i =0; i<numeros.length; i++){

//     numeros[i] = numeros[i]*3;
// }

// console.log(numeros)