const testtimer = () => {
    setTimeout(()=>{
        console.log("done")
    }, 1000)
    return "returned"
}
console.log(testtimer());