<template>

  <q-layout>
    <q-page-container class="bg-gradient">
      <q-page class="q-pa-sm" style="width: 70%; margin-right: auto; margin-left: auto; text-align: center;">


        <q-card class="my-card">

          <q-card-section>
            <div class="text-h6">Paste the URL to be shortened</div>
          </q-card-section>

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

        </q-card>



    </q-page>
    </q-page-container>
  </q-layout>

</template>

<style>
</style>

<script>
  import Url from '@/api/Url';
export default {
  name: 'TopUrlsPublic',




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

<style scoped>

.bg-gradient {
  background-image: linear-gradient(to right,
   #c3613a, #cf4f65, #bf5095, #8f63be, #1976d2);
}
</style>
