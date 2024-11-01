import './AboutSection.css'

const AboutSection = () => {
    
    function onclickhandler(){
        window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTthgtnXrzxtmQpxbjKBtxhtrMXbzstvBFvWMCVDbkVZKXSWMhWvVPbNQQjtzxPfWTLxvc"
    }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section-content container">
        <h2 className="contact-section-heading">Contact Me</h2>
        <h3 className="contact-section-sub-heading">
          Questions, thoughts, or just want to say hello?
        </h3>

        <form action="#" className="contact-form">
          <div className="form-field">
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-field">
            <input type="email" placeholder="Enter your email address" />
          </div>

          <div className="form-field">
            <input type="text" placeholder="Enter your subject" />
          </div>

          <div className="form-field">
            <textarea
              name=""
              id="my-textarea"
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="button-field">
            <button onClick={onclickhandler}  className="btn form-btn">
              Send Message
              </button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default AboutSection