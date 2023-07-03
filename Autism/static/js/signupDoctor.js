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
        .post('https://caregivers.serveo.net/api/signup/doctor/', {
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
          window.location.assign('/loginDoctor.html');
          // do something with the token, such as storing it in a cookie or local storage
          console.log('Authentication successful');
        })
        .catch((error) => {
          //   console.error(error);
          // handle authentication error
          console.log('Authentication error');
        });
    },
  },
});
app.mount('.signup');

// fetch('https://6882-156-203-218-245.ngrok-free.app/api/signup/doctor', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     first_name: 'John',
//     last_name: 'Doe',
//     username: 'johndoe',
//     email: 'johndoe@example.com',
//     phone: '1234567890',
//     address: '123 Main St',
//     date_of_birth: '1990-01-01',
//     password: 'password123',
//     password2: 'password123',
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));
