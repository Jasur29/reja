// //Masalani izohi
// //A-TASK:
// //Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// //MASALAN countLetter("e", "engineer") 3ni return qiladi.

// //masalani yechimi:
function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("e", "engineer"));

// // call back functionlar

// // console.log("Jack Ma maslahatlari");
// // const list = [
// //   "Yaxshi talaba bo'ling",
// //   "to'g'ri boshliq tanlang va ko'proq hato qiling",
// //   "o'zingiz uchun ishlashni boshlang",
// //   "Siz kuchli bo'lgan narsalarni qiling",
// //   "Yoshlarga investitsiya qiling",
// //   "endi dam oling, foydasi yo'q endi",
// // ];

// // function maslahatBering(a, callback) {
// //   if (typeof a !== "number") callback("insert a number", false);
// //   else if (a <= 20) callback(false, list[0]);
// //   else if (a > 20 && a <= 30) callback(false, list[1]);
// //   else if (a > 30 && a <= 40) callback(false, list[2]);
// //   else if (a > 40 && a <= 50) callback(false, list[3]);
// //   else if (a > 50 && a <= 60) callback(false, list[4]);
// //   else
// //     setTimeout(function () {
// //       callback(false, list[5]);
// //     }, 5000);
// // }

// // console.log("passed here 0");
// // maslahatBering(75, function callback(err, data) {
// //   if (err) console.log("error:", err);
// //   console.log("javob:", data);
// // });
// // console.log("passed here 1");

// // maslahatBering("100", (err, data) => {
// //   if (err) console.log("error:", err);
// //   console.log("javob:", data);
// // });

// // maslahatBering("100", (err, data) => {
// //   if (err) console.log("error:", err);
// //   else console.log("javob:", data);
// // });

// // Asyncronius functionlar

// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yaxshi talaba bo'ling",
//   "to'g'ri boshliq tanlang va ko'proq hato qiling",
//   "o'zingiz uchun ishlashni boshlang",
//   "Siz kuchli bo'lgan narsalarni qiling",
//   "Yoshlarga investitsiya qiling",
//   "endi dam oling, foydasi yo'q endi",
// ];

// async function maslahatBering(a) {
//   // bu callback kerak emas
//   if (typeof a !== "number") throw new Error("insert a number");
//   // bunda kiritilgan a qiymat number bolmasa hatolikni throw qiladi
//   // yani faqat oziga kerakli parametr olinadi. callback dan farqli  o'laroq
//   else if (a <= 20)
//     return list[0]; // bunda kiritilgan qiymat (data) number bolsa bizga qiymatni return qiladi.
//   else if (a > 20 && a <= 30)
//     return list[1]; // yani togri kelayotgan data (qiymat)ni return qilyapmiz.
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
// }

// console.log("passed here 0");

// // maslahatBering(75)
// //   .then((data) => {
// //     console.log("javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR:", err);
// //   });

// // console.log("passed here 1");

// // CALL QISMIDA ASYNCRONUS VA WAIT DA FOYDALANAMIZ

// async function uzb() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(90);
//   console.log(javob);
//   javob = await maslahatBering(55);
//   console.log(javob);
//   javob = await maslahatBering(45);
//   console.log(javob);
// }

// uzb();

// console.log("passed here 1");
// console.log("*************");
