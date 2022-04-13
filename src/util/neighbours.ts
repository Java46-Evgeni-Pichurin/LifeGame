export function getNeighbours(matrix: number[][], i: number, j: number): number[]{
    const right = !!matrix[i][j+1] ? matrix[i][j+1] : 0;
    const left = !!matrix[i][j-1] ? matrix[i][j-1] : 0;
    const bottom = !!matrix[i+1][j] ? matrix[i+1][j] : 0;
    const top = !!matrix[i-1][j] ? matrix[i-1][j] : 0;
    const rightBottom = !!matrix[i+1][j+1] ? matrix[i+1][j+1] : 0;
    const leftBottom = !!matrix[i+1][j-1] ? matrix[i+1][j-1] : 0;
    const rightTop = !!matrix[i-1][j+1] ? matrix[i-1][j+1] : 0;
    const leftTop = !!matrix[i-1][j-1] ? matrix[i-1][j-1] : 0;
    return [right, left, bottom, top, rightBottom, leftBottom, rightTop, leftTop];
}