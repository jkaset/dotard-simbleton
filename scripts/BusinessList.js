import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

export const BusinessList = () => {

const contentTarget = document.querySelector(".businesses")
const businessArray = useBusinesses()

let businessHTMLRepresentations = ""
for (const element of businessArray) {
  businessHTMLRepresentations += Business(element)
}

contentTarget.innerHTML += `
  <section class="listing">
    <div>${businessHTMLRepresentations}</div>
  </section>
`
}

// const BusinessList = () => {
//     const businessesArray = useBusinesses()
//     contentTarget.innerHTML = "<li></li>"

// const businessArray = []
//   businessArray.forEach(
//   (businessObject) => {
//     contentTarget.innerHTML += Business(businessObject)
//         }
//     );
// }
// }