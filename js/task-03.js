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
  //console.log(insItem[ind]);
  //galleryItemIns[ind].appendChild("img");
  galleryItemIns[ind].textContent = `<img scr=\"${elem.url}\" alt=>`;
  // insItem[ind].className = 'item';
});
console.log(galleryList);

