// ?task 1

const createElements = () => {

    container = document.createElement('div');
    box_first = document.createElement('div');
    box_second = document.createElement('div');
    box_third = document.createElement('div');
    form = document.createElement('div');
    button_one = document.createElement('button');
    button_two = document.createElement('button');
    input_one = document.createElement('input');
    input_two = document.createElement('input');
    input_three = document.createElement('input');

    return { container, box_first, box_second, box_third, form, button_one, input_one, input_two, button_two, input_three }
};

const setAttribute = ({ container, box_first, box_second, box_third, form, button_one, input_one, input_two, button_two, input_three }) => {
    container.setAttribute('class', 'container');
    box_first.setAttribute('class', 'box_first');
    box_second.setAttribute('class', 'box_second');
    box_third.setAttribute('class', 'box_third');
    form.setAttribute('class', 'form')
    button_one.setAttribute('class', 'button-1');
    button_two.setAttribute('class', 'button-2');
    input_one.setAttribute('class', 'i-1');
    input_two.setAttribute('class', 'i-2');
    input_three.setAttribute('class', 'i-3');

    form.type = 'form';
    input_one.placeholder = 'Write prod. example "egg"';
    input_two.placeholder = 'Count the product';
    input_one.type = 'input';
    input_two.type = 'number';
    input_three.type = 'input';
    button_one.type = 'submit';
    button_two.type = 'submit';



}

const init = () => {

    const { container, box_first, box_second, box_third, form, button_one, input_one, input_two, button_two, input_three } = createElements();
    setAttribute({ container, box_first, box_second, box_third, form, button_one, input_one, input_two, button_two, input_three });

    document.body.prepend(container);
    container.appendChild(box_first);
    container.appendChild(form);
    form.appendChild(button_one);
    form.appendChild(input_one);
    form.appendChild(input_two);
    container.appendChild(box_second);
    container.appendChild(box_third);
    container.appendChild(button_two);
    container.appendChild(input_three);
    document.querySelector('.button-1').textContent = 'Add product';
    document.querySelector('.button-2').textContent = 'Mark the purchased product';

};

init();

const shoppingList = [
    { name: 'egg', count: 10, status: true },
    { name: 'milk', count: 1, status: true },
    { name: 'corn', count: 1, status: false },
    { name: 'bread', count: 2, status: true },
    { name: 'cheese', count: 1, status: false },
    { name: 'chocolate', count: 3, status: false },
    { name: 'cookies', count: 5, status: true },
]

const listShopping = () => {
    let i = 0;
    let buying = [];
    let notBuying = [];
    while (i < shoppingList.length) {
        if (shoppingList[i].status === true) {
            buying.push(' ' + shoppingList[i].name);
        } else { notBuying.push(' ' + shoppingList[i].name) }
        i++;
    }

    document.querySelector('.box_first').innerHTML += 'Куплені: ' + buying.toString() + `</br>`;
    document.querySelector('.box_first').innerHTML += 'Не куплені: ' + notBuying.toString();

    let lastList;
    lastList = 'Куплені: ' + buying + `</br>` + 'Не куплені: ' + notBuying;
    return lastList
}

listShopping();


const addNewProduct = (addProduct, countProduct) => {
    addProduct = document.querySelector('.i-1').value;
    countProduct = +document.querySelector('.i-2').value;
    let checkValue = 0;
    const newProduct = {
        name: addProduct,
        count: countProduct,
        status: false,
    }

    for (let i = 0; i < shoppingList.length; i++) {
        if (newProduct.name === shoppingList[i].name) {
            checkValue = true;
            if (checkValue === true) {
                shoppingList[i].count += countProduct;
                break;
            }
        }
        else {
            checkValue = false;
        }
    }
    if (checkValue === false) {
        shoppingList.push(newProduct)
    }

    let result = '';
    for (let i = 0; i < shoppingList.length; i++) {
        result += shoppingList[i].name + ' ' + shoppingList[i].count + '</br >';
    }
    document.querySelector('.box_second').innerHTML = 'Оновлений список покупок: ' + `</br >` + result;
    document.querySelector('.box_first').innerHTML = listShopping();

}
document.querySelector('.button-1').onclick = addNewProduct;


const switchStatus = (nameProduct) => {
    let i = 0;
    nameProduct = document.querySelector('.i-3').value;

    while (i < shoppingList.length) {

        if (nameProduct === shoppingList[i].name) {
            shoppingList[i].status = true;
            document.querySelector('.box_third').innerHTML = 'Цей продукт - ' + nameProduct + ' був куплений';
            break;

        } else {
            document.querySelector('.box_third').innerHTML = 'Такого продукта - ' + nameProduct + ' не має в списку';

        }

        i++
    }

    document.querySelector('.box_first').innerHTML = listShopping();


}
document.querySelector('.button-2').onclick = switchStatus;
// ?task 1
// todo task 2
const productList = [
    { id: 1, name: 'banana', count: 5, priceSingle: 12.2 },
    { id: 2, name: 'milk', count: 1, priceSingle: 36.4 },
    { id: 3, name: 'egg', count: 10, priceSingle: 5.5 },
    { id: 4, name: 'bread', count: 1, priceSingle: 13.5 },
    { id: 5, name: 'chocolate', count: 2, priceSingle: 44 },
    { id: 6, name: 'cookies', count: 15, priceSingle: 14.2 },
];

