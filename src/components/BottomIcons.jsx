import { useHistory } from "react-router-dom";

//Bu component alt kisimda farkli ikonlarla temsil edilen butonlar sunar ve her bir butona tiklandiginda orderForm sayfasina yönlendirme yapilir
export default function BottomIcons() {
  const history = useHistory();
  const icons = [
    { path: "./Assets/mile2-aseets/icons/1.svg", val: "Kore" },
    { path: "./Assets/mile2-aseets/icons/2.svg", val: "Pizza" },
    { path: "./Assets/mile2-aseets/icons/3.svg", val: "Burger" },
    { path: "./Assets/mile2-aseets/icons/4.svg", val: "Kizartmalar" },
    { path: "./Assets/mile2-aseets/icons/5.svg", val: "Fast Food" },
    { path: "./Assets/mile2-aseets/icons/6.svg", val: "Gazli İcecekler" },
  ];
  const handleClick = () => {
    history.push("/orderForm"); //butona tiklandiginda history nesnesi kullanilarak orderForma gecis tetiklenir
  };
  return (
    <div className="bottom-icon-div">
      {icons.map((icons, index) => {
        return (
          <div key={index} className="bottom-icon-container">
            <button onClick={handleClick} className="bottom-icons-button">
              <img src={icons.path} />
              {icons.val}
            </button>
          </div>
        );
      })}
    </div>
  );
}
