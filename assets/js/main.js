
$("#enviarMensaje").click(function () {
    alert("Tu mensaje fue enviado correctamente")
})

$(".imgcard").click(function () {
    $(".card-body").toggle()
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))