import React,{useState, useEffect} from 'react'
let array = [
  { id: 1, code: "CS202", hours: 3, score: 90, gradePoint: 4.0, grade: "A+", selected: false },
  { id: 2, code: "CS205", hours: 3, score: 90, gradePoint: 4.0, grade: "A+", selected: false },
  { id: 3, code: "CS408", hours: 3, score: 90, gradePoint: 4.0, grade: "A+", selected: false },
  { id: 4, code: "CS511", hours: 3, score: 90, gradePoint: 4.0, grade: "A", selected: false },
  { id: 5, code: "CS603", hours: 3, score: 90, gradePoint: 4.0, grade: "A+", selected: false },
  { id: 6, code: "CS603P", hours: 1, score: 90, gradePoint: 4.0, grade: "A", selected: false },
  { id: 7, code: "CS604P", hours: 1, score: 90, gradePoint: 4.0, grade: "A", selected: false },
  { id: 8, code: "CS610P", hours: 1, score: 90, gradePoint: 4.0, grade: "A", selected: false },
]

const ProjectCGPA = () => {
  const [checked, setChecked] = useState(false)
  const [calCGPA, setcalCGPA] = useState(3.01)
  const [credit, setCredit] = useState(67)
  const [courses, setCourses] = useState(array);

  function gradeManagement(score) {
    if (score  >= 90 ) {
      return "A+"
    }else if (score >= 85 && score < 89.99) {
      return "A"
    }else if (score >= 80 && score < 84.99) {
      return "A-"
    }else if(score >= 75 && score < 79.99 ){
      return "B+"
    }else if (score >= 71 && score < 74.99){
        return "B"
      }else if (score >= 68 && score < 70.99){
        return "B-"
      }else if (score >= 61 && score < 67.99){
        return "C"
      }else if (score >= 50 && score < 60.99){
        return "D"
      }else{
        return "F"
      }
    }
    function calculateExactGPA(score) {
      if (score < 0 || score > 100) {
        return "Invalid score. Must be between 0 and 100.";
      }
    
      if (score >= 90) {
        return 4.00; // A+
      } else if (score >= 85) {
        return 4.00; // A
      } else if (score >= 80) {
        return 3.83; // A-
      } else if (score >= 75) {
        return 3.49; // B+
      } else if (score >= 71) {
        return 3.16; // B
      } else if (score >= 68) {
        return 2.83; // B-
      } else if (score >= 61) {
        return 2.33; // C
      } else if (score >= 50) {
        return 1.50; // D
      } else {
        return 0.00; // F
      }
    }

    const handleScoreChange = (id, newScore) => {
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === id
      ? {
                ...course,
                score: newScore,
                grade:  gradeManagement(newScore) ,
                gradePoint: calculateExactGPA(newScore) , // Simplified grading logic
              }
              : course
            )
          );
          
    };
    
    const handleSelectionChange = (id) => {
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === id ? { ...course, selected: !course.selected } : course
        )
      );
    
    };

    function handleChecked(checked) {
      
      setChecked(!checked)
      if (!checked) {
        setCourses((prevCourses) =>
          prevCourses.map((course) => ({ ...course, selected: true }))
      )
    }else{
      setCourses((prevCourses) =>
        prevCourses.map((course) => ({ ...course, selected: false }))
    )
  }
}

function calculateCGPA() {
  const selectedCourses = courses.filter((item) => item.selected);
  if (selectedCourses.length === 0) {
    setcalCGPA(3.01);
    return;
  }
  const totalCredits = selectedCourses.reduce((sum, course) => sum + course.hours, 0);
  const weightedGradePoints = selectedCourses.reduce(
    (sum, course) => sum + course.gradePoint * course.hours,
    0
  );
  const cgpa = weightedGradePoints / totalCredits;
  setcalCGPA(parseFloat(cgpa.toFixed(2))); // Rounded to 2 decimal places
}

function calculateCredit() {
  const selectedCourses = courses.filter((item) => item.selected)
  if (selectedCourses.length !== 0) {
    
    const totalCredits = selectedCourses.reduce((sum, course) => sum + course.hours,
    0);
    setCredit(totalCredits + 67)
  }else{
    setCredit(67)
  }
}

