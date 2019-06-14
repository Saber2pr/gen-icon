/*
 * @Author: saber2pr
 * @Date: 2019-06-14 19:23:47
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-14 19:23:47
 */
const className = /\..*:before/g

export function* nextJsxName(css: string) {
  let current: RegExpExecArray = null
  while ((current = className.exec(css))) {
    yield current[0]
  }
}

export function getIconNames(css: string) {
  return Array.from(nextJsxName(css))
}
