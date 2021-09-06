import  { useState } from 'react';
import * as S from './styled';
import { useFormik } from 'formik';
import InputMask from "react-input-mask";
import Select from 'react-select';
import { Toaster } from "react-hot-toast";
import axios from 'axios';
import * as Yup from "yup";


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

const customStyles = {
  control: () => ({
    border: `3px solid #ccc`,
    height: `1.5rem`,
    padding: `0.5rem`,
    borderRadius: `0.25rem`,
    width: `100%`,
    backgroundColor: `#000`,
    color: `#aaaa`,
    fontSize: `1rem`,
    fontWeight: `bold`,
    display: 'flex',
    marginBottom: `1rem`,
    cursor: "pointer",
  }),

  option: (provided, state) => ({
      ...provided,
    borderBottom: `1px dotted`,
    width: `100%`,
    color: state.isSelected ? "#aaaa" : "#000",
    fontSize: `1rem`,
    backgroundColor: state.isSelected ? "#eee" : "#fff",
      cursor: "pointer",
      marginTop: `0.25rem`,

  //     dropdownIndicator: base => ({
  //   ...base,
  //   display: "none"
  // }),
  // indicatorSeparator: base => ({
  //   ...base,
  //   display: "none"
  // }),
  // valueContainer: base => ({
  //   ...base,
  //   padding: 0,
  //   paddingLeft: 2
  // })
  }),

  // option: (provided, state) => ({
  //   ...provided,
  //   borderBottom: "1px dotted",
  //   color: state.isSelected ? "grey" : "#000",
  //   fontSize: `1rem`,
  //   backgroundColor: state.isSelected ? "#eee" : "#fff",
  //   textAlign: "left",
  //   cursor: "pointer",
  //   width: "100%"
  // }),

  // container: base => ({
  //   ...base,
  //   width: "100%"
  // }),

  // control: base => ({
  //   ...base,
  //   height: `1rem`,
  //   border: `3px solid #ccc`,
  //   fontSize: `1rem`,
  //   fontWeight: `bold`,
  //   borderRadius: `0.25rem`,
  //   width: `100%`,
  //   textAlign: `left`,
  //   backgroundColor: `#000`,
  //   marginBottom: `1rem`,
  // }),

  // dropdownIndicator: base => ({
  //   ...base,
  //   display: "none"
  // }),
  // indicatorSeparator: base => ({
  //   ...base,
  //   display: "none"
  // }),
  // valueContainer: base => ({
  //   ...base,
  //   padding: 0,
  //   paddingLeft: 2
  // })
}

const validationSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(3, "Digite seu nome completo!")
    .required("Digite seu nome completo!"),
  intendedPosition: Yup
    .string()
    .min(4, "Digite sua profissão!")
    .required("Digite sua profissão!"),
  birthDate: Yup
    .date()
    .max(new Date(Date.now() - 567648000000), "Você precisa ter pelo menos 18 anos!")
    .required("Selecione a sua data de nascimento!"),
  email: Yup
    .string()
    .email("Digite um email válido")
    .required("Digite um email válido"),
  phone1: Yup
    .string()
    .required("Digite o número do seu celular!"),
  cpf: Yup
    .string()
    .required("Digite seu CPF!"),
  cep: Yup
    .string()
    .required("Digite seu CEP!"),
  numero: Yup
    .string()
    .min(1, "Digite o número!")
    .required("Digite o número!"),
});

