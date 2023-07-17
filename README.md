# 启动项目

# 1. 开发环境

npm run dev

# 2.生成环境

npm run build

npm run serve

# 文件结构

```
shitplay-system
├─ auto-imports.d.ts
├─ components.d.ts
├─ dist
│  ├─ assets
│  │  ├─ 403.665ae140.js
│  │  ├─ 403.c11ad30b.css
│  │  ├─ charts.9def25a3.css
│  │  ├─ charts.eb13c355.js
│  │  ├─ dashboard.5a4adbe1.css
│  │  ├─ dashboard.c6775754.js
│  │  ├─ editor.47a38b88.js
│  │  ├─ el-card.49e8cb37.js
│  │  ├─ el-card.c480bc8c.css
│  │  ├─ el-checkbox.aec27a4a.css
│  │  ├─ el-col.9a9c4700.js
│  │  ├─ el-col.b7cf8595.css
│  │  ├─ el-form-item.3aad794a.css
│  │  ├─ el-form-item.69f01cdd.js
│  │  ├─ el-input.5df79608.css
│  │  ├─ el-input.892fb398.js
│  │  ├─ el-overlay.253b0a5e.js
│  │  ├─ el-overlay.6ccbc4fb.css
│  │  ├─ el-progress.1f9bfc72.css
│  │  ├─ el-progress.58f219ab.js
│  │  ├─ el-select.0078fd95.js
│  │  ├─ el-select.2b8c3aa9.css
│  │  ├─ el-table-column.6c2089f9.css
│  │  ├─ el-table-column.7e35b6b1.js
│  │  ├─ el-tag.562b10ff.js
│  │  ├─ el-tag.5dc68ec4.css
│  │  ├─ el-upload.25e46bbc.js
│  │  ├─ el-upload.f1b6cac6.css
│  │  ├─ event.776e7e11.js
│  │  ├─ export.3b295d9f.js
│  │  ├─ export.6adbb06f.css
│  │  ├─ form.e50ae0da.js
│  │  ├─ form.fc3e43e4.css
│  │  ├─ icon.14d59b47.js
│  │  ├─ icon.f8bfbfd1.css
│  │  ├─ img.cf1cb86c.jpg
│  │  ├─ import.90bb8cfd.css
│  │  ├─ import.b01600c1.js
│  │  ├─ index.1fd840b6.js
│  │  ├─ index.3a3e9074.js
│  │  ├─ index.7598038f.css
│  │  ├─ isEqual.e0aba325.js
│  │  ├─ login-bg.2be35c1c.jpg
│  │  ├─ login.9abcf528.css
│  │  ├─ login.da19356b.js
│  │  ├─ markdown.52e2bd33.js
│  │  ├─ markdown.bcbb281d.css
│  │  ├─ permission.5082a264.css
│  │  ├─ permission.b586dd16.js
│  │  ├─ scroll.1e86b792.js
│  │  ├─ table.80f68375.js
│  │  ├─ table.fefac75e.css
│  │  ├─ tabs.b4dd8045.css
│  │  ├─ tabs.cc975baf.js
│  │  ├─ upload.649f9527.js
│  │  ├─ upload.961e83c1.css
│  │  ├─ user.0dafe448.js
│  │  ├─ user.332d8465.css
│  │  ├─ vue-schart.59893102.js
│  │  ├─ xlsx.db07aefa.js
│  │  └─ _commonjsHelpers.712cc82f.js
│  ├─ index.html
│  ├─ table.json
│  └─ template.xlsx
├─ index.html
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ public
│  ├─ table.json
│  └─ template.xlsx
├─ README.md
├─ src
│  ├─ api
│  │  └─ index.ts
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ color-dark.css
│  │  │  ├─ icon.css
│  │  │  └─ main.css
│  │  └─ img
│  │     ├─ img.jpg
│  │     └─ login-bg.jpg
│  ├─ components
│  │  ├─ header.vue
│  │  ├─ sidebar.vue
│  │  └─ tags.vue
│  ├─ main.ts
│  ├─ router
│  │  └─ index.ts
│  ├─ store
│  │  ├─ permiss.ts
│  │  ├─ sidebar.ts
│  │  └─ tags.ts
│  ├─ utils
│  │  └─ request.ts
│  ├─ views
│  │  ├─ 403.vue
│  │  ├─ 404.vue
│  │  ├─ charts.vue
│  │  ├─ dashboard.vue
│  │  ├─ editor.vue
│  │  ├─ export.vue
│  │  ├─ form.vue
│  │  ├─ home.vue
│  │  ├─ icon.vue
│  │  ├─ import.vue
│  │  ├─ login.vue
│  │  ├─ markdown.vue
│  │  ├─ permission.vue
│  │  ├─ table.vue
│  │  ├─ tabs.vue
│  │  ├─ upload.vue
│  │  └─ user.vue
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

# 技术说明

```
├── @element-plus/icons-vue@2.0.9
├── @vitejs/plugin-vue@3.0.3
├── @vue/compiler-sfc@3.2.37
├── axios@0.27.2
├── element-plus@2.2.14
├── md-editor-v3@2.2.1
├── path@0.12.7
├── pinia@2.0.20
├── process@0.11.10
├── typescript@4.7.4
├── unplugin-auto-import@0.11.2
├── unplugin-vue-components@0.22.4
├── vite-plugin-vue-setup-extend@0.4.0
├── vite@3.0.9
├── vue-cropperjs@5.0.0
├── vue-router@4.1.3
├── vue-schart@2.0.0
├── vue-tsc@0.38.9
├── vue@3.2.37
├── wangeditor@4.7.15
└── xlsx@0.18.5
```

# 20230717

1、引入 ts-md5，登录密码保护
