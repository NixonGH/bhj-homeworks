document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');
    let activeTooltip = null;

    tooltips.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();

            if (activeTooltip && activeTooltip.trigger === element) {
                activeTooltip.tooltip.remove();
                activeTooltip = null;
                return;
            } else if (activeTooltip) {
                activeTooltip.tooltip.remove();
                activeTooltip = null;
            }

            const tooltipText = element.getAttribute('title');
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip tooltip_active';
            tooltip.textContent = tooltipText;

            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            tooltip.style.left = `${rect.left}px`;
            tooltip.style.top = `${rect.bottom + 5}px`;

            activeTooltip = {
                trigger: element,
                tooltip: tooltip
            };
        });
    });
});