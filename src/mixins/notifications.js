var notificationsMixin = {

  methods: {
    notify_success(message) {
      this.$q.notify({
          message,
          type: 'positive',
          position: 'top-right'
        });
    },
    notify_error(message) {
      this.$q.notify({
          message,
          type: 'negative',
          position: 'top-right'
      });
    },
  }
}

export default notificationsMixin
