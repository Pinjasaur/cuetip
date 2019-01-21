const $position = document.querySelector("#position")
const $tooltip  = document.querySelector("#tooltip")

$position.addEventListener("change", (e) => {
  $tooltip.className = `title is-3 ${e.target.value}`
});
