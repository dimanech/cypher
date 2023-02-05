export default function generateBackgroundColor(indices) {
    if (!indices) {
        return;
    }

    const colors = new Array(9).fill('')
        .map((value, index) => indices[index] % 256);

    const colorsRgba = {
        color1: `rgba(${colors.slice(0, 3).join(',')}, 0.5)`,
        color2: `rgba(${colors.slice(3, 6).join(',')}, 0.5)`,
        color3: `rgba(${colors.slice(6, 9).join(',')}, 0.5)`,
    };

    document.documentElement.style.setProperty('--color1', colorsRgba.color1);
    document.documentElement.style.setProperty('--color2', colorsRgba.color2);
    document.documentElement.style.setProperty('--color3', colorsRgba.color3);
}
