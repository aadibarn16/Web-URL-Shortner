import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

  
function URLShort() {

    const [shortenedLink, setShortenedLink] = useState("");
    const [userInput, setUserInput] = useState("");

    const fetchData = async () => {
        var x = document.getElementById('.btn_submit');
        try {
            const response = await axios(
                `https://api.shrtco.de/v2/shorten?url=${userInput}`
            );
            setUserInput(response.data.result.full_short_link)
        } catch (e) {
            console.log(e);
            alert("Invalid URL");
        }
    };

    const isOnline = async () => {

        if (navigator.onLine) {

        } else {
            alert("Offline! No Internet Connection");
        }
    }

    return (
        <>
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
            <nav>
                <div id="tb">
                    <div class="tb1">
                        <ul>
                            <li class="active"><a href="#" class="t1">&nbsp;</a></li>
                            <li><a href="https://www.flipkart.com" class="t2">&nbsp;</a></li>
                            <li><a href="https://www.myntra.com" class="t3">&nbsp;</a></li>
                        </ul>
                    </div>
                </div>


            </nav>
            
            
            <div id="container">
            

                <label class="shortImg"></label>
                 
                <div class="color" >
                    <div class="Outer-Box">
                        <h1 class="text">
                            Web <span class="text1">URL Shortner</span>
                        </h1>
                        
                        <div>
                            <div class="in">
                                <input
                                    class="outline1"
                                    type="text"
                                    placeholder=" Past link to be Shorten..."
                                    value={userInput}
                                    name="inputB" onClick={() => { isOnline(); }}
                                    onChange={(e) => {
                                        setUserInput(e.target.value);
                                    }} />
                                <button class="btn_submit"
                                    onClick={() => {
                                        fetchData();
                                    }}
                                >
                                    Shorten
                                </button>
                            </div>
                            <div class="mt">
                                {shortenedLink}
                                <CopyToClipboard text={userInput}>
                                    <button class="btn">
                                        Copy URL to Clipboard
                                    </button>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                </div>
            
    
            </div><label class="gif"></label></>
            
    );
}

export default URLShort;
