TypeScript React "useEffect" Depend on New Created Default Object or Array Demo
========================================================

`useEffect`的依赖中，如果有object/array/function类型，需要特别注意。如果它们是以inline形式赋给的默认值，则会在每次render时触发useEffect.

解决方法是在component之外，为非基础类型的默认值定义常量，由于它们不在组件中，所以每次引用是同一个，不会触发useEffect

```
npm install
npm run demo
```

It will open page on browser automatically.
