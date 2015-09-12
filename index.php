<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Garcy Slider</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/garcy.css" rel="stylesheet">
    <script src="http://yastatic.net/jquery/2.1.4/jquery.min.js"></script>
    <script src="/js/jquery-garcy-slider.js"></script>
  <body>
    <div class="container">
      <div id="slider">
        <div id="prev"></div>
        <div id="next"></div>
      </div>
        <script>
            var slider = new Slider($('#slider'), '/images/', 3000, true);
            slider.start();
        </script>
    </div>
  </body>
</html>