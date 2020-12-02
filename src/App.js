import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Container from "./components/Container/Container";
import GradientItem from "./components/GradientItem/GradientItem";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  const initFormState = { firstColor: "", secondColor: "" };
  const [form, setForm] = useState(initFormState);
  const [gradients, setGradient] = useState([]);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addGradient = () => {
    setGradient([
      ...gradients,
      {
        ...form,
        id: gradients.length + 1,
      },
    ]);
    setForm(initFormState);
  };

  const removeGradient = (id) => {
    setGradient(gradients.filter((gradient) => gradient.id !== id));
  };
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onSubmit",
    mode: "onSubmit",
  });

  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <div className="formContainer">
            <form onSubmit={handleSubmit(addGradient)}>
              <div className="form">
                <Input
                  label="First HEX code"
                  inputRef={register({
                    required: { value: true, message: "Field is required" },
                    pattern: {
                      value: regex,
                      message: "It`s not valid HEX code",
                    },
                  })}
                  type="text"
                  name="firstColor"
                  onChange={handleForm}
                  value={form.firstColor}
                  errors={errors.firstColor}
                />
                <Input
                  label="Second HEX code"
                  inputRef={register({
                    required: { value: true, message: "Field is required" },
                    pattern: {
                      value: regex,
                      message: "It`s not valid HEX code",
                    },
                  })}
                  type="text"
                  name="secondColor"
                  onChange={handleForm}
                  value={form.secondColor}
                  errors={errors.secondColor}
                />
              </div>
              <div className="submitBtn">
                <Button>Add gradient</Button>
              </div>
            </form>
          </div>
          {gradients.length > 0 ? (
            gradients.map((item, index) => (
              <GradientItem
                key={index}
                id={item.id}
                removeGradient={removeGradient}
                firstColor={item.firstColor}
                secondColor={item.secondColor}
              />
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>List is empty</h1>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
