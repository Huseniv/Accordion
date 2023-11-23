const cont = document.querySelectorAll(".container");
const labs = document.querySelectorAll(".label");

labs.forEach((con) => {
  con.addEventListener("click", (e) => {
    // e.stopPropagation();

    con.parentElement.classList.toggle("active");
    con.classList.toggle("act");
    labs.forEach((lav) => {
      if (con !== lav) {
        lav.parentElement.classList.remove("active");
      }
    });
  });
});

const heder = document.querySelectorAll(".acardion_heder");

heder.forEach((am) => {
  am.addEventListener("click", () => {
    am.classList.toggle("active");
    heder.forEach((lav) => {
      if (am !== lav) {
        lav.classList.remove("active");
      }
    });
  });
});
