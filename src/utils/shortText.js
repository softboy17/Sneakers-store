export function shortText(text) {
    if (text.length > 80) {
        return text.substring(0, 80) + '...';
    } else {
        return text;
    }
}
