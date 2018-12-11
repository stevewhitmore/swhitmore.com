<?php

// $data = file_get_contents ('../_in-memory-db/projects.json');
// $json = json_decode($data, true);

// // var_dump($json);

// echo 

// $jsonIterator = new RecursiveIteratorIterator(
//     new RecursiveArrayIterator($json),
//     RecursiveIteratorIterator::SELF_FIRST);

// $project = array();

// foreach ($jsonIterator as $key => $val) {
//     if ($key['project']) {
//         echo "poo\n";
//     } else {
//         echo "foo\n";
//     }
//     echo "\n";
// }

// foreach ($projects as $p) {
//     echo "$p\n";

class Project {
    public $id;
    public $name;
    public $tools;
    public $thumb;
    public $slides;
    public $text;
    public $features;
    public $url;

    public function __construct($id) {
        $this->id = strtolower($id);
        $this->thumb = "images/projects/" . strtolower($id) . "-thumb.jpg";
        $this->tools = "WordPress";
    }
}

$projects = array();

$archium = new Project("archium");
$archium->name = ucwords($archium->id);
$archium->tagline = "Personal Wiki Application";
$archium->tools = "Angular + Express.js";
$archium->slides = array("./images/projects/slides/archium0.jpg", "./images/projects/slides/archium2.jpg", 
                        "./images/projects/slides/archium3.jpg", "./images/projects/slides/archium4.jpg");
$archium->text = "There's not much to see here, and that's kinda the idea. Archium is a personal wiki application that stays out of your way and lets you get the job done. Ultra light-weight with an intuitive interface, Archium supports standard markup syntax with accessibility in mind.";
$archium->url = "https://github.com/stevewhitmore/archium";

$teton = new Project("teton");
$teton->name = "Teton West Colorado";
$teton->tagline = "Lumber Sales Specialists";
$teton->slides = array("./images/projects/slides/teton4.jpg", "./images/projects/slides/teton1.jpg", 
                        "./images/projects/slides/teton2.jpg", "./images/projects/slides/teton3.jpg");
$teton->text = "Teton West Colorado's expertise in sawmill, lumber manufacturing, and factory finishing brings a new look to wood siding, paneling and trim products. This small but well established company has over 100 years of combined lumber sales experience.";
$teton->url = "https://tetonwest.com";

$mc = new Project("mc");
$mc->name = "Motion Constrained";
$mc->tagline = "Linear Guideway Distributor";
$mc->slides = array("./images/projects/slides/mc1.jpg", "./images/projects/slides/mc2.jpg", 
                    "./images/projects/slides/mc3.jpg", "./images/projects/slides/mc4.jpg");
$mc->text = "As one of the few companies in the United States that offers authentic Hiwin linear motion products, Motion Constrained specializes in the sale and distribution of a variety of machine parts for automation.";
$mc->url = "https://motionconstrained.com";

$escape = new Project("escape");
$escape->name = "ConTRAPtions Escape Rooms";
$escape->tagline = "Team Building and Puzzle Enthusiasts";
$escape->slides = array("./images/projects/slides/escape1.jpg", "./images/projects/slides/escape2.jpg", 
                    "./images/projects/slides/escape3.jpg", "./images/projects/slides/escape4.jpg");
$escape->text = "These guys combine the creative powers of an artist and a machanical engineer to bring to life a very exciting and unique escape room experience. It has consistently been rated one of the top escape rooms in northern Colorado and has been featured on several major news outlets.";
$escape->url = "https://escape.place";

$apfed = new Project("apfed");
$apfed->name = "APFED";
$apfed->tagline = "Medical Research and Advocacy";
$apfed->slides = array("./images/projects/slides/apfed1.jpg", "./images/projects/slides/apfed2.jpg", 
                    "./images/projects/slides/apfed3.jpg", "./images/projects/slides/apfed4.jpg");
$apfed->text = "American Partnership of Eosinophilic Disorders (APFED) is an organization dedicated to spreading information about eosinophil-associated diseases. They do everything they can to help those suffering from these conditions and their families, including fund raising, volunteer work, education, research, and advocacy.";
$apfed->url = "https://apfed.org";

$eye = new Project("eye");
$eye->name = "Eye Consultants of Atlanta";
$eye->tagline = "Leading Eye Care Provider";
$eye->slides = array("./images/projects/slides/eye1.jpg", "./images/projects/slides/eye2.jpg", 
                    "./images/projects/slides/eye3.jpg", "./images/projects/slides/eye4.jpg");
$eye->text = "Eye Consultants of Atlanta are the leading care providors for LASIK, cataract surgery, glaucoma treatment, and other general eye care in the Atlanta metro area.";
$eye->url = "https://www.eyeconsultants.net/";

array_push($projects, $archium, $teton, $mc, $escape, $apfed, $eye);

?>