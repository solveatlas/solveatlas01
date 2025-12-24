import React from 'react';
import { Check, Zap, Globe, Newspaper, Plane, Layout } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const AgencyPricing = () => {
  const services = [
    {
      name: 'Static - One Page',
      original: '19,999',
      sale: '11,999',
      icon: <Zap className="text-yellow-500" />,
      features: ['Single Page Design', 'Responsive Layout', 'Contact Form', 'Social Media Links', '1 Year Hosting'],
      popular: false
    },
    {
      name: 'Static - 8 Pages',
      original: '29,999',
      sale: '17,999',
      icon: <Layout className="text-blue-500" />,
      features: ['Up to 8 Pages', 'SEO Optimization', 'Speed Optimized', 'Gallery Section', 'Google Maps'],
      popular: false
    },
    {
      name: 'Dynamic Website',
      original: '49,999',
      sale: '29,999',
      icon: <Globe className="text-indigo-500" />,
      features: ['Admin Dashboard', 'User Login System', 'Database Integration', 'Content Management', 'Security Setup'],
      popular: true
    },
    {
      name: 'News Portal',
      original: '59,999',
      sale: '35,999',
      icon: <Newspaper className="text-red-500" />,
      features: ['Category Management', 'Ads Integration', 'Breaking News Ticker', 'Newsletter Signup', 'Search Functionality'],
      popular: false
    },
    {
      name: 'Travel & Tours',
      original: '69,999',
      sale: '41,999',
      icon: <Plane className="text-emerald-500" />,
      features: ['Booking System', 'Tour Packages', 'Itinerary Layout', 'Payment Gateway', 'Customer Reviews'],
      popular: false
    }
  ];

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mt-10 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Limited Time Offer: 40% OFF
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Web Development Packages
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Choose the perfect plan to launch your digital presence. Premium quality, now at a discounted price.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl flex flex-col ${
                item.popular ? 'border-indigo-600 scale-105 shadow-xl relative' : 'border-slate-100'
              }`}
            >
              {item.popular && (
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  Most Recommended
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="line-through text-lg font-medium">Rs. {item.original}</span>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded">SAVE 40%</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-slate-900">Rs. {item.sale}</span>
                  <span className="text-slate-500 text-sm font-medium">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                item.popular 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                : 'bg-slate-900 text-white hover:bg-black'
              }`}>
                Book Now
              </button>
            </div>
          ))}

          {/* Custom Quote Box */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Need something custom?</h3>
            <p className="text-indigo-100 mb-8 text-sm leading-relaxed">
              We build custom enterprise solutions tailored to your specific business requirements.
            </p>
            <NavLink to='/#contact' className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Contact Sales
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyPricing;