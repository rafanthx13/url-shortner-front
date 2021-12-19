<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Quasar Url Shortner App
        </q-toolbar-title>

        <div>v.1.0.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="200"
      :breakpoint="300"
      class="bg-grey-2"
    >
      <q-list style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-item-label header>Menu</q-item-label>

        <q-item clickable @click="go_to('AppHome')">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="go_to('ListUrl')">
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>List URL</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="go_to('CreateUrl')">
          <q-item-section avatar>
            <q-icon name="link" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Create Link</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="go_to('TopUrls')">
          <q-item-section avatar>
            <q-icon name="sort" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Top Urls</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="go_to('CreateUrlPublic')">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="./../assets/avatar-icon-design.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <!-- <div>@rstoenescu</div> -->
          </div>
        </q-img>

    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

  </q-layout>


</template>

<script>

export default {

  name: 'MainLayout',

  data() {
    return {
      leftDrawerOpen: false,
    }
  },

  methods: {
    go_to(link_path) {
      this.$router.push({name: link_path}).catch(() => {})
    }
  },

}

</script>
