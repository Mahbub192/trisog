import imgae1 from '../../../assets/Trip/image1.png'

const PlanYourType = () => {
    return (
        <div className='container mx-auto '>
            <div className='flex items-center justify-between py-36'>
                <div className='w-1/2 '>
                    <img className='ml-auto' src={imgae1} alt="" />
                </div>
                <div className='w-1/2 '>
                    <div className='w-2/4 ml-24'>
                    <h3 className='text-xl mb-3'>Whey Choose Us</h3>
                    <h1 className='text-5xl font-bold'>Plan Your Trip <br /> With Trisog</h1>
                    <p className='mt-8 text-lg text-justify text-gray-500'>Holisticly Optimize proactive stategic theme areas rather then efctive manufactured products create</p>
                    <ul className='grid grid-cols-2 gap-3 mt-5 text-lg font-bold'>
                        <li>Travel Plan </li>
                        <li>Hand-picked Tour</li>
                        <li>Cheap Reates</li>
                        <li>Private Guide</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanYourType;