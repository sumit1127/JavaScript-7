

function greet(){
    setTimeout(()=>{
        console.log('Hello')
    },0)
}
greet()
function promise(){
    return new Promise((resolve, reject)=>{
        let a = 4
        if(a%2== 0){
            resolve(`${a} is Even`)
        }else{
            reject(`${a} is odd`)
        }
    })
}
console.log(promise())
promise()
.then((success) => console.log(success))
.catch((err) => console.log(err))

console.log('before')
console.log('after')