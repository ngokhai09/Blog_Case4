async function showEdit(id) {
    let post = await getDetail(id);
    $("#nav").remove();
    $("#all").remove();

    $('#posts').html(`
    <section class="blog-post">
    <div class="EditorPage__content EditorPage__content--details">
        <div class="flex1 Paper Paper--double-padded">
            <div><h1 class="PaperType--h2">SỬA BÀI ĐĂNG</h1>
                <div class="FieldConfigurationField ">
                    <div class="FieldConfiguration__label">Tiêu đề</div>
                    <div class="FieldConfiguration__value"><input id="title" class="FieldConfiguration__input"
                                                                  placeholder="Tên câu chuyện bạn muốn chia sẻ"
                                                                  value="${post.title}"
                    ></div>
                    <select class="custom-select custom-select-sm" id="status">
                      <option selected>Trạng thái</option>
                      <option value="1">Tất cả mọi người</option>
                      <option value="2">Chỉ mình tôi</option>
                      <option value="3">Bạn bè</option>
                    </select>
                </div>
                <div class="FieldConfigurationField ">
                    <div class="FieldConfiguration__label">Nội Dung
                    </div>
                    <div class="FieldConfiguration__value"><textarea id="content" class="FieldConfiguration__input"
                                                                     rows="100"
                                                                     placeholder="Bạn muốn chia sẻ câu chuyên gì?"
                    ></textarea></div>
                </div>
                <div class="FieldConfigurationField false">
                    <div class="FieldConfiguration__label">Ảnh bìa
                    </div>
                    <div class="FieldConfiguration__value">
                        <div class="col-sm-12 imgUp">
                            <div class="imagePreview"></div>
                            
                            <label class="btn btn-primary">
                                Tải lên
                                <input type="file" class="uploadFile img" id="image" 
                                       style="width: 0px;height: 0px; " hidden onchange="uploadCoverImage(event)">
                            </label>
                        </div><!-- col-2 -->
                    </div>
                </div>
                <button class="button" style="background-color: #f48840" onclick="addBlog()">
                              <p style="color: black">Tạo</p>
                              
                            </button>

            </div>
        </div>
        </div>
        </div>
    </div>
</section>
    `)
    $(document).ready(function() {
        $('#content').summernote({
            tabsize: 2,
            height: 400,
        });
        $("#content").summernote("code", post.content);
    })


}
function editBlog() {
    let title = $("#title").val();
    let content = $("#content").val();
    let image = localStorage.getItem('coverImage');
    let status = $('#status').val();
    let Category = $('#categoryCreate').val()
    let blog = {
        "title": title,
        "content": content,
        "image": image,
        "Account": localStorage.getItem(ID_USER),
        "status": +status,
        "Category": {
            _id: Category
        }
    }
    console.log(blog)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/blogs',
        data: JSON.stringify(blog),
        headers: {
            'Content-Type': 'application/json'
        },
        success: (data) => {
            alert("Đăng bài thành công");
            showHome();
        }
    })
}

// function uploadCoverImage(e) {
//     let fbBucketName = 'images';
//     let uploader = document.getElementById('uploader');
//     let file = e.target.files[0];
//     let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
//     let uploadTask = storageRef.put(file);
//     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
//         function (snapshot) {
//             let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             uploader.value = progress;
//             switch (snapshot.state) {
//                 case firebase.storage.TaskState.PAUSED:
//                     break;
//                 case firebase.storage.TaskState.RUNNING:
//                     break;
//             }
//         }, function (error) {
//             switch (error.code) {
//                 case 'storage/unauthorized':
//                     break;
//
//                 case 'storage/canceled':
//                     break;
//
//                 case 'storage/unknown':
//                     break;
//             }
//         }, function () {
//             let downloadURL = uploadTask.snapshot.downloadURL;
//             localStorage.setItem('coverImage', downloadURL);
//         });
// }
