let dragElement = null;

let items = document.querySelectorAll('#grid-container .grid-item');
items.forEach(function(item){
    item.addEventListener('dragstart', DragStart, false );
    item.addEventListener('dragover', DragOver, false );
    item.addEventListener('dragenter', DragEnter, false );
    item.addEventListener('dragleave', DragLeave, false );
    item.addEventListener('drop', Drop);
    item.addEventListener('dragend', DragEnd, false );
   
});

function DragStart(e) {
    this.style.opacity = '0.6';
    console.warn("Hier handelDragStart");
    dragElement = this;

    console.warn(this);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function DragEnd(e) {
    console.warn(dragElement);
    dragElement.style.opacity = '1';
    console.warn("Hier handelDragEnd")
    items.forEach(function(item){
        item.classList.remove('over');
    });
}

function DragOver(e) {
    console.warn("Hier handelDragOver");
    if(e.preventDefault){
        e.preventDefault();
    }
    return false;
}

function DragEnter(e) {
    console.warn("Hier handelDragEnter");
    this.classList.add('over');
}

function DragLeave(e) {
    console.warn("Hier handelDragLeave");
    this.classList.remove('over');
}

function Drop(e) {
    console.warn("Hier handelDrop");
    e.preventDefault();

    if(dragElement !== this){
        dragElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }
    DragEnd(dragElement);

    return false;
}
