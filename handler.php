<?php
  $path = $_GET['path'];
  // handler корневой
  $dir = realpath(dirname(__FILE__)).'/'.$path.'/';
  $names = array();
  if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while ($file = readdir($dh)) {
          if($file != '.' and $file != '..') {
           $names[] = $file;
          }
        }
        closedir($dh);
    }
    echo json_encode($names);
  }
?>