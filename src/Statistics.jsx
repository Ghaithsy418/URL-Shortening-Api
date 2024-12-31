import { useState } from "react";
import AdvancedStatistics from "./AdvancedStatistics";
import Links from "./Links";
import ShortenLink from "./ShortenLink";

function Statistics() {
  const [link,setLink] = useState("");
  const [shortenLink,setShortenLink] = useState("");
  const [links,setLinks] = useState([]);

  return (
    <section className="main">
      <ShortenLink link={link} setLink={setLink} setShortenLink={setShortenLink} />
      <Links />
      <AdvancedStatistics />
    </section>
  );
}

export default Statistics;
