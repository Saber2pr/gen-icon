/*
 * @Author: saber2pr
 * @Date: 2019-06-14 19:50:25
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-14 19:58:27
 */
export function createJsx(name: string, hostTag: string) {
  return `const ${name} = () => ${hostTag}`
}
