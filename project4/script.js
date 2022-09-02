const suggestions = document.querySelector('.suggestions');
const textbox = document.querySelector('#textbox');




class State{
    constructor(){
        this.text = '';
    }
    updateText(text){
        this.text = text;
    }
}

window.onload = function() {
        textbox.addEventListener("keypress", function(e) {
            if (e.key === 'Enter') {
                const state = new State();
                state.updateText(textbox.value);
                console.log(state)
                suggestions.innterHTML += `<div>${state}</div>`;
            }
        });
};



