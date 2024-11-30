let balance_display = balance => {
    balance_Element = ''
    for(const [k,v] of Object.entries(balance)) {
        balance_Element += `
            <div class="w-full h-full grid place-items-center">
        `
        if(v) balance_Element += `
                <div class="size-[40px] rounded-full bg-[${k}] grid place-items-center">
                    <div class="text-white mix-blend-difference">${v}</div>
                </div>
        `
        balance_Element += `
            </div>
        `
    }
    return balance_Element
}

let owned_mine_display = owned_mine => {
    owned_mine_Element = ''
    for(const [k,v] of Object.entries(owned_mine)) {
        owned_mine_Element += `
            <div class="grid place-items-center w-full h-full">
        `
        if(v) owned_mine_Element += `
            <div class="border-[2px] border-[${k}] rounded w-3/4 h-full bg-[#EEE] grid place-items-center">
                <div class="text-white mix-blend-difference">${v}</div>
            </div>
        `
        owned_mine_Element += `
            </div>
        `
    }
    // console.log(owned_mine)
    return owned_mine_Element
}

class Player extends HTMLElement {
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
            player_index= -1,
            balance= { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            owned_mine= { black: 0, white: 0, red: 0, blue: 0, green: 0, gold: 0 },
            score= 0
        } = this._data;
        if (player_index == -1) this.className = `w-full h-full border-[3px] border-black rounded-xl flex flex-col p-3 opacity-20 gap-1`
        else {
            if (player_index == player_turn){
                this.className = `w-full h-full border-[3px] border-red-500 bg-[#EEE] rounded-xl flex flex-col p-3 gap-1`
            } else {
                this.className = `w-full h-full border-[3px] border-black rounded-xl flex flex-col p-3 gap-1`
            }
        }
        this.id = `player-${player_index+1}`
        this.innerHTML = `
            <div class="w-full h-full flex items-center justify-between px-6">
                <div class="bg-red-500 p-4 px-10 text-white rounded-2xl font-bold">${score}</div>
                <div class="font-bold">Player ${player_index+1}</div>
            </div>
            <div class="w-full h-full flex items-center">
                ${balance_display(balance)}
            </div>
            
            <div class="w-full h-full flex items-center">
                ${owned_mine_display(owned_mine)}
            </div>
        `;
        
        
    }
}

customElements.define('player-component', Player);


class Player_Zone extends HTMLElement {
    constructor() {
        super();
        this._data = {};
    }

    connectedCallback() {
        this.update();
    }

    update() {
        this.className = `w-[30%] h-full border border-black flex flex-col gap-5 p-5`
        this.innerHTML = `
            <player-component></player-component>
            <player-component></player-component>
            <player-component></player-component>
            <player-component></player-component>
        `;
        
        
    }
}

customElements.define('player-zone-component', Player_Zone);

function update_players(){
    for(let i=0;i<number_of_player;++i){
        document.querySelectorAll("player-component")[i].data = {...game_components.players[i]}
    }
}