let config = {
  appName: 'chrome-shortcut-head-modifier',
  inited: false,
  
  debug: {
    enableRestore: true
  },
  viewportSize: {
    width: null,
    height: null,
    ratio: null
  }
}

import styleConfig from './styles/style.config.js'
config.styleConfig = styleConfig

//import readingConfig from './../config/reading.js'
//config.readingConfig = readingConfig

import productionConfig from './config.production.js'
if (process.env.NODE_ENV === 'production') {
  for (let name in productionConfig) {
    config[name] = productionConfig[name]
  }
}

export default config