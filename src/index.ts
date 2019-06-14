#!/usr/bin/env node

import { App } from './core'
import { Terminal } from '@saber2pr/node'
import { dirname, join } from 'path'

const [input, output = join(dirname(input), 'index.tsx')] = Terminal.getParams()

App(input, output).catch(console.log)
