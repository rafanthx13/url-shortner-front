
import 'quasar/dist/quasar.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

import { Notify } from 'quasar'

export default {
  config: {
    // Color Palette
    brand: {
      primary: '#3c9ec5',
      secondary: '#c3613a',
      accent: '#9C27B0',

      dark: '#1d1d1d',

      positive: '#0f9d58',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  },
   plugins: {
    Notify
  },
}
