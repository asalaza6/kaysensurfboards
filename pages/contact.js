

export default function Contact() {
  return (
    <div className = "container">
      <p className = "message">Fill the form below and I will contact you as soon as possible.</p>
      <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Phone Number: <input type="tel" name="number" /></label>
      </p>
      <p>
        <label>Description: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Submit</button>
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