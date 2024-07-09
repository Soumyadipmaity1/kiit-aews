import EventCard from "../../Components/EventComponents/EventCards/EventCards";
import EventImages from "../../Components/EventComponents/EventCards/EventImages";
import EventStart from "../../Components/EventComponents/EventStart";
import Paritantra from "../../Components/EventComponents/EventCards/EventSlider/Paritantra/Paritantra";
export default function Event() {
  return (
    <section>
      <EventStart />
      <div className="lg:flex-row flex justify-center flex-col sm:mx-10 2lg:mx-16  xl:mx-20 m-5 rounded-lg p-5 bg-slate-800">
        <EventCard
          title="Plantation Drive"
          date="15th August, 2023"
          motive= "Aim to plant trees for a better cause"
          details="

As our society’s tagline says “Pause for a Cause”, here we paused again on 15th August 2023 for another noble cause. It was a plantation drive organised on the occasion of Independence Day. We all reported at the KIIT Cricket Stadium at 7am. We were accompanied by our Coordinator and Assistant coordinator. The event started in the presence of Honarable Additional Registrar Sir Shyam Sundar Behura and Mini madam. We were divided into groups and were allocated different locations to plant. It was great fun working together and contributing towards a noble cause."
        />
        <EventImages
          image1Src="https://images.mid-day.com/images/images/2022/sep/Tree-Plantation-iStock_d.jpg"
          // image2Src="https://pixlr.com/images/index/ai-image-generator-one.webp"
        />
      </div>
      <div className="lg:flex-row flex justify-center flex-col sm:mx-10 2lg:mx-16  xl:mx-20 m-5 rounded-lg p-5 bg-slate-800">
        <EventCard
          title="World Aids Day"
          date="1st December, 2023"
          motive= "Aim to spread awareness regarding AIDS "
          details="

It was 1st Of December 2023. And it was World Aids Day. The fog had taken control over the early morning. There was dense fog as we reported to the Central Auditorium at around 6:30am. We had the dress code as white to symbolise peace. We on reaching first reported to our coordinator and settled down in fixing the banners and the placard. It took us around an hour to complete our job. Then we were accompanied by our honourable Additional Registrar Mr. Shyam Sundar Behura.Finally the lines were formed and we began our rally at sharp 8:00am which was the estimated time. We started our rally from the Mahatma Gandhi statue in front of Central Auditorium and continued till the KIMS Hospital. We staged our rally on the main road and were accompanied by the KIIT Security to handle the traffic. As we marched towards KIMS hospital we shouted slogans on Awareness of AIDS and how to prevent it. The rally continued for approximately one hour and we reached the KIMS Hsopital at around 9. On reaching there we were given with refreshments and water bottles. Then we had a group photo of all the members participating in the rally. And finally we disperesed with satisfaction within us for doing a noble cause and awareing people against such a deadly virus."        />
        <EventImages
          image1Src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHId1cfxU4lOqKkZl7lvUHbBWByk5Y93Pvg&s"
          // image2Src="https://pixlr.com/images/index/ai-image-generator-one.webp"
        />
      </div>
  
 
    </section>
  );
}
