/*
 * @Author: saber2pr
 * @Date: 2019-06-14 19:55:20
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-14 19:55:20
 */
export const compose = <T>(...fns: ((v: T) => T)[]) => (v: T) =>
  fns.reduce((v, f) => f(v), v)
