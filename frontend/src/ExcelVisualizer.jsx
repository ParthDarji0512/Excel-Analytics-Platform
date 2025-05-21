import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const ExcelVisualizer = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-10 pb-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-20">
          {/* Left Text */}
          <div className="lg:w-1/2 max-w-lg">
            <h1 className="text-[22px] sm:text-[26px] md:text-[28px] font-extrabold leading-tight text-gray-900">
              Transform
              <br />
              <span>
                Your <span className="text-indigo-700">Excel Data</span> Into
              </span>
              <br />
              Powerful
              <br />
              Visualizations
            </h1>
            <p className="mt-3 text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 max-w-md leading-relaxed">
              Upload any Excel file and instantly generate interactive 2D and 3D charts with our intuitive analytics platform. No coding required.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
             
            <Link to="/signin">
              <button className="bg-indigo-700 text-white text-[13px] font-semibold px-5 py-2 rounded-md hover:bg-indigo-800 transition">
                Start Visualizing Now
              </button>
              </Link>


              <button className="border border-gray-300 text-gray-700 text-[13px] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition">
                See How It Works
              </button>
            </div>
            <div className="mt-6 flex items-center space-x-3 text-gray-400 text-[12px] select-none">
              <i className="fas fa-check-circle text-gray-300" />
              <span>
                Trusted by <span className="font-semibold text-gray-400">145,000+</span> data professionals
              </span>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:w-[420px] w-full bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs text-gray-500 font-semibold">sales_data_2022.xlsx</div>
              <button className="text-indigo-600 text-xs font-semibold px-3 py-1 rounded-md border border-indigo-600 hover:bg-indigo-50 transition">
                Analyzing
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <select className="col-span-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-600">
                <option>X-Axis</option>
              </select>
              <select className="col-span-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600 focus:outline-none focus:ring-1 focus:ring-indigo-600">
                <option>Y-Axis</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Chart Type"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-xs text-gray-600 mb-4 focus:outline-none focus:ring-1 focus:ring-indigo-600"
            />
            <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-3xl">
              <img
                src="https://storage.googleapis.com/a1aa/image/69d8038b-55a7-47b5-eb80-0888b0c7f5de.jpg"
                alt="Chart Preview"
                className="w-20 h-20 object-contain"
              />
            </div>
            <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
              <button className="flex items-center space-x-1 hover:text-indigo-600 transition">
                <i className="fas fa-download" />
                <span>Download Chart</span>
              </button>
              <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-xs font-semibold hover:bg-indigo-700 transition">
                Generate AI Insights
              </button>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-semibold text-gray-900">Key Features</h2>
          <p className="mt-1 text-[13px] text-gray-500 max-w-md mx-auto">
            Everything you need to transform raw Excel data into meaningful visualizations
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'fa-file-upload', title: 'Easy File Upload', desc: 'Drag and drop any Excel file (.xls or .xlsx) and start analyzing your data instantly.' },
            { icon: 'fa-chart-bar', title: 'Interactive Charts', desc: 'Generate beautiful 2D and 3D visualizations with just a few clicks. Choose from multiple chart types.' },
            { icon: 'fa-history', title: 'Analysis History', desc: 'All your uploads and analyses are saved to your dashboard for easy reference and review.' },
            { icon: 'fa-file-export', title: 'Export Options', desc: 'Download your visualizations in multiple formats for presentations, reports, or sharing.' },
            { icon: 'fa-robot', title: 'AI-Powered Insights', desc: 'Get smart analysis and summary reports generated from your data using advanced AI algorithms.' },
            { icon: 'fa-lock', title: 'Secure Data Handling', desc: 'Your data remains private and secure with enterprise-grade encryption and access controls.' },
          ].map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-left">
              <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${feature.icon} text-sm`} />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-24 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 max-w-md text-left">
            <h3 className="text-[15px] font-semibold text-gray-900 leading-tight">
              Ready to transform your Excel data?
            </h3>
            <p className="mt-2 text-[12px] text-gray-500 max-w-xs">
              Join thousands of professionals who are already unlocking insights from their spreadsheets.
            </p>
            <button className="mt-4 bg-indigo-700 text-white text-[13px] font-semibold px-5 py-2 rounded-md hover:bg-indigo-800 transition">
              Get Started For Free
            </button>
          </div>
          <div className="lg:w-[320px] w-full bg-gray-200 rounded-md h-40 flex items-center justify-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/4b686742-4073-4491-4776-9128b6b603bd.jpg"
              alt="Excel Visualization Preview"
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcelVisualizer;
