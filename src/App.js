import React, {useEffect, useState} from 'react';
import './App.css';
import UMKCTopHeader from './UMKCTopHeader';
import UMKCJobEvalHeader from './UMKCJobEvalHeader';
import UMKCStickyHeader from './UMKCStickyHeader';

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 220) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App-container">
      <UMKCTopHeader />
      <UMKCJobEvalHeader />
      <UMKCStickyHeader className={showStickyHeader ? 'sd-sticky-header-visible' : 'sd-sticky-header-hidden'} />
      <h2>General Guidelines:</h2>
      <ul>
        <li>You must be GTA certified to work as a lab instructor. More information on the certification process can be found <a href="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/">here</a>. </li>
        <li>If you are not GTA certified, you may only apply for Grader positions.</li>
        <li>GTA certification for international students can only be waived with a previous degree from a US institute.</li>
        <li>International F-1 students are limited to 20 hours/week and domestic students/PR card holders are limited to 28 hours/week.</li>
        <li>We ARE NOT hiring for any instructor positions at this time.</li>
        <li>Please do not include any courses not mentioned in your application as this will not help your potential employment.</li>
        <li>DO NOT include a copy of a CV/resume, cover letter, or reference letters as that will not help your potential employment.</li>
        <li>Please do not openly solicit for employment outside of this hiring period as we do not keep resumes/CVs on file.</li>
        <li>All positions will be chosen by November 1st. If you have not heard from anyone in the CSEE Department by November 1st, you were not chosen for a position.</li>
        <li>You must be GTA certified to work as a lab instructor. More information on the certification process can be found <a href="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/">here</a>. </li>
        <li>If you are not GTA certified, you may only apply for Grader positions.</li>
        <li>GTA certification for international students can only be waived with a previous degree from a US institute.</li>
        <li>International F-1 students are limited to 20 hours/week and domestic students/PR card holders are limited to 28 hours/week.</li>
        <li>We ARE NOT hiring for any instructor positions at this time.</li>
        <li>Please do not include any courses not mentioned in your application as this will not help your potential employment.</li>
        <li>DO NOT include a copy of a CV/resume, cover letter, or reference letters as that will not help your potential employment.</li>
        <li>Please do not openly solicit for employment outside of this hiring period as we do not keep resumes/CVs on file.</li>
        <li>All positions will be chosen by November 1st. If you have not heard from anyone in the CSEE Department by November 1st, you were not chosen for a position.</li>
        <li>You must be GTA certified to work as a lab instructor. More information on the certification process can be found <a href="https://catalog.umkc.edu/general-graduate-academic-regulations-information/international-graduate-student-academic-regulations/">here</a>. </li>
        <li>If you are not GTA certified, you may only apply for Grader positions.</li>
        <li>GTA certification for international students can only be waived with a previous degree from a US institute.</li>
        <li>International F-1 students are limited to 20 hours/week and domestic students/PR card holders are limited to 28 hours/week.</li>
        <li>We ARE NOT hiring for any instructor positions at this time.</li>
        <li>Please do not include any courses not mentioned in your application as this will not help your potential employment.</li>
        <li>DO NOT include a copy of a CV/resume, cover letter, or reference letters as that will not help your potential employment.</li>
        <li>Please do not openly solicit for employment outside of this hiring period as we do not keep resumes/CVs on file.</li>
        <li>All positions will be chosen by November 1st. If you have not heard from anyone in the CSEE Department by November 1st, you were not chosen for a position.</li>
      </ul>

      <h2>Course Positions:</h2>
      <p>These are the courses that potentially need graders:</p>
      <p>CS 101; CS 191; ... [list all courses]</p>

      <p>Undergraduates: You may only apply to be a grader for a course you have taken at UMKC.</p>
      <p>Master’s Students: You may only apply to be a grader for undergraduate courses you took during your previous course of study. You may only apply to grade for graduate-level classes you have taken at UMKC (and received a satisfactory grade of an A, A- or B+).</p>
      <p>PhD Students: You may be considered as a grader for any class, based on feedback from your advisor.</p>

      <h3>Lab Instructor Positions:</h3>
      <p>These are the courses that potentially need lab instructors:</p>
      <p>CS 101L; CS 201L; ... [list lab courses]</p>

      <h2>Additional Information:</h2>
      <p>Descriptions for the above-mentioned courses can be found <a href="https://catalog.umkc.edu/course-offerings/">here</a>.</p>

      <footer>
        <p>If you have questions, please contact the School of Graduate Studies at <a href="mailto:umkcsgs@umkc.edu">umkcsgs@umkc.edu</a> or 816-235-1301.</p>
      </footer>
    </div>
  );
}

export default App;