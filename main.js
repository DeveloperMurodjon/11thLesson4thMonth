//find, findIndex
//some/every
let fruits = [`olma`, `anor`, `anjir`, `gilos`];
let res = fruits.find((value) => {
  return value.length == 5;
});
console.log(res);

let arr = [3, 6, 7, 10];
let res1 = arr.some((value) => {
  return value > 0;
});
console.log(res);

//Massiv metodlar
//1. find va findIndex metodlari bo‘yicha masalalar
//Massiv ichida 5 ga karrali bo‘lgan birinchi elementni toping.
let number = [12, 5, 10, 25, 32, 89, 77];
let multipleNum = number.find((value) => {
  return value % 5 == 0;
});
console.log(multipleNum);

//Massiv ichida 20 dan kichik bo‘lgan birinchi toq sonning indeksini toping.
let numbers = [12, 5, 10, 25, 32, 89, 77];
let lessThan20 = numbers.findIndex((value) => {
  return value < 20 && value % 2 !== 0;
});
console.log(lessThan20);

//Massiv ichida 0 bilan tugaydigan birinchi elementni toping.
let numbersList = [12, 5, 10, 25, 32, 89, 77];
let endWithZero = numbersList.find((value) => {
  return value % 10 == 0;
});
console.log(endWithZero);

// 2. some metodi bo‘yicha masalalar
// Massivda 50 ga teng yoki undan katta elementlar bor-yo‘qligini aniqlang.
let numberList = [12, 5, 10, 25, 32, 89, 77];
let moreThan50OrEvenly = numberList.some((value) => {
  return value > 50 || value == 50;
});
console.log(moreThan50OrEvenly);

// Massivda manfiy sonlar bor-yo‘qligini aniqlang.
let numberTable = [12, 5, 10, 25, 32, 89, 77];
let negativeNumberChecker = numberTable.some((value) => {
  return value > 0;
});
console.log(negativeNumberChecker);

// Massivda 3 ga karrali bo‘lgan sonlar bor-yo‘qligini tekshiring.
let numbersTable = [12, 5, 10, 25, 32, 89, 77];
let multipleNumFor3 = numbersTable.some((value) => {
  return value % 3 == 0;
});
console.log(multipleNumFor3);

// 3. every metodi bo‘yicha masalalar
// Massivdagi barcha sonlar musbat ekanligini tekshiring.
let register = [12, 5, 10, 25, 32, 89, 77];
let positiveNums = register.every((value) => {
  return value > 0;
});
console.log(positiveNums);

// Massivdagi barcha sonlar 10 dan katta ekanligini tekshiring.
let reg = [12, 5, 10, 25, 32, 89, 77];
let moreThan10Nums = reg.every((value) => {
  return value > 10;
});
console.log(moreThan10Nums);

// Massivdagi barcha sonlar toq ekanligini aniqlang.
let table = [12, 5, 10, 25, 32, 89, 77];
let allOdd = table.every((value) => {
  return value % 2 == 1;
});
console.log(allOdd);

// String metodlar
// 1. charAt
// Berilgan matnning uchinchi belgisi nima ekanligini aniqlang.
let text = "HELLO WORLD";
let letter = text.charAt(3);
console.log(letter);

// Matnning oxiridan ikkinchi belgisini toping.
let text2 = "HELLO WORLD";
let letter2 = text2.charAt(text2.length - 2);
console.log(letter2);

// 2. charCodeAt
// Berilgan matnning birinchi belgisi uchun Unicode qiymatini aniqlang.
let text3 = "HELLO WORLD";
let code = text3.charCodeAt(0);
console.log(code);

// Matnning beshinchi belgisining Unicode qiymatini toping.
let text4 = "HELLO WORLD";
let code1 = text4.charCodeAt(5);
console.log(code1);

// 3. slice
// Berilgan matndan birinchi 5 ta belgini ajratib oling.
let text5 = "Hello world!";
let result = text5.slice(0, 5);
console.log(result);

// Matnning oxirgi 3 ta belgisini ajratib oling.
let result2 = text5.slice(text5.length - 3);
console.log(result2);

// 4. substring
// Matnning 2-pozitsiyadan boshlab 6-pozitsiyagacha bo‘lgan qismini ajrating.
let text6 = "Hello world!";
let res2 = text6.substring(2, 6);
console.log(res2);

// Matnning oxirgi uchta belgisini substring yordamida oling.
let text7 = "Hello world!";
let res3 = text7.substring(text7.length - 3);
console.log(res3);

// 5. substr
// Matnning 4-pozitsiyadan boshlab 5 ta belgisini oling.
let text8 = "Hello world!";
let result3 = text.substr(4, 5);
console.log(result3);

// Berilgan matnning boshidan 7 ta belgisini substr yordamida ajrating.
let text9 = "Hello world!";
let result4 = text9.substr(0, 7);
console.log(result4);

// 6. toUpperCase, toLowerCase
// Berilgan matnni faqat katta harflar bilan yozing.
let text10 = "Hello World!";
let result5 = text10.toUpperCase();
console.log(result5);

