var notificationsMixin = {

  methods: {
    notify_success(message) {
      this.$q.notify({
          message,
          type: 'positive',
          position: 'top-right'
        });
      // { color: 'negative', message: 'Woah! Danger! You are getting good at this!', icon: 'report_problem' }
      // this.$buefy.notification.open({
      //   message: message,
      //   type: "is-success",
      // });
    },
    notify_error(message) {
      this.$q.notify({
          message,
          type: 'negative',
          // icon: 'report_problem',
          position: 'top-right'
      });
      // const notif = this.$buefy.notification.open({
      //   duration: 5000,
      //   message: message,
      //   type: "is-danger",
      //   hasIcon: true,
      // });
    },
  }
}

export default notificationsMixin
