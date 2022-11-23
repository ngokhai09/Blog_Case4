let page  = 1
showHome('home');
function showHome(id) {
    $("li").removeClass('active');
    $("#"+id).addClass('active');
    $('#body').html(`
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
                <div class="col-lg-8">
                    <div class="all-blog-posts">
                        <div class="row">
                            <div id="posts">
                               
                            </div>
                            <div class="col-lg-12">
                                <div class="main-button">
                                    <a onclick="getPosts()" style="color: white">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="sidebar-item search">
                                    <form id="search_form" name="gs" method="GET" action="#">
                                        <input type="text" name="q" class="searchText" placeholder="tìm kiếm..."
                                               autocomplete="on">
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="sidebar-item recent-posts">
                                    <div class="sidebar-heading">
                                        <h2>Top bài viết</h2>
                                    </div>
                                    <div class="content">
                                        <ul id="blogsTop5">
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="sidebar-item categories">
                                    <div class="sidebar-heading">
                                        <h2>Chủ đề</h2>
                                    </div>
                                    <div class="content">
                                        <ul id="categories">
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `)
    getPosts()
    getCategories()
    getTop5()
}


function getPosts() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/blogs?page='+ page,
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (posts) => {
            if(posts.totalPage < page){
                page = 1;
            } else {
                page++;
            }
            let htmlPosts = ``;
            console.log('post',posts)
            for (const post of posts.blogs) {
                    htmlPosts += `
                <div class="col-lg-12" onclick="showDetails(${post._id})">
                                    <div class="blog-post">
                            <div class="blog-thumb">
                              <img  src="${post.image}" alt="">
                            </div>
                            <div class="down-content">
                              <span>${post.title}</span>
                              <ul class="post-info">
                                <li><a href="#">${post.Account.firstName}</a></li>
                                <li><a href="#">${new Date(post.time_create).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})}</a></li>
                                <li><a href="#">${post.commentCnt} Bình luận</a></li>
                              </ul>
                              <div class="post-options">
                                
                              </div>
                            </div>
                          </div>
                                </div>
                `
                }
            $('#posts').html(htmlPosts);
        }
    })
}

function getCategories() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/categories',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (categories) => {
            let htmlCategories = ``;
            for (const category of categories) {
                htmlCategories += `
                    <li><a>- ${category.name}</a></li>
                `
            }
            $('#categories').html(htmlCategories);
        }
    })
}

function getTop5() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/blogs/search/top5',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (blogs) => {
            console.log(blogs)
            let htmlBlogs = ``;
            for (const blog of blogs) {
                htmlBlogs += `
                    <li><a>
                        <h5>${blog.title}</h5>
                        <span>${new Date(blog.time_create).toLocaleString("en-US", {timeZone: "Asia/Jakarta"})}</span>
                    </a></li>
                `
            }
            $('#blogsTop5').html(htmlBlogs);
        }
    })
}