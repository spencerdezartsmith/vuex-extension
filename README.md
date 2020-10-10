# vuex-extension

Vuex is awesome! Thanks to some really nice helper methods, accessing your state inside of your templates is a breeze... until you start having nested state.

Mapping nested state into your templates is overly verbose. It gets worse if you're using a modularized store.

```
// root level state inside of a module
...mapState('moduleName', ['foo', 'bar']) // accessed inside template using this.foo etc

// nested state inside of a module
...mapState('moduleName', {
  a: state => state.a,
  b: state => state.b
}),
```

When mapping multiple state values from multiple modules this can look really excessive!

```
...mapState('moduleName', {
  a: state => state.a,
  b: state => state.b
}),
...mapState('moduleName', {
  a: state => state.a,
  b: state => state.b
}),
...mapState('moduleName', {
  a: state => state.a,
  b: state => state.b
}),
```

This project is a small example project using a `mapNestedState` helper method which allows you to import nested state into your templates with a simple string syntax similar to lodash get method.

```
...mapNestedState({
  moduleOne: {
    foo: 'nested.piece.of.state' // accessed in template using this.foo
  },
  moduleTwo: {
    bar: 'another.nested.value' // accessed in template using this.bar
  },
})
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
