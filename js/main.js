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
      // main.style.opacity = "1";
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
        $(".hidden").css({
          // visibility: "visible",
          opacity: "1",

          transition: "all 0.9s",
        });
      }, 1700);

      back.addEventListener("click", function (e) {
        let classes = document.querySelector(".choosen_img .big");
        $(".choosen_img .rock").removeClass("win");
        $(".choosen_img .paper").removeClass("win");
        $(".choosen_img .scissors").removeClass("win");

        $(".comp_img .rock").removeClass("win");
        // $(".comp_img .paper").removeClass("win");
        // $(".comp_img .scissors").removeClass("win");

        e.preventDefault();
        main.style.display = "block";
        choosen.style.display = "none";
        $(".non").css("display", "none");
        // $(".hidden").css("visibility", "hidden");
        $(".hidden").css({
          // visibility: "hidden",
          opacity: "0",
          transition: "all 0.3s",
        });

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

    let rock = document.querySelector(".comp_img .rock");
    // let paper = $(".choosen_img .paper").addClass("win");
    // let scissors = $(".choosen_img .scissors").addClass("win");

    setTimeout(function () {
      if (playerAttr === computer) {
        win.innerHTML = "Draw";

        $(".choosen_img .rock").addClass("win");
        $(".choosen_img .paper").addClass("win");
        $(".choosen_img .scissors").addClass("win");

        $(".comp_img .rock").addClass("win");

        console.log(countScore);
      } else if (playerAttr === "images/icon-rock.svg") {
        if (computer === "images/icon-paper.svg") {
          win.innerHTML = "You Lose";
          // $(".comp_img.paper").addClass("win");
          $(".comp_img .rock").addClass("win");

          countScore--;
          count.innerHTML = countScore;

          if (countScore < 0) {
            countScore = 0;
            count.innerHTML = "0";
            win.innerHTML = "GAME OVER";
            setTimeout(() => {
              location.reload();
            }, 1800);
          }
        } else if (computer === "images/icon-scissors.svg") {
          win.innerHTML = "You Win";
          // rock;
          $(".choosen_img .rock").addClass("win");
          countScore++;
          count.innerHTML = countScore;
        }
      } else if (playerAttr === "images/icon-paper.svg") {
        // console.log("hello");
        if (computer === "images/icon-scissors.svg") {
          win.innerHTML = "You Lose";
          // scissors;
          // $(".comp_img .scissors").addClass("win");
          $(".comp_img .rock").addClass("win");
          // rock;

          count.innerHTML = countScore;

          countScore--;
          count.innerHTML = countScore;

          if (countScore < 0) {
            countScore = 0;
            count.innerHTML = "0";
            win.innerHTML = "GAME OVER";

            setTimeout(() => {
              location.reload();
            }, 1800);
          }
        } else if (computer === "images/icon-rock.svg") {
          win.innerHTML = "You Win";
          $(".choosen_img .paper").addClass("win");
          countScore++;
          count.innerHTML = countScore;
        }
      } else if (playerAttr === "images/icon-scissors.svg") {
        if (computer === "images/icon-paper.svg") {
          win.innerHTML = "You Win";
          // scissors;
          $(".choosen_img .scissors").addClass("win");
          countScore++;
          count.innerHTML = countScore;
        } else if (computer === "images/icon-rock.svg") {
          win.innerHTML = "You Lose";
          // rock;
          $(".comp_img .rock").addClass("win");
          countScore--;
          count.innerHTML = countScore;

          if (countScore < 0) {
            countScore = 0;
            count.innerHTML = "0";
            win.innerHTML = "GAME OVER";
            setTimeout(() => {
              location.reload();
            }, 1000);
          }
        }
      }
    }, 1700);
    win.innerHTML = "Rock";
  };

  const imgForAttr = (item) => {
    let classes = document.querySelector(".choosen_img .big");

    let main = item.getAttribute("src");
    choosen_img.setAttribute("src", main);

    // main.style.animation = "";
    setTimeout(function () {
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
      }
    }, 1000);
    classes.classList.add("rock");

    if (!classes.classList.contains("rock")) {
      // classes.classList.replace("rock", "paper");
    }
  };
};

gameRPS();
