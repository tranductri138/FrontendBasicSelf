import axios from 'axios';

function myFunction() {
    document.getElementById("canbechange").innerHTML = 'Hello I am Tris'

}

async function myFunction2() {
    document.getElementById("canbechange").innerHTML = "Hello cai nay se change"
    const id = await axios.get('localhost:3000/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    console.log({ id })
}

export default { myFunction, myFunction2 }