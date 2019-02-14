const generateToggle = (name, r, defaultOption, secondOption) => {
    const toggleDOM = `<div class="toggle-container" id="${name}ToggleContainer"><p class="option ${defaultOption}" id="${name}LeftToggle">${defaultOption}</p><div class="toggle" id="${name}Toggle"><div class="toggle-circle" id="${name}ToggleCircle"></div></div> <p class="option ${secondOption}" id="${name}RightToggle">${secondOption}</p></div>`
    const root = document.getElementById(r)
    root.insertAdjacentHTML( 'beforeend', toggleDOM )
    const toggleCircle = document.getElementById(`${name}ToggleCircle`)
    const rightToggle = document.getElementById(`${name}RightToggle`)
    const leftToggle = document.getElementById(`${name}LeftToggle`)
    const toggle = document.getElementById(`${name}ToggleContainer`)
    leftToggle.style.fontWeight = 'bolder'
      toggle.addEventListener(('click'), () => {
        if (toggleCircle.style.left !== '20px') {
          rightToggle.style.fontWeight = 'bolder'
          leftToggle.style.fontWeight = '100'
          toggleCircle.style.left = '20px'
          //ADD YOUR LOGIC
          //EXAMPLE
          console.log(`Your toggle named ${name} ran`)
        } else {
          rightToggle.style.fontWeight = '100'
          leftToggle.style.fontWeight = 'bolder'
          toggleCircle.style.left = '5px'
          //ADD YOUR LOGIC
          //EXAMPLE
          console.log(`Your toggle named ${name} ran`)
        }
      })
  }
//EXAMPLE 1
generateToggle('example1', 'exampleRoot1', 'Sweets', 'Veggies')//using example root 1
//EXAMPLE 2
generateToggle('example2', 'exampleRoot1', 'Pickles', 'Banana')//using example root 1 again to show it can hold multiple toggles
//EXAMPLE 3
generateToggle('example3', 'exampleRoot2', 'Taco', 'Tuesday')// using example root 2 showing you can set root to any div
