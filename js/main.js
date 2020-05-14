$(".rule").click(function () {
  $(".popup").css("display", "flex");
});

$(".closePopup").click(function () {
  $(".popup").css("display", "none");
});

const rock_paper_sciss = document.querySelectorAll(".rps img");
const main_section = document.querySelector("#main");
const choosen = document.querySelector("#choosen");
const main_img = document.querySelector(".rps img");
const choosen_img = document.querySelector(".choosen_img img");
const comp_img = document.querySelector(".comp_img img");
const back = document.querySelector(".btn");
// rps
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock_paper_sciss.forEach((elem) => {
  elem.addEventListener("click", function () {
    main.style.display = "none";
    choosen.style.display = "block";

    back.addEventListener("click", function (e) {
      e.preventDefault();
      main.style.display = "block";
      choosen.style.display = "none";

      // window.reload();
      location.reload();
    });

    imgForAttr(this);

    // setTimeout(function () {
    const compOptions = ["icon-paper", "icon-scissors", "icon-rock"];

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = compOptions[computerNumber];
    const compHead = (comp_img.src = `images/${computerChoice}.svg`);

    console.log;
    compImg(this, compHead);

    //   if()
    // }, 2000);
  });
});

const compImg = (player, computer) => {
  let playerAttr = player.getAttribute("src");
  const win = document.querySelector(".winner h2");

  console.log(playerAttr);
  console.log(computer);
  if (playerAttr === computer) {
    win.innerHTML = "Draw";
  } else if (playerAttr === "images/icon-rock.svg") {
    console.log("hello");
    if (computer === "images/icon-paper.svg") {
      //   console.log("comp win");
      win.innerHTML = "Computer Win";
    } else if (computer === "images/icon-scissors.svg") {
      win.innerHTML = "You Win";
    }
  } else if (playerAttr === "images/icon-paper.svg") {
    // console.log("hello");
    if (computer === "images/icon-scissors.svg") {
      console.log("scissor win");
      win.innerHTML = "Computer Win";
    } else {
      console.log("rock win");
    }
  } else {
    console.log("rock win");
    win.innerHTML = "You Win";
  }
};

const imgForAttr = (item) => {
  let classes = document.querySelector(".choosen_img .rock");

  //   setTimeout(function () {
  let main = item.getAttribute("src");
  choosen_img.setAttribute("src", main);

  if (item.classList.contains("rockHand")) {
    console.log("papa");
  } else if (item.classList.contains("scissorHand")) {
    console.log("dada");
    classes.classList.replace("rock", "scissors");
  } else {
    //   console.log("aaaa");
    classes.classList.replace("rock", "paper");
  }
  //   }, 2000);

  //   console.log(choosen_img);
};
