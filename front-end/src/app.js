const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const form = document.querySelector('.form')

const onClickHandler = async (e) => {
    e.preventDefault()
    const desc = input.value;
    console.log(desc);
    try {
        const resp = await fetch('http://localhost:3001/sendnotif/create', {
            method: "POST",
            body: JSON.stringify({
                description: desc
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        input.value=''
        console.log(resp);
    } catch (err) {
        console.log(err);
    }
};

form.addEventListener('submit', onClickHandler)

// here you can attach any callbacks, interact with the web component API
let nc = document.getElementsByTagName('notification-center-component')[0];
nc.onLoad = () => console.log('hello world!');