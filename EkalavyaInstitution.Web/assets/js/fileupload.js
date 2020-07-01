function fileValidation() {
    var fileInput = document.getElementById('file');
    var length = fileInput.files.length;
    console.log(length);
    for (i = 0; i < length; i++) {
        fileName = $("input:file")[0].files[i].name;
        var filePath = fileName;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
            fileInput.value = '';
            return false;
        }
        $('.filename').html(length + "files");
    }
    return true;
}
