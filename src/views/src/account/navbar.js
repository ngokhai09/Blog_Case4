checkNavbar();
function checkNavbar() {
    const token = localStorage.getItem('token');
    if(token){
        $('#navbarResponsive').html(`<ul class="navbar-nav ml-auto">
                        <li class="nav-item active" id="home" >
                            <a class="nav-link" onclick="showHome('home')">Trang chủ</a>
                        </li>
                        <li class="nav-item" id="create">
                            <a class="nav-link" onclick="showFormCreate('create')">Tạo bài viết</a>
                        </li>
                        <li class="nav-item" id="list">
                            <a class="nav-link" onclick="showListBlog('list')">Bài viết của tôi</a>
                        </li>
                        <li class="nav-item" id="account">
                            <a class="nav-link" onclick="showUser('account')">Tài Khoản</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onclick="logout()">Đăng xuất</a>
                        </li>
                    </ul>`)
    } else {
        $('#navbarResponsive').html(`<ul class="navbar-nav ml-auto">
                        <li class="nav-item active" id="home">
                            <a class="nav-link" onclick="showHome('home')">Trang chủ</a>
                        </li>
                        <li class="nav-item" id="login">
                            <a class="nav-link" onclick="showFormLogin('login')">Đăng nhập</a>
                        </li>
                    </ul>`)
    }
}

function logout() {
    localStorage.clear();
    checkNavbar();
    showHome('home')
}