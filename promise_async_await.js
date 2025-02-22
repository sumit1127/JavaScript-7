function placeOrder(drink){
    return new Promise((resolve,reject)=>{
        if(drink == 'coffee'){
            resolve('Order for coffee')
        }else{
            reject('other orders rejected')
        }
    })
}

function processOrder(order){
    return new Promise((resolve, reject)=>{
        console.log('Order being processed')
        resolve(`${order} received and served`)
    })
}

// console.log(placeOrder())
// placeOrder('coffee')
// .then(function(orderplaced){
//     console.log(orderplaced)
//     let orderProcessed = processOrder(orderplaced)
//     return orderProcessed
// }).then(function(processOrder){
//     console.log(processOrder)
// }).catch(function(err){
//     console.log('error message '+err)
// })


async function serveOrder(){
    try{
        let orderplaced = await placeOrder('coffee')
        console.log(orderplaced)
        let orderProcessed = await processOrder(orderplaced)
        console.log(orderProcessed)
    }catch(err){
        console.log(err)
    }
}

serveOrder()