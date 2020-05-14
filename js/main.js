const gameRPS = function () {
  $(".rule").click(function () {
    $(".popup").css("display", "flex");
  });

  $(".closePopup").click(function () {
    $(".popup").css("display", "none");
  });

  var countScore = 0;
  console.log(countScore);

  const rock_paper_sciss = document.querySelectorAll(".rps img");
  const main_section = document.querySelector("#main");
  const choosen = document.querySelector("#choosen");
  const main_img = document.querySelector(".rps img");
  const choosen_img = document.querySelector(".choosen_img img");
  const comp_img = document.querySelector(".comp_img img");
  const back = document.querySelector(".btn");
  const win = document.querySelector(".winner h2");
  var count = document.querySelector(".score-number");
  // rps
  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  rock_paper_sciss.forEach((elem) => {
    elem.addEventListener("click", function () {
      main.style.display = "none";
      choosen.style.display = "block";

      setTimeout(function () {
        $(".winner h2").text("rock");
      }, 300);

      setTimeout(function () {
        $(".winner h2").text("paper");
      }, 500);

      setTimeout(function () {
        $(".winner h2").text("scissers");
      }, 1000);

      setTimeout(function () {
        $(".non").css("display", "block");
      }, 1700);

      back.addEventListener("click", function (e) {
        let classes = document.querySelector(".choosen_img .big");

        e.preventDefault();
        main.style.display = "block";
        choosen.style.display = "none";
        $(".non").css("display", "none");

        if (classes.classList.contains("paper")) {
          classes.classList.replace("paper", "rock");
        } else if (classes.classList.contains("scissors")) {
          classes.classList.replace("scissors", "rock");
        }
      });

      imgForAttr(this);
      const compOptions = ["icon-paper", "icon-scissors", "icon-rock"];

      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = compOptions[computerNumber];
      // setTimeout(function () {
      const compHead = (comp_img.src = `images/${computerChoice}.svg`);

      //   console.log;
      compImg(this, compHead);

      //   if()
      // }, 2000);
    });
  });

  const compImg = (player, computer) => {
    let playerAttr = player.getAttribute("src");

    setTimeout(function () {
      if (playerAttr === computer) {
        win.innerHTML = "Draw";

        console.log(countScore);
      } else if (playerAttr === "images/icon-rock.svg") {
        // console.log("hello");
        if (computer === "images/icon-paper.svg") {
          win.innerHTML = "You Lose";

          countScore--;
          count.innerHTML = countScore;

          if (countScore < 0) {
            countScore = 0;
            count.innerHTML = "0";
          }
        } else if (computer === "images/icon-scissors.svg") {
          win.innerHTML = "You Win";
          countScore++;
          count.innerHTML = countScore;
        }
      } else if (playerAttr === "images/icon-paper.svg") {
        // console.log("hello");
        if (computer === "images/icon-scissors.svg") {
          //   console.log("scissor win");
          win.innerHTML = "You Lose";
          count.innerHTML = countScore;

          countScore--;
          if (countScore < 0) {
            countScore = 0;
            count.innerHTML = "0";
          }
        } else if (computer === "images/icon-rock.svg") {
          win.innerHTML = "You Win";
          countScore++;
          count.innerHTML = countScore;
        }
      } else if (playerAttr === "images/icon-scissors.svg") {
        if (computer === "images/icon-paper.svg") {
          win.innerHTML = "You Win";
          countScore++;
          count.innerHTML = countScore;
        } else if (computer === "images/icon-rock.svg") {
          win.innerHTML = "You Lose";

          countScore--;
          count.innerHTML = countScore;
          if (countScore < 0) {
            countScore = 0;
            count.innerHTML = "0";
          }
        }
      }
    }, 1700);
  };

  const imgForAttr = (item) => {
    let classes = document.querySelector(".choosen_img .big");

    setTimeout(function () {
      let main = item.getAttribute("src");
      choosen_img.setAttribute("src", main);

      // main.style.animation = "";

      if (item.classList.contains("paperHand")) {
        if (classes.classList.contains("rock")) {
          classes.classList.replace("rock", "paper");
        }
      } else if (item.classList.contains("scissorHand")) {
        //   console.log("dada");
        if (classes.classList.contains("rock")) {
          classes.classList.replace("rock", "scissors");
        }
      } else {
        // if(classes.classList.contains("rock")){
        //   classes.classList.replace("rock", "")
        // }
      }
    }, 1700);
    classes.classList.add("rock");

    if (!classes.classList.contains("rock")) {
      // classes.classList.replace("rock", "paper");
    }
  };
};

gameRPS();
