import React from 'react'
import ReactCepPromise, { IOnResult } from 'react-cep-promise'
import * as yup from "yup";
import axios from 'axios';
import { Field, useFormik } from 'formik';
import toast, { Toaster } from "react-hot-toast";
import * as S from './styled';

const validationSchema = yup.object({
    address_number: yup
        .string()
        .min(1, "Digite o número!")
        .required("Digite o número!"),
});

const Cep = () => {
    const [fetching, setFetching] = React.useState<boolean>(false);
    const [cep, setCep] = React.useState<string>('');
    const [city, setCity] = React.useState<string>('');
    const [state, setState] = React.useState<string>('');
    const [neighborhood, setNeighborhood] = React.useState<string>('');
    const [street, setStreet] = React.useState<string>('');

    function onResult(result: IOnResult): void {
        const { data, error } = result

        if (data) {
            setCity(data.city)
            setState(data.state)
            setNeighborhood(data.neighborhood)
            setStreet(data.street)
        }

        if (error) console.log(error)
    }

    const [currentStep, setCurrentStep] = React.useState(0);

    const steps = [
        {
            id: "endereco",
            title: "Endereço",
        },
    ]

    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(null);

    const onSubmit = async (values: { [x: string]: any; }) => {
        const { ...data } = values;

        const response = await axios
            .post("http://localhost:8080/api/v1/register", data)
            .catch((erro) => {
                if (erro && erro.response) setError(erro.response.data.message);
                setSuccess(null);
            });

        if (response && response.data) {
            setError(null);
            setSuccess(response.data.message);
            formik.resetForm();
        }
    };

    const formik = useFormik({
        initialValues: {
            cep: "",
            street: "",
            neighborhood: "",
            address_number: "",
            city: "",
            state: "",
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    });

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

                <form onSubmit={formik.handleSubmit}>

                    <h2>{steps[currentStep].title}</h2>
                    <hr />

                    {steps[currentStep].id === "endereco" && (
                        <div>
                            <label htmlFor="cep">CEP:*</label>
                            <ReactCepPromise
                                id="cep"
                                fetching={fetching}
                                onChange={(e) => setCep(e.target.value)}
                                onResult={onResult}
                                setFetching={setFetching}
                                value={cep}
                            />
                            <div>
                                {formik.touched.cep && formik.errors.cep
                                    ? formik.errors.cep
                                    : ""}
                            </div>

                            <label htmlFor="city">Cidade</label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                value={city}
                                disabled={fetching}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <label htmlFor="state">Estado</label>
                            <input
                                type="text"
                                value={state}
                                id="state"
                                disabled={fetching}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <label htmlFor="neighborhood">Bairro</label>
                            <input
                                type="text"
                                value={neighborhood}
                                id="neighborhood"
                                disabled={fetching}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <label htmlFor="street">Rua</label>
                            <input
                                type="text"
                                value={street}
                                id="street"
                                disabled={fetching}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <div>
                                <label htmlFor="address_number">Número:*</label>
                                <input
                                    id="address_number"
                                    name="address_number"
                                    type="text"
                                    value={formik.values.address_number}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                <div>
                                    {formik.touched.address_number && formik.errors.address_number
                                        ? formik.errors.address_number
                                        : ""}
                                </div>
                            </div> 

                        </div>
                    )}

                    <div>
                        <a href='./form'>Voltar</a>
                    </div>
                    <div>
                        <button type="submit" >
                            Cadastrar
                        </button>
                    </div>

                </form>
            </div>
        </S.Container>
    )
}

export default Cep
