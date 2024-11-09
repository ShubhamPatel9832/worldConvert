

const input1  = document.getElementById("input1")
const button1 = document.getElementById("buttontoUppercase")
const button2 = document.getElementById("lower")
const button3 = document.getElementById("trim")
const button4 = document.getElementById("space")





button1.addEventListener("click" , ()=>{
input1.value=input1.value.toUpperCase()
})


button2.addEventListener("click" , ()=>{
input1.value=input1.value.toLowerCase()
})
    
        
button3.addEventListener("click" , ()=>{
input1.value=input1.value.trim()
})
        
            
button4.addEventListener("click" , ()=>{
input1.value=input1.value.replaceAll(" " , "")
})
             