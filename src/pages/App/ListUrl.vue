<template>
  <div>

    <!-- Listing Data -->
    <div class="q-pa-md">
      <q-table title="My Urls Shorteners" :rows="rows" :columns="columns" row-key="url_id" no-data-label="I didn't find anything for you">
        <template v-slot:body-cell-go_to_url="props">
          <q-td :props="props">
            <a :href="this.$store.getters.getRoutes.frontURL + '/' + props.row.go_to_url">
              {{this.$store.getters.getRoutes.frontURL}}/{{props.row.go_to_url}}
            </a>
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn round color="red" icon="delete" @click="confirm = true; this.url_to_delete = props.row.url_id" />
          </q-td>
        </template>
      </q-table>
    </div>

    <!-- Dialog to Delete -->
    <q-dialog v-model="confirm">
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure you want to delete this URL?</span>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Delete" color="red" @click="this.delete_url()" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import Url from '../../api/Url';
import notificationMixin from './../../mixins/notifications'

export default {

  mixins: [notificationMixin],

  data() {
    return {
      confirm: false,
      rows: [],
      url_to_delete: '',
      columns: [
        { name: 'actual_url', label: 'Original Url', field: 'actual_url' },
        { name: 'go_to_url', label: 'Short Url', field: 'go_to_url' },
        { name: "count", label: "Count", field: "count" },
        // { name: 'user_id', label: 'User ID', field: 'user_id' },
        // { name: 'create_date', label: 'CreateDate', field: 'create_date' },
        { name: 'actions', label: 'Delete', field: 'url_id' },
      ],
    }
  },

  methods: {
    delete_url() {
      Url.delete(this.url_to_delete).then(() => {
          this.notify_success('URL deletada')
          let the_url_to_delete = this.url_to_delete
          this.rows = this.rows.filter(function(obj) {
            return obj.url_id !== the_url_to_delete;
          });
          this.confirm = false
        })
        .catch((err) => {
          console.error(err)
          this.notify_error('Erro ao deletar URL')
          this.confirm = false
        })
    },

  },



  created() {
    Url.getAll()
      .then((result) => {
        console.log(result)
        this.rows = result.data;
      })
  },

}

</script>
