let login_btn = document.getElementById("login-btn")
let dashboard_wrapper = document.getElementById("dashboard_wrapper")
let login_form = document.getElementById("login-container")
let forgot_password = document.getElementById("forgot-password")
let forgot_btn = document.getElementById("forgot-btn")
let btn_after = document.getElementById("btn-after")
let after_send_link = document.getElementById("after-send-link")
let back_to_login = document.getElementById("back-to-login")
let omola = document.getElementById("3mola")
let omola_btn = document.getElementById("omola_btn")
let akhsaieen_btn = document.getElementById("akhsaieen_btn")
let akhsaieen = document.getElementById("akhsaieen")
let omala_main = document.getElementById("omala_main")
let fares_omala = document.getElementById("fares_omala")
let fares = document.getElementById("fares")
let close_fares = document.getElementById("close_fares")
let akhsaieen_omala = document.getElementById("akhsaieen_omala")
let add_omala = document.getElementById("add_omala")
let close_add_omala = document.getElementById("close_add_omala")
let add_omala_btn = document.getElementById("add_omala_btn")
let filter_akhisai = document.getElementById("filter_akhisai")
let filter_akhisai_btn = document.getElementById("filter_akhisai_btn")
let omala_btn_akisaii = document.getElementById("omala_btn_akisaii")
let ahkisaii_main = document.getElementById("ahkisaii_main")
function login(e){
    e.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
        login_form.style.display = "none"
        dashboard_wrapper.style.display = "block"

}

login_btn.onclick=login;

function forgot(){
    login_form.style.display = "none"
    forgot_password.style.display = "block"
}

forgot_btn.onclick=forgot;

function sent(){
    forgot_password.style.display = "none"
    after_send_link.style.display = "block"
}

btn_after.onclick=sent;


function back_login(){
    after_send_link.style.display = "none"
    login_form.style.display = "block"
}

back_to_login.onclick=back_login;

function omol(){
    dashboard_wrapper.style.display = "none"
    omola.style.display = "block"
}

omola_btn.onclick=omol;

function omolmain(){
    omola.style.display = "none"
    dashboard_wrapper.style.display = "block"
}

omala_main.onclick=omolmain;


function faresomala (){
    fares_omala.style.display = "flex"
}

fares.onclick=faresomala;



function closefares(){
    fares_omala.style.display = "none"
}

close_fares.onclick=closefares;


function akhsaiee(){
    dashboard_wrapper.style.display = "none"
    akhsaieen.style.display = "block"
}

akhsaieen_btn.onclick=akhsaiee;

function akhsaiee_omala(){
    omola.style.display = "none"
    akhsaieen.style.display = "block"
}

akhsaieen_omala.onclick=akhsaiee_omala;

function add_omala_func(){
    add_omala.style.display = "flex"
}

add_omala_btn.onclick=add_omala_func;

function close_add_omala_func(){
    add_omala.style.display = "none"
}

close_add_omala.onclick=close_add_omala_func;

function filter_akhisai_func(){
    filter_akhisai.style.display = "flex"
}

filter_akhisai_btn.onclick=filter_akhisai_func;

function close_filter_akhisai_func(){
    filter_akhisai.style.display = "none"
}

close_filter_akhisai.onclick=close_filter_akhisai_func;

function ahkisaiimain(){
    akhsaieen.style.display = "none"
    dashboard_wrapper.style.display = "block"
}

ahkisaii_main.onclick=ahkisaiimain;

function omala_btn_akisaii_func(){
    akhsaieen.style.display = "none"
    omola.style.display = "block"
}

omala_btn_akisaii.onclick=omala_btn_akisaii_func;