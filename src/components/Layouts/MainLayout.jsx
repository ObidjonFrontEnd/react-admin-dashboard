import React  from 'react'

import { Link, Outlet } from 'react-router-dom'
import '../../App.css'


function MainLayout() {
 

	return (
		<section className='w-full h-[100vh] flex relative'>
			<div className='flexLeft max-w-[241px] h-full bg-[#152259] '>
				<div className='logo flex justify-center flex-col gap-[22px] pb-[27px] border-b-solid border-b-[#BDBDBD] border-b-[0.5px] px-[28px] py-[26px]'>
					<div className='logoPhoto w-[65px] h-[65px] mx-auto'>
						<img src='/logo.svg' alt='' className='w-full h-full' />
					</div>
					<div className='font-kumbh font-semibold mx-auto text-center text-[#FFFFFF] text-[14px] leading-[100%] tracking-[0]'>
						<p>Udemy Inter. school</p>
					</div>
				</div>

				<ul className='nav flex flex-col pl-[28px] pr-[21px] py-[26px] gap-[10px] text-[14px] font-kumbh font-semibold leading-[100%] tracking-[0] text-white mb-[114px] w-full'>
					<Link to='/'>
						<li className='py-[11px] px-[16px] flex items-center gap-[16px] hover:bg-[#509CDB] rounded-[4px] activeBtn'>
							<i className='bx bx-home text-[18px]'></i> Dashboard
						</li>
					</Link>
					<Link to='/Teachers'>
						<li className='py-[11px] px-[16px] flex items-center gap-[16px] duration-[0.5s]  hover:bg-[#509CDB] rounded-[4px]'>
							<i className='bx bx-home text-[18px]'></i>Teachers
						</li>
					</Link>
					<li className='py-[11px] px-[16px] flex items-center gap-[16px] duration-[0.5s]  hover:bg-[#509CDB] rounded-[4px] .activeBtn'>
						<i className='bx bxs-graduation text-[18px]'></i> Students
					</li>
					<li className='py-[11px] px-[16px] flex items-center gap-[16px] duration-[0.5s]  hover:bg-[#509CDB] rounded-[4px]'>
						<i className='bx bxs-bank text-[18px]'></i>Billing
					</li>
					<li className='py-[11px] pl-[16px] pr-[5px] w-full flex items-center gap-[16px] duration-[0.5s]  hover:bg-[#509CDB] rounded-[4px]'>
						<i className='bx bx-cog text-[18px]'></i>Settings and profile
					</li>
					<li className='py-[11px] px-[16px] flex items-center gap-[16px]  duration-[0.5s] hover:bg-[#509CDB] rounded-[4px]'>
						<i className='bx bx-objects-vertical-bottom text-[18px]'></i>Exams
					</li>
				</ul>

				<div className='text-[14px] font-kumbh font-semibold leading-[100%] tracking-[0] text-white px-[28px] py-[26px]'>
					<p className='py-[11px] px-[16px] flex items-center gap-[16px]  duration-[0.5s] hover:bg-[#509CDB] rounded-[4px]'>
						{' '}
						<i className='bx bxs-bank text-[18px]'></i> Features{' '}
						<span className='bg-[#B9D7F1] w-[41px] h-[14px] rounded-[4px] text-[10px] text-black text-center'>
							NEW
						</span>
					</p>
				</div>
			</div>

			<div className='flexRight w-full'>
				<div className='rightTop w-full h-[95px] bg-[#FCFAFA] flex justify-end px-[69px] py-[19px]'>
					<div className='flex items-center gap-[48px]'>
						<i className='bx bx-bell text-[25px]'></i>
						<Link to='Login'>
							<button className='font-kumbh text-[14px] px-[35px] py-[11px] font-semibold bg-[#509CDB] rounded-[8px] text-white'>
								Log out
							</button>
						</Link>
					</div>
				</div>

				<div className='rightBottom px-[69px] py-[19px]'>
					<Outlet />
				</div>
			</div>

			<div className='flex w-[181px] h-[60px] justify-center items-center fixed bottom-[120px] right-[120px] bg-[#152259] z-30 rounded-[30px] text-white gap-[10px]'>
				<i className='bx bx-support'></i>
				<p> Support</p>
			</div>
		</section>
	)
}

 
export default MainLayout
