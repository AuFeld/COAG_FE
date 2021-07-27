<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: "TransitionChild",
    props: {
      as: {
        type: String,
        required: false,
        default: 'div'
      },
      appear: {
        type: Boolean,
      },
      unmount: {
        type: Boolean,
        default: true,
      },
      enter: {
        type: String,
      },
      enterFrom: {
        type: String,
      },
      enterTo: {
        type: String,
      },
      entered: {
        type: String,
      },
      leave: {
        type: String,
      },
      leaveFrom: {
        type: String,
      },
      leaveTo: {
        type: String,
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>