// Reviews Data

const reviews = [
  {
    id: 1,
    name: "Hector Morris",
    job: "web developer",
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Elit ipsum consequat justo vero clita sed sit no eirmod wisi. Duo quod clita praesent illum et. Lorem lorem stet.",
  },
  {
    id: 2,
    name: "Elizabeth Brooks ",
    job: "UX/UI Design",
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Zzril stet amet ea in diam diam labore invidunt nostrud lorem kasd sit ea zzril ex. Ut ad eos. Et lorem et diam aliquyam elitr sit hendrerit sanctus magna.",
  },
  {
    id: 3,
    name: "Kane Davis",
    job: "full stack developer",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text: "Facilisis ut lorem sea duo commodo sit aliquam minim dolor kasd aliquyam. Justo duo justo. Facilisi dolore vel gubergren.",
  },
  {
    id: 4,
    name: "Dakota Hoffman",
    job: "DevOps Engineer",
    img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Nonumy aliquyam mazim labore ea. Est magna et dolore dignissim nonumy et dignissim vero tempor nonummy kasd labore eum nisl lorem diam feugiat accusam. Diam nisl justo stet assum consetetur et et amet justo qui.",
  },
];

// select items

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set startin items

let currentItem = 0;

// load initial item

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show prev person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// show random person

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
});
