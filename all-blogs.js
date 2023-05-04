var settings = {
  "url": "http://localhost:3000/all-blogs",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "blogTitle": "New title",
    "blogAuthor": "Mahnoor Safi",
    "blogDescription": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);

  

 
  response.data.forEach((item)=>{
    console.log(item);

    $("#all-blogs").append(`
    <div class="card" >
    <img class="card-img-top" src="./assets/images/lamp-800.jpg.webp" alt="Card image cap">

    <div class="card-body">
      <small>${item.blogAuthor}</small>
      <h5 class="card-title">${item.blogTitle}</h5>
      <p class="card-text">${item.blogDescription}</p>
      <a href="#" >Design, Photography</a>
    </div>
  </div>
    `)
  })
});