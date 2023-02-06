import emojies from './libs/emoji-reduced.mjs';

export default function generateEmoji(indices) {
    if (!indices) {
        return '';
    }
    return new Array(4).fill('')
        .map((value, index) => emojies[indices[index] % emojies.length])
        .join('  ');
}
