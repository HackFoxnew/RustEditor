// List View component

// @class ListView
ListView = function (element) {
  
  if (!element) {
    element = document.createElement("ul");
    element.classList.add("list-view");
  }
  
  this.element = element;
};


// @addItem() ~ añadir elemento a la lista
ListView.prototype.addItem = function (icon, text) {
  let $li = document.createElement("li");
  let $icon = document.createElement("div");
  let $text = document.createElement("div");
  
  $li.dataset.content = text;
  $li.dataset.icon = icon;
  $text.innerText = text;
  
  if (icon) {
    let $fa = document.createElement("i");
    $fa.className = "fa fa-" + icon;
    $icon.appendChild($fa);
  }
  
  $icon.className = "li--icon";
  $text.className = "li--text";
  $li.appendChild($icon);
  $li.appendChild($text);
  this.element.appendChild($li);
  
  return $li;
};


// @removeItem() ~ eliminar item a partir de id
ListView.prototype.removeItem = function (id) {
  let $item = this.getItem(id);
  this.element.removeChild($item);
}


// @removeAll() ~ limpiar lista
ListView.prototype.removeAll = function () {
  this.element.innerHTML = "";
}


// @getItem() ~ obtener item a partir de id
ListView.prototype.getItem = function (id) {
  return this.element.children[id];
}