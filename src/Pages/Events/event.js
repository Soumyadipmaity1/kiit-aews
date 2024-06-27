import EventCard from "../../Components/EventComponents/EventCards/EventCards";
import EventImages from "../../Components/EventComponents/EventCards/EventImages";
import EventStart from "../../Components/EventComponents/EventStart";

export default function Event() {
  return (
   <section>
<EventStart/>
<div className="flex w-full p-20 bg-slate-800">
      <EventCard
        title="Plantation Drive"
        date="10th June, 2023"
        details="
Plantation, or tree planting, is a vital practice for environmental conservation and sustainable development. It involves the intentional cultivation of trees for various purposes, such as reforestation, timber production, and ecosystem restoration. Plantation efforts help combat deforestation, enhance biodiversity, and mitigate climate change by sequestering carbon dioxide. They also provide essential ecosystem services like soil stabilization and water regulation, benefiting both the environment and local communities. Successful plantation projects require careful planning, management, and community involvement to ensure long-term sustainability. Overall, plantation is a proactive approach to environmental stewardship, promoting greener landscapes and a more sustainable future."
      />
      <EventImages
        image1Src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
        image2Src="https://pixlr.com/images/index/ai-image-generator-one.webp"
      />
    </div>
   </section>
  );
}
