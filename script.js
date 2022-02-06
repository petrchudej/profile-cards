const heading = 'Please Meet Our Team';
let i = 0;

const typeing = () => {
    if(i < heading.length){
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;
        setTimeout(typeing, 150);
    }
}

typeing();