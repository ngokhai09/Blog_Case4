function showFormRegister() {
    $('#title-header').html('Đăng kí');
    $('#modal-body').html(`<div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="username">Tài khoản</label>
                                                <input type="email" class="form-control" id="username">
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="password">Mật khẩu</label>
                                                <input type="password" class="form-control" id="password">
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
                                        </div>`)
}

