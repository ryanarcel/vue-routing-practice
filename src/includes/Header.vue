<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link to="/" class="nav-link text-white">Home</router-link>
        </li>
        <li class="nav-item ">
           <router-link to="/about" class="nav-link text-white">About</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/contacts" class="nav-link text-white">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link text-white">Projects</router-link>
        </li>
      </ul>

    </div>
  </div>
</nav>
</template>

<script>

export default({
  name: "HeaderComponent"
})
</script>
