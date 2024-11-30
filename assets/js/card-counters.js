class CardCounter extends HTMLElement {
    constructor() {
        super();
        this._data = {};
    }

    connectedCallback() {
        this.update();
    }

    set data(value) {
        if (typeof value === 'object' && value !== null) {
            this._data = value;
            this.update();
        } else {
            console.error('Invalid data format. Must be an object.');
        }
    }

    get data() {
        return this._data;
    }

    update() {
        const {
            Card_Counts = 0,
        } = this._data;
        this.className = `w-[25%] h-full flex justify-center`
        this.innerHTML = `
            <div class="border-black w-1/2 h-full grid place-items-center rounded-lg bg-[#EEE] border-[2px]">
                <div class="text-[36px]">${Card_Counts}</div>
            </div>
        `;
    }
}

customElements.define('card-counter-component', CardCounter);

function update_card_counter(){
    for(let tier=1;tier<=3;++tier){
        card_counter_frame = document.querySelector('div[role=tier-'+tier+'-row] card-counter-component');
        card_counter_frame.data = {"Card_Counts" : Available_card_sets[tier-1].size}
    }   
}