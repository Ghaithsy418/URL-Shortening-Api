import Card from "./Card";

function AdvancedStatistics() {
  const details = [
    {
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
      imgPath: "/src/assets/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. knowing when and where people engage with your content helps inform better decisions.",
      imgPath: "/src/assets/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
      imgPath: "/src/assets/images/icon-fully-customizable.svg",
    },
  ];
  return (
    <article className="statistics">
      <div className="statistics--width">
      <h2>Advanced Statistics</h2>
      <p className="statistics__text">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      </div>
      <div className="cards">
        {details.map((data) => <Card title={data.title} text={data.text} imgPath={data.imgPath} key={data.title} />)}
      </div>
    </article>
  );
}

export default AdvancedStatistics;
