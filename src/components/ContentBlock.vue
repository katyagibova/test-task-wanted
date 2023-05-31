<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <ContentBlockFilters />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <ContentBlockUsers />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContentBlockFilters from './ContentBlockFilters.vue'
import ContentBlockUsers from './ContentBlockUsers.vue'
  export default {
  components: { ContentBlockFilters, ContentBlockUsers },
    name: 'ContentBlock',

    data: () => ({ }),
  }
</script>
