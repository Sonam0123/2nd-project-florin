const suggestions = document.querySelector('.suggestions');
const textbox = document.querySelector('#textbox');




class State{
    constructor(){
        this.suggestions = [];
        this.text = '';
    }
    updateSuggestions(suggestions){
        this.suggestions = suggestions;
    }
    updateText(text){
        this.text = text;
    }
}

window.onload = function() {
    textbox.addEventListener("input", function() {
        const state = new State();
        state.updateText(textbox.value);
        console.log(state)
    })
};



