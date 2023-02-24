import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { ReactComponent as Facebook } from "src/assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "src/assets/icons/instagram.svg";
import { ReactComponent as Whatsapp } from "src/assets/icons/whatsapp.svg";

import style from "src/components/Footer/Footer.module.scss";

const customersService = [
  { id: 1, name: "運送說明" },
  { id: 2, name: "退換貨相關" },
  { id: 3, name: "付款資訊" },
  { id: 4, name: "FAQ" },
];
const aboutUs = [
  { id: 1, name: "品牌故事" },
  { id: 2, name: "媒體聯繫" },
  { id: 3, name: "Press Kit" },
];
const info = [
  { id: 1, name: "隱私權政策" },
  { id: 2, name: "Cookie" },
  { id: 3, name: "GDPR" },
];

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <Logo />
        <section className={style.infoSection}>
          <InfoTitle infoTitle="客戶服務" />
          <InfoItem infoItem={customersService} />
        </section>
        <section className={style.infoSection}>
          <InfoTitle infoTitle="關於我們" />
          <InfoItem infoItem={aboutUs} />
        </section>
        <section className={style.infoSection}>
          <InfoTitle infoTitle="資訊" />
          <InfoItem infoItem={info} />
        </section>
        <section className={style.infoSection}>
          <InfoTitle infoTitle="追蹤 ALPHA Shop" />
          <p className={style.infoItem}>+886 02123-45678</p>
          <span className={style.socialIcon}>
            <Facebook />
            <Instagram />
            <Whatsapp />
          </span>
        </section>
      </div>
    </footer>
  );
}

function InfoTitle({ infoTitle }) {
  return <h3 className={style.infoTitle}>{infoTitle}</h3>;
}

function InfoItem({ infoItem }) {
  return (
    <ul className={style.infoItemList}>
      {infoItem.map(({ id, name }) => {
        return (
          <li key={id} className={style.infoItem}>
            {name}
          </li>
        );
      })}
    </ul>
  );
}

export default Footer;
