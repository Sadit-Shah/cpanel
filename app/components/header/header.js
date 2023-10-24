import ToggleSwitch from '../toggleSwitch/toggleSwitch'

const Header = () => {
  return (
    <div className='bg-[#d6d6d6] dark:bg-[#201919] fixed top-0 left-0 flex items-center w-full h-[70px] p-6 shadow-md z-[999]'>
        <div className='flex items-center justify-between w-full'>
          <span className='text-blue-600 font-bold text-2xl'>cPanel - Openskytrips</span>
          <ToggleSwitch/>
        </div>
    </div>
  )
}

export default Header