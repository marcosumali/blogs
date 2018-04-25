<template>
   <div class="blog" >
        <div class="blogs-container col-md-8 offset-md-2">
            <div class="blogs-body col-md-12">
                <h1 class="blogs-header-inner blogs-header col-md-12">Go Blogs</h1>
                <div class="blogs-body-inner-left col-md-12">
                    <div class="articles-box-side col-md-12 jumbotron">
                        <div class="articles-item">
                          <h4><b>{{ blog.title }}</b></h4>
                          <p><b>{{ blog.author }} - </b> <i>{{ blog.createdAt }}</i> </p>
                          <article class="desciption">{{ blog.description }}</article>
                          <router-link to="/blogs"><button class="btn btn-info back-button">Go Back</button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    this.getArticle();
  },
  methods: {
  getArticle () {
    let self = this
    axios.get('http://blogs-server.madebybastian.com/articles/')
      .then(function (response) {
        // console.log('ini response',response.data.articles)
        response.data.articles.forEach(result => {
          if (result._id == self.id) {
            self.blog = result
          }
        });
      })
      .catch(function (err) {
        console.log('ini error axios get', err)
      })
  }
  }
}
</script>

<style>
.blog {
  background: dodgerblue;
  background: -webkit-linear-gradient(to bottom,lightblue, dodgerblue);
  background: linear-gradient(to bottom, lightblue, dodgerblue);
  float:left;
  width:100%;
  display: flex;
  justify-content: center;
}

.blogs-container {
    /* border: 1px solid black; */
    background:#fff;
    border-radius: 10px;
    box-shadow:15px 20px 0px rgba(0,0,0,0.1);
    margin: 50px 0;
    align-self: center;
}

.blogs-header {
    margin-top: 50px;
    margin-bottom: 50px;
}

.blogs-header-inner {
    margin-bottom:10px;
    font-weight:800;
    font-size: 2.5vw;
    color: darkblue;
}

.blogs-header-inner:after {
    content:" ";
    width: 13vw;
    height: 5px;
    background: dodgerblue;
    display:block;
    margin-top:10px;
    border-radius:3px;
    margin-left:auto;
    margin-right:auto
}


.blogs-body {
    /* border: 1px solid red; */
    display: flex;
    flex-wrap: wrap;
}

.blogs-body-inner-left {
    /* border: 1px solid blue; */
    /* border-right: 1px solid gainsboro; */
    /* display: flex; */
    /* flex-wrap: wrap; */
}

.articles-box-side {
    /* border: 1px solid black; */
    border-bottom: 1px solid gainsboro;
    display: flex;
    flex-wrap: wrap;
}

.articles-box-main {
    /* border: 1px solid black; */
    border-bottom: 1px solid gainsboro;
    display: flex;
    flex-wrap: wrap;
}

.articles-item {
    /* border: 1px solid greenyellow; */
    align-self: center;
    text-align: justify;
}

.jumbotron {
    padding: 1rem 1rem;
    margin-bottom: 2rem;
    background-color: white;
    /* border-radius: 0.3rem; */
}

.back-button {
    margin-top: 3vh;
    font-weight: bold;
    width: 100px;
}



</style>
