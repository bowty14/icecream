  $(document).ready(function(){
    $(".btn").click(function(event){
    event.preventDefault();
    var flavors = ['half-baked','double chocolate fudge', 'Oregon mudslide', 'cookie monster'];
    flavors.forEach(function(flavor) {
      alert('I love ' + flavor + " ice cream!!");
    });
  });
});