function showDetail(id) {

}

async function getDetail(id) {
    let data1 = '';
    await $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/blogs/user/'+id,
        success: (data) => {
            data1 = data;
        }
    })
    return data1;
}