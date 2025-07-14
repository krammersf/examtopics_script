// ==UserScript==
// @name         Remover Popup ExamTopics
// @namespace    https://github.com/krammersf
// @version      1.1
// @description  Esconde automaticamente o popup "This section is not available anymore" no site ExamTopics
// @author       Krammersf
// @match        https://www.examtopics.com/discussions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const esconderPopup = () => {
        const popup = document.getElementById('notRemoverPopup');
        if (popup) {
            popup.style.display = 'none';
            popup.style.visibility = 'hidden';
        }

        const overlay = document.querySelector('.modal-backdrop, .modal'); // se tiver fundo escuro
        if (overlay) {
            overlay.style.display = 'none';
            overlay.style.visibility = 'hidden';
        }
    };

    // Tenta a cada meio segundo
    setInterval(esconderPopup, 500);
})();
