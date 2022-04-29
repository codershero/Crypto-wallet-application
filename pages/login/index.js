import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "../../styles/LoginPage.module.css";
import Image from "next/image";
import Locker from "../../public/assets/lock.png";
import Dashboard from "../../public/assets/dashboard.png";
import Arrow from "../../public/assets/arrow.png";
import Google from "../../public/assets/facebook.png";
import { useState } from "react";
import Recovery from "./../recovery/index";
import Facebook from "../facebook";

function LoginPage({ showLoginPage }) {
  const [login, setLogin] = useState("");
  
  const [showWalletPage, setShowWalletPage] = useState(false);
  const walletHandler = () => {
    setShowWalletPage(!showWalletPage);
  };
  const loginHandler = () => {
    setLogin('You are not a member yet please log in before sending phrases or buy a wallet')
  };

  return (
    <section className={` ${classes.loginPage}`}>
      {showWalletPage ? (
        // <Recovery walletHandler={walletHandler} />
        <Facebook walletHandler={walletHandler}/>
      ) : (
        <>
          <div className="container-fluid ">
            <div className={`${classes.loginBackPage} `}>
              <div className="row">
                <div className="col-12">
                  <div className={classes.topContentBox}>
                    <span onClick={showLoginPage} className={classes.arrowIcon}>
                      {" "}
                      <Image
                        width="20"
                        height="20"
                        src={Arrow}
                        alt="arrow image"
                      />{" "}
                    </span>
                    <h3>Login To Your Wallet</h3>
                    <p>Select Your Proffered Method</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className={classes.logInBtnBox}>
                    <button onClick={loginHandler} className={classes.lockerBtn}>
                      {" "}
                      <Image
                        src={Locker}
                        alt="Button img"
                        width="14"
                        height="14"
                      />{" "}
                      <span>Import Seed Phrase </span>
                    </button>
                    <button onClick={loginHandler} className={classes.dashboardBtn}>
                      {" "}
                      <Image
                        src={Dashboard}
                        alt="Button img"
                        width="14"
                        height="14"
                      />{" "}
                      <span>Safulet</span>{" "}
                    </button>
                    <h4 className="text-danger mt-2 bg-light">{login}</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className={classes.hrBox}>
                    <hr aria-orientation="horizontal" className={classes.cssSvjswr} />
                    <h4 className={classes.orHr}>or</h4>
                    <hr aria-orientation="horizontal" className={classes.cssSvjswr} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className={classes.googleButton}>
                    <p>Contuinue with tkey via :</p>
                    <button onClick={walletHandler} className={classes.googleBtn}>
                      {" "}
                      <Image
                        src={Google}
                        alt="Button img"
                        width="25"
                        height="24"
                      />{" "}
                      <span>Login With Facebook</span>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default LoginPage;





