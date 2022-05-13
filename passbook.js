let cashBal = 100;
document.getElementById("cashBal").innerHTML = cashBal;
let amount = document.getElementById('amount');

/////////
// Variable for Password
let inputCPw
let inputPPw

let checkPw
let newPw
let exChildPw = 'ab'

let exParentPw = 'ab'
let parentPw

///
// For building the transaction
/*
date = date() // This is not Vancouver timezone

*/

//increase cashBal
function deposit() {
    inputCPw = prompt('Please input owner password')
    if (inputCPw == exChildPw) {
        inputPPw = prompt('Please input parent password')
        if (inputPPw == exParentPw) {
            cashBal = cashBal + Number(amount.value)
            alert('Deposit sucess. Please check above updated balance.')
            document.getElementById("cashBal").innerHTML = cashBal;
        } else {
            alert('Incorrect parent password input')
        }
    } else {
        alert('Incorrect owner password input')
    }

}

//reduce cashBal
function withdraw() {
    if (cashBal - Number(amount.value) < 0) {
        alert('Short of balance for withdrawal, please check and re-try.')
    } else {
        inputCPw = prompt('Please input owner password')
        if (inputCPw == exChildPw) {
            inputPPw = prompt('Please input parent password.')
            if (inputPPw == exParentPw) {
                cashBal = cashBal - Number(amount.value)
                document.getElementById("cashBal").innerHTML = cashBal;
                alert('Withdrawal sucess. Please check above updated balance.')
            } else {
                alert('Incorrect parent password input')
            }
        } else {
            alert('Incorrect owner password input')
        }
    }
}

//update childPassword
function updateChildPw() {
    checkPw = prompt('Please input owner existing password')
    if (checkPw == exChildPw) {
        newPw = prompt('please input new password')
        exChildPw = newPw
        alert('Owner password is updated successfully')
    } else {
        alert('Incorrect record')
    }
}

//Update parentPassword
function parentPassword() {
    checkPw = prompt('Please input parent existing password')
    if (checkPw == exParentPw) {
        newPw = prompt('please input new password')
        exParentPw = newPw
        alert('Password password is updated successfully')
    } else {
        alert('Incorrect record')
    }
}