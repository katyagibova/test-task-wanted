<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
        max-width="450"
        class="mx-auto"
        :loading="store.loader"
        >
          <v-list lines="one">
            <template v-for="(item, index) in store.filteredUsers">
              <v-list-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
              ></v-list-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item
                v-else
                :key="item.title"
                :title="item.title"
                :prepend-avatar="item.avatar"
                @click="item.showAddres = !item.showAddres"
              >

                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                <v-list-item-subtitle v-html="item.country"></v-list-item-subtitle>
                <v-list-item-subtitle v-html="item.score"></v-list-item-subtitle>
                <v-list-item-subtitle v-if="item.showAddres" v-html="item.addres"></v-list-item-subtitle>

              </v-list-item>
            </template>
          </v-list>
        </v-card>
        </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import { useStore } from '../store/index'

export default {
  name: 'ContentBlockUsers',
  setup(){
    const store = useStore()

    return {
      store
    }
  },
}
</script>