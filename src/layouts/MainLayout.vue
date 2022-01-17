<template>
  <q-layout
    style="background-color: #ecebe6"
    class="my-font"
    view="hHh Lpr lFf"
  >
    <q-header elevated>
      <q-toolbar style="background-color: #1e1966; color: #ffcb01">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-img width="5%" src="Logo_toolbar.png"></q-img>
        <q-toolbar-title class="text-bold" style="padding-top: 2px">
          MR INNOVA ADMIN
        </q-toolbar-title>

        <div>v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <div class="full-height" :class="$q.dark.isActive ? 'drawer_dark' : ''">
        <div style="height: 85vh; padding: 10px">
          <!--          <q-toolbar>-->
          <div class="text-center">
            <span> MENU </span>
          </div>
          <hr />
          <q-scroll-area style="height: 100%">
            <q-list padding>
              <!-- AUTENTICACIÓN Y AUTORIZACIÓN -->
              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="accessibility"
                label="Autenticación y Autorización"
                :content-inset-level="0.5"
              >
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/grupos')"
                >
                  <q-item-section avatar>
                    <q-icon name="people" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Grupos</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/usuarios')"
                >
                  <q-item-section avatar>
                    <q-icon name="people" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Usuarios</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <!-- BASE DE DATOS -->
              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="assignment_turned_in"
                label="Base de datos"
                :content-inset-level="0.5"
              >
                <!-- USUARIOS -->
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/cliente')"
                >
                  <q-item-section avatar>
                    <q-icon name="groups" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Clientes</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <!-- GESTION HUMANA -->
              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="accessibility"
                label="Gestion Humana"
                :content-inset-level="0.5"
              >
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/personal')"
                >
                  <q-item-section avatar>
                    <q-icon name="face" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Personal</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <!-- INVENTARIO -->
              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="category"
                label="Inventarios"
                :content-inset-level="0.5"
              >
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/productos')"
                >
                  <q-item-section avatar>
                    <q-icon name="inventory_2" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Productos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/servicios')"
                >
                  <q-item-section avatar>
                    <q-icon name="info" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Servicios</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/facturas')"
                >
                  <q-item-section avatar>
                    <q-icon name="info" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Facturas</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <!-- TOKEN DE AUTENTICACIÓN -->
              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="accessibility"
                label="Token de Autenticación"
                :content-inset-level="0.5"
              >
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/tokens')"
                >
                  <q-item-section avatar>
                    <q-icon name="people" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Tokens</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <!-- VENTAS -->
              <q-expansion-item
                class="q-ma-sm navigation-item"
                expand-separator
                icon="accessibility"
                label="Venta"
                :content-inset-level="0.5"
              >
                <q-item
                  class="q-ma-sm navigation-item"
                  clickable
                  active-class="tab-active"
                  v-ripple
                  exact
                  @click="URL('/ventas')"
                >
                  <q-item-section avatar>
                    <q-icon name="people" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Ventas</q-item-label>
                  </q-item-section>
                </q-item>
              </q-expansion-item>

              <!-- LOGOUT -->
              <q-item
                class="q-ma-sm navigation-item"
                clickable
                active-class="tab-active"
                v-ripple
                exact
                @click="Logout()"
              >
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Salir</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Clientes",
    caption: "quasar.dev",
    icon: "school",
    link: "/#/cliente",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "/#/cliente",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default {
  name: "MainLayout",
  // components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
  methods: {
    URL(arg) {
      this.$router.push(arg);
    },
    Logout() {
      this.$q.loading.show();
      this.$q.localStorage.clear();
      // setTimeout(() => {
      this.$router.push("/auth");
      this.$q.notify({
        // progress: true,
        message: "Regresa pronto",
        // icon: "favorite_border",
        // icon: "favorite",
        color: "white",
        textColor: "blue-5",
        position: "top",
      });
      this.$q.loading.hide();
      // }, 2000);
    },
  },
};
</script>
