export function shortText(text) {
    let size = 80
    if (text.length > size) {
        return text.substring(0, size) + '...';
    } else {
        return text;
    }
}
