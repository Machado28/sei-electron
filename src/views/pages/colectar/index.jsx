import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdownDivider,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CHeaderDivider,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Colectar = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Formulario de colecta de dados(amostra)</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/form-control">
              <CForm
                className="needs-validation"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <div className="mb-3 has-validation position-relative">
                  <CFormLabel htmlFor="nome">Nome do Cidadão</CFormLabel>
                  <CFormInput
                    type="text"
                    aria-describedby="nome"
                    id="nome"
                    placeholder="antonio machado"
                    required
                  />
                  <div className="invalid-tooltip">Este campo é obrigatorio!</div>
                </div>
                <div className="mb-3 has-validation position-relative">
                  <CFormLabel htmlFor="nif">Nº Bilhete de Identidade(NIF)</CFormLabel>
                  <CFormInput
                    type="text"
                    aria-describedby="nif"
                    id="nif"
                    placeholder="ex.:0084764LA047"
                  />
                </div>
                <CDropdownDivider></CDropdownDivider>

                <div className="mb-3 has-validation position-relative">
                  <CFormLabel htmlFor="nif">Telefone</CFormLabel>
                  <CFormInput
                    type="text"
                    aria-describedby="nif"
                    id="nif"
                    placeholder="ex.:999 999 999"
                    required
                  />
                  <div className="invalid-tooltip">Este campo é obrigatorio!</div>
                </div>
                <div className="mb-3 has-validation position-relative">
                  <CFormLabel htmlFor="nascimento">Data de Nascimento</CFormLabel>
                  <CDropdownDivider></CDropdownDivider>
                  <input type="date" required className="form-control has-validation" />
                  <div className="invalid-tooltip">Este campo é obrigatorio!</div>
                </div>
                <div className="mb-3 has-validation">
                  <CFormLabel htmlFor="nascimento">Local de Nascimento</CFormLabel>
                  <CDropdownDivider></CDropdownDivider>
                  <CFormSelect
                    required
                    className="has-validation"
                    aria-label="Local de Nascimento"
                    options={[
                      'Provincia',
                      { label: 'Luanda', value: '1' },
                      { label: 'Benguela', value: '2' },
                      { label: 'Cunene', value: '3', disabled: true },
                    ]}
                  />
                </div>
                <div className="mb-3 grid gap-3 has-validation position-relative" id="ocupacao">
                  <CFormLabel htmlFor="ocupacao">Ocupacação</CFormLabel>
                  <CDropdownDivider></CDropdownDivider>
                  <CFormCheck
                    required
                    type="radio"
                    name="options-outlined"
                    id="fp"
                    autoComplete="on"
                    button={{ color: 'primary', variant: 'outline' }}
                    label="Funcionario Público"
                    feedbackInvalid="Este campo é obrigatório!"
                    defaultChecked
                  />
                  <CFormCheck
                    type="radio"
                    required
                    name="options-outlined"
                    id="fpv"
                    autoComplete="on"
                    button={{ color: 'primary', variant: 'outline' }}
                    label="Funcionario do Privado"
                  />
                  <CFormCheck
                    type="radio"
                    name="options-outlined"
                    id="tp"
                    required
                    autoComplete="on"
                    button={{ color: 'primary', variant: 'outline' }}
                    label="Tralhado Por conta própria"
                  />
                  <CFormCheck
                    type="radio"
                    className="p-3"
                    name="options-outlined"
                    id="dp"
                    required
                    autoComplete="on"
                    button={{ color: 'primary', variant: 'outline' }}
                    label="Desempregado"
                  />
                  <div className="mb-12 grid gap-3 mt-2 position-relative " id="salario">
                    <CFormLabel htmlFor="solteiro">Salário</CFormLabel>
                    <CDropdownDivider></CDropdownDivider>
                    <CFormInput
                      type="number"
                      aria-describedby="salario"
                      id="salario"
                      min={0}
                      placeholder="60.000kz"
                    />
                    <div className="invalid-tooltip">Este campo é obrigatorio!</div>
                  </div>
                </div>
                <div className="mb-3 grid gap-3 " id="genero">
                  <CFormLabel htmlFor="ocupacao">Genero</CFormLabel>
                  <CDropdownDivider></CDropdownDivider>
                  <CFormCheck
                    type="radio"
                    className="p-3 text-dark"
                    name="genero"
                    id="masculino"
                    autoComplete="on"
                    button={{ color: 'primary', variant: 'outline' }}
                    label="Masculino"
                  />
                  <CFormCheck
                    type="radio"
                    className="p-3"
                    name="genero"
                    id="femenino"
                    autoComplete="on"
                    button={{ color: 'dark', variant: 'outline' }}
                    label="Femenino"
                  />
                  <CHeaderDivider></CHeaderDivider>
                  <hr></hr>
                  <CHeaderDivider></CHeaderDivider>
                  <CHeaderDivider></CHeaderDivider>
                  <div className="mb-3 grid gap-3 " id="ocupacao">
                    <CFormLabel htmlFor="ocupacao">Educação/Nível actual</CFormLabel>
                    <CDropdownDivider></CDropdownDivider>
                    <CFormCheck
                      type="radio"
                      className="p-3 ml-4"
                      name="educacao"
                      id="secundário"
                      autoComplete="on"
                      label="Ensino de Secundário"
                      button={{ color: 'primary', variant: 'outline' }}
                    />
                    <CFormCheck
                      type="radio"
                      className="p- 3  "
                      name="educacao"
                      id="medio"
                      autoComplete="on"
                      label="Ensino Médio"
                      button={{ color: 'primary', variant: 'outline' }}
                    />
                    <CFormCheck
                      button={{ color: 'primary', variant: 'outline' }}
                      type="radio"
                      className="p-3"
                      name="educacao"
                      id="superior"
                      autoComplete="on"
                      label="Ensino Superior"
                    />
                  </div>
                  <CFormLabel htmlFor="st" className="text-secundary">
                    Descreva a Situação Academica do Nível Ncademico
                  </CFormLabel>
                  <CFormCheck
                    type="radio"
                    className="p-3"
                    name="sac"
                    id="te"
                    autoComplete="on"
                    defaultChecked
                    label="Concluído"
                  />{' '}
                  <CFormCheck
                    type="radio"
                    className="p-3"
                    name="sac"
                    id="ea"
                    autoComplete="on"
                    label="Em Andamento"
                  />
                  <CFormCheck
                    type="radio"
                    className="p-3"
                    name="sac"
                    id="ei"
                    autoComplete="on"
                    label="Interrompido"
                  />
                  <CFormCheck
                    type="radio"
                    className="p-3"
                    name="sac"
                    id="ne"
                    autoComplete="on"
                    label="outro(Sem Alguma Frequência Escolar)"
                  />
                </div>
                <CHeaderDivider></CHeaderDivider>
                <hr></hr>
                <CDropdownDivider></CDropdownDivider>
                <div className="mb-3 grid gap-3 " id="casamento">
                  <CFormLabel htmlFor="solteiro">Estado Conjugal/Civil</CFormLabel>
                  <CDropdownDivider></CDropdownDivider>
                  <CFormCheck
                    button={{ color: 'primary', variant: 'outline' }}
                    type="radio"
                    className="p-3"
                    name="casamento"
                    id="solteiro"
                    autoComplete="on"
                    label="Solteiro(a)"
                  />

                  <CFormCheck
                    button={{ color: 'primary', variant: 'outline' }}
                    type="radio"
                    className="p-3"
                    name="casamento"
                    id="casado"
                    autoComplete="on"
                    label="Casado(a)"
                  />
                  <CFormCheck
                    button={{ color: 'primary', variant: 'outline' }}
                    type="radio"
                    className="p-3"
                    name="casamento"
                    id="divorciado"
                    autoComplete="on"
                    label="Divorciado"
                  />
                  <CFormCheck
                    button={{ color: 'primary', variant: 'outline' }}
                    type="radio"
                    className="p-3"
                    name="casamento"
                    id="abandonada"
                    autoComplete="on"
                    label="abandonada(o)"
                  />
                </div>
                <CHeaderDivider></CHeaderDivider>

                <div className="mb-12 grid gap-3 position-relative " id="casamento">
                  <CFormLabel htmlFor="solteiro">Quantidade de Filhos</CFormLabel>
                  <CDropdownDivider></CDropdownDivider>
                  <CFormInput
                    type="number"
                    aria-describedby="inputGroupPrependFeedback"
                    id="filhos"
                    required
                    min={0}
                    placeholder="total de filhos"
                  />
                  <div className="invalid-tooltip">Este campo é obrigatorio!</div>
                </div>
                <CHeaderDivider></CHeaderDivider>
                <hr></hr>

                <div className="mb-3 has-validation row justify-content-start ">
                  <CFormLabel htmlFor="nascimento">Morada permanente</CFormLabel>
                  <CCol xs={12} className="mt-4 mb-3 ">
                    <CDropdownDivider></CDropdownDivider>
                    <CFormSelect
                      required
                      className="has-validation"
                      aria-label="localização"
                      options={[
                        'Provincia',
                        { label: 'Luanda', value: '1' },
                        { label: 'Benguela', value: '2' },
                        { label: 'Cunene', value: '3', disabled: true },
                      ]}
                    />
                  </CCol>
                  <CCol xs={12} className="mt-4 mb-3  ">
                    <CFormSelect
                      required
                      className="has-validation"
                      aria-label="localização"
                      options={[
                        'Municipio',
                        { label: 'Viana', value: '1' },
                        { label: 'Rangel', value: '2' },
                        { label: 'Icolo e Bengo', value: '3', disabled: true },
                      ]}
                    />
                  </CCol>
                </div>

                <CHeaderDivider></CHeaderDivider>
                <hr></hr>
                <CDropdownDivider></CDropdownDivider>
                <CCol xs={4} className="mt-4">
                  <CButton color="success" className="text-white" type="submit">
                    Cadastrar
                  </CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Colectar
