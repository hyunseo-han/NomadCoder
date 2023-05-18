//Javascript on the browser

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function hamdleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOD");
}

title.addEventListener("click", handleTitleClick);

title.addEventListener("mouseenter", handleMouseEnter);
title.onmouseenter = handleMouseEnter;
//위의 두 코드는 같은 역할
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
//h1을 resize할순 없지만 window를 resize할 수 있다
//document의 body, head, title이런것들은 중요하기 때문에 이렇게 존재하는거고
//나머지 element들은 querySelector나 getElementById등으로 찾아와야 한다

//클립보드 관련 이벤트
window.addEventListener("copy", handleWindowCopy);

//connection event
window.addEventListener("offline", hamdleWindowOffline);
window.addEventListener("online", handleWindowOnline);
