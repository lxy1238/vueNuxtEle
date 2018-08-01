import Vue from 'vue'

const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  false,
  // Only include "base" prefixed .vue files
  /base[\w]+\.vue$/
)
// For each matching file name...
requireComponent.keys().forEach(fileName => {
  // Get the component config
  const componentConfig = requireComponent(fileName)

  fileName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  
  // Globally register the component
  Vue.component(fileName, componentConfig.default || componentConfig)
})