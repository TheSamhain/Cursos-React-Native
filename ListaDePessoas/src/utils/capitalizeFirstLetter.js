/** Deixa a primeira letra de uma palavra com maiúscula
 *  Exemplo: leonardo => Leonardo
 */
const capitalizeFirstLetter = (string) => {
    string[0].toUpperCase + string.slice(1)
}

export default capitalizeFirstLetter;