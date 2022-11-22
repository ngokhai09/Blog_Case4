function showFormRegister() {
    $('#modal-content').html(`<div class="modal-header">
                                    <h2 class="modal-title" id="title-header">Đăng kí</h2>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body" id="modal-body">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="username">Tài khoản</label>
                                            <input type="email" class="form-control" id="usernameRegister">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="password">Mật khẩu</label>
                                            <input type="password" class="form-control" id="passwordRegister">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="address">Địa chỉ</label>
                                        <input type="text" class="form-control" id="address">
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Số điện thoại</label>
                                        <input type="text" class="form-control" id="phone">
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-7">
                                            <label for="firstname">Tên đệm</label>
                                            <input type="text" class="form-control" id="firstname">
                                        </div>
                                        <div class="form-group col-md-5">
                                            <label for="lastname">Tên</label>
                                            <input type="text" class="form-control" id="lastname">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="main-button" data-dismiss="modal" aria-label="Close" onclick="register()">Đăng ký</button>
                                </div>`)
}

function register() {
    const username = $('#usernameRegister').val();
    const password = $('#passwordRegister').val();
    const address = $('#address').val();
    const phone = $('#phone').val();
    const firstname = $('#firstname').val();
    const lastname = $('#lastname').val();
    const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz-YbCaWY8W9NHRar7nrc-tF_ZI6HZbqsmw&usqp=CAU'
    const isActive = true;
    const account = {
        username: username,
        password: password,
        address: address,
        phone: phone,
        firstname: firstname,
        lastname: lastname,
        isActive: isActive,
        avatar: avatar
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/accounts/register',
        data: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json'
        },
        success: () => {
            alert('Đăng kí thành công!')
        }
    })
}



