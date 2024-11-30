let mine_cost_display = cost => {
    let cost_Elements = ""
    for(const [k,v] of Object.entries(cost)){
        if(v==0) continue
        cost_Elements += `
            <div class="flex items-center gap-1.5">
                <div class="size-7 bg-[${k}] border border-black rounded-full grid place-items-center">
                    <div class="text-white mix-blend-difference">${v}</div>
                </div>
            </div>
        `
    }
    return cost_Elements
}

class Card extends HTMLElement {
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
            card_index= undefined,
            tier= undefined,
            color= undefined,
            points= undefined,
            cost= {
                black: undefined,
                white: undefined,
                red: undefined,
                blue: undefined,
                green: undefined
            },
            state= undefined
        } = this._data;
        this.className = `w-[120px] h-full flex justify-center transition-all duration-[1000ms] items-center`
        if(color==-99){
            this.innerHTML = `
                <div class="w-1/2 h-full"></div>
            `
        } else {
            this.innerHTML = `
                <div class="border-[3px] border-[${color}] rounded-lg w-full h-[150px] bg-[#EEE] flex flex-col justify-between p-2 cursor-pointer hover:scale-105 transition-all duration-500">
                    <div class="flex justify-between items-center">
                        <h2 class="text-[25px] font-bold">${points}</h2>
                        <div class="size-5 bg-[${color}] border-2 border-black rounded-full"></div>
                    </div> 
                    <div class="flex flex-wrap-reverse gap-1 w-3/4">
                        ${mine_cost_display(cost)}
                    </div>
                </div>
            `;
        }
        
    }
}

customElements.define('card-component', Card);

const Available_card_sets = [
    new Set(Array.from({ length: 40 }, (_, i) => i)),
    new Set(Array.from({ length: 30 }, (_, i) => i)),
    new Set(Array.from({ length: 20 }, (_, i) => i))
];

function draw_a_card(tier, card_frame_index){
    const card_frame = document.querySelectorAll('div[role=tier-'+tier+'-row] card-component')[card_frame_index];
    card_frame.data = {
        color: -99,
        points: -99,
        cost: { black: -99, white: -99, red: -99, blue: -99, green: -99 },
        state: -99,
    }
    card = popAnElementFromSet(Available_card_sets[tier-1])
    if(card !== undefined){
        update_card_counter()
        game_components.cards[tier-1][card].state = 1
        card_frame.data = game_components.cards[tier-1][card]
    }
}