/*
 * @Author: saber2pr
 * @Date: 2019-06-14 19:40:03
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-14 20:00:15
 */
export function createNamespace(name: string, contents: string[]) {
  return `export namespace ${name} {\n${contents
    .map(c => `  export ${c}`)
    .join('\n')}\n}`
}
