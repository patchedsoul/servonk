
// base64 encoding done using https://dopiaza.org/tools/datauri/index.php
const DEFAULT_SITES = [
    {
        name: "Servo",
        url: "https://servo.org",
        icon: "data:image/png;base64,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"
    },
    {
        name: "Google",
        url: "https://google.com",
        icon: "data:image/x-icon;base64,AAABAAIAEBAAAAEAIABoBAAAJgAAACAgAAABACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///zD9/f2W/f392P39/fn9/f35/f391/39/ZT+/v4uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Cf39/Zn///////////////////////////////////////////39/ZX///8IAAAAAAAAAAAAAAAA/v7+Cf39/cH/////+v35/7TZp/92ul3/WKs6/1iqOv9yuFn/rNWd//j79v///////f39v////wgAAAAAAAAAAP39/Zn/////7PXp/3G3WP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP+Or1j//vDo///////9/f2VAAAAAP///zD/////+vz5/3G3V/9TqDT/WKo6/6LQkf/U6cz/1urO/6rUm/+Zo0r/8IZB//adZ////v7///////7+/i79/f2Y/////4nWzf9Lqkj/Vqo4/9Xqzv///////////////////////ebY//SHRv/0hUL//NjD///////9/f2U/f392v////8sxPH/Ebzt/43RsP/////////////////////////////////4roL/9IVC//i1jf///////f391/39/fr/////Cr37/wW8+/+16/7/////////////////9IVC//SFQv/0hUL/9IVC//SFQv/3pnX///////39/fn9/f36/////wu++/8FvPv/tuz+//////////////////SFQv/0hUL/9IVC//SFQv/0hUL/96p7///////9/f35/f392/////81yfz/CrL5/2uk9v///////////////////////////////////////////////////////f392P39/Zn/////ks/7/zdS7P84Rur/0NT6///////////////////////9/f////////////////////////39/Zb+/v4y//////n5/v9WYu3/NUPq/ztJ6/+VnPT/z9L6/9HU+v+WnfT/Ul7t/+Hj/P////////////////////8wAAAAAP39/Z3/////6Or9/1hj7v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9sdvD////////////9/f2YAAAAAAAAAAD///8K/f39w//////5+f7/paz2/11p7v88Suv/Okfq/1pm7v+iqfX/+fn+///////9/f3B/v7+CQAAAAAAAAAAAAAAAP///wr9/f2d///////////////////////////////////////////9/f2Z/v7+CQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f2Z/f392/39/fr9/f36/f392v39/Zj///8wAAAAAAAAAAAAAAAAAAAAAPAPAADAAwAAgAEAAIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIABAACAAQAAwAMAAPAPAAAoAAAAIAAAAEAAAAABACAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/g3+/v5X/f39mf39/cj9/f3q/f39+f39/fn9/f3q/f39yP39/Zn+/v5W////DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f2c/f399f/////////////////////////////////////////////////////9/f31/f39mv7+/iMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/gn9/f2K/f39+////////////////////////////////////////////////////////////////////////////f39+v39/Yf///8IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4k/f390v////////////////////////////////////////////////////////////////////////////////////////////////39/dD///8iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////MP39/er//////////////////////////+r05v+v16H/gsBs/2WxSf9Wqjj/Vqk3/2OwRv99vWX/pdKV/97u2P////////////////////////////39/ej+/v4vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/iT9/f3q/////////////////////+v15/+Pxnv/VKk2/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/36+Z//d7tf///////////////////////39/ej///8iAAAAAAAAAAAAAAAAAAAAAAAAAAD///8K/f390//////////////////////E4bn/XKw+/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1apN/+x0pv///////////////////////39/dD///8IAAAAAAAAAAAAAAAAAAAAAP39/Yv/////////////////////sdij/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9TqDT/YKU1/8qOPv/5wZ////////////////////////39/YcAAAAAAAAAAAAAAAD+/v4l/f39+////////////////8Lgt/9TqDT/U6g0/1OoNP9TqDT/U6g0/1OoNP9utlT/n86N/7faqv+426v/pdKV/3u8ZP9UqDX/U6g0/3egN//jiUH/9IVC//SFQv/82MP//////////////////f39+v7+/iMAAAAAAAAAAP39/Z3////////////////q9Ob/W6w+/1OoNP9TqDT/U6g0/1OoNP9nskz/zOXC/////////////////////////////////+Dv2v+osWP/8YVC//SFQv/0hUL/9IVC//WQVP/++fb//////////////////f39mgAAAAD+/v4O/f399v///////////////4LHj/9TqDT/U6g0/1OoNP9TqDT/dblc//L58P/////////////////////////////////////////////8+v/3p3f/9IVC//SFQv/0hUL/9IVC//rIqf/////////////////9/f31////DP7+/ln////////////////f9v7/Cbz2/zOwhv9TqDT/U6g0/2KwRv/v9+z///////////////////////////////////////////////////////738//1kFT/9IVC//SFQv/0hUL/9plg///////////////////////+/v5W/f39nP///////////////4jf/f8FvPv/Bbz7/yG1s/9QqDz/vN2w//////////////////////////////////////////////////////////////////rHqP/0hUL/9IVC//SFQv/0hUL//vDn//////////////////39/Zn9/f3L////////////////R878/wW8+/8FvPv/Bbz7/y7C5P/7/fr//////////////////////////////////////////////////////////////////ere//SFQv/0hUL/9IVC//SFQv/718H//////////////////f39yP39/ez///////////////8cwvv/Bbz7/wW8+/8FvPv/WNL8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//rIqv/////////////////9/f3q/f39+v///////////////we9+/8FvPv/Bbz7/wW8+/993P3///////////////////////////////////////SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/+cGf//////////////////39/fn9/f36////////////////B737/wW8+/8FvPv/Bbz7/33c/f//////////////////////////////////////9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/6xaX//////////////////f39+f39/e3///////////////8cwvv/Bbz7/wW8+/8FvPv/WdP8///////////////////////////////////////0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//SFQv/0hUL/9IVC//vVv//////////////////9/f3q/f39y////////////////0bN/P8FvPv/Bbz7/wW8+/8hrvn/+/v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////39/cj9/f2c////////////////ht/9/wW8+/8FvPv/FZP1/zRJ6/+zuPf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////f39mf7+/lr////////////////d9v7/B7n7/yB38f81Q+r/NUPq/0hV7P/u8P3////////////////////////////////////////////////////////////////////////////////////////////////////////////+/v5X////D/39/ff///////////////9tkPT/NUPq/zVD6v81Q+r/NUPq/2Fs7//y8v7////////////////////////////////////////////09f7//////////////////////////////////////////////////f399f7+/g0AAAAA/f39n////////////////+Tm/P89Suv/NUPq/zVD6v81Q+r/NUPq/1Bc7f/IzPn/////////////////////////////////x8v5/0xY7P+MlPP////////////////////////////////////////////9/f2cAAAAAAAAAAD+/v4n/f39/P///////////////7W69/81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v9ZZe7/k5v0/6609/+vtff/lJv0/1pm7v81Q+r/NUPq/zVD6v+GjvL//v7//////////////////////////////f39+/7+/iQAAAAAAAAAAAAAAAD9/f2N/////////////////////6Cn9f81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v+BivL////////////////////////////9/f2KAAAAAAAAAAAAAAAAAAAAAP7+/gv9/f3V/////////////////////7W69/8+S+v/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/P0zr/7q/+P///////////////////////f390v7+/gkAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3r/////////////////////+Xn/P94gfH/NkTq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NUPq/zVD6v81Q+r/NkTq/3Z/8f/l5/z///////////////////////39/er+/v4kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/jL9/f3r///////////////////////////k5vz/nqX1/2p08P9IVez/OEbq/zdF6v9GU+z/aHLv/5qh9f/i5Pz////////////////////////////9/f3q////MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7+/ib9/f3V/////////////////////////////////////////////////////////////////////////////////////////////////f390v7+/iQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wr9/f2N/f39/P///////////////////////////////////////////////////////////////////////////f39+/39/Yv+/v4JAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/v4n/f39n/39/ff//////////////////////////////////////////////////////f399v39/Z3+/v4lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v7+Dv7+/lr9/f2c/f39y/39/e39/f36/f39+v39/ez9/f3L/f39nP7+/ln+/v4OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AA///AAD//AAAP/gAAB/wAAAP4AAAB8AAAAPAAAADgAAAAYAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAcAAAAPAAAAD4AAAB/AAAA/4AAAf/AAAP/8AAP//wAP/"
    },
    {
        name: "Wikipedia",
        url: "https://wikipedia.org",
        icon: "data:image/vndmicrosofticon;base64,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"
    }
];

class IconGrid extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render = hyperHTML.bind(this);

        let stored = window.localStorage.getItem("homescreen-sites");
        this.sites = stored ? JSON.parse(stored) : DEFAULT_SITES;

        window.localStorage.setItem("homescreen-sites", JSON.stringify(this.sites));

        window.addEventListener("storage", e => {
            if (e.key === "homescreen-sites") {
                this.sites = JSON.parse(e.newValue);
                this.update();
            }
        });

        this.update();
    }

    handleEvent(event) {
        let target = event.currentTarget;
        let href = target.getAttribute("href");
        console.log(`Opening ${target.localName} ${href}`);
        window.parent.postMessage({ from: "homescreen", action: "open-url", href }, "*");
    }

    update() {
        this.render`
        <div class="grid">
            ${this.sites.map(site => hyperHTML.wire(site)
                `<div class="icon" href=${site.url} onclick=${this}>
                   <img src=${site.icon}></img>
                   <div class="name">${site.name}</div>
                 </div>`)}
        </div>
        `;
    }
}

customElements.define("icon-grid", IconGrid);
