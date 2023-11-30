function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem

  //se tema = light adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/temp-avatar-light.png")
  }
  //se tema = dark adicionar imagem dark
  else {
    img.setAttribute("src", "./assets/temp-avatar-dark.png")
  }
}
