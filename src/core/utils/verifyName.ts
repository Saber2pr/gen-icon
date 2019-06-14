/*
 * @Author: saber2pr
 * @Date: 2019-06-11 19:23:39
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-14 20:03:26
 */
// twoside -> Twoside
// two-side -> TwoSide
export const verifyName = (name: string) => {
  if (name.includes('-')) {
    const chars = name.split('-')
    return chars.map(toUpperCase).join('')
  }

  return toUpperCase(name)
}

const toUpperCase = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1)

export const verifyClassName = (className: string) =>
  className.split(':')[0].slice(1)

export const verifyIconClassName = (iconClassName: string) =>
  iconClassName.replace('icon-', '')
