import Login from './login'

function Teachers({user , fructs}) {
 
  return (
    <section className=' font-kumbh w-full px-[10px]'>

      <div className="title w-full flex justify-between">
            <h1 className='font-medium text-[20px] text-[#4F4F4F]'>Teachers</h1>
            <button className='w-[118px] h-[41px] bg-[#509CDB] rounded-[4px] text-white font-semibold text-[14px]'>Add Teachers</button>
      </div>

      <div className="flex gap-[20px]">

        <h1>Name: {user.name}</h1>
        <h1>Surname: {user.surname}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Hoby: {user.xoby}</h1>
        <h1>Education:{user.education}</h1>

      </div>

     <div className="flex gap-[15px]">
      {
        fructs.map((value)=>{
          return <h1>{value}</h1>
        })
      }
     </div>

    </section>
  )

}

export default Teachers