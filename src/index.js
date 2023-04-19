import components from'./components'

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        console.log('Registered', component.name);
        Vue.component(component.name, component)
      }
    }
  }
}

export default plugin