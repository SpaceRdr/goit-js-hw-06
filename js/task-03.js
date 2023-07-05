const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItemIns = [3];

const galleryList = document.querySelector(".gallery");
console.log(galleryList);

images.forEach(function(elem, ind) {  
  galleryItemIns[ind] = document.createElement("li");
  // galleryList.append(galleryItemIns[ind]);
  // galleryItemIns[ind].appendChild("img");
  //console.log(insItem[ind]);
  
  galleryItemIns[ind].textContent = `<img src="${elem.url}" 
  alt="${elem.alt}">`;
  // console.log( galleryItemIns[ind]);
  // insItem[ind].className = 'item';
});

galleryList.append(...galleryItemIns);
console.log(galleryList);
