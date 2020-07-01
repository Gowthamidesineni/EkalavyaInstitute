$(document).ready(function () {

    $('#textBox').click(function () {
        $('#formBody').empty();
        InputBox("text");
        $('#formModal').modal();
    })
    $('#formInputSubmit').click(function () {
        var formInput;
        formInput = $("#formInput").val();
        $('#formModal').modal("hide");
        $('#eventForm').append($('<div/>', {'class':'form-group'}).append($('<input/>', { 'type': 'text', 'placeholder': formInput, 'class': 'form-control' })))
    })
    $('#dropDown').click(function () {

    })
    $('#emailBox').click(function () {
        $('#formBody').empty();
        InputBox("email");
        $('#formModal').modal();
    })
    $('#radioBox').click(function () {

    })
    $('#checkBox').click(function () {

    })
    $('#mobileNumber').click(function () {
        $('#formBody').empty();
        InputBox("tel");
        $('#formModal').modal();
    })
    $('#textArea').click(function () {

    })


})
function InputBox(boxType) {
    $('#formBody').append($('<h5/>', { text: 'Enter Label Name' })).append($('<input/>', { 'type': boxType, 'class': 'form-control', 'id': 'formInput' }))

}