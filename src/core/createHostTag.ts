/*
 * @Author: saber2pr
 * @Date: 2019-06-14 19:39:45
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-14 19:49:17
 */
interface VNode<K extends keyof HTMLElementTagNameMap> {
  type: K
  props?: Partial<HTMLElementTagNameMap[K]>
  children?: Array<VNode<any>>
}

export function createHostTag<K extends keyof HTMLElementTagNameMap>({
  type,
  props = {},
  children = []
}: VNode<K>) {
  const attr = Object.entries(props).reduce(
    (receiver, [k, v]) => receiver.concat(` ${k}="${v}"`),
    ''
  )
  return `<${type}${attr}>${children.map(createHostTag)}</${type}>`
}
