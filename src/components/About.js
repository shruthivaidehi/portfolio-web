import AboutImg from '../assets/about.png';
export default function About () {
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about '>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}  />
        </div>
        <div className=' md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white m-0'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>Hi, My name is SruthiMohan. I am a web developer. I built beautiful webites with ReactJS and Tailwind CSS.</p>
            <p className='pb-5'> I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS and many more.</p>
           <p className='pb-5'> In backend I know Node.js </p>
            </div>
        </div>
    </section>
}