import Input from './components/Input';
import './App.css';

const App = () => {
  return (
    <div className="pg-container">
      <div className="pg-header">
        <div className="password">
          <span id="password">Password Here</span>
          <button id="copy-btn">Copy</button>
        </div>
      </div>
      <div className="pg-body">
      <Input label="length" title="Password Length" type="number" id="length" value="10" min="8" max="30" />
      <Input label="uppercase" title="Contain Uppercase Letters" type="checkbox" id="uppercase" />
      <Input label="lowercase" title="Contain Lowercase Letters" type="checkbox" id="lowercase" />
      <Input label="number" title="Contain Numbers" type="checkbox" id="number" />
      <Input label="symbol" title="Contain Symbols" type="checkbox" id="symbol" />
      <button className="generator" id="generator-btn">Generate Password</button>
    </div>
    </div>
  );
}

export default App;
