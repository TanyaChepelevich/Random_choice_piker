const textarea = document.querySelector('#textarea');
const tagsEl = document.querySelector('.tags')

textarea.focus();


textarea.addEventListener('keyup', (e) => {
createTags(e.target.value);
if(e.key === 'Enter') {
    setTimeout(() => {
        e.target.value = "";
    }, 10)
    
    randomSelect();
}

})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML="";
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag')
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);

    });
}

function randomSelect () {
    const times = 20;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highliteTag(randomTag);
        setTimeout(() => {
            unHighliteTag(randomTag);
        }, 100)
    }, 200);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highliteTag(randomTag);
        }, 200); 

    }, times * 200);

}

function pickRandomTag () {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];

}

function highliteTag (tag) {
    tag.classList.add('highlited');
}

function unHighliteTag (tag) {
    tag.classList.remove('highlited');
}