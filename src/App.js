import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Step />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>✌🏻</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>😎</p>
      </StepMessage>
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Jonas" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // setStep((s) => s + 1); Update the state based on the current value..

    // BAD PRACTICE
    // test.name = "Fred";
    // setTest({ name: "Fred" });
    // Below is the good practice
    // setTest((prevTest) => ({ ...prevTest, name: "Fred" }));
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div class="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Still broke?
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈🏻</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}
