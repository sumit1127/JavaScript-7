// find first and last index of target value
let arr = [1,2,3,4,1,2,5,6,1,2]
let target = 0
function fun(){
        let first = -1
        let last = -1
        let count = 0
        for(let i=0; i<arr.length; i++){
            if(arr[i] == target){
                count++
                
                if(first == -1){
                    first = i
                }
                last = i
            }
        }
        if(count == 0) return `${target} is not present`
        if(count == 1) return [first]
        if(first !== -1) return [first, last]
}
console.log(fun())

//
let arr1 = [ 1, 1, 2, 3, 5, 7, 7, 4]

function fun1(){
    let obj = {}    
    for(let i=0 ; i<arr1.length; i++){
        if(obj[arr1[i]] == undefined){
            obj[arr1[i]] = 1
        }else{
            obj[arr1[i]] = obj[arr1[i]] + 1
        }
    }
    
    for(let i=0; i<arr1.length; i++){
        if(obj[arr1[i]]> 2){
            return false
        }
    }
    return true
}
console.log(fun1())


//occurance
let arr2 = [5,1,2,4,2,1,2,5,6,1,4,6,7,4,3,1,2,5]
    let obj = {}
function num(){
    for(let i=0; i<arr2.length; i++){
        let num = arr2[i]
        if(obj[num] == undefined){
            obj[num] = 1
        }else{
            obj[num] += 1
        }
    }
    return obj
}
console.log(num())


//largest str
let string = 'owio qwoue qpohsjh wio'
function num1(){
    let str = string.split(' ')
    for(let i=0;i<str.length; i++){
        for(let j=0; j<str.length-i-1; j++){
            if(str[j].length < str[j+1].length){
                let temp = str[j]
                str[j] = str[j+1]
                str[j+1] = temp
            }
        }
    }
    console.log(str.join(' '))
    let second = str[1]
    console.log(second)
    return second.length
}
num1()

//split
let str = 'ieod pqo owueywpw'

function num2(){
    let word = []
    let temp = ''
    for(let i=0; i<str.length; i++){
        if(str[i] !== ' '){
            temp += str[i]
        }else{
            if(temp){
                word.push(temp)
                temp = ''
            }
        }
    }
    if(temp !== ' '){
        word.push(temp)
        temp = ''
    }
    console.log(word)
}
num2()


let str1 = 'ieod pqo owueywpw'

function num3(){
    let word = []
    let temp = ''
    for(let i=0; i<str1.length; i++){
        if(str1[i] !== ' '){
            temp += str1[i]
        }else{
            if(temp){
                word.push(temp)
                temp = ''
            }
        }
    }
    if(temp !== ' '){
        word.push(temp)
        temp = ''
    }
    for(let i=0; i<word.length; i++){
        for(let j=0; j<word.length-i-1; j++){
            if(word[j].length < word[j+1].length){
                let temp = word[j]
                word[j] = word[j+1]
                word[j+1] = temp
            }
        }
    }
    console.log(word.join(' '))
    let second = word[1]
    console.log(second)
    return second.length
}
console.log(num3())

// Move all Zero to right sides
let arr3 = [1,0,2,4,0,3,2,0,0,4,5]
let temp = []
function fun3(){
    for(let i=0; i<arr3.length; i++){
        if(arr3[i] !== 0){
            temp.push(arr3[i])
        }
    }
    for(let i=0; i<temp.length; i++){
        if(arr3[i] == 0){
            temp.push(arr3[i])
        }
    }
    console.log(temp)
}
fun3()


function fun4(){
    let j = -1
    for(let i = 0; i<arr3.length; i++){
        if(arr3[i] == 0){
            j = i
            break
        }
    }
    
    for(let i = j; i<arr3.length; i++){
        if(arr3[i] !== 0){
            let temp  = arr3[i]
            arr3[i] = arr3[j]
            arr3[j] = temp
            j++
        }
    }
    return arr3
}
console.log(fun4())