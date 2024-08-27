<script src="https://cdnjs.cloudflare.com/ajax/libs/lunr.js/2.3.9/lunr.min.js"></script>
var idx = lunr(function () {
    this.field('title');
    this.field('body');
    
    // Add documents to the index
    this.add({
        "title": "Document 1",
        "body": "This is the body of document 1"
    });
    // Add more documents as needed
});
