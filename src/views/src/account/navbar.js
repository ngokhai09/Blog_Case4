checkNavbar();
function checkNavbar() {
    const token = localStorage.getItem('token');
    if(token){
        $('#navbarResponsive').html(`<ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" onclick="showHome()">Trang chủ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">Tạo bài viết</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Bài viết của tôi</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" onclick="showUser()">Tài Khoản</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="logout()">Đăng xuất</a>
                        </li>
                    </ul>`)
    } else {
        $('#navbarResponsive').html(`<ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" onclick="showHome()">Trang chủ</a>
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
    showHome()
}