document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("hello World");
  });
});

// document.write("Hello World");
// alert("Helo Alert");
// console.log("Hello People");

//it will Print type like object

// document.write({name:'john'})
// alert({name:'john'})
// console.log({name:john})



// working on form
const randomNumber = 12;
document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  value= parseInt(value);
  console.log('Input value type');
  console.log(value);
  console.log('Sum of two values');
  console.log(randomNumber + value);
});


// working on arrays

