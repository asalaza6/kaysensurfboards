

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
        <label>Phone Number: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Description: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    <style jsx>{`
      .message {
        padding: 20px;
        font-weight: bold;
      }
      .container {
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items:center;
        
      }
    `}</style>
  </div>
  );
}