function Home() {
 

  return (
    <section>
        <div className="title ">
          <h1 className='text-[36px] font-kumbh font-semibold text-center mb-[23px]'>Welcome to your dashboard, Udemy school</h1>
            <h3 className='text-center text-[24px] font-semibold text-[#4F4F4F] leading-[100%] tracking-[0] '>Uyo/school/@teachable.com
            </h3>
        </div>

        <div className="mt-[20px]">

          <div className="flex gap-[20px] mb-[51px] max-w-[514px]">
              <div className="text-[25px] w-[36px] h-[36px] flex justify-center items-center bg-[#EFF3FA] rounded-[8px]">
                <i className='bx bxs-user-plus'></i>
              </div>

            <div className="font-kumbh leading-[100%] tracking-[0%]">
              <h2 className='text-[#4F4F4F] text-[24px] font-medium mb-[16px]'>Add other admins</h2>
              <p className='font-normal text-[#4F4F4F] text-[14px] leading-[133%] '>Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>

          <div className="flex gap-[20px] mb-[51px] max-w-[514px]">
            <div className="text-[25px] w-[36px] h-[36px] flex justify-center items-center bg-[#EFF3FA] rounded-[8px]">
              <i className='bx bxs-bank' ></i>
            </div>
            <div className="font-kumbh leading-[100%] tracking-[0%]">
              <h2 className='text-[#4F4F4F] text-[24px] font-medium mb-[16px]'>Add classes</h2>
              <p className='font-normal text-[#4F4F4F] text-[14px] leading-[133%] max-w-[514px]'>Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>


          <div className="flex gap-[20px] max-w-[514px] ">
            <div className="text-[25px] w-[36px] h-[36px] flex justify-center items-center bg-[#EFF3FA] rounded-[8px]">
            <i className='bx bxs-graduation'></i>
            </div>
            <div className="font-kumbh leading-[100%] tracking-[0%]">
              <h2 className='text-[#4F4F4F] text-[24px] font-medium mb-[16px]'>Add students</h2>
              <p className='font-normal text-[#4F4F4F] text-[14px] leading-[133%] max-w-[514px]'>Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!</p>
            </div>
          </div>

        </div>

    </section>
  )
}

export default Home