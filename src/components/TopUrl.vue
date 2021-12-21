<template>
  <q-card class="my-card">

    <q-card-section :class="this.isInApp ? 'flex justify-center' : 'flex justify-between'">
      <div class="text-h6">Top 100 ShortUrls</div>
      <div v-if="!this.isInApp">
        <router-link to="/login" style="text-decoration: none">
          <q-btn color="primary" label="Login" rounded></q-btn>
        </router-link>
        <router-link to="/" style="text-decoration: none" class="q-ml-sm">
          <q-btn color="primary" label="Create Url" rounded></q-btn>
        </router-link>
      </div>

    </q-card-section>

    <div class="q-pa-md">
      <q-table
        :rows="rows"
        :columns="columns"
        :pagination="initialPagination"
        row-key="url_id"
        no-data-label="I didn't find anything for you"
      >
        <template v-slot:body-cell-go_to_url="props">
          <q-td :props="props">
            <a :href="this.$store.getters.getRoutes.frontURL + '/' + props.row.go_to_url">
              {{this.$store.getters.getRoutes.frontURL}}/{{props.row.go_to_url}}
            </a>
          </q-td>
        </template>
      </q-table>
    </div>

  </q-card>
</template>

<script>

import Url from "@/api/Url";
import notificationMixin from "@/mixins/notifications";
import { useRouter } from 'vue-router';

export default {

  name: "TopUrl",

  mixins: [notificationMixin],

  data() {
    return {
      rows: [],
      columns: [
        { name: "actual_url", label: "Original Url", field: "actual_url" },
        { name: "go_to_url", label: "Short Url", field: "go_to_url" },
        { name: "count", label: "Count", field: "count" },
      ],
      initialPagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 20,
      },
    };
  },

  computed: {
    isInApp() {
        return useRouter().currentRoute.value.name == "AppTopUrls"
    }
  },

  created() {
    Url.getTopUrls()
      .then((result) => {
        this.rows = result.data;
      })
      .catch(() => {
        this.notify_error("Error fetching Top Urls");
      });
  },

};
</script>


<style scoped>

tbody td .q-table  {
  text-align: center !important;
}

th {
  text-align: center !important;
}

</style>