const checkList = () => {
    let output = '';
    for (let i = 0; i < productList.length; i++) {
        output += `Name: ${productList[i].name}, Count:  ${productList[i].count},  Price: ${(productList[i].priceSingle * productList[i].count)}  </br>`;
    }
    document.querySelector('.task_2_1').innerHTML = output;

}

checkList()

const priceCheck = () => {
    let result = 0;
    for (let i = 0; i < productList.length; i++) {
        result += productList[i].priceSingle * productList[i].count;

    }
    document.querySelector('.task_2_2').innerHTML = `Full price: ${result}`;

}

priceCheck()

const morePrice = () => {
    let result = 0;
    let price = 0;
    for (let i = 0; i < productList.length; i++) {
        price = productList[i].priceSingle * productList[i].count;
        if (result < price) {
            result = price;
        }
    }
    document.querySelector('.task_2_3').innerHTML = `Most higher price: ${result}`;


}

morePrice()

const avaragePrice = () => {
    let result = '';
    for (let i = 0; i < productList.length; i++) {
        result +=productList[i].name +` `+ productList[i].count / 2 + `</br>`;

    }
    document.querySelector('.task_2_4').innerHTML = `Avarage price per product: </br>${result}`;


}
avaragePrice();
// todo task 2
//*task 3
let styles = [
  { name: "color", value: "red" },
  { name: "font-size", value: "20px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
];

function writeStyledText(styles, text) {
  let styleString = "";
  styles.forEach(style => {
    styleString += `${style.name}: ${style.value}; `;
  });

  document.write(`<p style="${styleString}">${text}</p>`);
}
//*task 3
//!TASK 4
let classrooms = [
{ name: "101", seats: 15, faculty: "Фізичний" },
{ name: "102", seats: 20, faculty: "Математичний" },
{ name: "201", seats: 12, faculty: "Хімічний" },
{ name: "202", seats: 18, faculty: "Фізичний" },
{ name: "301", seats: 10, faculty: "Математичний" },
{ name: "302", seats: 16, faculty: "Хімічний" },
];

// Масив груп
let groups = [
{ name: "Група 1", students: 12, faculty: "Хімічний" },
{ name: "Група 2", students: 16, faculty: "Фізичний" },
];

// Функція для виведення на екран усіх аудиторій
function printAllClassrooms() {
let allClassrooms = document.getElementById("allClassrooms");
let classroomsHtml = "";
classrooms.forEach(classroom => {
classroomsHtml += `Аудиторія ${classroom.name}, місць: ${classroom.seats}, факультет: ${classroom.faculty}<br>`;
});
allClassrooms.innerHTML = classroomsHtml;
}
printAllClassrooms()
// Функція для виведення на екран аудиторій для зазначеного факультету
function printClassroomsByFaculty(faculty) {
let filteredClassrooms = classrooms.filter(classroom => classroom.faculty === faculty);
let facultyClassrooms = document.getElementById("facultyClassrooms");
let classroomsHtml = "";
filteredClassrooms.forEach(classroom => {
classroomsHtml += `Аудиторія ${classroom.name}, місць: ${classroom.seats}<br>`;
});
facultyClassrooms.innerHTML = classroomsHtml;
}

// Функція для виведення на екран тільки тих аудиторій, які підходять для переданої групи
function printClassroomsForGroup(group) {
let filteredClassrooms = classrooms.filter(classroom => {
return classroom.seats >= group.students && classroom.faculty === group.faculty;
});
let groupClassrooms = document.getElementById("groupClassrooms");
let classroomsHtml = "";
filteredClassrooms.forEach(classroom => {
classroomsHtml += `Аудиторія ${classroom.name}, місць: ${classroom.seats}<br>`;
});
groupClassrooms.innerHTML = classroomsHtml;
}
// Функція сортування аудиторій за кількістю місць
function sortClassroomsBySeats() {
classrooms.sort((a, b) => a.seats - b.seats);
let sortedClassrooms = document.getElementById("sortedClassrooms");
let classroomsHtml = "";
classrooms.forEach(classroom => {
classroomsHtml += `Аудиторія ${classroom.name}, місць: ${classroom.seats}, факультет: ${classroom.faculty}<br>`;
});
sortedClassrooms.innerHTML = classroomsHtml;
}

// Функція сортування аудиторій за назвою (за алфавітом)
function sortClassroomsByName() {
classrooms.sort((a, b) => a.name.localeCompare(b.name));
let sortedClassrooms = document.getElementById("sortedClassrooms");
let classroomsHtml = "";
classrooms.forEach(classroom => {
classroomsHtml += `Аудиторія ${classroom.name}, місць: ${classroom.seats}, факультет: ${classroom.faculty}<br>`;
});
sortedClassrooms.innerHTML = classroomsHtml;
}