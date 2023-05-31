<template>
  <v-container>
    <v-row>
        <v-col cols="12">
            <v-select
            v-model="countryVariant"
            :items="country"
            clearable
            label="Filter by country"
            ></v-select>

            <v-select
            v-model="scoreVariant"
            :items="score"
            clearable
            label="Filter by score"
            ></v-select>
            <v-btn @click="filterUsers">Отфильтровать</v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import { useStore } from '../store/index'

export default {
  name: 'ContentBlockFilters',
  setup() {
    const country = ['russia', 'usa']
    const score = ['> 20', '< 10']

    const countryVariant = ref(null)
    const scoreVariant = ref(null)

    const store = useStore()

    function filterUsers() {
      store.getUsers(countryVariant.value, scoreVariant.value)

      // Если нужно получить users из API то:
      // store.getUsersFropAPI(countryVariant.value, scoreVariant.value)
    }

    return {
      country, score, countryVariant, scoreVariant, filterUsers
    }
  },
}
</script>