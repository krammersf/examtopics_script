// ==UserScript==
// @name         Remover Popup ExamTopics
// @namespace    https://github.com/seu-utilizador
// @version      1.0
// @description  Remove automaticamente o popup "This section is not available anymore" no site ExamTopics
// @author       O Teu Nome
// @match        https://www.examtopics.com/discussions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Esperar até que o popup apareça
    const interval = setInterval(() => {
        const popup = document.getElementById('notRemoverPopup');
        if (popup) {
            popup.remove(); // Remove o elemento
            clearInterval(interval); // Para o intervalo
            console.log("✅ Popup removido com sucesso!");
        }
    }, 500);
})();
