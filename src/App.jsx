import './App.css'
import {InputCheckbox, InputDefault} from "./ui/inputs/input.jsx";
import {ButtonDefault} from "./ui/buttons/button.jsx";
import {Form} from "./components/form/form.jsx";
import {useRef, useState} from "react";

function App() {
    const handleSubmit = (e) => {e.preventDefault();};
    const loginEmailRef = useRef(null);
    const loginPasswordRef = useRef(null);
    const registerEmailRef = useRef(null);
    const registerPasswordRef = useRef(null);
    const [loginField, setLoginField] = useState(false);

    function nextInput(e, nextRef) {
        if (e.key === "Enter" && nextRef.current && e.target.value !== "") {
            nextRef.current.focus();
        }
    }

  return (
    <section>
        <h2>UseRef & UseState</h2>


        <main>
            <Form title="Login" handleSubmit={handleSubmit}>
                <InputDefault placeholder={"Enter your email"} type={"email"} onChange={(e) => {setLoginField(e.target.value !== "")}} ref={loginEmailRef} onKeyDown={(e) => nextInput(e,loginPasswordRef)} />
                <InputDefault placeholder={"Enter your password"} type={"password"} ref={loginPasswordRef}/>
                <InputCheckbox text={"Lorem ipsum dolor sit."}/>
                <ButtonDefault buttonText={"Login"}/>
            </Form>

            {
                loginField === false &&
                    <Form title="Register" handleSubmit={handleSubmit}>
                        <InputDefault placeholder={"Enter your email"} type={"email"} ref={registerEmailRef} onKeyDown={(e)=> nextInput(e,registerPasswordRef)}/>
                        <InputDefault placeholder={"Enter your password"} type={"password"} ref={registerPasswordRef}/>
                        <InputCheckbox text={"Lorem ipsum dolor sit."}/>
                        <ButtonDefault buttonText={"Register"}/>
                    </Form>
            }
        </main>


        <span>@Kuretao</span>
    </section>
  )
}

export default App
