import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeader from '@/components/layout/SectionHeaders';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className='text-center my-16'>
        <SectionHeader subHeader={' Our story'} mainHeader={'About us'} />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quod
            consequuntur quibusdam aspernatur autem quisquam sapiente tenetur
            nam cupiditate nisi debitis, quidem, totam cum labore obcaecati
            numquam amet minima accusamus?
          </p>
          <p>
            aspernatur autem quisquam sapiente tenetur nam cupiditate nisi
            debitis, quidem, totam cum labore obcaecati numquam amet minima
            accusamus?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quod
            consequuntur debitis, quidem, totam cum labore obcaecati numquam
            amet
          </p>
        </div>
      </section>

      <section className='text-center mt-8'>
        <SectionHeader
          subHeader={"Don't hesitate"}
          mainHeader={'Contact us'}
        ></SectionHeader>
        <div className='mt-4'>
          <a
            className='text-4xl underline text-gray-500'
            href='tel:+919000000008'
          >
            +91 90000 00008
          </a>
        </div>
      </section>
      <footer className='border-t p-8 text-center text-gray-500 mt-8'>
        &copy; 2024 All rights reserved
      </footer>
    </>
  );
}
