import { useState } from "react";
import Head from "next/head";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "../styles/Home.module.css";
import Image from "next/image";
import PrivacyLogo from "../public/assets/wallet.png";
import WalletPage from "./wallet";
function Home() {
  const [showWalletPage, setShowWalletPage] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleShowPage = ()=>{
    setShowWalletPage(true)
  }
  return (
    <>
      <Head>
        <title>Wallet-Connect</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Polkadot Wallet is a mobile wallet company for Ethereum and ERC20/ERC223 tokens. It provides provide a fully security audited system that makes it simple to store your cryptocurrency. Polkadot applications, designed for Android."
        />
        {/* meta description for SEO */}
      </Head>
      <section>
        {showWalletPage ? (
          <WalletPage/>
        ) : (
          <div className={classes.boxSize}>
            <div className={classes.privacyHeader}>
              <div className={classes.logoBox}>
                <Image
                  src={PrivacyLogo}
                  alt="privacy logo"
                />
              </div>
              <h3><span className={classes.iconTitle}>Privacy Policy</span></h3>
            </div>
            <div className={classes.policyContents}>
              <div className={classes.about}>
                <h3>About us</h3>
                <p>
                  {" "}
                  Polkadot Wallet is a mobile wallet company for Ethereum and
                  ERC20/ERC223 tokens. It provides provide a fully security
                  audited system that makes it simple to store your
                  cryptocurrency. Polkadot applications, designed for Android.
                </p>
              </div>
              <div className={classes.acceptance}>
                <h3>Acceptance of Policy</h3>
                <p>
                  Your privacy is important to us. At Polkadot Wallet, we follow
                  a few fundamental principles: We don’t ask you for personally
                  identifiable information (defined below).
                </p>
              </div>
              <div className={classes.contactUs}>
                <h3>Contact Us</h3>
                <p>
                  We’d be happy to answer them. Shoot us an email or send us a
                  note: Email: support@PolkadotWallet.com Mailing Address: DApps
                  Platform, Inc. 548 Market St PMB 96630 San Francisco,
                  California 94104-5401 US Thanks for reading our Privacy
                  Policy!
                </p>
              </div>
              <div className="contact-us">
                <p>
                  <b>Last Update :</b> May 2021
                </p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={checked}
                    onChange={handleChange} />
                  <label style={{cursor:"pointer"}} className="form-check-label" htmlFor="flexCheckChecked">
                    I agree with terms of service
                  </label>
                </div>
                <br />
              </div>
              <button onClick={handleShowPage} className={classes.continueBtn}>
                <span>Continue</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
export default Home;
