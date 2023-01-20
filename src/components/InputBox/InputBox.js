import "./InputBox.css";

function InputBox() {
    return ( 
        <div className="input-flex-box">
            <div>
                <input type="text" placeholder="enter text here" className="text-box" />
            </div>
            <div>
                <div className="send-icon">
                </div>
            </div>
        </div>
     );
}

export default InputBox;