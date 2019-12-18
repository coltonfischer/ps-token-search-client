export function rando(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function getExampleSearch() {
    const queries = ['NUI_FRAMEWORK', 'Class Search', 'Jobs'];
    return `${rando(queries)}`
}