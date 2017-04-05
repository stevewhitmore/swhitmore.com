<?php
// template for all thumbs that appear in portfolio section
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

// create Thumb objects to populate portfolio section
$thumbs = array();
$mc = new Thumb("Motion Constrained");
$netnotes = new Thumb('Netnotes');
$subrbn = new Thumb('Suburban B\'s');
$java = new Thumb('Java');
$hands = new Thumb('hands');
$apfed = new Thumb('APFED');
$pag = new Thumb('PAG');
$itsec = new Thumb('itsec');
$eye = new Thumb('eye');
$rmc = new Thumb('rmc');
$bw = new Thumb("Bimmerworld");

// thumb object modifications
$subrbn->imgUrl = './images/' . substr($subrbn->id, 0, -4) . '.jpg';
// $mc->id = 'mc';
// $mc->imgUrl = './images/' . $mc->id . '.jpg';
$subrbn->id = 'suburban';
$java->name = 'Equation Eval';
$hands->name = 'Human Hands';
$itsec->name = "Executive Alliance";
$eye->name = "Eye Consultants of Atlanta";
$rmc->name = "BMWCCA: RMC";

// add all Project objects to array to be used in index.php
array_push($thumbs, $netnotes, $subrbn, $java, $hands, $apfed,
    $pag, $itsec, $eye, $rmc, $bw);


?>
