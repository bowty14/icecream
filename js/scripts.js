  $(document).ready(function(){
    $(".btn").click(function(event){
    event.preventDefault();
    var flavors = ['half-baked','double chocolate fudge', 'Oregon mudslide', 'cookie monster'];
    console.log(flavors);
    flavors.forEach(function(flavor) {
      $('#flavors').append('<li>' + flavor + '</li>')
    });
    $(".favorites").show();
  });
});