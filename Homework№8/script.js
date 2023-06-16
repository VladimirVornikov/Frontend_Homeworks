//1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50
// (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

function createNewParagraph() {
    const body = document.querySelector("body")
    body.innerHTML = "<div class='numbers'>"
    for (i = 100; i >= 50; i -= 10) {
      body.innerHTML += `<p> ${i} </p>`;
    }
}
createNewParagraph()


//2. Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. 
// Строки взять произвольные.