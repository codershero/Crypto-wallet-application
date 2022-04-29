import React from "react";
import Link from "next/link";
import Image from "next/image";
import RestoreLogo from "../../public/assets/clock.png";
import SearchingLogo from "../../public/assets/searching.png";
import Logo from "../../public/assets/wallet.png";
const Restore = () => {
  return (
    <div className="container-fluid">
      <div className="restore-logo-box">
        <Image src={Logo} alt="restore Logo image" />
      </div>

      <Link href="/recovery" passHref>
        <div className="resoter-box">
          <div className="flex-box">
            <div className="restoreImg">
              <Image src={RestoreLogo} alt="resotre icon logo" />
            </div>
            <div className="restore-content">
              <strong>Restore with a recovery prhase or private key</strong>
            </div>
          </div>
          <div className="info-content">
            <p className="mt-3">
              Use your recovery prhase from WalletConnect or Another crypto
              Wallet
            </p>
          </div>
        </div>
      </Link>
      <div className="resoter-box">
        <div className="flex-box">
          <div className="restoreImg searchImg">
            <Image src={SearchingLogo} alt="SearchingLogo icon logo" />
          </div>
          <div className="restore-content">
            <strong>Watch an Ethereum address</strong>
          </div>
        </div>
        <div className="info-content">
          <p className="mt-3">Watch a public address or ENC Name</p>
        </div>
      </div>
    </div>
  );
};

export default Restore;
