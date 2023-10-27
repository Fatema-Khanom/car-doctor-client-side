
import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'
const AboutUs = () => {
    return (
        <div className=' px-10 md:hidde md:flex gap-6 items-center'>
            <div className=" md:w-1/2 relative mt-16 mb-24">
               <div className=""> <img src={img2} className="w-[460px] h-[472px]" alt="" /></div>
               <div className=" md:-bottom-12 md:right-6 md:absolute "> <img src={img1} className='w-[327px] h-[332px ]  ' alt="" /></div>
            </div>
            <div className="md:w-1/2">
                <p className="text-orange-600 font-semibold">About Us</p>
                <h2 className="text-5xl font-semibold">We are qualified <br /> & of experience <br /> in this field</h2>
                <p className="mt-8">There are many variations of passages of Lorem Ipsum <br />
                 available, but the majority have suffered alteration in some <br />
                  form, by injected humour, or randomised words which don't <br />
                   look even slightly believable. <br /> <br />
                   The majority have suffered alteration in some form, by injected <br />
                    humour, or randomised words which don't look even slightly <br />
                     believable.  </p>
            </div>
        </div>
    );
};

export default AboutUs;