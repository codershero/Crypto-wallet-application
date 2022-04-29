import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "../../styles/WalletPage.module.css";
import Image from "next/image";
import Logo from "../../public/assets/wallet.png";
import { useState } from "react";
import LoginPage from "./../login/index";

function WalletPage() {
  const [showLogin, setShowLogin] = useState(false);
  

  const showLoginPage = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      {showLogin ? (
        <LoginPage
        showLoginPage={showLoginPage} />
      ) : (
        <section className={classes.walletWrapper}>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-sm-11 col-md-11">
                <div className={classes.logoBox}>
                  <Image src={Logo} alt="Wallet Logo" width="100" height="100" />
                </div>
                <div className={classes.walletContent}>
                  <h2>Welcome to Walletconnect</h2>
                  <p>Secure and trusted multi-chain crypto wallet</p>
                </div>
                <div className="btn-box">
                  <button onClick={showLoginPage} className={classes.walletBtn}>
                    Using Existing Wallet
                  </button>
                  <button
                    onClick={showLoginPage}
                    className={classes.walletBtnCreate}
                  >
                    Create wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default WalletPage;
