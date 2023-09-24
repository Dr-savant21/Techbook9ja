import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white divide-y divide-solid" style={{ backgroundColor: '#F2F8F7' }}>
      <div className='container mx-auto flex flex-wrap justify-between p-20 '>
        <div className=''>
          <div className='mb-9'>
            <span className='bg-green-500 text-[27px] font-semibold font-["Noto Sans"] leading-[27px]'>Tech</span>
            <span className='text-[17px] font-semibold font-["Noto Sans"] leading-[17px]' style={{ color: '#222' }}>Book9ja.</span>
          </div>
          <div className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] w-[232px]' style={{ color: '#555555' }}>
            <p>Did you come here for something in particular or just general Riker</p>
          </div>
        </div>
        <div className='px-10 max-sm:mt-5'>
          <h5 className='font-semibold leading-[17px] text-[17px] font-["Noto Sans"] mb-10' style={{ color: '#222' }}>Blogs</h5>
          <div className=''>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline' style={{ display: 'block', color: '#555555' }}>Travel</a>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline' style={{ display: 'block', color: '#555555' }}>Technology</a>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline' style={{ display: 'block', color: '#555555' }}>Lifestyle</a>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline' style={{ display: 'block', color: '#555555' }}>Fashion</a>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] hover:underline' style={{ display: 'block', color: '#555555' }}>Business</a>
          </div>
        </div>
        <div className='px-8 max-sm:mt-5 max-sm:mb-5'>
          <h5 className='font-semibold leading-[17px] text-[17px] font-["Noto Sans"] mb-10' style={{ color: '#222' }}>Quick Links</h5>
          <div className=''>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline' style={{ display: 'block', color: '#555555' }}>FAQ</a>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline ' style={{ display: 'block', color: '#555555' }}>Terms and Conditions</a>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline' style={{ display: 'block', color: '#555555' }}>Support</a>
            <a href='' className='text-[15px] font-normal font-["Noto Sans"] leading-[22.5px] mb-2 hover:underline' style={{ display: 'block', color: '#555555' }}>Privacy Policy</a>
          </div>
        </div>
        <div className=' mb-10'>
          <h5 className='font-semibold leading-[17px] text-[17px] font-["Noto Sans"]  mb-4' style={{ color: '#222' }}>Subscribe for newsletter</h5>
          <form className='mb-6 w-[395px] flex' action=''>
            <input className='mt-1 block w-2/3 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-slate-600 rounded-l-md' type='email' style={{ backgroundColor: '#DFF1F0' }} placeholder='Your Email'></input>
            <input type='submit' className='text-white text-[15px] font-["Noto Sans"] w-1/3 mt-1 rounded-r-md cursor-pointer' value={'Subscribe'} style={{ backgroundColor: '#00AAA1' }}></input>
          </form>
          <div className=''>
            <h6 className='font-semibold leading-[17px] text-[17px] font-["Noto Sans"] mb-5' style={{ color: '#222' }}>Follow On:</h6>
            <div className='flex'>
              <div className='border-solid border-[1.2px] w-6 h-6 flex justify-center items-center rounded hover:bg-[#00AAA1] hover:border-none mr-3' style={{ borderColor: '#777', color: "#777" }}>
                <a href=''>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className='fill-[#777777] hover:fill-white'><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
              <div className='border-solid border-[1.2px] w-6 h-6 flex justify-center items-center rounded hover:bg-[#00AAA1] hover:border-none mr-3' style={{ borderColor: '#777', color: "#777" }}>
                <a href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className='fill-[#777777] hover:fill-white'><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
              </div>
              <div className='border-solid border-[1.2px] w-6 h-6 flex justify-center items-center rounded hover:bg-[#00AAA1] hover:border-none mr-3' style={{ borderColor: '#777', color: "#777" }}>
                <a href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16" className='fill-[#777777] hover:fill-white'> <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" /> </svg>
                </a>
              </div>
              <div className='border-solid border-[1.2px] w-6 h-6 flex justify-center items-center rounded hover:bg-[#00AAA1] hover:border-none mr-3' style={{ borderColor: '#777', color: "#777" }}>
                <a href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16" className='fill-[#777777] hover:fill-white'> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-5" style={{ color: '#555555' }}>
        <p>&copy; {new Date().getFullYear()} TechBook9ja</p>
      </div>
    </footer>
  );
};

export default Footer;