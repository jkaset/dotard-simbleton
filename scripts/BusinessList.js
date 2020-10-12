// import { useBusinesses } from "./BusinessProvider.js"
//THIS CODE WORKS
// import { Business } from "./Business.js"

import { nyBusinessesFilter } from "./BusinessProvider.js"
import { BusinessHTML } from "./Business.js"
// export const BusinessList = () => {

// const contentTarget = document.querySelector(".businesses")
// const businessArray = useBusinesses()

// let businessHTMLRepresentations = ""
// for (const element of businessArray) {
//   businessHTMLRepresentations += Business(element)
// }

// contentTarget.innerHTML += `
//   <section class="listing">
//     <div>${businessHTMLRepresentations}</div>
//   </section>
// `
// }


//CODE ATTEMPTED FOR NY FILTER
// const buildNyBizHTML = (array) => {
//   let nyBizHTML = ""
  
//   for (const element of array) {
//     nyBizHTML += Business(element)
//   }
//   return nyBizHTML
// }
const buildBusinessContainerHTML = (array) => {
  let businessHTMLRepresentations = ""

  for (const business of array) {
    businessHTMLRepresentations += BusinessHTML(business)
  }
  return businessHTMLRepresentations
}

export const populateNyBusinessList = () => {
  const cityContainer = document.querySelector(".businesses")
  const nyBusinesses = nyBusinessesFilter()
  const nyBusinessesHTML = buildBusinessContainerHTML(nyBusinesses)
  // // we need to know what html element to reference to put businesses in
  // const cityContainer = document.querySelector(".businessList--newYork")
  
  // const arrayOfNyBusinesses = nyBusinessesFilter()
  // let buildNyBusinessList = ""
  // for (const singleBusiness of arrayOfNyBusinesses) {
  //   // and turn each donut object into an html representation of a donut AND adding the HTML to our buildDonutList string
  //   buildNyBusinessList += BusinessHTML(singleBusiness)

  
  cityContainer.innerHTML += `
        <article class="nyList">
            ${nyBusinessesHTML}
        </article>
    `
  }


/*
    This module turns the donut data into HTML (from Donut.js) puts all of the donuts in the selected element on the DOM
*/
// import { useDonuts } from "./DonutDataProvider.js"
// import { DonutHTML } from "./Donut.js"

// // a function that gets exported so main.js can execute it
// export const populateDonutList = () => {
//     // we need to know what html element to reference to put donuts in
//     const donutContainer = document.querySelector(".donut__list")
//     // store what useDonuts returns into a variable (the array of copied donuts)
//     const arrayOfDonuts = useDonuts()

//     // starting the string to add all of the HTML to
//     let buildDonutList = "" 
//     // loop through the array of donuts, 
//     for (const singleDonut of arrayOfDonuts) {
//         // and turn each donut object into an html representation of a donut AND adding the HTML to our buildDonutList string
//         buildDonutList += DonutHTML(singleDonut)
//     }

//     // we need to put the list of donuts in the donutContainer
//     donutContainer.innerHTML += `<div class="coolStyles">${buildDonutList}</div>`
//     console.log("GOOD JOB! 👍")
// }
