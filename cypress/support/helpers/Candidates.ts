
export const URLs = {
  users: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC"
};

export default class CountCandidatUsers {
  static getTotalFromAPI() {
    return cy.request({
      method: 'GET',
      url: URLs.users
    }).then((response) => {
      expect(response.status).to.eq(200);   
      const total = response.body.meta.total;  
      return total;
    });
  }

//   static getTotalFromAPI() {
//     return cy.intercept('GET', URLs.users).as('getCandidates').then(() => {
//     //  cy.wait(5000)
//         cy.wait('@getCandidates').then((interception) => {
//             if (interception.response) {
//                 expect(interception.response.statusCode).to.equal(200);
//                 const total = interception.response.body.meta.total;
//                 return total;
//             } else {
//                 // Handle the case when interception.response is undefined
//                 throw new Error('Intercepted response is undefined.');
//             }
//         });
//     });
// }
  

 
}


