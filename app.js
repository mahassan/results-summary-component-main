import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
class Results extends LitElement{
    static styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&family=Overpass:wght@400;700&display=swap');
     div.container{
        //display: flex;
        text-align: center;
     }
     :host p,
     :host h1{
        margin:0;
     }
     header{
        height: 353px;
        padding-top:26px;
        background: linear-gradient( hsl(252, 100%, 67%), hsl(241, 81%, 54%));
        border-bottom-left-radius:40px;
        border-bottom-right-radius:40px;
        display: flex;
        flex-direction: column;
        align-items: center;

     }
     div.circular{
        height: 134px;
        width: 143px;
        background: linear-gradient(hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
     }
     div.circular>h1{
        color:white;
     }
     div.circular>p{
        color:hsl(241, 100%, 89%)
     }
     ul{
        padding:0 33px;
        margin:0
     }
     li{
        list-style:none;
        display: flex;
        justify-content: center;
        min-height:58px;
        min-width:310px;
        margin-bottom:18px;
        border-radius:10px;
        align-items:center;
     }
     li>picture{
        padding-left:18px;
        padding-right:47px;
     }
     li:first-child{
        background: hsla(241, 100%, 89%,0.2);
        color: hsl(234, 85%, 45%)
     }
     :host li:nth-child(2){
        background:hsla(39, 100%, 56%, 0.2);
     }
     li:nth-child(3){
        background: hsla(166, 100%, 37%, 0.2);
        color: hsl(166, 100%, 37%)
     }
     li>div:first-of-type{
        margin-right:79px;
     }
     li:last-of-type{
        background:hsla(234, 85%, 45%, 0.2);
     }
     button{
        background: hsl(224, 30%, 27%);
        border:0;
        color: #fff;
        padding:21px 102px;
        border-radius:50px;
     }
    `
    render(){
        const header = html`
            <div class='container'>
                <header>
                    <strong><p>Your Results</p></strong>
                    <div class='circular'>
                        <h1>76</h1>
                        <p>of 100</p>
                    </div>
                </header>
                <main>
                    <h1>Summary</h1>
                    <ul>
                        <li>
                            <picture>
                                <img src='./assets/images/icon-reaction.svg' alt='reaction' />
                            </picture>
                            <div>
                                Reaction
                            </div>
                            <div>
                                80/100
                            </div>
                        </li>

                        <li>
                            <picture>
                                <img src='./assets/images/icon-memory.svg' alt='reaction' />
                            </picture>
                            <div>
                                Memory
                            </div>
                            <div>
                                92/100
                            </div>
                        </li>
                        <li>
                            <picture>
                                <img src='./assets/images/icon-verbal.svg' alt='reaction' />
                            </picture>
                            <div>
                                Verbal
                            </div>
                            <div>
                                61/100
                            </div>
                        </li>
                        <li>
                            <picture>
                                <img src='./assets/images/icon-visual.svg' alt='reaction' />
                            </picture>
                            <div>
                                Visual
                            </div>
                            <div>
                                72/100
                            </div>
                            </li>
                     </ul>
                </main>
                <footer>
                    <button>Continue</button>
            </div>
        `
        return html`
            ${header}
        
        `
    }
}

customElements.define('result-summary', Results)