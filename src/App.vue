<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-success">
      <a href class="navbar-brand" @click.prevent>Terraproductos</a>
      <div class="navbar-nav mr-auto col-9">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Inicio
          </router-link>
        </li>
        <li v-if="showContenidoAdmin" class="nav-item">
          <router-link to="/admin" class="nav-link">Administrador</router-link>
        </li>
        
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">Usuario</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto col-8">
        <li class="nav-item">
          <router-link to="/registro" class="nav-link">
            <font-awesome-icon icon="user-plus" />Registrar
          </router-link>
        </li>
        <li class=" d-flex">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class=" nav-item">
          <router-link to="/perfil" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />Salir
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
      showContenidoAdmin() {
      if (this.currentUser && this.currentUser.rol) {
        return this.currentUser.rol.includes('ROLE_ADMIN');
      }

      return false;
    }
  },
    

  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
