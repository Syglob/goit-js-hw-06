// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginForm = document.querySelector(".login-form");

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

loginForm.addEventListener("submit", validation);

function validation(event) {
  event.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  if (email == "" || password == "") {
    alert("Не все поля заполнены!");
  }
  alert("Данные отправлены!");
  const user = new User(email, password);
  console.log("user : ", user);
}
