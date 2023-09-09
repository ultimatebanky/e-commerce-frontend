import "./contact.css"

const Contact = () => {
    return (
        <div className="container__1">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">10008 BISSONNET STREET</div>
                        <div className="text-two">CITY: HOUSTON 06, 77036</div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">+12675408687</div>
                        <div className="text-two">+234 7036322097</div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">devremight95@gmail.com</div>
                        <div className="text-two">info@remight.com</div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name"/>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email"/>
                        </div>
                        <div className="input-box message-box">

                        </div>
                        <div className="button">
                            <input type="button" value="Send Now"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact