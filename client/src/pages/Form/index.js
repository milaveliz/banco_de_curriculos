import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { Field, useFormik } from 'formik';
import InputMask from "react-input-mask";
import Select from 'react-select';
import api from '../../services/api'
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import * as yup from "yup";
import Cep from '../../services/cep.tsx'
// import ReactCepPromise, { IOnResult } from 'react-cep-promise'


const maritalStatus = [
  { value: 'solteiro_solteira', label: 'solteiro|solteira' },
  { value: 'casado_casada', label: 'casado|casada' },
  { value: 'divorciado_divorciada', label: 'divorciado|divorciada' },
  { value: '', label: 'não informar' },
];

const sex = [
  { value: 'feminio', label: 'feminio' },
  { value: 'masculino', label: 'masculino' },
  { value: '', label: 'não informar' },
];

const car = [
  { value: 'sim', label: 'sim' },
  { value: 'não', label: 'não' },
];

const licence = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
  { value: 'nao_possuo', label: 'não possuo' },
];

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "Digite seu nome completo!")
    .required("Digite seu nome completo!"),
  intendedPosition: yup
    .string()
    .min(3, "Digite sua profissão!")
    .required("Digite sua profissão!"),
  birthDate: yup
    // .string()
    .date()
    .required("Selecione a sua data de nascimento!"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite um email válido"),
  phone1: yup
    .string()
    .required("Digite o número do seu celular!"),
  cpf: yup
    .string()
    .required("Digite seu CPF!"),
  // address_number: yup
  //   .string()
  //   .min(1, "Digite o número!")
  //   .required("Digite o número!"),
});

export default function Form(props) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

  const onSubmit = async (values) => {
    const { ...data } = values;

    const response = await axios
      .post("http://localhost:8080/api/v1/register", data)
      .catch((err) => {
        if (err && err.response) setError(err.response.data.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
      window.location = "cep";
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      intendedPosition: "",
      birthDate: "",
      maritalStatus: "",
      sex: "",
      email: "",
      phone1: "",
      phone2: "",
      phone3: "",
      phone4: "",
      idCard: "",
      cpf: "",
      car: "",
      licence: "",
      // cep: "",
      // street: "",
      // neighborhood: "",
      // address_number: "",
      // city: "",
      // state: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  // console.log("Error", error);

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: "dados-pessoais",
      title: "Dados Pessoais",
    },
    {
      id: "contatos",
      title: "Contatos",
    },
    {
      id: "documentos",
      title: "Documentos",
    },
    // {
    //   id: "endereco",
    //   title: "Endereço",
    // },
  ]

  function handleNextStep() {
    switch (currentStep) {
      case 0:
        if (formik.values.name.length === 0 || formik.values.birthDate === "") {
          alert("PREENCHA CORRETAMENTE OS CAMPOS OBRIGATÓRIOS!");
          break
        } else {
          return setCurrentStep((prevStep) => prevStep + 1);
        }
      case 1:
        if (formik.values.email.length === 0 || formik.values.phone1 === 0) {
          alert("PREENCHA CORRETAMENTE OS CAMPOS OBRIGATÓRIOS!");
          break
        } else {
          return setCurrentStep((prevStep) => prevStep + 1);
        }
      case 2:
        if (formik.values.cpf.length === 0) {
          alert("PREENCHA CORRETAMENTE OS CAMPOS OBRIGATÓRIOS!");
          break
        } else {
          return setCurrentStep((prevStep) => prevStep + 1);
        }
      default:
        break
    }
  }

  function handlePreviousStep() {
    setCurrentStep((prevStep) => prevStep - 1);
  }

  // const [fetching, setFetching] = 'false';
  // const [cep, setCep] = '';
  // const [city, setCity] = '';
  // const [state, setState] = '';
  // const [neighborhood, setNeighborhood] = '';
  // const [street, setStreet] = '';
  // < Cep />


  return (
    <S.Container>
      <S.Content>
        <S.Image></S.Image>
      </S.Content>

      {/* <S.Content>
        <S.Title>Currículos</S.Title>
        <S.List>
          <S.ListItem>Currículo: </S.ListItem>
        </S.List>
        <S.LinkHome to="/">Enviar</S.LinkHome>
      </S.Content> */}

      <div>
        <Toaster />

        {!error && <>{success ? success : ""}</>}
        {!success && <>{error ? error : ""}</>}

        {/* <form onSubmit={savingInstitution}> */}
        <form onSubmit={formik.handleSubmit} >

          <h2>{steps[currentStep].title}</h2>
          <hr />
          {/* <p>
            {currentStep + 1} de {steps.length}
          </p> */}

          {steps[currentStep].id === "dados-pessoais" && (
            <div>
              <div>
                <label htmlFor="name">Nome Completo:*</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  required
                />
                {/* {formik.touched.name && formik.errors.name && (
                  <span>{formik.errors.name}</span>
                )} */}
                <div>
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : ""}
                </div>
              </div>
              <div>
                <label htmlFor="intendedPosition">Cargo Pretendido ou Pofissão:*</label>
                <input
                  id="intendedPosition"
                  name="intendedPosition"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.intendedPosition}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>
              <div>
                {formik.touched.intendedPosition && formik.errors.intendedPosition
                  ? formik.errors.intendedPosition
                  : ""}
              </div>
              <div>
                <label htmlFor="birthDate">Data Nascimento:*</label>
                <InputMask
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.birthDate}
                  onBlur={formik.handleBlur}
                  required
                />
                <div>
                  {formik.touched.birthDate && formik.errors.birthDate
                    ? formik.errors.birthDate
                    : ""}
                </div>
              </div>
              <div>
                <label htmlFor="maritalStatus">Estado Civil:</label>
                <Select
                  id="maritalStatus"
                  name="maritalStatus"
                  // value={formik.values.maritalStatus}
                  defaultValue={selectedOption}
                  options={maritalStatus}
                  // onChange={setSelectedOption}
                  onChange={selectedOption =>
                    formik.setFieldValue("maritalStatus", selectedOption.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="sex">Sexo:</label>
                <Select
                  id="sex"
                  name="sex"
                  // value={formik.values.sex}
                  defaultValue={selectedOption}
                  options={sex}
                  // onChange={setSelectedOption}
                  onChange={selectedOption =>
                    formik.setFieldValue("sex", selectedOption.value)
                  }
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "contatos" && (
            <div>
              <div>
                <label htmlFor="email">Email:*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                <div>
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </div>
              </div>
              <div>
                <label htmlFor="phone1">Celular:*</label>
                <InputMask
                  id="phone1"
                  name="phone1"
                  type="tel"
                  value={formik.values.phone1}
                  onChange={formik.handleChange}
                  mask="(99) 9 9999-9999"
                  onBlur={formik.handleBlur}
                  required
                />
                <div>
                  {formik.touched.phone1 && formik.errors.phone1
                    ? formik.errors.phone1
                    : ""}
                </div>
              </div>
              <div>
                <label htmlFor="phone2">Telefone Fixo 1:</label>
                <InputMask
                  id="phone2"
                  name="phone2"
                  type="tel"
                  value={formik.values.phone2}
                  onChange={formik.handleChange}
                  mask="(99) 9999-9999"
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="phone3">Telefone Fixo 2:</label>
                <InputMask
                  id="phone3"
                  name="phone3"
                  type="tel"
                  value={formik.values.phone3}
                  onChange={formik.handleChange}
                  mask="(99) 9999-9999"
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="phone4">Contato:</label>
                <InputMask
                  id="phone4"
                  name="phone4"
                  type="tel"
                  value={formik.values.phone4}
                  onChange={formik.handleChange}
                  mask="(99) 9 9999-9999"
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "documentos" && (
            <div>
              <div>
                <label htmlFor="idCard">Identidade:</label>
                <input
                  id="idCard"
                  name="idCard"
                  type="text"
                  value={formik.values.idCard}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="cpf">CPF:*</label>
                <InputMask
                  id="cpf"
                  name="cpf"
                  type="text"
                  value={formik.values.cpf}
                  onChange={formik.handleChange}
                  mask="999.999.999-99"
                  onBlur={formik.handleBlur}
                  required
                />
                <div>
                  {formik.touched.cpf && formik.errors.cpf
                    ? formik.errors.cpf
                    : ""}
                </div>
              </div>
              <div>
                <label htmlFor="car">Possui Veículo?</label>
                <Select
                  id="car"
                  name="car"
                  // value={formik.values.car}
                  defaultValue={selectedOption}
                  options={car}
                  // onChange={setSelectedOption}
                  onChange={selectedOption =>
                    formik.setFieldValue("car", selectedOption.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="licence">Habilitação?</label>
                <Select
                  id="licence"
                  name="licence"
                  // value={formik.values.licence}
                  defaultValue={selectedOption}
                  options={licence}
                  // onChange={setSelectedOption}
                  onChange={selectedOption =>
                    formik.setFieldValue("licence", selectedOption.value)
                  }
                />
              </div>
            </div>
          )}

          <div>
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handlePreviousStep}
              >
                Voltar
              </button>
            )}

            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={handleNextStep}
              >
                Próximo
              </button>
            )}

            {currentStep === steps.length - 1 && (
              <div>
              <button type="submit" >
                Próximo
              </button>
            </div>
            )}
          </div>

        </form>
      </div>

    </S.Container>
  )
}