// Matnning birinchi yarmidan kichik harflar, ikkinchi yarmidan katta harflar yarating.
let text11 = "Hello world!";
let mid = Math.floor(text11.length / 2);
let result6 = "";
for (let i = 0; i < text11.length; i++) {
  if (i < mid) {
    result6 += text11.charAt(i).toLowerCase();
  } else {
    result += text.charAt(i).toUpperCase();
  }
}
console.log(result);

// 7. concat
// Berilgan ikkita matnni birlashtiring.
let text1 = "sea";
let text12 = "food";
let result7 = text1.concat(text12);
console.log(result7);

// Matnga qo‘shimcha qilib "!" belgisi qo‘shing va yangi matn yarating.
let text13 = `Hello world`;
let interjection = `!`;
let result8 = text13.concat(interjection);
console.log(result8);

// 8. trim, trimStart, trimEnd
// Matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlang.
let text14 = "       Hello World!        ";
let result9 = text14.trim();
console.log(result9);

// Matnning faqat boshidagi bo‘sh joylarni olib tashlang.
let text15 = "       Hello World!        ";
let result10 = text14.trimStart();
console.log(result10);

// 9. padStart, padEnd
// Berilgan matnni boshidan 10 belgiga to‘ldiring, “*” belgisi bilan.
let text16 = "5";
let padded = text16.padStart(10, "*");
console.log(padded);

// Matnni oxiridan 15 belgiga “#” bilan to‘ldiring.
let text17 = "5";
let paddedEnd = text17.padEnd(15, "#");
console.log(paddedEnd);

// 10. repeat
// Matnni 3 marta takrorlab yangi matn yarating.
let text18 = "Hello world!";
let result11 = text18.repeat(3);
console.log(result11);

// Belgini 5 marta takrorlab, string yaratib oling.
let symbol = `7`;
let result12 = symbol.repeat(5);
console.log(result12);

// 11. replace, replaceAll
// Matnning ichidagi birinchi "a" harfini "o" harfiga almashtiring.
let text19 = "Oltin olma, duo ol.";
let newText = text19.replace("a", "o").replaceAll("o", "a");
console.log(newText);

// Matnning barcha “ ” (bo‘sh joy) belgilarini “_” belgilariga almashtiring.
let text20 = "Please visit Microsoft!";
let newText1 = text20.replace("Microsoft", "Google").replaceAll(" ", "_");
console.log(newText1);

// 12. split
// Matnni har bir so‘zdan ajratib massivga aylantiring.
let text21 = "Hello world, welcome to JavaScript!";
let array = text21.split(" ");
console.log(array);

// Matnni har bir belgidan ajratib massiv yarating.
let text22 = "JavaScript";
let arr1 = text22.split("");
console.log(arr1);

// 13. indexOf, lastIndexOf
// Matndagi "a" harfi birinchi marta qayerda uchrayotganini aniqlang.
let txt = "All great achievements require time";
let firstA = txt.indexOf("a");
console.log(firstA);

// Matndagi "e" harfi oxirgi marta qayerda uchrayotganini toping.
let txtpart = "All great achievements require time";
let lastE = txtpart.lastIndexOf("e");
console.log(lastE);

// 14. includes
// Matn ichida "hello" so‘zi bor-yo‘qligini tekshiring.
let text23 = `Dear friend!
I hope this letter finds you in good health and spirits. Life has been a journey, filled with its ups and downs, but we must remain hopeful. Every day offers new opportunities to grow, to learn, and to be thankful for what we have. The road ahead may not always be easy, but we can face anything as long as we stay strong and positive. Remember, you’re never alone in your struggles. Keep moving forward, with courage and grace. Take care and stay safe.
Warm regards.`;
console.logl(text23.includes("hello"));

// Matn ichida "!" belgisi mavjudligini aniqlang.
console.log(text23.includes(`!`));

// 15. search
// Matn ichida birinchi "good" so‘zi qayerda joylashganini aniqlang.
let text24 = `Dear friend!
I hope this letter finds you in good health and spirits. Life has been a journey, filled with its ups and downs, but we must remain hopeful. Every day offers new opportunities to grow, to learn, and to be thankful for what we have. The road ahead may not always be easy, but we can face anything as long as we stay strong and positive. Remember, you’re never alone in your struggles. Keep moving forward, with courage and grace. Take care and stay safe.
Warm regards.`;
console.log(text24.search(`good`));

// Matnda raqam uchraydigan joyni aniqlang. (match haqida malumotni stackOverflow va W3schooldan topdim)
let text25 = `Bugun 17-dekabr 2024-yil`;
let numberString = text25.match(/\d/);
console.log(numberString);

// 16. startsWith, endsWith
// Matn "Hello" so‘zi bilan boshlanadimi yoki yo‘qmi, tekshiring.
let text26 = "Hello world, welcome to the universe.";
console.log(text26.startsWith("Hello"));

// Matn oxirida "bye" so‘zi borligini aniqlang.
let text27 = `It's been a long day, Without you my friend. And I tell you all about, When I see you again`;
console.log(text27.endsWith(`bye`));

