checkNavbar();
function checkNavbar() {
    const token = localStorage.getItem('token');
    if(token){
        $('#navbarResponsive').html(`<ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="showFormCreate(this)">Tạo bài viết</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="showListBlog(this)">Bài viết của tôi</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link">Tài Khoản</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="logout()">Đăng xuất</a>
                        </li>
                    </ul>`)
    } else {
        $('#navbarResponsive').html(`<ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Trang chủ</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onclick="showFormLogin()">Đăng nhập</a>
                        </li>
                    </ul>`)
    }
}

function logout() {
    localStorage.clear();
    checkNavbar();
}