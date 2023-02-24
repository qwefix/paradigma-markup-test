const bigMapController = document.getElementById("big-map-controller");
const bigMapContainer = document.getElementById("big-map-container");
const bigMap = document.getElementById("big-map");

const toggleOpenedBigMap = (e) => {
  bigMapContainer.classList.toggle("opened");
};

bigMapContainer.addEventListener("click", toggleOpenedBigMap);
bigMapController.addEventListener("click", toggleOpenedBigMap);
bigMap.addEventListener("click", (e) => {
  e.stopPropagation();
});
