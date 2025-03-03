function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = `Time: ${hours}:${minutes}:${seconds}`;
  document.getElementById("time").innerHTML = timeString;
}
function updateDate() {
  const now = new Date();
  const days = String(now.getDate()).padStart(2, "0");
  const months = String(now.getMonth() + 1).padStart(2, "0");
  const years = String(now.getFullYear()).padStart(2, "0");
  const timeString = `Date: ${days}/${months}/${years}`;
  document.getElementById("date").innerHTML = timeString;
}
function randomAvatar() {
  const avatars = ["./img/avt.jpg", "./img/avt2.jpg"];
  const avatar = document.querySelector("img");
  const currentSrc = avatar.src.split("/").pop(); // Lấy phần cuối của URL ảnh hiện tại
  if (currentSrc === avatars[0].split("/").pop()) {
    avatar.src = avatars[1];
  } else {
    avatar.src = avatars[0];
  }
}
updateDate();
updateClock();
setInterval(updateClock, 1000);
setInterval(updateDate, 100000);
randomAvatar();

// Lấy phần tử cần thay đổi
const body = document.getElementById("body");

//Gán sự kiện click cho từng nút bằng DOM
document.getElementById("btn1").addEventListener("click", function () {
  document.body.classList.add("layout1");
  document.body.classList.remove("layout2");
  const header = document.querySelector("header");
  header.classList.remove("header2");
  const button = document.querySelectorAll("button");
  for (element of button) {
    element.classList.remove("btn2");
  }
  document.getElementById("btn1").classList.add("btn1-active");
  document.getElementById("btn2").classList.remove("btn2-active");
  const profile = document.querySelector(".profile1");
  profile.classList.remove("profile2");
  const card = document.querySelector(".card1");
  card.classList.remove("card2");
  const contact = document.querySelector(".contact1");
  contact.classList.remove("contact2");
  const education = document.querySelector(".edu1");
  education.classList.remove("edu2");
  const skill = document.querySelector(".skills1");
  skill.classList.remove("skills2");
  const projects = document.querySelector(".projects1");
  projects.classList.remove("projects2");
  const datetime = document.querySelector(".datetime1");
  datetime.classList.remove("datetime2");
  randomAvatar();
});

document.getElementById("btn2").addEventListener("click", function () {
  document.body.classList.remove("layout1");
  document.body.classList.add("layout2");
  const header = document.querySelector("header");
  header.classList.add("header2");
  const button = document.querySelectorAll("button");
  for (element of button) {
    element.classList.add("btn2");
  }
  document.getElementById("btn1").classList.remove("btn1-active");
  document.getElementById("btn2").classList.add("btn2-active");
  const profile = document.querySelector(".profile1");
  profile.classList.add("profile2");
  const card = document.querySelector(".card1");
  card.classList.add("card2");
  const contact = document.querySelector(".contact1");
  contact.classList.add("contact2");
  const education = document.querySelector(".edu1");
  education.classList.add("edu2");
  const skill = document.querySelector(".skills1");
  skill.classList.add("skills2");
  const projects = document.querySelector(".projects1");
  projects.classList.add("projects2");
  const datetime = document.querySelector(".datetime1");
  datetime.classList.add("datetime2");
  randomAvatar();
});
