<template>
   <CAlert
      color="danger"
      :show.sync="currentAlertCounter"
      closeButton
    >
      This alert will close after {{currentAlertCounter}} seconds.
      <CProgress
        :max="10"
        :value="currentAlertCounter"
        height="3px"
        color="danger"
        animate
      />
</template>

<script>
export default {

}
</script>

<style>

</style>