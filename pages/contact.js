

export default function Contact() {
  return (
    <div className = "container">
      <p className = "message">Fill the form below and I will contact you as soon as possible.</p>
      <form netlify-honeypot='bot-field' name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    <style jsx>{`
      @font-face {
        font-family: 'BalooThambi';
        src:url('/fonts/BalooThambi2-Regular.ttf');
      }
      @font-face {
        font-family: 'BalooThambi-SemiBold';
        src:url('/fonts/BalooThambi2-SemiBold.ttf');
      }
      .message {
        font-family: 'BalooThambi-SemiBold';
      }
      .container {
        font-family: 'BalooThambi';
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items:center;
      }
    `}</style>
  </div>
  );
}