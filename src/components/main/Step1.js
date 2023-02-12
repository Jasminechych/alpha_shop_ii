// import components
import Input from "../common/Input.js";
import Select from "../common/Select.js";

// import css
import style from "./Step1.module.scss";

const titleData = [
  { value: "mr", title: "先生" },
  { value: "ms", title: "女士" },
  { value: "mx", title: "不明" },
];

const locationData = [
  { value: "", title: "請選擇縣市" },
  { value: "KLU", title: "基隆市" },
  { value: "TPH", title: "新北市" },
  { value: "TPE", title: "臺北市" },
  { value: "TYC", title: "桃園市" },
  { value: "HSH", title: "新竹縣" },
  { value: "HSC", title: "新竹市" },
  { value: "MAC", title: "苗栗市" },
  { value: "MAL", title: "苗栗縣" },
  { value: "TXG", title: "臺中市" },
  { value: "CWH", title: "彰化縣" },
  { value: "CWS", title: "彰化市" },
  { value: "NTC", title: "南投市" },
  { value: "NTO", title: "南投縣" },
  { value: "YLH", title: "雲林縣" },
  { value: "CHY", title: "嘉義縣" },
  { value: "CYI", title: "嘉義市" },
  { value: "TNN", title: "臺南市" },
  { value: "KHH", title: "高雄市" },
  { value: "IUH", title: "屏東縣" },
  { value: "ILN", title: "宜蘭縣" },
  { value: "PTS", title: "宜蘭市" },
  { value: "HWA", title: "花蓮縣" },
  { value: "HWC", title: "花蓮市" },
  { value: "TTC", title: "臺東市" },
  { value: "TTT", title: "臺東縣" },
  { value: "PEH", title: "澎湖縣" },
  { value: "KMN", title: "金門縣" },
  { value: "LNN", title: "連江縣" },
];

function Step1({ title }) {
  return (
    <>
      <h3 className={style.formTitle}>{title}</h3>
      <div className={style.formPanel}>
        <Select name="稱謂" data={titleData} className={style.title} />
        <Input
          name="姓名"
          type="text"
          placeholder="請輸入姓名"
          className={style.name}
        />
        <Input
          name="電話"
          type="text"
          placeholder="請輸入行動電話"
          className={style.tel}
        />
        <Input
          name="email"
          type="email"
          placeholder="請輸入電子郵件"
          className={style.email}
        />
        <Select name="縣市" data={locationData} className={style.location} />
        <Input
          name="地址"
          type="text"
          placeholder="請輸入地址"
          className={style.address}
        />
      </div>
    </>
  );
}

export default Step1;
