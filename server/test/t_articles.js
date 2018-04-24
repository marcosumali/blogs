const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('articles', () => {

    describe('/GET articles', () => {
        it('should get all articles', (done) => {
            chai.request(app)
                .get('/articles/get')
                .end((err,res) => {
                    // console.log(res);

                    let data = JSON.parse(res.text); // kalo mau pake res.body aja -> udah json file
                    // console.log(data);

                    expect(res).to.have.status(200)
                    expect(data).to.be.a('object');
                    expect(data).to.have.ownProperty('message');
                    expect(data).to.have.ownProperty('articles');

                    if(data.articles) {
                        expect(data.articles[0]).to.have.ownProperty('author');
                        // expect(data.articles[0]).to.have.ownProperty('title');
                        expect(data.articles[0]).to.have.ownProperty('description');    
                    }
    
                    done();
                    // process.exit()
                })
        })
    })


    describe('/POST articles', () => {
        it('should save new article', (done) => {
            chai.request(app)
                .post('/articles/save')
                .send({ author: 'saya sendiri', title: 'BCA baru dirampok', description: 'Pilih momen #ChangiDiHati favorit Anda dan menangkan SGD 300 Changi Gift Card untuk pembelanjaan Anda berikutnya!'})
                .end((err,res) => {
                    let data = res.body;
                    // console.log(data);

                    expect(res).to.have.status(201)
                    expect(data).to.be.a('object');
                    expect(data).to.have.ownProperty('message');
                    expect(data).to.have.ownProperty('article');

                    if(data.article) {
                        expect(data.article).to.have.ownProperty('author');
                        expect(data.article).to.have.ownProperty('title');
                        expect(data.article).to.have.ownProperty('description');    
                    }

                    done();
                    // process.exit()
                })
        })

    })


    describe('/PUT articles', () => {
        it('should update related articles', (done) => {
            chai.request(app)
                .put('/articles/update')
                .send({ id: '5ad46fc50facbc3a37fb1dd1', title: 'Bank Panin yang baru dirampok', description: 'Salah kan posting beritanya. apa gw bilang?'})
                .end((err,res) => {
                    let data = res.body;

                    expect(res).to.have.status(200)
                    expect(data).to.be.a('object');
                    expect(data).to.have.ownProperty('message');
                    expect(data).to.have.ownProperty('article_before');

                    if(data.article) {
                        expect(data.article).to.have.ownProperty('author');
                        expect(data.article).to.have.ownProperty('title');
                        expect(data.article).to.have.ownProperty('description');    
                    }

                    done();
                })
        })

    })


    describe('/DELETE articles', () => {
        it('should delete related articles', (done) => {
            chai.request(app)
                .delete('/articles/delete')
                .send({ id: '5ad475203fbabd3e7e392e9b'})
                .end((err,res) => {
                    let data = res.body;

                    expect(res).to.have.status(200)
                    expect(data).to.be.a('object');
                    expect(data).to.have.ownProperty('message');
                    expect(data).to.have.ownProperty('article_before');

                    if(data.article) {
                        expect(data.article).to.have.ownProperty('author');
                        expect(data.article).to.have.ownProperty('title');
                        expect(data.article).to.have.ownProperty('description');    
                    }

                    done();
                })
        })

    })



})



