<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Web latihan front-end
        </q-toolbar-title>

        <div>Bram Krisna Danu</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          <q-item class="justify-center text-center q-mb-md q-mt-md">
            <div>
              <q-avatar size="120px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
              <div class="text-weight-bold q-mt-md">
                Admin Kegiatan
              </div>
            </div>
          </q-item>
        </q-item-label>
        <q-item
          clickable
          active-class
          v-ripple
          exact
          :to="{ name: 'tampilKegiatan' }"
        >
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tampil Kegiatan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          active-class
          v-ripple
          exact
          :to="{ name: 'inputKegiatan' }"
        >
          <q-item-section avatar>
            <q-icon name="create" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Input Kegiatan</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return { leftDrawerOpen: false }
  }
}
</script>
