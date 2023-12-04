<template>
    <Transition  v-if="isDrawerOpen" name="drawer-fade">
        <div class="custom-drawer">
      <!-- Drawer content goes here -->
      <div class="drawer-content">
        <h2>Drawer Content</h2>
        <p>This is the content of the custom drawer.</p>
        <button @click="toggleDrawer">Close Drawer</button>
      </div>
    </div>
    </Transition>
</template>

<script>
export default {
    name: 'CustomDrawer',

    props: {
        isDrawerOpen: {
            type: Boolean,
            required: true
        },

        toggleDrawer: {
            type: Function,
            required: true
        }
    }

}
</script>

<style scoped>
.custom-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  /* transform: translateX(100%); */
  background-color: #fff; /* Add your desired background color */
  /* box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2); */
  /* transition: transform 0.3s ease-in-out; */
}

/* .custom-drawer.closed {
  transform: translateX(-100%);
} */

.custom-drawer.open {
  transform: translateX(0); /* Move to the left to bring on-screen */
}

.drawer-fade-enter,
  .drawer-fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  .drawer-fade-enter-active,
  .drawer-fade-leave-active {
    transform: translateX(0); /* Move to the left to bring on-screen */
    transition: opacity .5s ease;
  }
</style>