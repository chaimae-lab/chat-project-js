axios.get('https://tarmeezacademy.com/api/v1/posts')
  .then(function (response) {
    // handle success
    let posts =response.data.data
    console.log(response);
    console.log(posts );
    
for (post of posts){
    console.log(post );
    console.log(post.body );

    let content = `   <div class="card my-4 shadow">
    <div class="card-header">
        <img class="rounded-circle border border-4" src="${post.author.profile_image}"  alt="" style="width:40px ;height:40px ;">
         <b>${post.author.username}</b>
    </div>
    <div class="card-body">
   
        <img src="${post.image}"  alt=""  class="card-img" style="height: 200px;">
        <h6 style="color: aqua;">${post.created_at}</h6>
        <P>${post.body} </P>
        <hr>
        <div>
          <span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
           ${post.comments_count}
          </span>
        </div>
    </div>
  </div>
  </div>

 `
 document.getElementById("idpost").innerHTML += content 
}

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 