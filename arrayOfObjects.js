const sku = [{
  "Name": "Value 1",
  "Full Name": "Value 2",
  "aDdress or place": "value 3"
},
{
  "Role": "value 4",
  "email": "value 5",
  "Current Status": "value 6"
}];
 
const newArr = []
for (let objects of sku){
  let obj = {}
  for(let key in objects){
    let values = objects[key]
    let lowerCaseHeaders = key.toLocaleLowerCase().replace(/ /g, '_')
    let lowerCaseValues = values.toLocaleLowerCase().replace(/ /g, '_')
    // // this creates multiple objects within the object(not what we want)
    // let objs = {
    //   [lowerCaseHeaders]: lowerCaseValues
    // }
    obj[lowerCaseHeaders] = lowerCaseValues
    // newArr.push(objs)
  }
  // console.log(obj);
  newArr.push(obj)
}
console.log(newArr);