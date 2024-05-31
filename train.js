// E-TASK:

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"
function getReverse(a) {
  return a.split("").reverse().join("");
}

console.log(getReverse("hello"));

// D-TASK:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir
//hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(a, b) {
//   if (a.length !== b.length) {
//     return false;
//   }

//   const checkA = a.split("").sort().join("");
//   const checkB = b.split("").sort().join("");
//   return checkA === checkB;
// }
// console.log(checkContent("mitgroup", "gmtiprou"));

// B-TASK:MITASK-C

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning
// 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va
//  2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir
//  20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
// const moment = require("moment");

// class Shop {
//   non;
//   lagmon;
//   cola;
//   time = moment().format("HH:MM");
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }
//   qoldiq() {
//     console.log(
//       `Hozir ${this.time} da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola bor`
//     );
//   }
//   sotuv(number) {
//     if (this.non >= number) {
//       this.non -= number;
//       this.qoldiq();
//     } else {
//       console.log("Shop da non yetarli emas");
//     }
//   }
//   qabul(numb) {
//     this.cola += numb;
//   }
// }
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// const validator = require("validator");
// let count = 0;
// function countDigits(string) {
//   for (let i = 0; i < string.length; i++) {
//     if (validator.isNumeric(string[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// countDigits("ad2a54y79wet0sfgb9");
// console.log(count);

// //Masalani izohi
// //A-TASK:
// //Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// //MASALAN countLetter("e", "engineer") 3ni return qiladi.

// //masalani yechimi:
// function countLetter(letter, word) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter("e", "engineer"));

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
