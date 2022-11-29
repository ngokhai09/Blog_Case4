async function showEdit(id) {
    let post = await getDetail(id);
    $("#nav").remove();
    $("#all").remove();
    $('#posts').html(`
<div class="heading-page header-text" >
    </div>
    <section class="blog-post">
    <div class="EditorPage__content EditorPage__content--details">
        <div class="flex1 Paper Paper--double-padded">
            <div><h2>BÀI ĐĂNG MỚI</h2>
                <div class="FieldConfigurationField content">
                    <div class="FieldConfiguration__label" style="font-family: inherit;">Tiêu đề</div>
                    <div class="FieldConfiguration__value"><input style="font-family: inherit;" id="title" 
                                                                  placeholder="Tên câu chuyện bạn muốn chia sẻ"
                                                                  value="${post.title}"
                    ></div>
                    <div class="content">
                        <div class="row">
                          <div class="col-md-6 col-sm-12">
                              <select class="custom-select custom-select-sm" id="status">
                                  <option selected>Trạng thái</option>
                                  <option value="2" ${post.status == 2? 'selected="selected"':""}>Tất cả mọi người</option>
                                  <option value="1" ${post.status == 1? 'selected="selected"':""}>Chỉ mình tôi</option>
                                </select>
                          </div>
                          <div class="col-md-6 col-sm-12">
                            <select class="custom-select custom-select-sm" id="categoryCreate">
                                  <option selected>Chủ đề</option>
                                </select>
                          </div>
                        </div>
                    </div>
                    
                </div>
                <div class="FieldConfigurationField ">
                    <div class="FieldConfiguration__label" style="font-family: inherit;">Nội dung
                    </div>
                    <div class="FieldConfiguration__value"><textarea id="content"
                                                                     rows="100"
                                                                     placeholder="Bạn muốn chia sẻ câu chuyên gì?"
                    ></textarea></div>
                </div>
                <div class="FieldConfigurationField false">
                    <div class="FieldConfiguration__label" style="font-family: inherit;">Ảnh bìa
                    </div>
                    <div class="FieldConfiguration__value">
                        <div class="col-sm-12 imgUp">
                            <div style="background-image: url('${post.image}')" class="imagePreview" style="width: 100%"></div>
                            
                            <label class="btn btn-primary ">
                                Tải lên
                                <input type="file" class="uploadFile img" id="image" 
                                       style="width: 0px;height: 0px; " hidden onchange="uploadCoverImage(event)">
                            </label>
                        </div><!-- col-2 -->
                    </div>
                </div>
                <button class="main-button" style="background-color: #f48840; width: 100%" onclick="addBlog()" >
                              Tạo
                            </button>

            </div>
        </div>
        </div>
        </div>
    </div>
</section>
    `)
    getCategoriesEdit(post.Category);

    $(document).ready(function() {
        $('#content').summernote({
            tabsize: 2,
            height: 400,
        });
        $("#content").summernote("code", post.content);
    })


}
function getCategoriesEdit(id) {
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
                console.log(category._id ,id)
                htmlCategories += `
                    <option ${category._id == id ? 'selected="selected"' : ''} value=${category._id}>${category.name}</option>
                `
            }
            $('#categoryCreate').html(htmlCategories);
        }
    })
}
