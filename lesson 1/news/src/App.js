const data = [
  {
    title: "Алим",
    img: "https://th.bing.com/th/id/OIP.gfNfaNsfQ3-DJ1dAjks6CwHaEK?rs=1&pid=ImgDetMain",
    desc: "Орчны цэцэрлэгээс түүсэн шинэхэн улаан алим, амттай бөгөөд шүүслэг",
  },
  {
    title: "Машин",
    img: "https://salgrom.fi/wp-content/uploads/2023/01/AdobeStock_139734995-scaled.jpeg",
    desc: "Гөлгөр хар өнгөтэй седан машин, хотын гудамжинд явахад тохиромжтой",
  },
  {
    title: "Уул",
    img: "https://mindmatters.ai/wp-content/uploads/sites/2/2022/08/todays-news-headlines-hot-breaking-stories-updates-3d-illustration-stockpack-adobe-stock-scaled.jpg",
    desc: "Алпын нуруунд орших цасаар хучигдсан өндөр уул, гайхалтай үзэсгэлэнтэй",
  },
  {
    title: "Нохой",
    img: "https://th.bing.com/th/id/OIP.xLxlrQKeEXwWbqDO41xDogHaEK?rs=1&pid=ImgDetMain",
    desc: "Эелдэг, тоглоом наадамд дуртай алтан үстэй ретривер нохой",
  },
  {
    title: "Ном",
    img: "https://th.bing.com/th/id/R.7082acb420620c242d74b546bac930c4?rik=QmZH7hRhF7eTbw&pid=ImgRaw&r=0",
    desc: "Толстойн бичсэн сонгодог уран зохиолын ном, уншихад сэтгэл татам",
  },
  {
    title: "Зөөврийн компьютер",
    img: "https://th.bing.com/th/id/R.a9a2f87d0d8cbf41782e212384549057?rik=5MxgANLhpAlBJw&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f07%2fautunm-desktop-natural-hd-wallpapers.jpg&ehk=j7yVlSgUBySdpPIKhx0ovaCIvpI2u%2f%2bw3lfHET9HT4w%3d&risl=&pid=ImgRaw&r=0",
    desc: "Програмчлалд зориулсан өндөр хүчин чадалтай зөөврийн компьютер",
  },
  {
    title: "Далайн эрэг",
    img: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg",
    desc: "Мальдивын нарлаг далайн эрэг, цэнхэр ус, цагаан элстэй",
  },
  {
    title: "Пицца",
    img: "https://th.bing.com/th/id/R.1bf50431a2f9ecdf01b8d892d7c8798b?rik=dKdbqMDRjieR2w&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2017%2f02%2f15%2fawesome-scenery-natural-image.jpg&ehk=oICkM43q5Wr4cqsMCKyACCEb9MSImrfoFh9O3a9otE0%3d&risl=&pid=ImgRaw&r=0",
    desc: "Бяслагтай, пепперонигоор дүүрэн амттай пицца, халуунаар үйлчилнэ",
  },
  {
    title: "Гитар",
    img: "https://th.bing.com/th/id/OIP.lPLMZYRYYrpqLuhUXKpncwHaE7?rs=1&pid=ImgDetMain",
    desc: "Модон материалаар хийгдсэн акустик гитар, дууг сайхан гаргана",
  },
  {
    title: "Хот",
    img: "https://th.bing.com/th/id/OIP.QvVAEvvCJ7aLe_A2mHZXCQHaE7?rs=1&pid=ImgDetMain",
    desc: "Нью-Йоркийн шөнийн тэнгэрийн харагдац, гэрэлтэй барилгуудтай",
  },
  {
    title: "Цэцэг",
    img: "https://images.pexels.com/photos/1660/art-creative-metal-creativity.jpg?cs=srgb&dl=art-creative-creativity-1660.jpg&fm=jpg",
    desc: "Тод улаан өнгөтэй дэлгэрсэн сарнай, үнэртэй бөгөөд гоё",
  },
  {
    title: "Цаг",
    img: "https://th.bing.com/th/id/OIP.Xt6s_KlUeDK5HmN4W_LpwwHaFj?rs=1&pid=ImgDetMain",
    desc: "Дэгжин мөнгөлөг бугуйн цаг, загварлаг бөгөөд тансаг",
  },
  {
    title: "Муур",
    img: "https://th.bing.com/th?id=OIF.A3eVJAzLD7I%2f7zd%2bSpLcbw&rs=1&pid=ImgDetMain",
    desc: "Сэвсгэр цагаан Персийн муур, хөөрхөн бөгөөд тайван",
  },
  {
    title: "Кофе",
    img: "https://th.bing.com/th/id/OIP.jvn5PayttG39R9V2eLQ75QHaFK?rs=1&pid=ImgDetMain",
    desc: "Халуун уураар үйлчлэгдэх эспрессо кофе, өглөөний уухад тохиромжтой",
  },
  {
    title: "Ой",
    img: "https://i.ytimg.com/vi/tCFrMG5j0ps/maxresdefault.jpg",
    desc: "Ногоон өнгөөр дүүрсэн өтгөн ой, амар амгаланг өгнө",
  },
  {
    title: "Унадаг дугуй",
    img: "https://th.bing.com/th/id/OIP.L5zRwaJrMin3OUbvezqGvgHaEK?rs=1&pid=ImgDetMain",
    desc: "Улаан өнгөтэй уулын унадаг дугуй, адал явдалд тохиромжтой",
  },
  {
    title: "Гүүр",
    img: "https://th.bing.com/th/id/OIP.XCKiS2titZPBEADmuRWcuwHaE4?rs=1&pid=ImgDetMain",
    desc: "Нар жаргах үеийн Голден Гейтийн гүүр, гайхалтай харагдацтай",
  },
  {
    title: "Утас",
    img: "https://th.bing.com/th/id/OIP.F-yjC-EJSLhSe5sBnPNaTAHaEK?rs=1&pid=ImgDetMain",
    desc: "Сүүлийн үеийн загварын ухаантай утас, олон функцтэй",
  },
  {
    title: "Нар жаргах",
    img: "https://th.bing.com/th/id/OIP.DVZ-FCTG2e-lUOfbZAiqzgHaD4?rs=1&pid=ImgDetMain",
    desc: "Далай дээгүүрх тод улбар шар өнгөтэй нар жаргалт, үзэсгэлэнтэй",
  },
  {
    title: "Гутал",
    img: "https://th.bing.com/th/id/OIF.Y4UrUIHxWb8WTx0V65Q5KA?rs=1&pid=ImgDetMain",
    desc: "Загварлаг хар өнгөтэй пүүз, өдөр тутамдаа өмсөхөд тухтай",
  },
];

function App() {
  return (
    <div>
      <div className="">
        <h1
          style={{
            textAlign: "center",
            color: "Blue",
          }}
        >
          Teachme.com
        </h1>
      </div>
      <div
        style={{
          margin: "5vw 40px",
          padding: "30px",
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
          borderRadius: 10,
          borderWidth: 1,
        }}
      >
        {data.map((item, _) => (
          <NewsComp {...item} />
        ))}
      </div>
    </div>
  );
}

function NewsComp({ title, img, desc }) {
  return (
    <div style={{ width: "30vw", borderRadius: 20, objectFit: "cover" }}>
      <h1>{title}</h1>
      <img
        style={{ aspectRatio: "16/9", width: "100%" }}
        alt="content"
        src={img}
      ></img>
      <p>{desc}</p>
    </div>
  );
}

export default App;
