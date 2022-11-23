async function showListBlog(id) {
    $("li").removeClass('active');
    $("#"+id).addClass('active');
    let html = `    
        <div class="heading-page header-text">
            </div>
            <section class="blog-posts grid-system">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="all-blog-posts">
                      <div class="row">`;
    let blogs = await getAll();
    console.log(blogs)
    for(let blog of blogs){
        html += `<div class="col-lg-4" onclick="showDetail(${blog._id})">
                          <div class="blog-post">
                            <div class="blog-thumb">
                              <img style="width: 350px; height: 404px" src="${blog.image}" alt="">
                            </div>
                            <div class="down-content">
                              <span>Lifestyle</span>
                              <ul class="post-info">
                                <li><a href="#">Admin</a></li>
                                <li><a href="#">${new Date(blog.time_create).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})}</a></li>
                                <li><a href="#">${blog.commentCnt} Comments</a></li>
                              </ul>
                              <div class="post-options">
                                
                              </div>
                            </div>
                          </div>
                        </div>`
    }

    html += `
                        
                        <div class="col-lg-12">
                          <ul class="page-numbers">
                            <li><a href="#">1</a></li>
                            <li class="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>`;
    $("#body").html(html);
}
async function getAll(){
    let data1 = '';
    await $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/blogs',
        success: (data) => {
            data1 = data;
        }
    })
    return data1;
}