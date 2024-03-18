import { FacebookFilled,TwitchFilled, YoutubeFilled } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
const AppFooter = () => {
  return (
    <div className="AppFooter">
    <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h4>Contact Us</h4>
            <hr/>
            <p>A-one Cafe Street</p>
            <p>Katan, Mahendranagar, 10400</p>
            <p>Phone: (+977) 9806405717</p>
            <p>Email: aonecafe123@gmail.com</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4>Opening Hours</h4>
            <hr/>
            <p>Monday - Friday: 8am - 8pm</p>
            <p>Saturday: 9am - 10pm</p>
            <p>Sunday: 10am - 6pm</p>
          </div>
          <div className="col-lg-4 col-md-12">
            <h4>Follow Us</h4>
            <hr/>
            <p>Stay connected with us on social media</p>
            <ul className="social-icons">
              <li><FacebookFilled
                style={{
                  fontSize:20,
                  borderRadius:10,
                  background:'white'
                }}
              /> Facebook</li>
               <li><TwitchFilled
                style={{
                  fontSize:20,
                  borderRadius:10,
                  background:'white'
                }}
              />Twitter</li>
               <li><YoutubeFilled
                style={{
                  fontSize:20,
                  borderRadius:10,
                  background:'white'
                }}
              />Youtube</li>
              
            </ul>
          </div>
        </div>
</div>
</div>
  )
}

export default AppFooter
