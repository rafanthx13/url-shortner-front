<template>
  <div>

    <div class="q-pa-md">
      <q-table
        title="Minhas Urls"
        :rows="rows"
        :columns="columns"
        row-key="url_id"
        no-data-label="I didn't find anything for you"
      >
        <!-- <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="Edit" :props="props">
              **
            </q-td>
            <q-td key="Delete" :props="props">
              ||
            </q-td>
          </q-tr>
        </template> -->
        <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <div>
            <q-badge color="purple" :label="props.value" />
          </div>
          <div class="my-table-details">
            ||
          </div>
        </q-td>
      </template>
      </q-table>
  </div>

  </div>
</template>

<script>

import Url from '../../api/Url';

export default {

data() {
    return {
        rows: [],
        columns: [
          { name: 'url_id', label: 'URL ID', field: 'url_id' },
          { name: 'actual_url', label: 'Actual Link', field: 'actual_url' },
          { name: 'go_to_url', label: 'GoTo Link', field: 'go_to_url' },
          { name: 'user_id', label: 'User ID', field: 'user_id' },
          { name: 'create_date', label: 'CreateDate', field: 'create_date' },
          { name: 'actions', label: 'Actions', field: 'url_id' },
        ],
    }
},

created(){
    Url.getAll()
      .then( (result) => {
        console.log(result)
        this.rows = result.data;
      })

  },

}
</script>
