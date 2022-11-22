function showUser() {
    $('#body').html(`

    <div class="heading-page header-text"> 
    </div>
   
    <section class="contact-us">
      <div class="container">
        <div class="row">
        
          <div class="col-lg-12">
            <div class="down-contact">
              <div class="row">
                <div class="col-lg-8">
                  <div class="sidebar-item contact-form">
                    <div class="sidebar-heading">
                      <h2>Trang cá nhân</h2>
                    </div>
                    <div class="content">
                        <div class="row">
                          <div class="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="name" type="text" id="firstname" placeholder="Tên đệm" >
                            </fieldset>
                          </div>
                          <div class="col-md-6 col-sm-12">
                            <fieldset>
                              <input name="email" type="text" id="lastname" placeholder="Tên" >
                            </fieldset>
                          </div>
                          <div class="col-md-12 col-sm-12">
                            <fieldset>
                              <input name="subject" type="text" id="username" placeholder="Tên tài khoản">
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <textarea name="message" rows="6" id="phone" placeholder="Mô tả thêm về bạn" ></textarea>
                            </fieldset>
                          </div>
                          <div class="col-lg-12">
                            <fieldset>
                              <button type="submit" id="form-submit" class="main-button">Cập nhật</button>
                            </fieldset>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="sidebar-item contact-information">
                    <div class="sidebar-heading">
                      <h2>Ảnh</h2>
                    </div>
                    <div class="content">
                       <div class="avatar-upload">
                        <div class="avatar-edit">
                            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onchange="uploadFile(event)"/>
                            <label for="imageUpload"></label>
                        </div>
                        <div class="avatar-preview">
                            <div id="imagePreview" style="background-image: url(http://i.pravatar.cc/500?img=7);">
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
      </div>
    </section>
    <script>
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function () {
            readURL(this);
        });
    </script>
    `)
    showDataUser();
}

function showDataUser() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/accounts/' + localStorage.getItem(ID_USER),
        headers: {
            'Content-Type': 'application/json'
        },
        success: (user) => {
            console.log(user)
            $('#firstname').val(user.firstName);
            $('#lastname').val(user.lastName);
            $('#username').val(user.username);
            $('#phone').val(user.phone);
            $('#imagePreview').css('background-image', 'url(' + user.avatar + ')');
        }
    })
}

function uploadFile(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
        console.log('file upload event', e);
        let file = e.target.files[0];
        let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
        let uploadTask = storageRef.put(file);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = progress;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;

                    case 'storage/canceled':
                        break;

                    case 'storage/unknown':
                        break;
                }
            }, function () {
                let downloadURL = uploadTask.snapshot.downloadURL;
                console.log('downloadURL ===>', downloadURL);
    })
}

