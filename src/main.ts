import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import the fontawesome 組件 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import fortawesome 圖示類型 */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas,fab,far)

createApp(App).mount('#app')
