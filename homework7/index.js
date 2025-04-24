// 1. Что выведет функция?
// function f() {
// alert(this);
// }
// let user = {
// g: f.bind(null),
// };
// user.g();

// Ответ: null

// 2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
// alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();

// Ответ: Когда я вызываю f(), контекст this будет равен объекту { name: "Вася" }, а объект { name: "Петя" } будет игнорироваться.

// Значит при выполнении кода будет выведено "Вася".

// 3. В свойство функции записано значение. Изменится ли оно после применения bind?
// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });
// alert( bound.test );

// Ответ: bound.test будет undefined, потому что я не устанавливал свойство test для привязанной функции.

// 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: "Вася",
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(user.loginOk, user.loginFail);

// Ответ: Когда ok() или fail() вызываются внутри функции askPassword, this не указывает на объект user, а становится undefined (в строгом режиме) или указывает на глобальный объект (в нестрогом режиме). Поэтому this.name не определено, и это приводит к ошибке.

// Можно использовать bind для привязки контекста:

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: "John",
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };
// askPassword(?, ?);

// Ответ: Можно использовать привязку bind с передачей соответствующих аргументов.

// askPassword(
//     user.login.bind(user, true),  // Передаю "true" для успешного входа
//     user.login.bind(user, false)   // Передаю "false" для неудачного входа
// );

// 7. Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c

// Ответ: const sum = (a) => (b) => (c) => a + b + c;

// Пример:
// const result = sum(1)(2)(3);
// console.log(result);

// 8. Реализовать таймер-функцию используя замыкания. Функция принимает два аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// Ответ:
function countdownTimer(start, end) {
  if (start <= end) {
    console.log("Начальное значение должно быть больше конечного.");
    return;
  }

  let current = start;

  const timer = setInterval(() => {
    console.log(current);
    current--;

    if (current < end) {
      clearInterval(timer);
      console.log("Таймер завершен.");
    }
  }, 1000);
}

countdownTimer(5, 0);
