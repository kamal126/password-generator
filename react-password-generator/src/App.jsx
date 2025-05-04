import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
const [pass, setPass] = useState('');
const [length,setLength] = useState(10);
const [AllowSymbols, setSymbols] = useState(false);
const [AllowNumbers, setNumbers] = useState(false);
const [AllowUppercase, setUppercase] = useState(true);
const [AllowLowercase, setLowercase] = useState(true);

const generator = () => {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789';
  const symbol = '!@#$%^&*()_+[]{}|;:,.<>?';
  let characters = ''; // Pool of allowed characters
  let password = ''; // Generated password

  // Build the character pool based on allowed options
  if (AllowLowercase) {
    characters += lower;
  }
  if (AllowUppercase) {
    characters += upper;
  }
  if (AllowNumbers) {
    characters += number;
  }
  if (AllowSymbols) {
    characters += symbol;
  }

  // Ensure at least one character type is selected
  if (characters.length === 0) {
    return 'Please select at least one character type';
  }

  // Generate the password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
};



const handleGenerate = () => {
  const newPassword = generator();
  setPass(newPassword);
};

// useEffect(() => {
//   const newPassword = generator();
//   setPass(newPassword);
// }, [length, AllowSymbols, AllowNumbers, AllowUppercase, AllowLowercase]);

useEffect(()=>{
  const newPassword = generator();
  setPass(newPassword);
}, [length, AllowSymbols, AllowNumbers, AllowUppercase, AllowLowercase])


return (
    <center>
      <div 
      className='h-50 w-150 bg-white rounded-lg ring shadow-md p-4 mt-10'>
        <div>
          <h1 className='text-2xl font-bold text-center'>Password Generator</h1>
          <p className='text-center text-gray-600'>Generate a random password</p>
          <input type="text" name="" id="" value={pass}
          className='bg-gray-200 w-100 h-10 rounded-md mt-4 p-2 text-center'
          />
          <button className='mt-4 ml-4 bg-blue-500 text-white rounded-md p-2' onClick={handleGenerate}>Generate Password</button>

          <br/>
          <div
          className='flex gap-2 items-center mt-4'>
          <span>
          <input type="range" name="range" id="passwordLength" min="8" max="20" value={length} onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="passwordLength"> Length:{length}</label>
          </span>

          <span>
          <input type="checkbox" name="includeSymbols" id="includeSymbols" 
          checked={AllowSymbols} onChange={()=> setSymbols(!AllowSymbols)} />
          <label htmlFor="includeSymbols">Symbols</label>
          </span>

          <span>
          <input type="checkbox" name="includeNumbers" id="includeNumbers" 
          checked={AllowNumbers} 
          onChange={()=> setNumbers(!AllowNumbers)}
          />
          <label htmlFor="includeNumbers">Numbers</label>
          </span>

          <span>
          <input type="checkbox" name="includeUppercase" id="includeUppercase"
          checked={AllowUppercase}
          onChange={()=> setUppercase(!AllowUppercase)}
          />
          <label htmlFor="includeUppercase">Uppercase</label>
          </span>

          <span>
          <input type="checkbox" name="includeLowercase" id="includeLowercase" 
          checked={AllowLowercase} onChange={()=> setLowercase(!AllowLowercase)} />
          <label htmlFor="includeLowercase">Lowercase</label>
          </span>
          </div>
        </div>
      </div>
    </center>
  )
}


export default App;
