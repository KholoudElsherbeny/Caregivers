const app = Vue.createApp({
  data() {
    return {
      first_name: '',
      last_name: '',
      username: '',
      email: '',
      phone: '',
      address: '',
      date_of_birth: '',
      password: '',
      password2: '',
      gender: '',
    };
  },
  methods: {
    signup(e) {
      e.preventDefault();
      // console.warn('signup', this.first_name, this.last_name, this.email,
      //   this.phone, this.address, this.date_of_birth, this.password, this.password2, this.gender);
      // console.log(this.email.split('@')[0]);
      // console.log(this.date_of_birth.split('/').reverse().join('-'));
      axios
        .post('https://caregivers.serveo.net/api/signup/patient/', {
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.email.split('@')[0],
          email: this.email,
          phone: this.phone,
          address: this.address,
          date_of_birth: this.date_of_birth.split('/').reverse().join('-'),
          password: this.password,
          password2: this.password2,
          gender: this.gender[0],
        })
        .then((response) => {
          const token = response.data.token;
          // do something with the token, such as storing it in a cookie or local storage
          console.log('Authentication successful');
          window.location.assign('/loginPatient.html');
        })
        .catch((error) => {
          console.error(error);
          // handle authentication error
          console.log('Authentication error');
        });
    },
  },
});
app.mount('.signup');
