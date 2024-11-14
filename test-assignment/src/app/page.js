import Hero from '@/components/Hero';
import Travel from '@/components/Travel';
import Features from '@/components/Features';
import Influencers from '@/components/Influencers';
import GetStarted from '@/components/GetStarted';
import FAQs from '@/components/FAQs';

export default function Home() {
  return (
    <div className='flex-col justify-center'>
      <section>
        <Hero />
      </section>
      <section>
        <Travel />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Influencers />
      </section>
      <section>
        <GetStarted />
      </section>
      <section>
        <FAQs />
      </section>
    </div>
  );
}