<?php 

require_once('project.php');

foreach ($projects as $project) :
?>

<div class="project-overlay">
    <div id="<?php echo $project->id; ?>" class="project-inner">        
        <div class="slider">
            <?php foreach ($project->slides as $slide) : ?>
                <img src="<?php echo $slide; ?>"/>
            <?php endforeach; ?>
        </div>
        <div class="carousel-nav">
            <button class="mdi mdi-chevron-left prev"></button>
            <button class="mdi mdi-chevron-right next"></button>
        </div>
        <div class="project-text">
            <h2><?php echo $project->name; ?></h2>
            <h3><?php echo $project->tagline; ?></h3>
            <p><?php echo $project->text; ?></p>
            <ul>
                <?php foreach ($project->features as $feature): ?>
                <li><?php echo $feature; ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
        <div class="project-nav">
            <a href="<?php echo $project->url ?>" target="_blank">Visit Project <i class="mdi mdi-open-in-new"></i></a>
            <button class="mdi mdi-close close"></button>    
        </div>
    </div>    
</div>

<?php endforeach; ?>



