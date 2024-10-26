function Getting(selection) {
  let element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`please check your  system this  is getting ${selection}`);
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  this.modal = Getting(".modal");
  this.closeBtn = Getting(".closeBtn");
  this.mainImg = Getting(".main-img");
  this.mainName = Getting("h2");
  this.prev = Getting(".prev");
  this.next = Getting(".next");
  this.selectedImg = Getting(".selectedImg");
  this.multiImg = Getting(".multiImg");

  // this.container.addEventListener('click',function(ev){
  // if (ev.target.classList.contains('img')) {
  //   this.openModal(ev.target,this.list)

  // }
  // }.bind(this));
  //###### i'm using arrow function because of lexical environment  #######
  this.container.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("img")) {
      this.openModal(ev.target, this.list);
    }
  });
  this.close = this.CloseModal.bind(this);
 this.PrevBtn=this.Prev.bind(this);
 this.NextBtn= this.Next.bind(this);
//  this.SelectedImg=this.SelectedImg.bind(this);
}

Gallery.prototype.openModal = function (selectedImage, list) {
  this.modal.classList.add("open");
  this.closeBtn.addEventListener("click", this.close);
  this.prev.addEventListener('click',this.PrevBtn);
  this.next.addEventListener('click',this.NextBtn)
  this.setMainImg(selectedImage)
  // this.mainImg.addEventListener('click',this.SelectedImg)
  this.selectedImg.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "multiImg selected" : "multiImg"}"/>`;
    })
    .join("");
};

Gallery.prototype.CloseModal = function () {
  this.modal.classList.remove("open");
};
Gallery.prototype.setMainImg = function (selected) {
  this.mainImg.src = selected.src;
  this.mainName.innerText = selected.title;
};
Gallery.prototype.Prev = function () {
  let select = this.selectedImg.querySelector('.selected');
  let prv = select.previousElementSibling || this.selectedImg.lastElementChild; 
  select.classList.remove("selected");
  prv.classList.add("selected");
  this.setMainImg(prv)
};

Gallery.prototype.Next = function () {
  let select = this.selectedImg.querySelector('.selected');
  let nxt = select.nextElementSibling || this.selectedImg.firstElementChild; 
  select.classList.remove("selected");
  nxt.classList.add("selected");
  this.setMainImg(nxt)
  
};
Gallery.prototype.SelectedImg=function (e) {
//  console.log(e.target);
 
}

let Nature = new Gallery(Getting(".nature"));
let City = new Gallery(Getting(".city"));
