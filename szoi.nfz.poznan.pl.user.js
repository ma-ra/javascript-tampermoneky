// ==UserScript==
// @name         SZOI - helpers
// @namespace    https://github.com/ma-ra/javascript-tampermoneky
// @version      0.2
// @description  SZOI - helpers
// @author       ma-ra
// @match        https://szoi.nfz.poznan.pl/ap-mzwi/user/msgusr/*
// @match        https://szoi.nfz.poznan.pl/ap-mzwi/servlet/mzwiadmin/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log(window);
    console.log(document);

    //confirm by enter button
    document.addEventListener('keypress', confirm);

    var button = document.getElementById("SUBMIT_NAME");
    console.log(button);

    function confirm(e) {
        if (e.keyCode == 13) {
            button.click();
        }
    }

    //double click on email filed fills them
    var email = document.querySelectorAll('input[id$=mail]');
    email[0].addEventListener("dblclick", paste_email);
    console.log(email[0]);

    function paste_email(e) {
        e.target.value="operator_ewus@*.com.pl";
    }

})();
