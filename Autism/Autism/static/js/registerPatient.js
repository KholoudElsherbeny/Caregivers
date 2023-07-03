const app = Vue.createApp({
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      error: null,
      results: [],
    };
  },
  methods: {
    submitSurvey(e) {
      e.preventDefault();
      console.warn(this.email.split('@')[0], this.password);
      axios
        .post('https://caregivers.serveo.net/api/login/', {
          username: this.email.split('@')[0],
          password: this.password,
        })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem('session_token', token);
          //  window.location.assign('@/home.html');
          // do something with the token, such as storing it in a cookie or local storage
          console.log('Authentication successful');
          window.location.assign('homePatient.html');
        })
        .catch((error) => {
          console.error(error);
          // handle authentication error
          console.log('Authentication error');
        });
    },
  },
});
app.mount('.signin');
