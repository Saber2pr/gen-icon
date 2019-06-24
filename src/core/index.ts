/*
 * @Author: saber2pr
 * @Date: 2019-06-14 19:23:51
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-24 13:01:31
 */
import { FS } from '@saber2pr/node'
import {
  verifyName,
  verifyClassName,
  verifyIconClassName,
  compose
} from './utils'
import { getIconNames } from './getIconNames'
import { createHostTag } from './createHostTag'
import { createJsx } from './createJsx'
import { createNamespace } from './createNamespace'

export async function App(input: string, output: string) {
  const buffer = await FS.readFile(input)
  const css = buffer.toString()

  const iconClassNames = getIconNames(css)
  const classNames = iconClassNames.map(verifyClassName)

  const toJsxName = compose(
    verifyIconClassName,
    verifyName
  )

  const contents = classNames.map(n =>
    createJsx(
      toJsxName(n),
      createHostTag({
        type: 'i',
        props: { className: `iconfont ${n}` }
      })
    )
  )

  const IconNamespace = createNamespace('Icon', contents)

  const ReactComp = `import React from 'react';$\n${IconNamespace}`

  await FS.writeFile(output, ReactComp)
}
