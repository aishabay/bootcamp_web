const toFriends = () => {
  document.querySelector(".middle").style = "display: none"
  document.querySelector(".middle-friends").style = "display: grid"
}
const toNews = () => {
  document.querySelector(".middle-friends").style = "display: none"
  document.querySelector(".middle").style = "display: grid"
}