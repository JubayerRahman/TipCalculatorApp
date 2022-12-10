const bill = document.getElementById('bill')
const peopleNumber = document.getElementById('peopleNumber')
const tip = document.getElementById('tip')
const reset = document.getElementById('reset')
const custom = document.getElementById('custom')
let finalTip = 0;


//totall
bill.addEventListener('keyup',()=>{
        const totalBull = (bill.value/peopleNumber.value) + finalTip
        document.getElementById('totalPrice').innerHTML = totalBull;
})
// peopleNumber.addEventListener('keyup', ()=>{
//     const totalBull = parseFloat((bill.value/peopleNumber.value)).toFixed(2)
//     document.getElementById('totalPrice').innerHTML =  totalBull;
// })


//5% button
const percentButton5 = document.getElementById('percentButton5').addEventListener('click',()=>{
    const ttip = parseFloat((bill.value/100)*5).toFixed(2);
    finalTip= ttip
    tip.innerText = "$" + ttip;

    //display
    const amount = document.getElementById('totalPrice').innerHTML
    const tamount = parseFloat(amount)+ parseFloat(finalTip)
    console.log(tamount)
    document.getElementById('totalPrice').innerHTML =  tamount;

    // prople
    peopleNumber.addEventListener('keyup', ()=>{
        const tip = parseFloat(ttip)
        const totalBull = parseFloat((bill.value/peopleNumber.value)+tip).toFixed(2)
        document.getElementById('totalPrice').innerHTML =  totalBull;
    })
})

//10% button
const percentButton10 = document.getElementById('percentButton10').addEventListener('click',()=>{
    const ttip = parseFloat((bill.value/100)*10).toFixed(2);
    finalTip= ttip
    tip.innerText = "$" + ttip;

    //display
    const amount = document.getElementById('totalPrice').innerHTML
    const tamount = parseFloat(amount)+ parseFloat(finalTip)
    document.getElementById('totalPrice').innerHTML =  tamount;

    // prople
    peopleNumber.addEventListener('keyup', ()=>{
        const tip = parseFloat(ttip)
        const totalBull = parseFloat((bill.value/peopleNumber.value)+tip).toFixed(2)
        document.getElementById('totalPrice').innerHTML =  totalBull;
    })
})

//15% button
const percentButton15 = document.getElementById('percentButton15').addEventListener('click',()=>{
    const ttip = parseFloat((bill.value/100)*15).toFixed(2);
    finalTip= ttip
    tip.innerText = "$" + ttip;

    //display
    const amount = document.getElementById('totalPrice').innerHTML
    const tamount = parseFloat(amount)+ parseFloat(finalTip)
    document.getElementById('totalPrice').innerHTML =  tamount;

    // prople
    peopleNumber.addEventListener('keyup', ()=>{
        const tip = parseFloat(ttip)
        const totalBull = parseFloat((bill.value/peopleNumber.value)+tip).toFixed(2)
        document.getElementById('totalPrice').innerHTML =  totalBull;
    })
})

//25% button
const percentButton25 = document.getElementById('percentButton25').addEventListener('click',()=>{
    const ttip = parseFloat((bill.value/100)*25).toFixed(2);
    finalTip= ttip
    tip.innerText = "$" + ttip;

    //display
    const amount = document.getElementById('totalPrice').innerHTML
    const tamount = parseFloat(amount)+ parseFloat(finalTip)
    document.getElementById('totalPrice').innerHTML =  tamount;

    // prople
    peopleNumber.addEventListener('keyup', ()=>{
        const tip = parseFloat(ttip)
        const totalBull = parseFloat((bill.value/peopleNumber.value)+tip).toFixed(2)
        document.getElementById('totalPrice').innerHTML =  totalBull;
    })
})

//50% button
const percentButton50 = document.getElementById('percentButton50').addEventListener('click',()=>{
    const ttip = parseFloat((bill.value/100)*50).toFixed(2);
    finalTip= ttip
    tip.innerText = "$" + ttip;

    //display
    const amount = document.getElementById('totalPrice').innerHTML
    const tamount = parseFloat(amount)+ parseFloat(finalTip)
    document.getElementById('totalPrice').innerHTML =  tamount;

    // prople
    peopleNumber.addEventListener('keyup', ()=>{
        const tip = parseFloat(ttip)
        const totalBull = parseFloat((bill.value/peopleNumber.value)+tip).toFixed(2)
        document.getElementById('totalPrice').innerHTML =  totalBull;
    })
})

//custom
    custom.addEventListener('keyup',()=>{
    console.log(parseFloat(custom.value))
    const customVal = parseFloat(custom.value)
    const ttip = parseFloat((bill.value/100)*customVal).toFixed(2);
    finalTip= ttip
    tip.innerText = "$" + ttip;

    //display
    const amount = document.getElementById('totalPrice').innerHTML
    const tamount = parseFloat(amount)+ parseFloat(finalTip)
    document.getElementById('totalPrice').innerHTML =  tamount;

    // prople
    peopleNumber.addEventListener('keyup', ()=>{
        const tip = parseFloat(ttip)
        const totalBull = parseFloat((bill.value/peopleNumber.value)+tip).toFixed(2)
        document.getElementById('totalPrice').innerHTML =  totalBull;
    })
})


// reset
reset.addEventListener('click', ()=>{
    location.reload();
})