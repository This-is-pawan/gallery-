function Getting(selection) {
  let element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`please check your  system this  is getting ${selection}`);
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    //  console.log(this.list);

    this.modal = Getting(".modal");
    this.closeBtn = Getting(".closeBtn");
    this.container.addEventListener("click", (ev) => {
      // console.log(ev.target);
      if (ev.currentTarget.classList.contains("nature")) {
        this.modal.classList.add("open");
 this.CloseBtn()
      }
    });
  }
CloseBtn(){ 

  this.closeBtn.addEventListener("click", () => {
    this.modal.classList.remove("open");
  });
}


}

let Nature = new Gallery(Getting(".nature"));
let City = new Gallery(Getting(".city"));
