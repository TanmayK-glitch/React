import Student from "./Students"

function App(){
  return(
    <>
    <Student name="Tanmay" age={19} isStudent={true} />
    <Student name="Onkar" age={23} isStudent={false} />
    <Student name="Parth" age={66} isStudent={false} />
    <Student />
    </>
  );
}

export default App
