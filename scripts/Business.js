export const BusinessHTML = (businessObject) => {
  return `
     
      
      <section class="business__each">
        <h3>${businessObject.companyName}</h3>
        <p>${businessObject.addressFullStreet}</p>
        <p>${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</p>
      </section>
  `
}