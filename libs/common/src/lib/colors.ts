export function isHexColorLight(color: string): boolean {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
  return brightness > 155;
}

/**
 * Averages an array of hex colors. Returns one hex value (with leading #)
 *
 * @param {Array} colors - An array of hex strings, e.g. ["#001122", "#001133", ...]
 */
export function averageHexColors(colors: string[]): string {
  // transform all hex codes to integer arrays, e.g. [[R, G, B], [R,G,B], ...]
  let numbers = colors.map(function(hex) {
    // split in seperate R, G and B
    let split = hex.match(/[\da-z]{2}/gi)!;

    // transform to integer values
    return split.map(function(toInt) {
      return parseInt(toInt, 16);
    });
  });

  // reduce the array by averaging all values, resulting in an average [R, G, B]
  let averages = numbers.reduce((total, amount, index, array) => {
    return total.map(function(subtotal, subindex) {
      // if we reached the last color, average it out and return the hex value
      if (index == array.length - 1) {
        let result = Math.round(
          (subtotal + amount[subindex]) / array.length
        ).toString(16);

        // add a leading 0 if it is only one character
        return (result.length == 2
          ? '' + result
          : '0' + result) as unknown as number;
      } else {
        return subtotal + amount[subindex];
      }
    });
  });

  // return them as a single hex string
  return '#' + averages.join('');
}
