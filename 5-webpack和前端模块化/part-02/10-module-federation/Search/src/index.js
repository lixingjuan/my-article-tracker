Promise.all([import("nav/Header"), import("home/HomeList")])
  .then(([
    { default: nav },
    { default: homeList },
  ]) => {
    document.body.innerHTML = homeList(4)
    document.body.appendChild(nav());
  })