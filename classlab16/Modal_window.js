import React from 'react'
import './App.css'

const ModalWindow = function(){
    // function to close the modal window
    const closemodalwindow = ()=>{
        const modalwindow = document.querySelector(".modalwindow")
        modalwindow.style.display = 'none'
    }

    return(<>
        {/* modal window */}
        <section className = "modalwindow">
            <div className = "modalcontent">
                <header className = "modalheader">
                    <p>
                        Add Feedback <span> className="modalusername"</span>
                    </p>

                    <p> className="closemodal" onClick = {closemodalwindow}&#x58;</p>
                </header>

                <main className="modalbody">
                    <input className="commentarea" type="text" placeholder="Type your comments..."/>
                    <button className="btnpostfeedback">Post Feedback</button>
                </main>
            </div>
        </section>
    
    </>)
}
export default ModalWindow