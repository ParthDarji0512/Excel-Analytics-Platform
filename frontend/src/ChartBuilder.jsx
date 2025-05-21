import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css"; // Assuming Inter font is imported here or via index.html

const ChartBuilder = () => {
  return (
    <main className="bg-white text-gray-900 p-6 font-['Inter']">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-extrabold text-lg md:text-xl mb-1.5">Chart Builder</h1>
        <p className="text-gray-500 text-sm md:text-base mb-6">
          Create and customize interactive charts from your Excel data
        </p>

        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Column */}
          <section
            aria-label="Data Source"
            className="border border-gray-200 rounded-lg p-5 w-full max-w-[320px]"
          >
            <h2 className="font-semibold text-base mb-1.5">Data Source</h2>
            <p className="text-gray-400 text-xs mb-4">
              Select columns for your chart axes
            </p>

            <div className="mb-4">
              <label htmlFor="x-axis" className="block text-xs font-semibold mb-1">
                X-Axis
              </label>
              <select
                id="x-axis"
                className="w-full border border-gray-300 rounded-md text-xs py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option>Product Category</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="y-axis" className="block text-xs font-semibold mb-1">
                Y-Axis
              </label>
              <select
                id="y-axis"
                className="w-full border border-gray-300 rounded-md text-xs py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option>Sales Amount</option>
              </select>
            </div>

            <hr className="border-gray-200 mb-4" />

            <div>
              <p className="text-xs font-semibold mb-2">Chart Type</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "chart-bar", label: "Bar", active: true },
                  { icon: "chart-line", label: "Line" },
                  { icon: "globe", label: "Pie" },
                  { icon: "braille", label: "Scatter" },
                ].map(({ icon, label, active }) => (
                  <button
                    key={label}
                    type="button"
                    className={`flex flex-col items-center justify-center border ${
                      active ? "border-indigo-500 text-indigo-600" : "border-gray-200 text-black"
                    } rounded-md py-3 text-xs font-${active ? "semibold" : "normal"} focus:outline-none`}
                  >
                    <i className={`fas fa-${icon} mb-1 ${active ? "text-indigo-600" : "text-black"}`} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Right Column */}
          <section className="flex-1 flex flex-col space-y-6">
            <div
              aria-label="Sales by Category"
              className="border border-gray-200 rounded-lg p-5 flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-base">Sales by Category</h2>
                <div className="flex space-x-2">
                  {["download", "edit"].map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      className="flex items-center space-x-1 border border-gray-300 rounded-md px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                    >
                      <i className={`fas fa-${icon}`} />
                      <span>{icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-gray-200 rounded-md h-56 md:h-64 flex items-center justify-center">
                <img
                  src="https://storage.googleapis.com/a1aa/image/b9f21192-1b91-4089-c397-a7a70dbd396d.jpg"
                  alt="Chart Placeholder"
                  className="max-h-full max-w-full"
                  width={150}
                  height={100}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Total Sales", value: "$128,430", extra: "12.5% from last period", icon: "arrow-up", green: true },
                { label: "Top Category", value: "Electronics", extra: "42% of total sales" },
                { label: "Growth Rate", value: "+18.3%", extra: "Year-over-year" },
              ].map(({ label, value, extra, icon, green }, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <p className="text-xs font-semibold mb-1">{label}</p>
                  <p className="font-extrabold text-lg">{value}</p>
                  {extra && (
                    <p
                      className={`text-xs flex items-center space-x-1 mt-1 ${
                        green ? "text-green-500" : "text-gray-400 font-normal"
                      }`}
                    >
                      {icon && <i className={`fas fa-${icon} text-[10px]`} />}
                      <span className="text-gray-400 font-normal">{extra}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="border border-gray-300 rounded-md px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                Reset
              </button>
              <button
                type="button"
                className="bg-indigo-600 text-white rounded-md px-4 py-2 text-xs hover:bg-indigo-700 focus:outline-none"
              >
                Generate Chart
              </button>
            </div>
          </section>
        </div>

        {/* Customization Section */}
        <section
          aria-label="Customization"
          className="border border-gray-200 rounded-lg p-5 mt-6 max-w-[320px]"
        >
          <h2 className="font-semibold text-base mb-1.5">Customization</h2>
          <p className="text-gray-400 text-xs mb-4">
            Adjust the appearance of your chart
          </p>

          <div className="mb-4">
            <label htmlFor="chart-title" className="block text-xs font-semibold mb-1">
              Chart Title
            </label>
            <input
              type="text"
              id="chart-title"
              placeholder="Sales by Category"
              className="w-full border border-gray-300 rounded-md text-xs py-2 px-3 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <p className="text-xs font-semibold mb-2">Color Scheme</p>
            <div className="flex space-x-2">
              {["blue-600", "green-500", "purple-400", "orange-400", "red-500"].map((color, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`${color} color`}
                  className={`w-6 h-6 rounded-full bg-${color} focus:outline-none ring-2 ${
                    i === 0 ? "ring-indigo-600" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {["Show Legend", "Show Grid Lines", "Enable Animation"].map((label) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-xs font-semibold">{label}</span>
                <button
                  type="button"
                  className="border border-gray-300 rounded-md px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 focus:outline-none"
                >
                  Off
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ChartBuilder;