useEffect(() => {
  calculateCGPA();
  calculateCredit()
}, [courses])




  return (
    <div className=''>
      <div className='flex max-md:flex-col '>
        <div className='basis-[50%] px-5 '>
          <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5'>
            <h3 className='font-[500]'>Degree</h3>
            <p className='text-md font-[500] text-red-400'>BS</p>
          </div>
          <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5'>
            <h3 className='font-[500]'>Student ID</h3>
            <p className='text-md font-[500] text-[#34bfa3]'>BC12345678</p>
          </div>
          <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5'>
            <h3 className='font-[500]'>Current CGPA</h3>
            <p className='text-lg font-[600] text-[#34bfa3]'>3.01</p>
          </div>
          <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5'>
            <h3 className='font-[500]'>Credits Earned</h3>
            <p className='text-md font-[500] text-[#ffb822]'>67</p>
          </div>
        </div>
        <div className='h-[35vh] w-[1px] pt-0 bg-gray-400 max-md:w-full max-md:h-[1px] max-md:mt-5'>
        </div>
        <div className='basis-[50%] px-5'>
        <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5'>
            <h3 className='font-[500]'>Minimum CGPA required for Degree</h3>
            <p className='text-lg font-extrabold text-[#5867dd]'>2</p>
          </div>
          <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5'>
            <h3 className='font-[500]'>Study Program</h3>
            <p className='text-md font-[500] text-[#36a3f7]'>Software Engineering</p>
          </div>
          <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5'>
            <h3 className='font-[500]'></h3>
            <p className='text-md font-[500] text-red-400'></p>
          </div>
          <div className='flex items-center justify-between border-b-[1px] border-dashed border-gray-400 py-5 mb-5'>
            <h3 className='font-[500]'></h3>
            <p className='text-md font-[500] text-red-400'></p>
          </div>
        </div>
      </div>

      <div className='flex items-center  gap-2 flex-col overflow-x-scroll'>
        <div className='  border-[1px] border-dotted border-gray-400 w-[694px] py-[1px]'>
          <p className='text-[12px] tracking-tight text-[#0000ff] px-1'>Select a course to include it in the total credits & projected CGPA. Adjust the score of selected courses to see how your CGPA changes.</p>
        </div>
        <div className='flex items-start gap-5 w-[694px] ' >
        <table className='w-full'>
          <thead className='bg-[#F7F8FA]'>
            <tr >
              <th className='border border-gray-300 px-5 py-2'><input type="checkbox" checked={checked} onChange={(e)=>  handleChecked(checked)} name="" id="" /></th>
              <th className='text-sm font-[500] text-gray-900 border border-gray-300 px-2 py-2'>Course Code</th>
              <th className='text-sm font-[500] text-gray-900 border border-gray-300 px-2 py-2'>Credit Hrs</th>
              <th className='text-sm font-[500] text-gray-900 border border-gray-300 px-2 py-2'>Score</th>
              <th className='text-sm font-[500] text-gray-900 border border-gray-300 px-2 py-2'>Grade Point</th>
              <th className='text-sm font-[500] text-gray-900 border border-gray-300 px-2 py-2'>Grade</th>
            </tr>
          </thead>
          <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className='text-sm font-[400] text-gray-900 border border-gray-300 px-5 py-2 '>
                <input
                  type="checkbox"
                  checked={course.selected}
                  onChange={() => handleSelectionChange(course.id)}
                />
              </td>
              <td className='text-sm font-[400] text-gray-900 border border-gray-300 px-2 py-2 w-14 '>{course.code}</td>
              <td className='text-sm font-[400] text-gray-900 border border-gray-300 px-2 py-2 w-14 '>{course.hours}</td>
              <td className='text-sm font-[400] text-gray-900 border border-gray-300 px-2 py-2 '>
                <input
                className='outline-none border-[1px] border-gray-800 w-14 text-sm font-[400] px-1'
                  type="number"
                  value={course.score}
                  max={100}
                  onChange={(e) => handleScoreChange(course.id, parseInt(e.target.value) || 0)}
                />
              </td>
              <td className='text-sm font-[400] text-gray-900 border border-gray-300 px-2 py-2'>{course.gradePoint.toFixed(2)}</td>
              <td className='text-sm font-[400] text-gray-900 border border-gray-300 px-2 py-2'>{course.grade}</td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className='flex flex-col gap-4'>
          <div className=' w-36 h-32 border-[1px] border-[#008000] flex flex-col items-center justify-center text-[60px] font-[700] text-[#008000]'>
            <p className='text-sm text-black'>Projected CGPA</p>
             <p>{calCGPA.toFixed(2)}</p>
          </div>
          <div className=' w-36 h-32 border-[1px] border-[#008000] flex flex-col items-center justify-center text-[60px] font-[300] text-[#34bfa3]'>
          <p className='font-[900] text-sm text-black'>Credit Earned</p>
          <p className=''>{credit}</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCGPA
