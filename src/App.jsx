import { useEffect, useRef, useState } from 'react'

function App() {
  const [passwordLength, setPasswordLenght] = useState(0)
  const [isNumber, setIsNumber] = useState(true);
  const [isChar, setisChar] = useState(true);
  const [password, setpassword] = useState("");
  const inputFieldRef = useRef(null);
  
  function generatePassword() {
    let num = "1234567890";
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    char = char + "`~!@#$%^&*?:;";
    let password = '';
    
    if (isNumber===true && isChar===true) {
      for (let index = 0; index < passwordLength; index++) {
        let r = Math.random();
        if (r < 0.5) { 
          password += num.charAt(Math.floor(Math.random() * num.length));
        }
        else {
          password += char.charAt(Math.floor(Math.random() * char.length));
        }
      }
      return password;
    }
    else if (isNumber===true&& isChar===false) {
      for (let index = 0; index < passwordLength; index++) {
          password += num.charAt(Math.floor(Math.random() * num.length));
      }
      return password;
    }
    else {
      for (let index = 0; index < passwordLength; index++) {
        password += char.charAt(Math.floor(Math.random() * char.length));
    }
    return password;
    }
  }

  useEffect(() => {
    setpassword(generatePassword());
   },[isChar,isNumber,passwordLength])

  function copyToClipboard() {
    inputFieldRef.current.select();
    navigator.clipboard.writeText(inputFieldRef.current.value);
  }
  return (
    <>
      <div className='outerbox'>
        <p>PASSWORD GENERATOR</p>
        <div className='outputbox'>
          <input type="text" ref={inputFieldRef} value={password} id='password'/>
          <button className='copyBtn' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='inputbox'>
          <label for="points" className='label'>Length({passwordLength})</label>
          <input type="range" className='rangeslid' name="passwordlength" id="passwordlength" min="0" max="30" step="1" value={passwordLength} onChange={(e)=>{setPasswordLenght(e.target.value)}}/>
          <label for="number" className='label'> Number</label>
          <input type="checkbox" className='checkmark' name="number" id="number" defaultChecked onChange={(e) => { setIsNumber(e.target.checked); char.checked =(e.target.checked===false)?true:isChar; setisChar(char.checked)}} />
          <label for="char" className='label'> Characters</label>
          <input type="checkbox" className='checkmark' name="char" id="char" defaultChecked onChange={(e) => { setisChar(e.target.checked);number.checked =(e.target.checked===false)?true:isNumber;setIsNumber(number.checked)}} />
        </div>
      </div>
    </>
  )
}

export default App
