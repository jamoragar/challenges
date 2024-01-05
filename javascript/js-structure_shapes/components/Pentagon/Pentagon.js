export default function Pentagon(getRandomColor){
    const pentagon = document.createElement("div");
    pentagon.classList.add("pentagon");
    pentagon.addEventListener("click", () => {
      pentagon.style.backgroundColor = getRandomColor();
    });

    return pentagon;
}