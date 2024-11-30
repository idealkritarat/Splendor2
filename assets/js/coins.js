class Coins extends HTMLElement {
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
            central_money= {
                black: 0,
                white: 0,
                red: 0,
                blue: 0,
                green: 0,
                gold: 0,
            }
        } = this._data;
        this.className = `w-full h-[25%] flex px-10 cursor-pointer bg-slate-200 bg-opacity-50 rounded-3xl`
        this.id = "central-coin-row"
        this.innerHTML = ``
        for(const [k,v] of Object.entries(central_money)){
            this.innerHTML += `
                <div class="w-full h-full grid place-items-center">
                    <div id="central-coin-0" class="size-24 bg-[${k}] rounded-full grid place-items-center border-[2px] border-black">
                        <div class="text-white mix-blend-difference text-[30px] font-bold">${v}</div>
                    </div>
                </div>
            `
        }
    }
}

customElements.define('coins-component', Coins);


class CoinsSelect extends HTMLElement {
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
            central_money= {
                black: 0,
                white: 0,
                red: 0,
                blue: 0,
                green: 0,
                gold: 0,
            }
        } = this._data;
        this.className = `flex items-center`
        this.id = "coin-selection-area"
        this.innerHTML = ``
        for(const [k,v] of Object.entries(central_money)){
            if(k=="gold")continue
            this.innerHTML += `
                <div class="w-full h-full grid place-items-center">
                    <div role="select-coin" id="central-coin-select-${k}" class="size-24 bg-[${k}] rounded-full grid place-items-center border-[2px] border-black cursor-pointer">
                        <div class="text-white mix-blend-difference text-[30px] font-bold">${v}</div>
                    </div>
                </div>
            `
        }
        $("[role=select-coin]").click(function (e) { 
            let coin_color = this.id.split("-").slice(-1)[0]
            if(!Can_Pick(coin_color) || Pick_Max())return
            document.querySelector("coins-selection-component").data.central_money[coin_color] -= 1
            document.querySelector("coins-selected-component").data.central_money[coin_color] += 1
            document.querySelector("coins-selection-component").update()
            document.querySelector("coins-selected-component").update()
            // console.log(game_components.central_money)
            if(Pick_Max()){
                $("[role=select-coin]").addClass("opacity-20");
            }

        });

        $.each($("[role=select-coin]"), function (indexInArray, valueOfElement) { 
            if(this.querySelector("div").innerHTML == 0){
                $(this).addClass("opacity-20");
            } else {
                $(this).removeClass("opacity-20");
            }
        });
    }
}

customElements.define('coins-selection-component', CoinsSelect);

function sum(x) { 
    let a = 0
    for(const [k,v] of Object.entries(x)){
        a+=v
    }
    return a
}

function Can_Pick(coin_color){
    if(document.querySelector("coins-selection-component").data.central_money[coin_color] <= 0)return false
    if(document.querySelector("coins-selected-component").data.central_money[coin_color] == 1 && 
    sum(document.querySelector("coins-selected-component").data.central_money) == 2) return false
    if(document.querySelector("coins-selected-component").data.central_money[coin_color] == 1 &&
    document.querySelector("coins-selection-component").data.central_money[coin_color] == 2)return false
    if(sum(game_components.players[player_turn].balance)+sum(document.querySelector("coins-selected-component").data.central_money)>=10) return false
    return true
}

function Pick_Max(){
    if(sum(document.querySelector("coins-selected-component").data.central_money) == 3)return true
    for(const [k,v] of Object.entries(document.querySelector("coins-selected-component").data.central_money))if(v==2)return true
    if(document.querySelector("coins-selected-component").data.central_money["gold"] == 1)return true
    return false
}

function update_coins(){
    document.querySelector("coins-component").data = {central_money : {...game_components.central_money}}
    document.querySelector("coins-selection-component").data = {central_money : {...game_components.central_money}}
}