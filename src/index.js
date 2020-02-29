module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((elem, index) => (index + 1)%2 === 0 ? elem.reverse() : elem).flat() : []
}
