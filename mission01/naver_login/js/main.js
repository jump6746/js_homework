// 함수 선언
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function checkReg(node, input) {
  if (node.className.includes("email")) {
    if (emailReg(input) || input.length == 0) {
      node.classList.remove("is--invalid");
    } else {
      node.classList.add("is--invalid");
    }
  } else if (node.className.includes("password")) {
    if (pwReg(input) || input.length == 0) {
      node.classList.remove("is--invalid");
    } else {
      node.classList.add("is--invalid");
    }
  }
}

function checkEmail(user, input) {
  return user.id === visitor.id;
}

function checkPassword(user, input) {
  return user.pw === visitor.pw;
}

function handleEmailInputReg(e) {
  checkReg(nodeEmailInput, e.target.value);
  emailRegCheck = emailReg(e.target.value);
}

function handleEmailInputValue(e) {
  visitor.id = e.target.value;
}

function handlePasswordInputReg(e) {
  checkReg(nodePasswordInput, e.target.value);
  pwRegCheck = pwReg(e.target.value);
}

function handlePasswordInputValue(e) {
  visitor.pw = e.target.value;
}

function handleLoginButton(e) {
  e.preventDefault();
  if (emailRegCheck && pwRegCheck) {
    if (checkEmail(user, visitor) && checkPassword(user, visitor)) {
      window.location.href = NEXT_PAGE;
    } else {
      alert(VALUE_ERROR_MESSAGE);
    }
  } else {
    alert(REG_ERROR_MESSAGE);
  }
}

// ------------------------------------------------------------------

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const visitor = {
  id: "",
  pw: "",
};

const VALUE_ERROR_MESSAGE = "아이디 혹은 비밀번호가 틀렸습니다.";
const REG_ERROR_MESSAGE = "아이디와 비밀번호 형식이 맞지 않습니다.";
const NEXT_PAGE = "welcome.html";

const nodeEmailInput = document.querySelector(".user-email-input");
const nodePasswordInput = document.querySelector(".user-password-input");
const nodeLoginButton = document.querySelector(".btn-login");

let emailRegCheck = false;
let pwRegCheck = false;

// Email Input Tag Event
nodeEmailInput.addEventListener("input", handleEmailInputReg);

nodeEmailInput.addEventListener("change", handleEmailInputValue);

// Password Input Tag Event
nodePasswordInput.addEventListener("input", handlePasswordInputReg);

nodePasswordInput.addEventListener("change", handlePasswordInputValue);

// Button Tag Event
nodeLoginButton.addEventListener("click", handleLoginButton);
