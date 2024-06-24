/**
 * Formats the given time in seconds into a string representation of minutes and seconds.
 *
 * @param {number} time - The time in seconds.
 * @returns {string} The formatted time in the format "mm:ss".
 */
export default function formattedTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}
