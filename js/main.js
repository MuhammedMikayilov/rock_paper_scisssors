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

// rps
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock_paper_sciss.forEach((elem) => {
  elem.addEventListener("click", function () {
    main.style.display = "none";
    choosen.style.display = "block";

    imgForAttr(this);

    setTimeout(function () {
      const compOptions = ["icon-paper", "icon-scissors", "icon-rock"];

      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = compOptions[computerNumber];
      comp_img.src = `./images/${computerChoice}.svg`;

      compImg(this.getAttribute, computerChoice);

      //   if()
    }, 2000);
  });
});

const compImg = (player, computer) => {
  if (player === computer) {
    console.log("hello");
  }
  if (player === "rock") {
    // console.log("hello");
    if (computer === "icon-paper") {
      console.log("Aue");
    }
  }
  if (player === "icon-paper") {
    // console.log("hello");
    if (computer === "icon-scissors") {
      console.log("yeap");
    }
  } else {
    console.log("OOO");
  }
};

const imgForAttr = (item) => {
  let classes = document.querySelector(".choosen_img .rock");

  setTimeout(function () {
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
  }, 2000);

  //   console.log(choosen_img);
};
