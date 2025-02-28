function takeOrder() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           const order = (Math.random() * 10) < 5 ? `Coffee` : `Tea`        
           resolve(order)
        },1000)
    })
}

function makeOrder(order){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`order is prepared`)
        }, 2000);
    })
}

function servOrder(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(`order is served`)
        }, 2000);
    })
}


async function orderProcess(){
    try {
        const order = await takeOrder()
        let setMsg = `Order for : ${order}`;       
        let OrderStatus = document.getElementById('takeOrder')
        OrderStatus.textContent = setMsg
        console.log(setMsg);

        const orderMakingStatus = await makeOrder(order)
        document.getElementById('makeOrder').textContent = orderMakingStatus
        console.log(orderMakingStatus);

        const orderservStatus = await servOrder(order)
        document.getElementById('servOrder').textContent = orderservStatus
        console.log(orderservStatus);

    } catch (error) {
        console.log(`error : ${error}`);
    }
}
orderProcess();