export default function Form(props) {

  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const onSubmit = async (values) => {
    const response = await axios
      .post("http://localhost:3000/api/v1/register", values)
      .catch((err) => {
        if (err && err.response) setError(err.response.values.message);
        setSuccess(null);
      });

    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message);
      window.location = "/";
    }
  };

  const { touched, values, errors, handleChange, handleSubmit, setFieldValue, handleBlur } = useFormik({
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
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      numero: "",
    },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit,
  });

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
    {
      id: "endereco",
      title: "Endereço",
    },
  ]

  function handleNextStep() {
    switch (currentStep) {
      case 0:
        if (values.name.length === 0 || values.intendedPosition.length === 0 || values.birthDate === "") {
          alert("PREENCHA CORRETAMENTE OS CAMPOS OBRIGATÓRIOS!");
          break
        } else {
          return setCurrentStep((prevStep) => prevStep + 1);
        }
      case 1:
        if (values.email.length === 0 || values.phone1 === 0) {
          alert("PREENCHA CORRETAMENTE OS CAMPOS OBRIGATÓRIOS!");
          break
        } else {
          return setCurrentStep((prevStep) => prevStep + 1);
        }
      case 2:
        if (values.cpf.length === 0) {
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

  function findCep(event) {
    // event.PreventDefault();

    const inputDoCep = document.querySelector("#cep");
    const valorDoCep = inputDoCep.value;
    const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

    fetch(url).then(response => {
      return response.json();
    })
      .then(data => {
        if (data.erro) {
          alert("O CEP DIGITADO ESTÁ INVÁLIDO");
          return;
        }
        // atribuirCampos(data);

        setFieldValue('rua', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        setFieldValue('estado', data.uf);
      })
  }

  return (
    <S.Container>
      <S.Content>
        <S.Image></S.Image>
      </S.Content>

      <S.Content>
        <Toaster />

        {!error && <>{success ? success : ""}</>}
        {!success && <>{error ? error : ""}</>}

        <S.Form onSubmit={handleSubmit}>
          <S.H2>{steps[currentStep].title}</S.H2>
          <hr />
          <S.Paragrafo>
            {currentStep + 1} de {steps.length}
          </S.Paragrafo>
          {steps[currentStep].id === "dados-pessoais" && (
            <div>
              <div>
                <label htmlFor="name">Nome Completo:*</label>
                <S.Input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <S.Alert>{errors.name}</S.Alert>
                ) : null}
              </div>
              <div>
                <label htmlFor="intendedPosition">Cargo Pretendido ou Pofissão:*</label>
                <S.Input
                  id="intendedPosition"
                  name="intendedPosition"
                  type="text"
                  onChange={handleChange}
                  value={values.intendedPosition}
                  onBlur={handleBlur}
                />
                {errors.intendedPosition && touched.intendedPosition ? (
                  <S.Alert>{errors.intendedPosition}</S.Alert>
                ) : null}
              </div>
              <div>
                <label htmlFor="birthDate">Data Nascimento:*</label>
                <S.Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  onChange={handleChange}
                  value={values.birthDate}
                  onBlur={handleBlur}
                />
                {errors.birthDate && touched.birthDate ? (
                  <S.Alert>{errors.birthDate}</S.Alert>
                ) : null}
              </div>

              <div>
                <label htmlFor="maritalStatus">Estado Civil:</label>
                <Select
                  id="maritalStatus"
                  name="maritalStatus"
                  defaultValue={selectedOption}
                  options={maritalStatus}
                  styles={customStyles}
                  onChange={selectedOption =>
                    setFieldValue("maritalStatus", selectedOption.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="sex">Sexo:</label>
                <Select
                  id="sex"
                  name="sex"
                  defaultValue={selectedOption}
                  options={sex}
                  styles={customStyles}
                  onChange={selectedOption =>
                    setFieldValue("sex", selectedOption.value)
                  }
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "contatos" && (
            <div>
              <div>
                <label htmlFor="email">Email:*</label>
                <S.Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <S.Alert>{errors.email}</S.Alert>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone1">Celular:*</label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  value={values.phone1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {(inputProps) => (
                    <S.Input
                      {...inputProps}
                      id="phone1"
                      name="phone1"
                      type="tel"
                    />
                  )}
                </InputMask>
                {errors.phone1 && touched.phone1 ? (
                  <S.Alert>{errors.phone1}</S.Alert>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone2">Telefone Fixo 1:</label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  value={values.phone2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {(inputProps) => (
                    <S.Input
                      {...inputProps}
                      id="phone2"
                      name="phone2"
                      type="tel"
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <label htmlFor="phone3">Telefone Fixo 2:</label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  value={values.phone3}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {(inputProps) => (
                    <S.Input
                      {...inputProps}
                      id="phone3"
                      name="phone3"
                      type="tel"
                    />
                  )}
                </InputMask>
              </div>
              <div>
                <label htmlFor="phone4">Contato:</label>
                <InputMask
                  mask="(99) 9 9999-9999"
                  value={values.phone4}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {(inputProps) => (
                    <S.Input
                      {...inputProps}
                      id="phone4"
                      name="phone4"
                      type="tel"
                    />
                  )}
                </InputMask>
              </div>
            </div>
          )}

          {steps[currentStep].id === "documentos" && (
            <div>
              <div>
                <label htmlFor="idCard">Identidade:</label>
                <S.Input
                  id="idCard"
                  name="idCard"
                  type="text"
                  value={values.idCard}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="cpf">CPF:*</label>
                <InputMask
                  mask="999.999.999-99"
                  value={values.cpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {(inputProps) => (
                    <S.Input
                      {...inputProps}
                      id="cpf"
                      name="cpf"
                      type="text"

                    />
                  )}
                </InputMask>
                {errors.cpf && touched.cpf ? (
                  <S.Alert>{errors.cpf}</S.Alert>
                ) : null}

              </div>
              <div>
                <label htmlFor="car">Possui Veículo?</label>
                <Select
                  id="car"
                  name="car"
                  defaultValue={selectedOption}
                  options={car}
                  styles={customStyles}
                  onChange={selectedOption =>
                    setFieldValue("car", selectedOption.value)
                  }
                />
              </div>
              <div>
                <label htmlFor="licence">Habilitação?</label>
                <Select
                  id="licence"
                  name="licence"
                  defaultValue={selectedOption}
                  options={licence}
                  styles={customStyles}
                  onChange={selectedOption =>
                    setFieldValue("licence", selectedOption.value)
                  }
                />
              </div>
            </div>
          )}

          {steps[currentStep].id === "endereco" && (
            <div>
              <div>
                <label htmlFor="cep">CEP:*</label>
                <InputMask
                  mask="99999-999"
                  value={values.cep}
                  onChange={handleChange}
                  onBlur={(valor) => findCep(valor)}
                >
                  {(inputProps) => (
                    <S.Input
                      {...inputProps}
                      id="cep"
                      name="cep"
                      type="text"
                    />
                  )}
                </InputMask>
                {errors.cep && touched.cep ? (
                  <S.Alert>{errors.cep}</S.Alert>
                ) : null}
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <S.Input
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={values.cidade}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="estado">Estado</label>
                <S.Input
                  id="estado"
                  type="text"
                  name="estado"
                  value={values.estado}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="bairro">Bairro</label>
                <S.Input
                  id="bairro"
                  type="text"
                  value={values.bairro}
                  name="bairro"
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="rua">Rua</label>
                <S.Input
                  id="rua"
                  type="text"
                  value={values.rua}
                  name="rua"
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label htmlFor="numero">Número:*</label>
                <S.Input
                  id="numero"
                  name="numero"
                  type="text"
                  value={values.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.numero && touched.numero ? (
                  <S.Alert>{errors.numero}</S.Alert>
                ) : null}
              </div>
            </div>
          )}

          <S.GroupButton>
            {currentStep > 0 && (
              <S.Button
                type="button"
                onClick={handlePreviousStep}
              >
                Voltar
              </S.Button>
            )}
            {currentStep < steps.length - 1 && (
              <S.Button
                type="button"
                onClick={handleNextStep}
              >
                Próximo
              </S.Button>
            )}
            {currentStep === steps.length - 1 && (
              <div>
                <S.Button type="submit">
                  Cadastrar
                </S.Button>
              </div>
            )}
          </S.GroupButton>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}