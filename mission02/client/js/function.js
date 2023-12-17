function getNode(node) {
  if (typeof node !== "string") {
    throw new Error("getNode 함수의 인수는 문자 타입이어야 합니다.");
  }

  return document.querySelector(node);
}

function addClass(node, className) {
  if (typeof node === "string") getNode(node);
  if (typeof className !== "string") {
    throw new Error("addClass 함수의 두 번째 인수는 문자 타입이어야 합니다.");
  }

  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === "string") getNode(node);
  if (typeof className !== "string") {
    throw new Error(
      "removeClass 함수의 두 번째 인수는 문자 타입이어야 합니다."
    );
  }

  node.classList.remove(className);
}

function resetClass(nodeArray, className) {
  if (Object.prototype.toString.call(nodeArray).slice(8, -1) !== "Array") {
    throw new Error("resetClass 함수의 첫 번째 인수는 배열 타입이어야 합니다.");
  }
  nodeArray.forEach((node) => removeClass(node, className));
}

function getPropertyFromData(data, index, property) {
  if (Object.prototype.toString.call(data).slice(8, -1) !== "Array") {
    throw new Error(
      "getPropertyFromData 함수의 첫 번째 인수는 배열 타입이어야 합니다."
    );
  }
  if (typeof index !== "number") {
    throw new Error(
      "getPropertyFromData 함수의 두 번째 인수는 숫자 타입이어야 합니다."
    );
  }
  if (typeof property !== "string") {
    throw new Error(
      "getPropertyFromData 함수의 세 번째 인수는 문자 타입이어야 합니다."
    );
  }
  return data[index][property];
}

function setBackgroundColor(node, color) {
  if (typeof node === "string") getNode(node);

  node.style.backgroundImage = color;
}

function setImage(node, source, alterate) {
  if (typeof node === "string") getNode(node);
  if (typeof source !== "string")
    throw new Error("setImage의 두 번쨰 인수는 문자 타입이어야 합니다.");
  if (typeof alterate !== "string")
    throw new Error("setImage의 세 번쨰 인수는 문자 타입이어야 합니다.");
  node.src = source;
  node.alt = alterate;
}

function setNameText(node, text) {
  if (typeof node === "string") getNode(node);
  if (typeof text !== "string")
    throw new Error("setNameText의 두 번쨰 인수는 문자 타입이어야 합니다.");

  node.innerText = text;
}
