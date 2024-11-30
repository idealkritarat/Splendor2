let king_cost_display = cost => {
    let cost_Elements = ""
    for(const [k,v] of Object.entries(cost)){
        if(v==0) continue
        cost_Elements += `<div class="flex items-center gap-1.5"><div class="w-3.5 h-5 bg-[${k}] border border-black"></div>${v}</div>`
    }
    return cost_Elements
}

class King extends HTMLElement {
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
            color= "Black",
            points= 4,
            cost= {
                black: 0,
                white: 3,
                red: 3,
                blue: 3,
                green: 0
            }
        } = this._data;
        this.className = `border-[${color}] border-[3px] size-32 rounded-2xl bg-[#EEE] flex flex-col justify-between p-2`
        this.innerHTML = `
                <div class="flex">
                    <p class="text-[25px] font-bold">${points}</p>
                </div> 
                <div class="flex items-end flex-wrap-reverse gap-1 w-3/4">
                    ${king_cost_display(cost)}
                </div>
        `;
    }
}

customElements.define('king-component', King);