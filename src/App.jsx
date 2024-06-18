import { useEffect, useState } from 'react'

function App() {
  const [passwordLength, setPasswordLenght] = useState(0)
  const [isNumber, setIsNumber] = useState(true);
  const [isChar, setisChar] = useState(true);
  const [password, setpassword] = useState("");
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
    const copyText = document.getElementById('password')
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }
  return (
    <>
      <div className='outerbox'>
        <div className='outputbox'>
          <input type="text" value={password} id='password'/>
          <button className='copyBtn' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='inputbox'>
          <label for="points">Length({passwordLength})</label>
          <input type="range" name="passwordlength" id="passwordlength" min="0" max="20" step="1" value={passwordLength} onChange={(e)=>{setPasswordLenght(e.target.value)}}/>
          <label for="number"> Number</label>
          <input type="checkbox" name="number" id="number" defaultChecked onChange={(e) => { setIsNumber(e.target.checked); char.checked =(e.target.checked===false)?true:isChar; setisChar(char.checked)}} />
          <label for="char"> Characters</label>
          <input type="checkbox" name="char" id="char" defaultChecked onChange={(e) => { setisChar(e.target.checked);number.checked =(e.target.checked===false)?true:isNumber;setIsNumber(number.checked)}} />
        </div>
      </div>
    </>
  )
}

export default App
