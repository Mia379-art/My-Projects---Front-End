console.log("hldv")



//* زمانی که روی دیو کلیک شد 
//* یه کنسول دات لاگ محیا بندازه


//* ظرف ها
// var
// let
// const




// let test = 2;


// console.log(test,"test")

// test = 4;

// console.log(test,"test")


let btnBox = document.querySelector('#btn_box')

console.log(btnBox , "btnBox")

// document = HTML / body


let mahya = document.querySelector('.mahya')

btnBox.addEventListener('click' , () => {
    console.log("محیا حرف گوش نکن .")


    mahya.textContent = "محیا حرف گوش نکن .";


    // mahya.style.color = 'red'
    mahya.classList.add('error');

});







