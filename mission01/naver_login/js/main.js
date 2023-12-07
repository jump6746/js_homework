/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 정규식 비교 후 class 제거 or 추가

function checkEmailReg(node, input) {
  if (emailReg(input) || input.length == 0) {
    node.classList.remove("is--invalid");
  } else {
    node.classList.add("is--invalid");
  }
}

function checkPasswordReg(node, input) {
  if (pwReg(input) || input.length == 0) {
    node.classList.remove("is--invalid");
  } else {
    node.classList.add("is--invalid");
  }
}

// 아이디, 비밀번호 비교

function checkEmail(user, input) {
  return user.id === input;
}

function checkPassword(user, input) {
  return user.pw === input;
}

// ---------------------------------------------------------------------------------------------------------
// javascript 실행 부분 (정리 전)

const user = {
  id: "asd@naver.com",
  pw: "asd123@!",
};

const emailInput = document.getElementsByClassName("user-email-input")[0];
const passwordInput = document.getElementsByClassName("user-password-input")[0];
const loginButton = document.getElementsByClassName("btn-login")[0];

console.log(emailInput);

let emailValue = "";
let passwordValue = "";

emailInput.addEventListener("input", function (text) {
  checkEmailReg(emailInput, text.target.value);
});

emailInput.addEventListener("change", function (text) {
  emailValue = text.target.value;
});

passwordInput.addEventListener("input", (text) =>
  checkPasswordReg(passwordInput, text.target.value)
);

passwordInput.addEventListener("change", function (text) {
  passwordValue = text.target.value;
});

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkEmail(user, emailValue) && checkPassword(user, passwordValue)) {
    window.location.href = "welcome.html";
  } else {
    console.log("비밀번호가 틀렸습니다.");
  }
});
