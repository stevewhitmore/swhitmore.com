<?php

class Thumb {
    public $name;
    public $id;
    public $imgUrl = './images/';

    public function __construct($name) {
      $this->id = strtolower($name);
      $this->name = $name;
      $this->imgUrl .= $this->id . '.jpg';
    }

}

$thumbs = array();
$netnotes = new Thumb('Netnotes');
$subrbn = new Thumb('Suburban B\'s');
$java = new Thumb('Java');
$hands = new Thumb('hands');
$assembler = new Thumb('Assembler');
$apfed = new Thumb('Apfed');

// Project object modifications
$subrbn->imgUrl = './images/' . substr($subrbn->id, 0, -4) . '.jpg';
$java->name = 'Equation Eval';
$hands->name = 'Human Hands';
$apfed->name = strtoupper($apfed->name);

// add all Project objects to array to be used in index.php
array_push($thumbs, $netnotes, $subrbn, $java, $hands, $assembler, $apfed);


?>
