<template>
  <div class="admin">
    <div class="form-blog col-md-4 offset-md-4">
      <div class="form-blog-inner col-md-12">
        <h1>ADMIN FORM</h1>
        <form>
          <p class="poststatus" v-if="poststatus">{{ poststatus }}</p>
          <div class="form-group">
            <label for="exampleFormControlInput1" class="input-heading">Author</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your full name..." v-model="name" required>
            <small style="color:red" v-if="name == ''">{{ errorinput }}</small>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1" class="input-heading">Post Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your post title..." v-model="title" required>
            <small style="color:red" v-if="title == ''">{{ errorinput }}</small>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1" class="input-heading">Post Description</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Your detail post description..." v-model="post" required></textarea>
            <small style="color:red" v-if="post == ''">{{ errorinput }}</small>
          </div>
          <div>
            <button class="btn btn-info" @click="saveArticles">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'form',
  data () {
    return {
      name: '',
      title: '',
      post: '',
      postsuccess: false,
      postfail: false,
      errorinput: '',
      poststatus: ''
    }
  },
  created () {
  },
  methods: {
    saveArticles () {

      let obj = {
        author: this.name,
        title: this.title,
        description: this.post
      }

      if (obj.author == '' || !obj.author || obj.title == '' || !obj.title || obj.description == '' || !obj.description) {
  
        this.errorinput = 'This information cannot be empty !'

      } else {

        let self = this
        axios.post('http://localhost:3000/articles/save', obj)
        .then(function (response) {
          console.log(response);
          self.poststatus = 'Your post has been successfully posted !'
          setTimeout(() => {
            self.$router.push({ path: '/blogs'});
          }, 2000);

        })
        .catch(function (err) {
          console.log('ini error axios get', err)
        })

      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>

.admin {
  background: dodgerblue;
  background: -webkit-linear-gradient(to bottom,lightblue, dodgerblue);
  background: linear-gradient(to bottom, lightblue, dodgerblue);
  height: 92vh;
  display: flex;
}

.form-group {
  text-align: left;
}

.form-blog {
  /* border: 1px solid red; */
  background-color: white;
  border-radius: 50px;
  align-self: center;
}

.form-blog-inner {
  /* border: 5px solid  black; */
  border-radius: 50px;
  padding: 20px;
}

.input-heading {
  font-size: 18px;
}

.poststatus {
  color: #155724;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}

</style>
