async function showListBlog(id) {
    $("li").removeClass('active');
    $("#"+id).addClass('active');
    $('#body').html(`

<div class="heading-page header-text">
    </div>
    <div class="main-banner header-text">
        <div class="container-fluid">
            <div class="owl-banner owl-carousel">
               
            </div>
        </div>
    </div>
    <section class="call-to-action">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-content">
                        <div class="row">
                            <div class="col-lg-8">
                                <span>Hãy chia sẻ với chúng tôi!</span>
                                <h4>Thế giới này thuộc về bạn!</h4>
                            </div>
                            <div class="col-lg-4">
                                <div class="main-button">
                                    <a rel="nofollow" href="https://templatemo.com/tm-551-stand-blog" target="_parent">Tải app ngay!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="blog-posts">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="all-blog-posts">
                        <div class="row" id="posts">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `)
    await getAll();
}
async function getAll(){
    let html = '';
    await $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/blogs/user/'+localStorage.getItem('idUser'),
        success: (blogs) => {
            for(let blog of blogs){
                html += `<div class="col-lg-4" onclick="showDetail(${blog._id})">
                          <div class="blog-post">
                            <div class="blog-thumb">
                              <img style="width: 350px; height: 404px" src="${blog.image}" alt="">
                            </div>
                            <div class="down-content">
                              <span>${blog.title}</span>
                              <ul class="post-info">
                                <li><a href="#">Admin</a></li>
                                <li><a href="#">${new Date(blog.time_create).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})}</a></li>
                                <li><a href="#">${blog.commentCnt} Comments</a></li>
                              </ul>
                            </div>
                          </div>
                   </div>`
            }
        }
    })
    $("#posts").html(html)
}