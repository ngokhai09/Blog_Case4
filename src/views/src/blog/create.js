function showFormCreate(element) {
    $("li").removeClass('active');
    element.classList.add('active')
    $('#body').html(`
<div class="heading-page header-text">
    </div>
    <section class="blog-post">
    <div class="EditorPage__content EditorPage__content--details">
        <div class="flex1 Paper Paper--double-padded">
            <div><h1 class="PaperType--h2">BÀI ĐĂNG MỚI</h1>
                <div class="FieldConfigurationField ">
                    <div class="FieldConfiguration__label">Tiêu đề</div>
                    <div class="FieldConfiguration__value"><input id="title" class="FieldConfiguration__input"
                                                                  placeholder="Tên câu chuyện bạn muốn chia sẻ"
                    ></div>
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
                                       style="width: 0px;height: 0px; " hidden>
                            </label>
                        </div><!-- col-2 -->
                    </div>
                </div>
                <button class="button" onclick="addBlog()">
                              <p>Tạo</p>
                              
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
            placeholder: 'Câu chuyện của bạn là gì?',
            tabsize: 2,
            height: 400
        });
    })
}
function addBlog(){
    let title = $("#title").val();
    let content = $("#content").val();
    let image = $("#image").val().split("\\");
    let blog= {
        "title" : title,
        "content" : content,
        "image" : image[image.length - 1]
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/blogs',
        data: JSON.stringify(blog),
        headers: {
            'Content-Type': 'application/json'
        },
        success: (data) => {
            alert("Đăng bài thành công");
        }
    })
}
