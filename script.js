
const billInputDiv = document.getElementById('billTotalInput')
const tipInputDiv = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
const tipTotalDiv = document.getElementById('tipTotal')


// Get number of people from number of people div
let numberOfPeople = Number(numberOfPeopleDiv.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInputDiv.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tip = Number(tipInputDiv.value / 100)

  // get the total tip amount
  const tipAmount = tip * bill

  // updating total tip on DOM showing to user
  tipTotalDiv.innerText = `₹${tipAmount.toFixed(0)}`

  // calculate the total (tip amount + bill)
  const total = tipAmount + bill


  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / numberOfPeople
  console.log(perPersonTotal)
  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(0)}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople += 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople <= 1) {
    throw `hey! you can not go less than 1`
    return
  }

  // decrement the amount of people
  numberOfPeople -= 1

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople

  // calculate the bill based on the new number of people
  calculateBill()
}
// const resetbutton = document.getElementById('')
// const reset =()=>{

//   numberOfPeopleDiv.innerText = ''
//   perPersonTotalDiv.innerText = '0.00'
//   tipTotalDiv.innerText = '0.00'
// }

billInputDiv.value = localStorage.getItem("bill")
billInputDiv.addEventListener("keyup", event =>{
  localStorage.setItem("bill", event.target.value)
})
tipInputDiv.value = localStorage.getItem("tip")
tipInputDiv.addEventListener("keyup", event =>{
  localStorage.setItem("tip", event.target.value)
})