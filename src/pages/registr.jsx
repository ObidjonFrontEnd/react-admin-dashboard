import { Link } from 'react-router-dom'

function Registr() {
	return (
		<section className='w-full h-[100vh] bg-gray-100 font-kumbh leading-[100%] tracking-[0%] py-[98px] px-[15px]'>
			<div className='title mb-[53px] '>
				<p className='text-center text-gray-600 font-semibold text-[36px]'>
					Welcome, Sign up
				</p>
			</div>
			<form
				action=''
				className='max-w-[512px] px-[70px] md:px-[132px] py-[72px] bg-white mx-auto'
			>
				<p className='mx-auto max-w-[238px] text-center text-[16px] font-medium text-[#667085] mb-[34px] leading-[25px]'>
					It is our great pleasure to have you on board!
				</p>

				<label htmlFor=''>
					<input
						type='text'
						placeholder='Enter your Email'
						className='border-solid border-[0.5px] border-[#A7A7A7] rounded-[4px] px-[13px] py-[13px] outline-none mb-[14px] w-full'
					/>
				</label>

				<label htmlFor=''>
					<input
						type='text'
						placeholder='Create your Login'
						className='border-solid border-[0.5px] border-[#A7A7A7] rounded-[4px] px-[13px] py-[13px] outline-none mb-[14px] w-full'
					/>
				</label>

				<label htmlFor=''>
					<input
						type='text'
						placeholder='Create your Password'
						className='border-solid border-[0.5px] border-[#A7A7A7] rounded-[4px] px-[13px] py-[13px] outline-none w-full'
					/>
				</label>

				<Link to='/Login'>
					<button className='w-full h-[42px] bg-[#2D88D4] rounded-[4px] text-white mt-[34px] text-[14px] font-bold'>
						Sign up
					</button>
				</Link>
			</form>
		</section>
	)
}

export default Registr
