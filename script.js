function openAlert(className) {
    if (className == 'vermelho') {
        alert('vermelho')
    } else {
        alert('verde')
    }
}

//mudar cor da div
let colorVariable = false
function changeColor() {
    colorVariable = !colorVariable

    if (colorVariable == false) {
        openAlert('vermelho')
        document.getElementById("colorDiv").className = "red";
    } else {
        openAlert('verde')
        document.getElementById("colorDiv").className = "purple";
    }
}

