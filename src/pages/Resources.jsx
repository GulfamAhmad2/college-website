import React, { useEffect, useState } from "react";
import { mockData, dropDownDetails } from "../constant";
import Hero from "../components/Hero";

const Resources = () => {
  const [selectedYear, setSelectedYear] = useState("FY");
  const [selectedCalendarYear, setSelectedCalendarYear] = useState("2024");
  const [selectedSemester, setSelectedSemester] = useState("Sem 1");
  const [data, setData] = useState({});
  const [showNotes, setShowNotes] = useState({});

  // Fetch data based on selections
  const fetchData = () => {
    const yearData = mockData[selectedYear]?.[selectedCalendarYear] || {};
    setData(yearData[selectedSemester] || []);
  };

  // Effect to fetch data when selections change
  useEffect(() => {
    fetchData();
    return () => {};
  }, [selectedYear, selectedCalendarYear, selectedSemester]);

  // Toggle notes visibility
  const toggleNotes = (index) => {
    setShowNotes((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="pt-[80px]">
    <Hero>Resources</Hero>
      <div className="pt-[40px] px-6 bg-[#f8f9fa] min-h-screen">
      

      {/* Dropdowns in a row */}
      <div className="flex flex-wrap  items-center justify-end space-x-4 mb-6">
      {/* <h1 className="text-3xl font-bold text-[#050d2d]">Filter</h1> */}
        <Dropdown
          
          value={selectedYear}
          onChange={setSelectedYear}
          options={dropDownDetails["year"]}
        />

        <Dropdown
          value={selectedCalendarYear}
          onChange={setSelectedCalendarYear}
          options={dropDownDetails["date"]}
        />

        <Dropdown
          value={selectedSemester}
          onChange={setSelectedSemester}
          options={dropDownDetails["sem"]}
        />
      </div>

      {/* Display data */}
      <div className="mt-6">
        {data.length > 0 ? (
          data.map((subject, index) => (
            <div key={index} className="mb-6 p-4 border border-[#050d2d] rounded-lg bg-white shadow-md">
              {/* Subject and toggle button */}
              <div className="flex justify-between items-center">
                <a
                  href={subject.subjectName}
                  target="_blank"
                  className="text-xl font-semibold text-[#050d2d] hover:underline"
                >
                  {subject.subjectName}
                </a>
                <button
                  onClick={() => toggleNotes(index)}
                  className="bg-[#050d2d] text-white px-3 py-1 rounded hover:bg-opacity-80"
                >
                  {showNotes[index] ? "Hide Notes" : "Show Notes"}
                </button>
              </div>

              {/* Notes section */}
              {showNotes[index] && (
                <ul className="mt-4 list-disc list-inside">
                  {subject.notes.map((note, noteIndex) => (
                    <li key={noteIndex} className="flex justify-between items-center mb-2">
                      <a
                        href={note.url}
                        target="_blank"
                        className="text-[#050d2d] hover:underline"
                      >
                        {note.title}
                      </a>
                      {/* Download Button */}
                      <a
                        href={note.url}
                        download
                        className="bg-[#050d2d] text-white px-3 py-1 rounded hover:bg-opacity-80"
                      >
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <p className="text-[#050d2d]">No data available for the selected options.</p>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Resources;

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <div className="mb-4 w-full sm:w-auto">
      <label className="text-lg font-medium text-[#050d2d]">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ml-2 p-2 border border-[#050d2d] rounded focus:outline-none focus:ring-2 focus:ring-[#050d2d] bg-white text-[#050d2d] cursor-pointer w-full sm:w-auto"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
