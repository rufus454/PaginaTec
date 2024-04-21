/**
 * @typedef {Object} SubItemPrimitive
 * @property {string} id Identificador único para el elemento
 * @property {string} title Título del elemento
 * @property {string} href Enlace del elemento
 * @property {boolean} isTargetBlank Indica si el enlace se abre en una nueva pestaña
 */

/**
 * @typedef {Object} SubItem
 * @property {string} id Identificador único para el elemento
 * @property {string} title Título del elemento
 * @property {string} href Enlace del elemento
 * @property {boolean} isTargetBlank Indica si el enlace se abre en una nueva pestaña
 * @property {SubItemPrimitive[]} children Elementos secundarios
 */

/**
 * @typedef {Object} NavLink
 * @property {string} id Identificador único para el elemento
 * @property {string} title Título del elemento
 * @property {SubItem[]} subItems Elementos secundarios
 */

export default {}