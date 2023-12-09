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

// ------------------------------------------------------------------

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const visitor = {
  id: "",
  pw: "",
}

const ERROR_MESSAGE = "아이디 혹은 비밀번호가 틀렸습니다.";
const NEXT_PAGE = "welcome.html";

const nodeEmailInput = document.getElementsByClassName("user-email-input")[0];
const nodePasswordInput = document.getElementsByClassName("user-password-input")[0];
const nodeLoginButton = document.getElementsByClassName("btn-login")[0];


// Email Input Tag Event
nodeEmailInput.addEventListener("input", function (text) {
  checkReg(nodeEmailInput, text.target.value);
});

nodeEmailInput.addEventListener("change", function (text) {
  visitor.id = text.target.value;
});

// Password Input Tag Event
nodePasswordInput.addEventListener("input", function (text) {
  checkReg(nodePasswordInput, text.target.value);
});

nodePasswordInput.addEventListener("change", function (text) {
  visitor.pw = text.target.value;
});

// Button Tag Event 
nodeLoginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkEmail(user, visitor) && checkPassword(user, visitor)) {
    window.location.href = NEXT_PAGE;
  } else {
    alert(ERROR_MESSAGE);
  }
});
