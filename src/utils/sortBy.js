/**
 * Trie un tableau d'objets selon un critère donné.
 *
 * @param {Array} items - Le tableau à trier.
 * @param {String} criterion - Le critère de tri (ex : 'soldCount', 'price').
 * @param {String} order - L'ordre de tri : 'asc' pour croissant, 'desc' pour décroissant.
 * @returns {Array} - Le tableau trié.
 */
export default function sortBy(items, criterion, order = 'asc') {
  return items.sort((a, b) => {
    if (order === 'asc') {
      return a[criterion] - b[criterion];
    } else if (order === 'desc') {
      return b[criterion] - a[criterion];
    } else {
      throw new Error('Error');
    }
  });
}
