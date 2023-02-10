const email = "codecamp@gmail.com";
email.includes("@");
email.split("@");
email.split("@")[0];
email.split("@")[1]
let userMail = email.split("@")[0];
let company = email.split("@")[1];
let maskingMail = [];
maskingMail.push(userMail[0]);
maskingMail.push(userMail[1]);
maskingMail.push(userMail[2]);
maskingMail.push(userMail[3]);
maskingMail
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("-")
maskingMail.join("")
maskingMail.join("")+ "@" + company

let result = maskingMail.join("")+ "@" + company
console.log(result);