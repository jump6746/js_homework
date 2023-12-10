# 네이버 로그인 페이지 구현

## 로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다

---

### 1. email, pw 정규표현식을 사용한 validation

```javascript
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
```
- class의 이름에 email 이나 password 의 포함 여부를 통해 validation 을 구분해줍니다.


### 2. 상태 변수 관리
```javascript
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
```
- 변수의 갯수를 최소로 사용해서 만들도록 노력했습니다.

### 3. 로그인 버튼을 클릭시 조건처리
```javascript
// Button Tag Event 
nodeLoginButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkEmail(user, visitor) && checkPassword(user, visitor)) {
    window.location.href = NEXT_PAGE;
  } else {
    alert(ERROR_MESSAGE);
  }
});
```
- 버튼에게 click 이벤트를 부여해주고 user에 저장된 값과 visitor에 저장된 값을 비교해서 실행하게 만들었습니다.





