class CoinsSelected extends HTMLElement {
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
        this.id = "coin-selected-area"
        this.innerHTML = ``
        for(const [k,v] of Object.entries(central_money)){
            this.innerHTML += `
                <div class="w-full h-full grid place-items-center">
                    <div role="selected-coin" id="central-coin-selected-${k}" class="size-24 bg-[${k}] rounded-full grid place-items-center border-[2px] border-black cursor-pointer">
                        <div class="text-white mix-blend-difference text-[30px] font-bold">${v}</div>
                    </div>
                </div>
            `
        };

        $("[role=selected-coin]").click(function (e) { 
            let coin_color = this.id.split("-").slice(-1)[0]
            if(document.querySelector("coins-selected-component").data.central_money[coin_color] == 0)return
            document.querySelector("coins-selection-component").data.central_money[coin_color] += 1
            document.querySelector("coins-selected-component").data.central_money[coin_color] -= 1
            document.querySelector("coins-selection-component").update()
            document.querySelector("coins-selected-component").update()
        });

        $.each($("[role=selected-coin]"), function (indexInArray, valueOfElement) { 
            if(this.querySelector("div").innerHTML == 0){
                $(this).addClass("opacity-0");
            } else {
                $(this).removeClass("opacity-0");
            }
        });


    }
}

customElements.define('coins-selected-component', CoinsSelected);

function reset_selected_coins(){
    document.querySelector("coins-selected-component").data = 
    {
        central_money: {
            black: 0,
            white: 0,
            red: 0,
            blue: 0,
            green: 0,
            gold: 0,
        }
    }
    
    update_coins();
    
}