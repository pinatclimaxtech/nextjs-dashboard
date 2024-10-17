const courses = [
  "Full Stack Developement Program",
  "Python Automation Testing Program",
  "UI/UX Program",
  "我的測試",
];


export default function Page() {
  
  
  const arrayDataItems = courses.map((course, index) => <li key={index}>{index+1}, {course}</li>);


  return (
    // <p>dashboard page</p>
    <ul>{arrayDataItems}</ul>
    
  )

}