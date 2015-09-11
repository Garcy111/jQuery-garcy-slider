/*container - jquery елемент слайдера
  path - путь к папке с картинками
  speed - скорость смены слайда
  autoChange - автопрокрутка*/
function Slider(container, path, speed, autoChange) {
  this.container = container;
  this.speed = speed || 2000;
  this.autoChange = autoChange;
  this.path = path;
  this.imgs = [];
  this.index = 0;
  this.interval = null;
  this.getImgs(path);
}

Slider.prototype.getImgs = function(path){
  var that = this;
  $.ajax({
    type: "GET",
    url: "/handler.php",
    dataType: "json",
    data: {path: path},
    success: function(data){
      that.imgs = data;
      that.switchTo(0);
    }
  });
};

Slider.prototype.switchTo = function(index){
  this.container.find('img').fadeOut(this.speed / 5, function(){
    $(this).remove();
  });
  this.container.prepend('<img src="' + this.path + this.imgs[index] + '" alt="">');
};

Slider.prototype.normalizeIndex = function(index){
  if(index < 0){
    return this.imgs.length - 1;
  }else if(index >= this.imgs.length){
    return 0;
  }
  return index;
};

Slider.prototype.next = function(){
  this.index = this.normalizeIndex(this.index + 1);
  this.switchTo(this.index);
};

Slider.prototype.prev = function(){
  this.index = this.normalizeIndex(this.index - 1);
  this.switchTo(this.index);
};

Slider.prototype.start = function(){
  var that = this;
  if(this.autoChange === true){
    this.interval = setInterval(function(){
      that.next();
    }, that.speed);
  }
};

Slider.prototype.stop = function(){
  clearInterval(this.interval);
  this.interval = null;
};

$(function(){
  $('#slider, #prev, #next').show();
  $('#prev, #next').click(function(){
    slider.stop();
    slider.start();
  });

  $('#prev').click(function(){
    slider.prev();
  });

  $('#next').click(function(){
    slider.next();
  });
});