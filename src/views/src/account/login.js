const ACCESS_TOKEN = 'token';
const ID_USER = 'idUser';
function showFormLogin() {
    let htmlLogin = `<div class="heading-page header-text">
    </div>
    <section class="contact-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="down-contact">
                        <div class="row">
                            <div class="col-lg-7">
                                <div style="text-align: center">
                                    <div>
                                        <h2><img src="library/image/picwish.png" alt=""
                                                 style="width: 250px; height: 230px"></h2>
                                    </div>
                                    <div class="content">
                                        <h3>Fire blog giúp bạn chia sẻ với mọi người và cuộc sống của bạn.</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="sidebar-item contact-form">
                                    <div class="sidebar-heading">
                                        <h2>Đăng nhập</h2>
                                    </div>
                                    <div class="content">
                                            <div class="row">
                                                <div class="col-md-12 col-sm-12">
                                                        <input type="text" id="username"placeholder="Tên tài khoản">
                                                </div>
                                                <div class="col-md-12 col-sm-12">
                                                        <input type="password" id="password" placeholder="Mật khẩu">
                                                </div>
                                                <div class="col-md-12 col-sm-12">
                                                    <a style="color: #f48840"  data-toggle="modal" onclick="showFormRegister()" data-target="#exampleModal" >Bạn chưa có tài khoản ? | Đăng kí </a>
                                                </div>
                                                <div class="col-lg-12" style="margin-top: 5%">
                                                    <fieldset>
                                                        <button onclick="login()" id="form-submit" class="main-button">Đăng
                                                            nhập
                                                        </button>
                                                    </fieldset>
                                                </div>
                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    $('#body').html(htmlLogin);
}

//chưa hoàn thiện
function login() {
    const username = $('#username').val();
    const password = $('#password').val();
    const account = {
        username: username,
        password: password
    }
    const RESPONSE_FAIL = 'Fail'
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/accounts/login',
        data: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json'
        },
        success: (token) => {
            if (token.token !== RESPONSE_FAIL) {
                alert('Đăng nhập thành công')
                localStorage.setItem(ACCESS_TOKEN, token.token);
                localStorage.setItem(ID_USER, token.idUser);
                showHome();
            } else {
                alert('Sai tài khoản hoặc mật khẩu')
                const notification = `<p style="color: #e05353">Sai tài khoản hoặc mật khẩu</p>`;
                $('#body-notification').html(notification);
                const div_notification = $('#notification');
                const toast = new bootstrap.Toast(div_notification)
                toast.show()
            }
            checkNavbar();
        }
    })
}

