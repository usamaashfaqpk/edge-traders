import NoAuthHeader from '../components/noAuthHeader';
import IntroSection from '../components/introSection';
import HowItWorksSection from '../components/howItWorksSections';

export default function Home() {
  return (
    <>
      <NoAuthHeader />
      <div className='root'>
        <IntroSection />
        <HowItWorksSection />
      </div>
    </>
  )
}
