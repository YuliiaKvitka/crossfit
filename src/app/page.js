import Banner from "@/components/banner/Banner";
import Calculate from "@/components/calculate/Calculate";
import Family from "@/components/family/Family";
import JoinUs from "@/components/joinUs/JoinUs";
import Location from "@/components/location/Location";
import Motivation from "@/components/motivation/Motivation";
import TrainingTypes from "@/components/trainingTypes/TrainingTypes";


export default function Home() {
  return (
    <main className={`content`}>
      <h1 className='visually-hidden'>Kropp Fitness Club</h1>
      <Banner />
      <Motivation />
      <TrainingTypes/>
      <JoinUs />
      <Location />
      <Family />
      <Calculate/>
   </main>
  );
}
