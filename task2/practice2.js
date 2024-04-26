document.querySelector('#rgbinput').addEventListener('change', (event) => {
  document.querySelector('#text').style.color = `rgb${event.target.value}`;  
});

document.querySelector('#borderinput').addEventListener('change', (event) => {
  document.querySelector('#text').style.border = `${event.target.value}px solid black`;
});