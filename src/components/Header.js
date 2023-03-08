import React from "react";
import Navbar from "./Navbar";

class GameM{
    constructor(name, desc, price, img) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.img = img;
    }
    
}

const arr = [];
arr.push(new GameM("GTA: SA", "90`s of LS", 15, "https://i.pinimg.com/originals/cf/a8/d1/cfa8d140d265f4cbe5ff76fc8d361e89.jpg"));
arr.push(new GameM("GTA: VC", "80`s of VC", 8, "https://m.media-amazon.com/images/I/51-IGGUe5ZL.png"));
arr.push(new GameM("Prototype: 2", "Denchik loh", 2, "https://allvectorlogo.com/img/2016/04/prototype-2-logo.png"));
arr.push(new GameM("FIFA 2023", "Legends of football", 12, "https://www.channelstv.com/wp-content/uploads/2022/09/Fifa-23-1.jpg"));
arr.push(new GameM("GTA: 3", "00`s of LC", 6, "https://www.pngitem.com/pimgs/m/9-91869_grand-theft-auto-gta-3-logo-png-transparent.png"));
arr.push(new GameM("GTA: V", "New Era of LS", 25, "https://media.rockstargames.com/rockstargames/img/global/news/upload/v_640x400.jpg"));


export default function Header() {
    // React.useState(async ()=>{
    //     console.log("im here");
    //     await fetch('/addgame')
    // }, [])

    // const [game, setGame] = React.useState([]);

    // React.useEffect(() => {
    //     getGame();
    // }, [])
    // const getGame = async () => {
    //     await fetch('/getgames')
    //         .then(cursor => cursor.json())
    //         .then(cursor => setGame(cursor.cursor));
    // }
    // if (!game) {
    //     return <div>
    //         <div>Загрузка...</div>
    //     </div>
    // }
    // else if (game == null || game?.length <= 0) {
    //     return <div>
    //         <div>Игры кончились</div>
    //         <div onClick={getGame} className="button">Обновить</div>
    //     </div>
    // }

    return (
        <header>
            <div>
                <span className="logo">Dope Games ☼</span>
                <Navbar />
            </div>
            <div className="presentation">
                <div className='flex_content'>
                    {Object.entries(arr).map((cursor, i) => {
                        if(cursor[1].price == "0" || cursor[1].price == "FREE"){
                            return <div key={i} className="card">
                            <img src={cursor[1].img} className="card-img"></img>
                            <h2>{cursor[1].name}</h2>
                            <h5>{cursor[1].desc}</h5>
                            <h3 className="buy-btn">FREE</h3>
                        </div>
                        }
                        else {
                            return( <div key={i} className="card">
                                <img src={cursor[1].img} className="card-img"></img>
                                <h2>{cursor[1].name}</h2>
                                <h5>{cursor[1].desc}</h5>
                                <h3 className="buy-btn">{cursor[1].price}$</h3>
                            </div>
                    )}
                    }
                    )}
                </div>
            </div>
        </header>
    )
}

