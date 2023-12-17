const navigation = getNode(".nav");

function handleClick() {
  const body = getNode("body");
  const nickName = getNode(".nickName");
  const visualImage = getNode(".visual img");

  const list = Array.from(navigation.children[0].children);

  const audio = new AudioPlayer("./assets/audio/clod.m4a");

  return function handleClickEvent(e) {
    e.preventDefault();
    audio.pause();

    const li = e.target.closest("li");
    if (!li) return;

    const listIndex = li.dataset.index;

    // 컬러 요소
    const colorSource = getPropertyFromData(data, listIndex - 1, "color");
    const gradientColor = `linear-gradient(to bottom, ${colorSource[0]}, ${colorSource[1]})`;

    // 클릭한 이미지 요소
    const imageName = getPropertyFromData(data, listIndex - 1, "name");
    const imageSource = `./assets/${imageName.toLowerCase()}.jpeg`;
    const imageAlternate = getPropertyFromData(data, listIndex - 1, "alt");

    // 오디오 요소
    const audioSource = `./assets/audio/${imageName.toLowerCase()}.m4a`;

    setBackgroundColor(body, gradientColor);
    setImage(visualImage, imageSource, imageAlternate);
    setNameText(nickName, imageName);
    resetClass(list, "is-active");
    addClass(li, "is-active");

    audio.setAudio(audioSource);
    audio.play();
  };
}

navigation.addEventListener("click", handleClick());
