# @saber2pr/gen-icon

> generate React Jsx/Icon Elements from `iconfont.css` !

```bash
# from npm
npm install @saber2pr/gen-icon

# from github
git clone https://github.com/Saber2pr/gen-icon.git
```

# Example

```css
/* part of all */
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 0.5rem;
  font-size: 1.3rem;
}

.icon-github:before {
  content: '\e648';
}

.icon-boke:before {
  content: '\e626';
}

.icon-biancheng:before {
  content: '\e83b';
}

.icon-pingjia:before {
  content: '\e695';
}

.icon-cheng:before {
  content: '\e6da';
}
```

execute:

```bash
genIcon iconfont.css
```

after transform, emit file "index.tsx".

```tsx
export namespace Icon {
  export const Github = () => <i className="iconfont icon-github" />
  export const Boke = () => <i className="iconfont icon-boke" />
  export const Biancheng = () => <i className="iconfont icon-biancheng" />
  export const Pingjia = () => <i className="iconfont icon-pingjia" />
  export const Cheng = () => <i className="iconfont icon-cheng" />
}
```

---

## start

```bash
npm install
```

```bash
npm start

npm test

```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
