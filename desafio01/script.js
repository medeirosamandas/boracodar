const main = document.querySelector("main");

const first = () => {
  if (main.classList.length == 0) {
    main.classList.add("two");
  } else if (main.classList.length == 1) {
    main.classList.add("three");
  } else if (main.classList.contains("three")) {
    main.classList.remove("two");
    main.classList.remove("three");
    console.log(main.classList);
  }
};

main.addEventListener("click", first);
