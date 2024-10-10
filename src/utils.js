/**
 * Converts a given code (0-based index) to a corresponding lowercase letter.
 * The code is assumed to represent an index starting from 'a' (0 -> 'a', 1 -> 'b', etc.).
 *
 * @param {number} code - The 0-based index to convert to a character.
 * @returns {string} The corresponding lowercase letter from 'a' to 'z'.
 */

export const getCharFromCode = (code) => String.fromCharCode(code + 97);
