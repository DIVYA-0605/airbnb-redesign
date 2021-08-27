import {

    GlobeAltIcon,
    CurrencyRupeeIcon,
    
   
  } from "@heroicons/react/solid";
  import FacebookIcon from '@material-ui/icons/Facebook';
  import TwitterIcon from '@material-ui/icons/Twitter';
  import InstagramIcon from '@material-ui/icons/Instagram';
  


function Footer() {
  return (
    <section className="bg-gray-100">
       <div  className="max-w-7xl mx-auto px-8 sm:px-16 py-6 ">

	
		
<div className="grid lg:grid-cols-4 grid-cols-1 gap-4  mx-auto py-12">
  
  <div>
    <h1 className="uppercase text-xs font-semibold mt-3">About</h1>
    <ul className="grid md:grid-cols-3 lg:grid-cols-1">
      <li className="mt-3 font-light text-sm">How Airbnb works</li>
      <li className="mt-3 font-light text-sm">Newsroom</li>
      <li className="mt-3 font-light text-sm">Airbnb 2021</li>
      <li className="mt-3 font-light text-sm">Investors</li>
      <li className="mt-3 font-light text-sm">Airbnb Plus</li>
      <li className="mt-3 font-light text-sm">Airbnb Luxe</li>
      <li className="mt-3 font-light text-sm">HotelTonight</li>
      <li className="mt-3 font-light text-sm">Airbnb for Work</li>
      <li className="mt-3 font-light text-sm">Made possible by Hosts</li>
      <li className="mt-3 font-light text-sm">Careers</li>
      <li className="mt-3 font-light text-sm">Founders'Letter</li>
    </ul>
  </div>
  <hr className="lg:hidden"/>
  
  <div>
    <h1 className="uppercase text-xs font-semibold mt-3">Community</h1>
    <ul className="grid md:grid-cols-3 lg:grid-cols-1">
      <li className="mt-3 font-light text-sm">Diversity & Belonging</li>
      <li className="mt-3 font-light text-sm">Accessibility</li>
      <li className="mt-3 font-light text-sm">Airbnb Associates</li>
      <li className="mt-3 font-light text-sm">Frontline Stays</li>
      <li className="mt-3 font-light text-sm">Guest Referrals</li>
      <li className="mt-3 font-light text-sm">Airbnb.org</li>
    </ul>
  </div>
  <hr className="lg:hidden"/>
  
  <div>
    <h1 className="uppercase text-xs font-semibold mt-3">Host</h1>
    <ul className="grid md:grid-cols-3 lg:grid-cols-1">
      <li className="mt-3 font-light text-sm">Host your home</li>
      <li className="mt-3 font-light text-sm">Host an Onliner Experience</li>
      <li className="mt-3 font-light text-sm">Host an Experience</li>
      <li className="mt-3 font-light text-sm">Resource Center</li>
      <li className="mt-3 font-light text-sm">Community Center</li>
    </ul>
  </div>
  <hr className="lg:hidden"/>

  <div>
    <h1 className="uppercase text-xs font-semibold mt-3">Support</h1>
    <ul className="grid md:grid-cols-3 lg:grid-cols-1">
      <li className="mt-3 font-light text-sm">Our COVID_19 Response</li>
      <li className="mt-3 font-light text-sm">Help Centre</li>
      <li className="mt-3 font-light text-sm">Cancellation option</li>
      <li className="mt-3 font-light text-sm">Neighbourhood Support</li>
      <li className="mt-3 font-light text-sm">Trust & Safety</li>
    </ul>
  </div>
</div>
<hr className="container mx-auto px-4"/>

<div className="flex lg:flex-row lg:justify-between container mx-auto py-6 items-start md:items-center flex-col">

  <div className="flex items-center md:items-center lg:order-2">
    <div className="flex items-center md:items-center">
      <p className="mr-4 underline text-sm flex items-center"><span><GlobeAltIcon className="relative h-5 w-5 mr-1"/></span>English(IN)</p>
      <p className="mr-4 underline text-sm flex items-center"><span><CurrencyRupeeIcon className="relative h-5 w-5 mr-1"/></span>INR</p>
    </div>
    <div className="ml-8 hidden md:flex"> <a href="#" className="mr-4"><FacebookIcon/></a>
      <a href="#" className="mr-4"><TwitterIcon/></a>
      <a href="#" className="mr-4"><InstagramIcon/></a>
    </div>
  </div>

  <div className="flex items-start md:items-center flex-col lg:flex-row mt-4 lg:mt-0">
    <h1 className="text-sm">&copy; 2021 Airbnb, Inc.</h1>
    <ul className="flex items-start md:items-center">
      <li className="mr-2 text-sm font-light">Privacy</li>
      <li className=" mr-2 text-sm font-light">Terms</li>
      <li className=" mr-2 text-sm font-light">Sitemap</li>
      <li className=" mr-2 text-sm font-light">Company details</li>
    </ul>
  </div>
</div>
</div>

    </section>
     

    
   
  );
}

export default Footer;
