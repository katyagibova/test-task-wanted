import { defineStore } from "pinia";
import { ref } from 'vue'
import { api } from '../service'

export const useStore = defineStore('store', () => {
    const loader = ref(false)
    const users = [
        { header: 'List' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          country: 'usa',
          score: 30,
          addres: 'California, Los Angeles',
          showAddres: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          country: 'usa',
          score: 4,
          addres: 'Texas, Austin',
          showAddres: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          country: 'russia',
          score: 21,
          addres: 'Вологодская область, Вологда',
          showAddres: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          country: 'usa',
          score: 8,
          addres: 'Ставропольский край, Ставрополь',
          showAddres: false
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          country: 'russia',
          score: 5,
          addres: 'Ленинградская область, Санкт-Перербург',
          showAddres: false
        },
    ]
    const filteredUsers = ref(users)

    const countryFilter = (item, country) => {
        return item.country === country
    }

    const scoreFilter = (item, score) => {
        if(score === '< 10') {
            return item.score < 10
        } else if (score === '> 20'){
            return item.score > 20
        }
    }

    const getUsers = (country, score) => {
        loader.value = true
        if(country && score) {
            filteredUsers.value = users.filter( (el) => countryFilter(el, country)).filter((el) => scoreFilter(el, score))
        } else if (country) {
            filteredUsers.value = users.filter( (el) => countryFilter(el, country))
        } else if (score){
            filteredUsers.value = users.filter( (el) => scoreFilter(el, score))
        } else {
            filteredUsers.value = users
        }
        loader.value = false
    }

    const getUsersFropAPI = async (country, score) => {
        loader.value = true
        api.getUsers(country, score).then((response) => {
            filteredUsers.value = response.data
        })
        loader.value = false
    }

    return {
        loader,
        filteredUsers,
        getUsers, // использовать для получения обычных users
        getUsersFropAPI // использовать для получения users из API
    }
})