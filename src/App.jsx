import { useState } from 'react';
import Input from './components/Input';
import { getUppercase, getLowercase, getNumber, getSymbol } from './helpers/getters';
import './App.css';

const App = () => {
  const [length, setLength] = useState(10);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState('');
  const [copyButton, setCopyButton] = useState(true);

  const handleLengthInput = ({ target }) => {
    const numberInput = target.value;

    setLength(numberInput);
  }

  const handleUppercaseInput = ({ target }) => {
    const isChecked = target.checked;
    const id = target.id;
    const condition = isChecked && id === 'uppercase' ? setUppercase(true) : setUppercase(false);

    return condition;
  }

  const handleLowercaseInput = ({ target }) => {
    const isChecked = target.checked;
    const id = target.id;
    const condition = isChecked && id === 'lowercase' ? setLowercase(true) : setLowercase(false);

    return condition;
  }

  const handleNumberInput = ({ target }) => {
    const isChecked = target.checked;
    const id = target.id;
    const condition = isChecked && id === 'number' ? setNumber(true) : setNumber(false);

    return condition;
  }

  const handleSymbolInput = ({ target }) => {
    const isChecked = target.checked;
    const id = target.id;
    const condition = isChecked && id === 'symbol' ? setSymbol(true) : setSymbol(false);

    return condition;
  }

  const composePassword = () => {
    const characters = [];

    if (uppercase) characters.push(getUppercase());
    if (lowercase) characters.push(getLowercase());
    if (number) characters.push(getNumber());
    if (symbol) characters.push(getSymbol());
    if (characters.length === 0) return '';

    const character = characters[Math.floor(Math.random() * characters.length)];

    return character;
  }

  const generatePassword = () => {
    let password = '';
    
    for (let i = 0; i < length; i += 1) {
      const character = composePassword();
      password += character;
    }

    setPassword(password);
    setCopyButton(false);
  }

  const copyPassword = () => {
    const copy = navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');

    setCopyButton(true);
    return copy;
  }

  return (
    <div className="pg-container">
      <div className="pg-header">
        <div className="password">
          { password ? <span>{ password }</span> : <span>Password Here</span> }
          <button type="button" disabled={ copyButton } onClick={ copyPassword }>Copy</button>
        </div>
      </div>
      <div className="pg-body">
        <Input label="length" title="Password Length" type="number" id="length" value={ length } min="8" max="30" onChange={ handleLengthInput } />
        <Input label="uppercase" title="Contain Uppercase Letters" type="checkbox" id="uppercase" value={ uppercase } onChange={ handleUppercaseInput } />
        <Input label="lowercase" title="Contain Lowercase Letters" type="checkbox" id="lowercase" value={ lowercase } onChange={ handleLowercaseInput } />
        <Input label="number" title="Contain Numbers" type="checkbox" id="number" value={ number } onChange={ handleNumberInput } />
        <Input label="symbol" title="Contain Symbols" type="checkbox" id="symbol" value={ symbol } onChange={ handleSymbolInput } />
        <button className="generator" type="button" onClick={ generatePassword }>Generate Password</button>
      </div>
    </div>
  );
}

export default App;
