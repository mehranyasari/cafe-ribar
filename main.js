const clickHandler = (number) => {
  console.log("you clicked on me");

  switch (number) {
    case 1:
      document.querySelector("#myDropdown1").classList.toggle("show");
      break;
    case 2:
      document.querySelector("#myDropdown2").classList.toggle("show");
      break;
    case 3:
      document.querySelector("#myDropdown3").classList.toggle("show");
      break;
    case 4:
      document.querySelector("#myDropdown4").classList.toggle("show");
      break;
    case 5:
      document.querySelector("#myDropdown5").classList.toggle("show");
      break;
    case 6:
      document.querySelector("#myDropdown6").classList.toggle("show");
      break;
  }
};
