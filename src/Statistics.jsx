import AdvancedStatistics from "./AdvancedStatistics";
import Links from "./Links";
import ShortenLink from "./ShortenLink";

function Statistics() {
  return (
    <section className="main">
      <ShortenLink />
      <Links />
      <AdvancedStatistics />
    </section>
  );
}

export default Statistics;
