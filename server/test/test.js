const chai = require('chai');
const expect = chai.expect;

function save(articles) {
    return articles;
}

describe('articles', function() {
    describe('saveArticles', function() {
        it('should save articles', function () {
            let articles = 'Lucinta Luna pergi makan di warung';

            let saveResult = save(articles);

            expect(saveResult).to.be.a('string');
            expect(saveResult).to.equal(articles);

        })
    })
})