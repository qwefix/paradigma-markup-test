ymaps.ready(function () {
  const hoverPoint = new ymaps.Placemark([55.706802, 37.70929], {
    hintContent: "Лаборатория двигателей",
    balloonContent: "Лаборатория двигателей",
  });
  const bigPoint = new ymaps.Placemark([55.706802, 37.70929], {
    hintContent: "Лаборатория двигателей",
    balloonContent: "Лаборатория двигателей",
  });

  const hoverMap = new ymaps.Map("hover-map", {
    center: [55.706802, 37.70929],
    zoom: 14,
  });
  const bigMap = new ymaps.Map("big-map", {
    center: [55.706802, 37.70929],
    zoom: 14,
  });

  hoverMap.geoObjects.add(hoverPoint);
  bigMap.geoObjects.add(bigPoint);
});
