<template>
    <div class="blogs coldoffset-md-2" >
        <div class="blogs-container col-md-12">
            <div class="blogs-header col-md-8 offset-md-2">
                <h1 class="blogs-header-inner">Go Blogs</h1>
            </div>
            <div class="blogs-body col-md-8 offset-md-2">
                <div class="blogs-body-inner-left col-md-3">
                    <div class="articles-box-side col-md-12 jumbotron" v-for="article in articlesList" v-bind:key="article">
                        <div class="articles-item">
                            <h5 style="color: black; font-weight: bold">{{ article.title }}</h5>
                            <p><span style="color: black; font-weight: bold">{{ article.author }} </span><span style="color: grey; font-style: italic">{{ article.createdAt }}</span></p>
                            <p>{{ article.description }}</p>
                        </div>
                    </div>
                </div>

                <div class="blogs-body-inner-right col-md-9">
                    <div class="articles-box-main col-md-12 jumbotron" v-for="article in articlesList" v-bind:key="article">
                        <div class="articles-item">
                            <h4>{{ article.title }}</h4>
                            <p><b>Author: {{ article.author }}</b></p>
                            <p><i>Date: {{ article.createdAt }}</i></p>
                            <p>{{ article.description }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>