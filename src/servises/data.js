import { getDefaultNormalizer } from '@testing-library/react';





export default function GetData(){ 
  //  const jsonfile = require('jsonfile')

    /*
    jsonfile.readFile('products.js', function (err, obj) {
        if (err) console.error(err)
        console.dir(obj)
      })
*/

/*
const file = 'products.json'
const obj = { name: 'JP', count:9 }

console.log('hola guachin')
 
jsonfile.writeFile(file, obj, { flag: 'a' }, function (err) {
    if (err) console.error(err)
  })
*/


let json = fs.readFile('products.json')
console.log(json)


    

}