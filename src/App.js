import Input from './components/Input';
import Button from './components/Button';

import { Row, Container, Content } from './style.js';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [clearInput, setClearInput] = useState(true);
  const [errorDiv0  , setErrorDiv0] = useState(false);
  const [operator, setOperator] = useState('');

  const handlerAddNumber = (num) => {
    if (errorDiv0) {
      return
    }
    if (currentNumber === "0"||clearInput) {
      setCurrentNumber(num);
      setClearInput(false);
    } else {
      setCurrentNumber(prev => `${prev}${num}`);
    }
  }

  const handlerClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setClearInput(true);
    setErrorDiv0(false);
    setOperator('');
  }

  const handleSumNumber = () =>{
    setOperator('+');
    handleEqual();
    setFirstNumber(currentNumber);
  }
  const handleMultNumber = () => {
    setOperator('*');
    handleEqual();
    setFirstNumber(currentNumber);
  }
  const handleMinusNumber = () => {
    setOperator('-');
    handleEqual();
    setFirstNumber(currentNumber);
  }

  const handleDivNumber = () => {
    setOperator('/');
    handleEqual();
    setFirstNumber(currentNumber);
  }

  const handleEqual = () => {
    if (errorDiv0) {
      return
    }
    setClearInput(true);
    if (firstNumber != "0") {
      if (operator === '+') {
        const sum = Number(firstNumber) + Number(currentNumber);
        setCurrentNumber(String(sum));
      }else if (operator === '-') {
        const sum = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sum));
      } else if (operator === '*') {
        const sum = Number(firstNumber) * Number(currentNumber);
        setCurrentNumber(String(sum));
      } else if (operator === '/') {
        if (currentNumber === "0") {
          setCurrentNumber('Error');
          setErrorDiv0(true);
          return
        }
        const sum = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(sum));
      }
    }
    setClearInput(true);
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handlerAddNumber("7")} />
          <Button label="8" onClick={() => handlerAddNumber("8")} />
          <Button label="9" onClick={() => handlerAddNumber("9")} />
          <Button label="C" onClick={() => handlerClear()} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handlerAddNumber("4")} />
          <Button label="5" onClick={() => handlerAddNumber("5")} />
          <Button label="6" onClick={() => handlerAddNumber("6")} />
          <Button label="/" onClick={() => handleDivNumber()} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handlerAddNumber("1")} />
          <Button label="2" onClick={() => handlerAddNumber("2")} />
          <Button label="3" onClick={() => handlerAddNumber("3") }/>
          <Button label="x" onClick={() => handleMultNumber()} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handlerAddNumber("0")} />
          <Button label="+" onClick={() => handleSumNumber()} />
          <Button label="-" onClick={() => handleMinusNumber()} />
          <Button label="=" onClick={() => handleEqual()}/>
        </Row>
      </Content>

    </Container>
  );
}

export default App;