//Massiv ichida obyektlar
//1. users massivida age qiymati 25 dan katta bo‘lgan foydalanuvchilarni toping.
//Massiv:
let users = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 28, isActive: true },
];
let result13 = users.filter(function (user) {
  return user.age > 25;
});
console.log(result13);

//2. products massivida price qiymati 500 dan kichik bo‘lgan mahsulotlarni aniqlang.
//Massiv:
let products = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
let lessThan500 = products.filter((product) => {
  return product.price < 500;
});
console.log(lessThan500);

//3. tasks massivida status qiymati "pending" bo‘lgan vazifalarni boshqa massivga ajrating.
//Massiv:
let tasks = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];
let isPending = tasks.filter((task) => {
  return task.status == `pending`;
});
console.log(isPending);

//4. users massivida isActive qiymati true bo‘lgan foydalanuvchilar sonini hisoblang.
//Massiv:
let usersActive = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
let counter = 0;
usersActive.forEach((user) => {
  if (user.isActive) {
    counter++;
  }
});
console.log(counter);

// 5. products massivida rating qiymati eng yuqori bo‘lgan mahsulotni toping.
//Massiv:
let productsRating = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
let maxRated = productsRating[0].rating;
let maxProduct = productsRating[0];
productsRating.forEach((product) => {
  if (product.rating > maxRated) {
    maxRated = product.rating;
    maxProduct = product;
  }
});
console.log(maxProduct);

// 6. users massividagi har bir foydalanuvchining faqat name va age qiymatlarini ajratib oling.
// Massiv:
let usersTable = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
let res10 = usersTable.map((user) => {
  delete user.id;
  delete user.isActive;
  return user;
});
console.log(res10);

//7. products massivida price qiymati eng kichik bo‘lgan mahsulotni aniqlang.
//Massiv:
let productsInfo = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
let minPrice = productsInfo[0].price;
let minProduct = productsInfo[0];
productsInfo.forEach((product) => {
  if (product.price < minPrice) {
    minPrice = product.price;
    minProduct = product;
  }
});
console.log(minProduct);

//8. tasks massivida title qiymati "Clean room" bo‘lgan vazifaning indeksini aniqlang.
//Massiv:
let tasksList = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "pending" },
  { id: 3, title: "Go shopping", status: "pending" },
];
let res4 = tasksList.findIndex((task) => {
  return task.title == `Clean room`;
});
console.log(res4);

//9. users massivida barcha foydalanuvchilarning age qiymatlari yig‘indisini hisoblang.
//Massiv:
let usersknjhb = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
let sum = 0;
usersknjhb.forEach((user) => {
  sum += user.age;
});
console.log(sum);

//10. products massividagi har bir mahsulotning price qiymatini 10% ga kamaytirib yangi massiv yarating.
//Massiv:
let productList = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 4.2 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
let descended10 = productList.map((product) => {
  product.price = product.price / 10;
  return product;
});
console.log(descended10);

//11. users massivida name qiymati "Ali" bo‘lgan foydalanuvchini toping.
//Massiv:
let usersList = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
let userAli = usersList.find((user) => {
  return user.name == `Ali`;
});
console.log(userAli);

//12. tasks massivida barcha status qiymatlari "completed" ekanligini tekshiring.
//Massiv:
let taskList = [
  { id: 1, title: "Do homework", status: "completed" },
  { id: 2, title: "Clean room", status: "completed" },
  { id: 3, title: "Go shopping", status: "completed" },
];
let taskComleted = taskList.every((task) => {
  return task.status == `completed`;
});
console.log(taskComleted);

//13. products massivida rating qiymati 4 dan katta bo‘lgan mahsulotlar sonini hisoblang.
//Massiv:
let productsList = [
  { id: 101, name: "Laptop", price: 1000, rating: 4.5 },
  { id: 102, name: "Phone", price: 500, rating: 3.9 },
  { id: 103, name: "Tablet", price: 300, rating: 4.8 },
];
counter = 0;
productsList.forEach((product) => {
  if (product.rating > 4) {
    counter++;
  }
});
console.log(counter);

//14. users massivida age qiymati eng katta bo‘lgan foydalanuvchini aniqlang.
//Massiv:
let userTable = [
  { id: 1, name: "Ali", age: 25, isActive: true },
  { id: 2, name: "Bobur", age: 30, isActive: false },
  { id: 3, name: "Zara", age: 22, isActive: true },
];
let max = userTable[0].age;
let maxAged = userTable[0];
userTable.forEach((user) => {
  if (user.age > max) {
    max = user.age;
    maxAged = user;
  }
});
console.log(maxAged);

//15. tasks massivida har bir title qiymatini bosh harfini katta qilib yangi massiv yarating.
//Massiv:
let taskTable = [
  { id: 1, title: "do homework", status: "completed" },
  { id: 2, title: "clean room", status: "pending" },
  { id: 3, title: "go shopping", status: "pending" },
];
let res20 = taskTable.map((task) => {
  task.title = task.title[0].toUpperCase() + task.title.slice(1);
  return task;
});
console.log(res20);
