export default function SectionHeader({
  subHeader,
  mainHeader
}: {
  subHeader: string;
  mainHeader: string;
}) {
  return (
    <>
      {' '}
      <h3 className='text-gray-600 uppercase font-semibold leading-4'>
        {subHeader}
      </h3>
      <h2 className='text-primary font-bold text-4xl italic'>{mainHeader}</h2>
    </>
  );
}
