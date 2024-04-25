import { createApp } from 'vue'

import AppFoodList from './AppFoodList.vue'
import FoodItem from './components/FoodItem.vue'

const app = createApp(AppFoodList)
app.component('food-item', FoodItem)
app.mount('#app')