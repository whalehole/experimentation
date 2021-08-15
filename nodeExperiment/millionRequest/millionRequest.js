const axios = require('axios');

const requests = n => {
    let duration = 0;
    let response = 0;
    a = setInterval(()=>{
        duration += 200/1000
    }, 200)
    for (let i=1; i <= 10000; i++) {
        axios.get('http://127.0.0.1:8080/name')
        .then(res=>{
            response += 1;
            // console.log(response, res.data)
            if (response === 10000) {
                clearInterval(a)
                console.log(duration)
                console.log(res.data)
            }
        })
        // .catch(e=>{
        //     console.log(e)
        // })
    }
}

requests();
