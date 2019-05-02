// Because CSS doesn't have cousin selectors... 

function fetchIconNames() {
    const icons = document.querySelectorAll('#social-wrap a');
    let iconNames = [];

    icons.forEach(icon => {
        iconName = icon.id.replace('-icon', '');
        iconNames.push(iconName)
    });

    return iconNames;
}

function setTooltipView(iconNames) {
    if (!iconNames || iconNames.length < 1) {
        console.error('invalid icon name');
        return;
    }
    for (const iconName of iconNames) {
        const icon = document.querySelector('#' + iconName + '-icon');
        const desc = document.querySelector('#' + iconName + '-desc');
        const introText = document.querySelector('#me-desc');

        icon.addEventListener('mouseenter', () => {
            desc.style.top = '25%';
            introText.style.top = '-100px';
        });
        icon.addEventListener('mouseleave', () => {
            desc.style.top = '100px';
            introText.style.top = '0';
        });
    }
}

function init() {
    const iconNames = fetchIconNames();
    setTooltipView(iconNames);
}

init();