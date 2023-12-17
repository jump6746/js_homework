## Mission 02
### 포스터 이벤트 넣기

#### 1. 클릭 이벤트 활성화

```javascript
const navigation = getNode(".nav");

function handleClick(){
    return function handleClickEvent(){}
}

navigation.addEventListener("click", handleClick());
```
이벤트 함수를 클로저 형태로 만들어서 전역에 변수를 최소화 했습니다.

#### 2. nav 클릭시 배경 색상 변경
```javascript
function getPropertyFromData(data, index, property){}

function setBackgroundColor(node, color) {}

// 컬러 요소
const colorSource = getPropertyFromData(data, listIndex - 1, "color");

const gradientColor = `linear-gradient(to bottom, ${colorSource[0]}, ${colorSource[1]})`;

setBackgroundColor(body, gradientColor);
```
data에서 해당 속성을 가져오는 함수와 배경 색상을 바꿔주는 함수를 사용해서 배경 색상을 변경했습니다.

#### 3. 이미지 변경

```javascript
function setImage(node, source, alterate) {}

// 클릭한 이미지 요소
const imageName = getPropertyFromData(data, listIndex - 1, "name");

const imageSource = `./assets/${imageName.toLowerCase()}.jpeg`;

const imageAlternate = getPropertyFromData(data, listIndex - 1, "alt");

setImage(visualImage, imageSource, imageAlternate);
```
이미지 요소와 대체 텍스트를 매개변수로 넣어주면 값을 변경해주는 함수를 만들어 변경했습니다.

#### 4. 텍스트 변경

```javascript
function setNameText(node, text) {}

setNameText(nickName, imageName);
```
imageName으로 nickName에 setNameText 함수를 사용해서 텍스트를 변경했습니다.

#### 5. 오디오 넣기
```javascript
setAudio(source) {
    this.#audio.src = source;
}
```
오디오 클래스에 setAudio 함수를 만들어서 이벤트로 받아오는 값을 통해
오디오를 변경했습니다.
이벤트 시작에 audio.pause() 이벤트 끝에 audio.play()를 넣어서
클릭 시 기존의 오디오가 멈추고 바뀐 값으로 오디오를 실행하게 했습니다.

#### 6. 함수 분리 

```javascript
function getNode(node) {}

function addClass(node, className) {}

function removeClass(node, className) {}

function resetClass(nodeArray, className) {}

function getPropertyFromData(data, index, property){}

function setBackgroundColor(node, color) {}

function setImage(node, source, alterate) {}

function setNameText(node, text) {}
```

사용한 함수들을 function.js 파일에 
따로 분리해서 구분해줬습니다.

---

### [main.js 바로가기](https://github.com/jump6746/js_homework/blob/main/mission02/client/js/main.js)

### [function.js 바로가기](https://github.com/jump6746/js_homework/blob/main/mission02/client/js/function.js)