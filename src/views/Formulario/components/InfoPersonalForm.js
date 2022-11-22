import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextInput from './TextInput';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './CheckBox';
import TextArea from './TextArea';
import PerfilLaboral from './PerfilLaboral';
import TituloConocimiento from './TituloConocimiento';
import * as Yup from 'yup';
import axios from 'axios';
import { useState, useEffect } from 'react';

const InfoPersonalForm = () => {
  const userToken = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + '/user/', {
        headers: {
          'Content-Type': 'Application/json',
          Authorization: `Bearer ${userToken.token}`,
        },
      })
      .then((res) => {
        const datos = res.data;
        setUser(datos);
      });

    axios.get(process.env.REACT_APP_BACKEND_URL + '/charges').then((res) => {
      const datos = res.data;
      setCharges(datos);
    });

    axios.get(process.env.REACT_APP_BACKEND_URL + '/countries').then((res) => {
      const datos = res.data;
      setCountries(datos);
    });
  }, []);
  const [charges, setCharges] = useState([]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryId, setCountryId] = useState('')


  const handleChangeSelect = (event) =>{
    const getCountryId = (event.target.value)
    setCountryId(getCountryId)
  }


  useEffect(()=>{
    axios.get(process.env.REACT_APP_BACKEND_URL + '/cities').then((res) => {
      const datos = res.data;
      setCities(datos);
      
    });
  },[countryId])
 
  const resultadoFiltro = cities.filter(citi => citi.countryId == countryId)

  

  return (
    <>
      <div>
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            email: '',
            phone: '',
            cities: '',
            countries: '',
            gender: '',
            radio: '',
            charges: '',
            levelEducation: '',
            carrera1: '',
            carrera2: '',
            institution2: '',
            institution1: '',
            typeinstitution1: '',
            institution2: '',
            institution2: '',
            typeinstitution2: '',
            actualSituation: '',
            englishLevel: '',
            languageLevel1: '',
            dbFramework1: '',
            toolsLevel1: '',
            languageLevel1: '',
            languageLevel2: '',
            languageLevel3: '',
            competenciaImportante: '',
            urlCv: '',
            urlLinkedin: '',
            urlGithub: '',
            urlPortafolio: '',
            proyectoImportante: '',
            habilidadesBlandas: '',
            añosExperiencia: '',
            trabajoIdeal: '',
            dispobilidad: '',
            situacionActual: '',
            visa: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Obligatorio'),
            lastName: Yup.string().required('Obligatorio'),
            email: Yup.string().required('Obligatorio'),
            phone: Yup.string().required('Obligatorio'),
            //city: Yup.string().required('Obligatorio'),
            //country: Yup.string().required('Obligatorio'),
            gender: Yup.string().required('Obligatorio'),
            radio: Yup.string().required('Obligatorio'),
            // charges:Yup.required("Obligatorio"),
            levelEducation: Yup.string().required('Obligatorio'),
            carrera1: Yup.string().required('Obligatorio'),
            carrera2: Yup.string().required('Obligatorio'),
            institution2: Yup.string().required('Obligatorio'),
            institution1: Yup.string().required('Obligatorio'),
            typeinstitution1: Yup.string().required('Obligatorio'),
            institution2: Yup.string().required('Obligatorio'),
            institution2: Yup.string().required('Obligatorio'),
            typeinstitution2: Yup.string().required('Obligatorio'),
            actualSituation: Yup.string().required('Obligatorio'),
            englishLevel: Yup.string().required('Obligatorio'),
            languageLevel1: Yup.string().required('Obligatorio'),
            dbFramework1: Yup.string().required('Obligatorio'),
            toolsLevel1: Yup.string().required('Obligatorio'),
            languageLevel1: Yup.string().required('Obligatorio'),
            languageLevel2: Yup.string().required('Obligatorio'),
            languageLevel3: Yup.string().required('Obligatorio'),
            competenciaImportante: Yup.string().required('Obligatorio'),
            urlCv: Yup.string().required('Obligatorio'),
            urlLinkedin: Yup.string().required('Obligatorio'),
            urlGithub: Yup.string().required('Obligatorio'),
            urlPortafolio: Yup.string().required('Obligatorio'),
            proyectoImportante: Yup.string().required('Obligatorio'),
            habilidadesBlandas: Yup.string().required('Obligatorio'),
            añosExperiencia: Yup.string().required('Obligatorio'),
            trabajoIdeal: Yup.string().required('Obligatorio'),
            dispobilidad: Yup.string().required('Obligatorio'),
            situacionActual: Yup.string().required('Obligatorio'),
            visa: Yup.string().required('Obligatorio'),
          })}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 ">
              <TextInput name="name" label="Nombre" value={user.name} />
              <TextInput name="lastName" label="Apellido" />
              <TextInput name="email" label="Email" value={user.email} />
              <TextInput name="phone" label="Número de teléfono móvil" />
              <Select label="País" name="countries" onChange={handleChangeSelect}>
                <option value="">Seleccionar</option>
                {countries.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>

              <Select label="Ciudad" name="cities">
                <option value="">Seleccionar</option>
                {resultadoFiltro.map((item, id) => {
                  return (
                    <option value={item.name} key={id}>
                      {item.name}
                    </option>
                  );
                })}
              </Select>

              <div className="mt-6">
                <Select label="¿Con qué género te identificas?" name="gender">
                  <option value="">Seleccionar</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                </Select>
              </div>
              <div className="pl-4 mx-8 mt-4 text-[20px] text-[#140B34]">
                <h3 className="my-6">¿Cuál es tu estado laboral actual?</h3>
                <Radio
                  name="radio"
                  value="Cesante Buscando empleo en TI por primera vez"
                  label="Cesante Buscando empleo en TI por primera vez"
                />
                <Radio
                  name="radio"
                  value="Cesante, ya he trabajado antes en TI."
                  label="Cesante, ya he trabajado antes en TI."
                />
                <Radio
                  name="radio"
                  value="Tengo trabajo en TI, pero busco otro."
                  label="Tengo trabajo en TI, pero busco otro."
                />
                <Radio
                  name="radio"
                  value="Tengo trabajo (en otras áreas), pero busco en TI."
                  label="Tengo trabajo (en otras áreas), pero busco en TI."
                />
              </div>

              <div className="pl-2 mx-6 mt-4">
                <h3 className="font-[400] mb-4 text-[20px] text-[#140B34]">
                  ¿Cuál o cuáles cargos te gustaría optar?
                </h3>
                <p className="font-[300] text-[16px] text-[#575253] mb-4">
                  <b className="font-[600]">Ten en cuenta: </b>De acuerdo al
                  cargo que postules, te pediremos que seas capaz de demostrarlo
                  de manera práctica durante el proceso de selección.
                </p>
                {charges.map((item, id) => {
                  return (
                    <Checkbox name="charges" key={id} value={item.name}>
                      {item.name}
                    </Checkbox>
                  );
                })}
              </div>
            </div>

            <div>
              <h1 className="mt-10 font-[700] py-5 text-[32px]">
                INFORMACION EDUCACIONAL
              </h1>
            </div>
            <div>
              <Select
                label="¿Cual es tu máximo nivel educacional?"
                name="levelEducation"
              >
                <option value="">Seleccionar</option>
                <option value="universitaria completa">
                  Universitaria completa
                </option>
                <option value="tecnico">Técnico</option>
                <option value="bootcamp">Bootcamp</option>
              </Select>
            </div>
            <div>
              <h2 className="mt-14 mb-10 mx-10 font-[600] text-[#140B34] text-[24px]">
                A continuación, indícanos 2 (dos) carreras profesionales,
                cursos, bootcamp o certificaciones cursadas relacionadas al
                desarrollo de software, diseño o TI (puedes indicarnos las más
                importantes o actuales):
              </h2>
            </div>
            <div>
              <TextInput
                name="carrera1"
                label="Nombre de la carrera, curso, bootcamp o certificación 1:"
              />
              <div className="mt-8">
                <TextInput name="institution1" label="Nombre institución 1:" />
              </div>
              <div className="mt-8">
                <Select label="Tipo de institución 1" name="typeinstitution1">
                  <option value="">Seleccionar</option>
                  <option value="universidad">Universidad</option>
                  <option value="cft">CFT</option>
                  <option value="bootcamp">Bootcamp</option>
                </Select>
              </div>

              <div className="mt-8">
                <TextInput
                  name="carrera2"
                  label="Nombre de la carrera, curso, bootcamp o certificación 2:"
                />
              </div>
              <div className="mt-8">
                <TextInput name="institution2" label="Nombre institución 2:" />
              </div>
              <div className="mt-8">
                <Select label="Tipo de institución 2" name="typeinstitution2">
                  <option value="">Seleccionar</option>
                  <option value="universidad">Universidad</option>
                  <option value="cft">CFT</option>
                  <option value="bootcamp">Bootcamp</option>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
                <div className="">
                  <Select
                    label="¿Cuál es tu situación educacional actual (Bootcamp, diplomados, universidad, cursos u otros)?"
                    name="actualSituation"
                  >
                    <option value="">Seleccionar</option>
                    <option value="universidad">Universidad</option>
                    <option value="cft">CFT</option>
                    <option value="bootcamp">Bootcamp</option>
                  </Select>
                </div>

                <div className="mt-6 mx-10">
                  <Select label="Nivel de inglés" name="englishLevel">
                    <option value="">Seleccionar</option>
                    <option value="basico">Básico</option>
                    <option value="medio">Medio</option>
                    <option value="avanzado">Avanzado</option>
                  </Select>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <PerfilLaboral className="mt-12" />

              <div></div>

              <div className="mt-2">
                <TituloConocimiento
                  text="Indícanos tus conocimientos a Nivel 1"
                  text2="(No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta):"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 mx-12 mt-6 mb-6">
                  <div>
                    <h3 className="font-bold mb-4">Lenguaje nivel 1:</h3>
                    <Checkbox
                      name="languageLevel1"
                      value="python"
                      label="Python"
                    >
                      Python
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="javaScript"
                      label="JavaScript"
                    >
                      JavaScript
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="HTML/CSS"
                      label="HTML/CSS"
                    >
                      HTML/CSS
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="javaScript"
                      label="JavaScript"
                    >
                      JavaScript
                    </Checkbox>
                    <Checkbox name="languageLevel1" value="Java" label="Java">
                      Java
                    </Checkbox>
                    <Checkbox name="languageLevel1" value="PHP" label="PHP">
                      PHP
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="Scala, Perl y/o Go"
                      label="Scala, Perl y/o Go"
                    >
                      Scala, Perl y/o Go
                    </Checkbox>
                    <Checkbox name="languageLevel1" value="C/C++" label="C/C++">
                      C/C++
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="Kotlin"
                      label="Kotlin"
                    >
                      Kotlin
                    </Checkbox>
                    <Checkbox name="languageLevel1" value="Swift" label="Swift">
                      Swift
                    </Checkbox>
                    <Checkbox name="languageLevel1" value="C#" label="C#">
                      C#
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="TypeScript"
                      label="TypeScript"
                    >
                      TypeScript
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="Assembly"
                      label="Assembly"
                    >
                      Assembly
                    </Checkbox>
                    <Checkbox name="languageLevel1" value="R" label="R">
                      R
                    </Checkbox>
                    <Checkbox name="languageLevel1" value="Go" label="Go">
                      Go
                    </Checkbox>
                    <Checkbox
                      name="languageLevel1"
                      value="Bash/Shell"
                      label="Bash/Shell"
                    >
                      Bash/Shell
                    </Checkbox>
                  </div>
                  <div>
                    <h3 className="font-bold mb-4">
                      Bases o frameworks nivel 1:
                    </h3>
                    <Checkbox name="dbFramework1" value="Oracle" label="Oracle">
                      Oracle
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="Cassandra">
                      Cassandra
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="SQLite" label="SQLite">
                      SQLite
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="Redis" label="Redis">
                      Redis
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="MongoDB"
                      label="MongoDB"
                    >
                      MongoDB
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="MySQL" label="MySQL">
                      MySQL
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="Firebase Realtime Database"
                    >
                      Firebase Realtime Database
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="MariaDB"
                      label="MariaDB"
                    >
                      MariaDB
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="Microsoft SQL Server">
                      Microsoft SQL Server
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="JQuery" label="JQuery">
                      JQuery
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="React" label="React">
                      React
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="Spring" label="Spring">
                      Spring
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="Angular"
                      label="Angular"
                    >
                      Angular
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="Vue.js" label="Vue.js">
                      Vue.js
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="Laravel"
                      label="Laravel"
                    >
                      Laravel
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="Django" label="Django">
                      Django
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="Ruby On Rails"
                      label="Ruby On Rails"
                    >
                      Ruby On Rails
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="ASP.NET o ASP.NETCore">
                      ASP.NET o ASP.NETCore
                    </Checkbox>
                    <Checkbox name="dbFramework1" value="Flask" label="Flask">
                      Flask
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="Express.js"
                      label="Express.js"
                    >
                      Express.js
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="FastAPI"
                      label="FastAPI"
                    >
                      FastAPI
                    </Checkbox>
                    <Checkbox name="dbFramework1" value=".NET" label=".NET">
                      .NET
                    </Checkbox>
                    <Checkbox
                      name="dbFramework1"
                      value="Node.js"
                      label="Node.js"
                    >
                      Node.js
                    </Checkbox>
                  </div>

                  <div>
                    <h3 className="font-bold mb-4">Herramientas nivel 1:</h3>
                    <Checkbox name="toolsLevel1" value="Github" label="Github">
                      Github
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Adobe Illustrator"
                      label="Adobe Illustrator"
                    >
                      Adobe Illustrator
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Adobe Photoshop"
                      label="Adobe Photoshop"
                    >
                      Adobe Photoshop
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Adobe XD"
                      label="Adobe XD"
                    >
                      Adobe XD
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="AWS" label="AWS">
                      AWS
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="Docker" label="Docker">
                      Docker
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="Figma" label="Figma">
                      Figma
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="GIT" label="GIT">
                      GIT
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Google Analytics"
                      label="Google Analytics"
                    >
                      Google Analytics
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Google Cloud Plataform"
                      label="Google Cloud Plataform"
                    >
                      Google Cloud Plataform
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Google Data Studio"
                      label="Google Data Studio"
                    >
                      Google Data Studio
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Invision"
                      label="Invision"
                    >
                      Invision
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="InVision Studio"
                      label="InVision Studio"
                    >
                      InVision Studio
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="Jira" label="Jira">
                      Jira
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Kubernetes"
                      label="Kubernetes"
                    >
                      Kubernetes
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="Marvel" label="Marvel">
                      Marvel
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Microsoft Excel"
                      label="Microsoft Excel"
                    >
                      Microsoft Excel
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Microsoft Azure"
                      label="Microsoft Azure"
                    >
                      Microsoft Azure
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="Miro" label="Miro">
                      Miro
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Power BI"
                      label="Power BI"
                    >
                      Power BI
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Proto.io"
                      label="Proto.io"
                    >
                      Proto.io
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="Qlik" label="Qlik">
                      Qlik
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="Sketch" label="Sketch">
                      Sketch
                    </Checkbox>
                    <Checkbox name="toolsLevel1" value="SPSS" label="SPSS">
                      SPSS
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Tableau"
                      label="Tableau"
                    >
                      Tableau
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Unity 3D"
                      label="Unity 3D"
                    >
                      Unity 3D
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Unreal Engine"
                      label="Unreal Engine"
                    >
                      Unreal Engine
                    </Checkbox>
                    <Checkbox
                      name="toolsLevel1"
                      value="Zepelin"
                      label="Zepelin"
                    >
                      Zepelin
                    </Checkbox>
                  </div>
                </div>
              </div>

              <TituloConocimiento
                text="Indícanos tus conocimientos a Nivel 2"
                text2="(Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante):"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 mx-12 mt-6 mb-6">
                <div>
                  <h3 className="font-bold mb-4">Lenguaje nivel 2:</h3>
                  <Checkbox name="languageLevel2" value="python" label="Python">
                    Python
                  </Checkbox>
                  <Checkbox
                    name="languageLevel2"
                    value="javaScript"
                    label="JavaScript"
                  >
                    JavaScript
                  </Checkbox>
                  <Checkbox
                    name="languageLevel2"
                    value="HTML/CSS"
                    label="HTML/CSS"
                  >
                    HTML/CSS
                  </Checkbox>
                  <Checkbox
                    name="languageLevel2"
                    value="javaScript"
                    label="JavaScript"
                  >
                    JavaScript
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="Java" label="Java">
                    Java
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="PHP" label="PHP">
                    PHP
                  </Checkbox>
                  <Checkbox
                    name="languageLevel2"
                    value="Scala, Perl y/o Go"
                    label="Scala, Perl y/o Go"
                  >
                    Scala, Perl y/o Go
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="C/C++" label="C/C++">
                    C/C++
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="Kotlin" label="Kotlin">
                    Kotlin
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="Swift" label="Swift">
                    Swift
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="C#" label="C#">
                    C#
                  </Checkbox>
                  <Checkbox
                    name="languageLevel2"
                    value="TypeScript"
                    label="TypeScript"
                  >
                    TypeScript
                  </Checkbox>
                  <Checkbox
                    name="languageLevel2"
                    value="Assembly"
                    label="Assembly"
                  >
                    Assembly
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="R" label="R">
                    R
                  </Checkbox>
                  <Checkbox name="languageLevel2" value="Go" label="Go">
                    Go
                  </Checkbox>
                  <Checkbox
                    name="languageLevel2"
                    value="Bash/Shell"
                    label="Bash/Shell"
                  >
                    Bash/Shell
                  </Checkbox>
                </div>
                <div>
                  <h3 className="font-bold mb-4">
                    Bases o frameworks nivel 2:
                  </h3>
                  <Checkbox name="dbFramework2" value="Oracle" label="Oracle">
                    Oracle
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Cassandra">
                    Cassandra
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="SQLite" label="SQLite">
                    SQLite
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Redis" label="Redis">
                    Redis
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="MongoDB" label="MongoDB">
                    MongoDB
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="MySQL" label="MySQL">
                    MySQL
                  </Checkbox>
                  <Checkbox
                    name="dbFramework2"
                    value="Firebase Realtime Database"
                  >
                    Firebase Realtime Database
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="MariaDB" label="MariaDB">
                    MariaDB
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Microsoft SQL Server">
                    Microsoft SQL Server
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="JQuery" label="JQuery">
                    JQuery
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="React" label="React">
                    React
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Spring" label="Spring">
                    Spring
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Angular" label="Angular">
                    Angular
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Vue.js" label="Vue.js">
                    Vue.js
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Laravel" label="Laravel">
                    Laravel
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Django" label="Django">
                    Django
                  </Checkbox>
                  <Checkbox
                    name="dbFramework2"
                    value="Ruby On Rails"
                    label="Ruby On Rails"
                  >
                    Ruby On Rails
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="ASP.NET o ASP.NETCore">
                    ASP.NET o ASP.NETCore
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Flask" label="Flask">
                    Flask
                  </Checkbox>
                  <Checkbox
                    name="dbFramework2"
                    value="Express.js"
                    label="Express.js"
                  >
                    Express.js
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="FastAPI" label="FastAPI">
                    FastAPI
                  </Checkbox>
                  <Checkbox name="dbFramework2" value=".NET" label=".NET">
                    .NET
                  </Checkbox>
                  <Checkbox name="dbFramework2" value="Node.js" label="Node.js">
                    Node.js
                  </Checkbox>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Herramientas nivel 2:</h3>
                  <Checkbox name="toolsLevel2" value="Github" label="Github">
                    Github
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Adobe Illustrator"
                    label="Adobe Illustrator"
                  >
                    Adobe Illustrator
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Adobe Photoshop"
                    label="Adobe Photoshop"
                  >
                    Adobe Photoshop
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Adobe XD"
                    label="Adobe XD"
                  >
                    Adobe XD
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="AWS" label="AWS">
                    AWS
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Docker" label="Docker">
                    Docker
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Figma" label="Figma">
                    Figma
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="GIT" label="GIT">
                    GIT
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Google Analytics"
                    label="Google Analytics"
                  >
                    Google Analytics
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Google Cloud Plataform"
                    label="Google Cloud Plataform"
                  >
                    Google Cloud Plataform
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Google Data Studio"
                    label="Google Data Studio"
                  >
                    Google Data Studio
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Invision"
                    label="Invision"
                  >
                    Invision
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="InVision Studio"
                    label="InVision Studio"
                  >
                    InVision Studio
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Jira" label="Jira">
                    Jira
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Kubernetes"
                    label="Kubernetes"
                  >
                    Kubernetes
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Marvel" label="Marvel">
                    Marvel
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Microsoft Excel"
                    label="Microsoft Excel"
                  >
                    Microsoft Excel
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Microsoft Azure"
                    label="Microsoft Azure"
                  >
                    Microsoft Azure
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Miro" label="Miro">
                    Miro
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Power BI"
                    label="Power BI"
                  >
                    Power BI
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Proto.io"
                    label="Proto.io"
                  >
                    Proto.io
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Qlik" label="Qlik">
                    Qlik
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Sketch" label="Sketch">
                    Sketch
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="SPSS" label="SPSS">
                    SPSS
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Tableau" label="Tableau">
                    Tableau
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Unity 3D"
                    label="Unity 3D"
                  >
                    Unity 3D
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel2"
                    value="Unreal Engine"
                    label="Unreal Engine"
                  >
                    Unreal Engine
                  </Checkbox>
                  <Checkbox name="toolsLevel2" value="Zepelin" label="Zepelin">
                    Zepelin
                  </Checkbox>
                </div>
              </div>

              <TituloConocimiento
                text="Indícanos tus conocimientos a Nivel 3"
                text2="(tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos):
                        :"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 mx-12 mt-6 mb-6">
                <div>
                  <h3 className="font-bold mb-4">Lenguaje nivel 3:</h3>
                  <Checkbox name="languageLevel3" value="python" label="Python">
                    Python
                  </Checkbox>
                  <Checkbox
                    name="languageLevel3"
                    value="javaScript"
                    label="JavaScript"
                  >
                    JavaScript
                  </Checkbox>
                  <Checkbox
                    name="languageLevel3"
                    value="HTML/CSS"
                    label="HTML/CSS"
                  >
                    HTML/CSS
                  </Checkbox>
                  <Checkbox
                    name="languageLevel3"
                    value="javaScript"
                    label="JavaScript"
                  >
                    JavaScript
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="Java" label="Java">
                    Java
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="PHP" label="PHP">
                    PHP
                  </Checkbox>
                  <Checkbox
                    name="languageLevel3"
                    value="Scala, Perl y/o Go"
                    label="Scala, Perl y/o Go"
                  >
                    Scala, Perl y/o Go
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="C/C++" label="C/C++">
                    C/C++
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="Kotlin" label="Kotlin">
                    Kotlin
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="Swift" label="Swift">
                    Swift
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="C#" label="C#">
                    C#
                  </Checkbox>
                  <Checkbox
                    name="languageLevel3"
                    value="TypeScript"
                    label="TypeScript"
                  >
                    TypeScript
                  </Checkbox>
                  <Checkbox
                    name="languageLevel3"
                    value="Assembly"
                    label="Assembly"
                  >
                    Assembly
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="R" label="R">
                    R
                  </Checkbox>
                  <Checkbox name="languageLevel3" value="Go" label="Go">
                    Go
                  </Checkbox>
                  <Checkbox
                    name="languageLevel3"
                    value="Bash/Shell"
                    label="Bash/Shell"
                  >
                    Bash/Shell
                  </Checkbox>
                </div>
                <div>
                  <h3 className="font-bold mb-4">
                    Bases o frameworks nivel 3:
                  </h3>
                  <Checkbox name="dbFramework3" value="Oracle" label="Oracle">
                    Oracle
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Cassandra">
                    Cassandra
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="SQLite" label="SQLite">
                    SQLite
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Redis" label="Redis">
                    Redis
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="MongoDB" label="MongoDB">
                    MongoDB
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="MySQL" label="MySQL">
                    MySQL
                  </Checkbox>
                  <Checkbox
                    name="dbFramework3"
                    value="Firebase Realtime Database"
                  >
                    Firebase Realtime Database
                  </Checkbox>
                  <Checkbox
                    name="dbFramework3"
                    value="MariaDB"
                    label="MariaDB"
                  ></Checkbox>
                  <Checkbox name="dbFramework3" value="Microsoft SQL Server">
                    Microsoft SQL Server
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="JQuery" label="JQuery">
                    JQuery
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="React" label="React">
                    React
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Spring" label="Spring">
                    Spring
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Angular" label="Angular">
                    Angular
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Vue.js" label="Vue.js">
                    Vue.js
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Laravel" label="Laravel">
                    Laravel
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Django" label="Django">
                    Django
                  </Checkbox>
                  <Checkbox
                    name="dbFramework3"
                    value="Ruby On Rails"
                    label="Ruby On Rails"
                  >
                    Ruby On Rails
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="ASP.NET o ASP.NETCore">
                    ASP.NET o ASP.NETCore
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Flask" label="Flask">
                    Flask
                  </Checkbox>
                  <Checkbox
                    name="dbFramework3"
                    value="Express.js"
                    label="Express.js"
                  >
                    Express.js
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="FastAPI" label="FastAPI">
                    FastAPI
                  </Checkbox>
                  <Checkbox name="dbFramework3" value=".NET" label=".NET">
                    .NET
                  </Checkbox>
                  <Checkbox name="dbFramework3" value="Node.js" label="Node.js">
                    Node.js
                  </Checkbox>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Herramientas nivel 3:</h3>
                  <Checkbox name="toolsLevel3" value="Github" label="Github">
                    Github
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Adobe Illustrator"
                    label="Adobe Illustrator"
                  >
                    Adobe Illustrator
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Adobe Photoshop"
                    label="Adobe Photoshop"
                  >
                    Adobe Photoshop
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Adobe XD"
                    label="Adobe XD"
                  >
                    Adobe XD
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="AWS" label="AWS">
                    AWS
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Docker" label="Docker">
                    Docker
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Figma" label="Figma">
                    Figma
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="GIT" label="GIT">
                    GIT
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Google Analytics"
                    label="Google Analytics"
                  >
                    Google Analytics
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Google Cloud Plataform"
                    label="Google Cloud Plataform"
                  >
                    Google Cloud Plataform
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Google Data Studio"
                    label="Google Data Studio"
                  >
                    Google Data Studio
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Invision"
                    label="Invision"
                  >
                    Invision
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="InVision Studio"
                    label="InVision Studio"
                  >
                    InVision Studio
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Jira" label="Jira">
                    Jira
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Kubernetes"
                    label="Kubernetes"
                  >
                    Kubernetes
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Marvel" label="Marvel">
                    Marvel
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Microsoft Excel"
                    label="Microsoft Excel"
                  >
                    Microsoft Excel
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Microsoft Azure"
                    label="Microsoft Azure"
                  >
                    Microsoft Azure
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Miro" label="Miro">
                    Miro
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Power BI"
                    label="Power BI"
                  >
                    Power BI
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Proto.io"
                    label="Proto.io"
                  >
                    Proto.io
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Qlik" label="Qlik">
                    Qlik
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Sketch" label="Sketch">
                    Sketch
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="SPSS" label="SPSS">
                    SPSS
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Tableau" label="Tableau">
                    Tableau
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Unity 3D"
                    label="Unity 3D"
                  >
                    Unity 3D
                  </Checkbox>
                  <Checkbox
                    name="toolsLevel3"
                    value="Unreal Engine"
                    label="Unreal Engine"
                  >
                    Unreal Engine
                  </Checkbox>
                  <Checkbox name="toolsLevel3" value="Zepelin" label="Zepelin">
                    Zepelin
                  </Checkbox>
                </div>
              </div>

              <div className="py-5 mx-20">
                <p className="text-bold text-[20px] mb-4">
                  Indícanos alguna otra competencia, herramienta o tecnología
                  que conozcas que creas importante agregar:
                </p>
                <TextArea name="competenciaImportante" />
              </div>
            </div>

            <div>
              <h1 className="font-[700] py-5 mt-10 text-[32px]">
                EXPERIENCIA Y TRABAJO
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-20 mx-10 ">
              <TextInput name="urlCv" label="URL CV" />
              <TextInput name="urlLinkedin" label="URL de LinkedIn" />
              <TextInput name="urlGithub" label="URL de GitHub" />
              <TextInput
                name="urlPortafolio"
                label="URL de Portafolio/Sitio web"
              />
            </div>

            <div className="mt-20 font-[400] mx-20">
              <p className="text-bold text-[20px]">
                Explícanos en detalle algún proyecto que te enorgullece
              </p>
              <p className="text-[14px] mb-4">
                Describe de que trató, tu rol en el proyecto y por qué lo
                elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu
                rol en el proyecto, tecnologías utilizadas, dificultades y
                soluciones, funcionalidades, objetivos, etc. Recuerda NO
                esperamos link, sino explicación)
              </p>
              <TextArea name="proyectoImportante" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mx-20">
              <div>
                <h3 className="font-bold py-5">
                  Selecciona 3 habilidades blandas que te representen:
                </h3>
                <Checkbox name="habilidadesBlandas" value="Líder">
                  Líder
                </Checkbox>
                <Checkbox
                  name="habilidadesBlandas"
                  value="Resiliente/Perseverante"
                >
                  Resiliente/Perseverante
                </Checkbox>
                <Checkbox
                  name="habilidadesBlandas"
                  value="Comunicación/Sociable"
                >
                  Comunicación/Sociable
                </Checkbox>
                <Checkbox
                  name="habilidadesBlandas"
                  value="Colaborativo/Empatía"
                >
                  Colaborativo/Empatía
                </Checkbox>
                <Checkbox
                  name="habilidadesBlandas"
                  value="Aprendizaje ágil/Autónomo"
                >
                  Aprendizaje ágil/Autónomo
                </Checkbox>
                <Checkbox name="habilidadesBlandas" value="Flexible/Adaptable">
                  Flexible/Adaptable
                </Checkbox>
                <Checkbox name="habilidadesBlandas" value="Responsable">
                  Responsable
                </Checkbox>
                <Checkbox name="habilidadesBlandas" value="Innovador/Curioso">
                  Innovador/Curioso
                </Checkbox>
                <Checkbox name="habilidadesBlandas" value="Negociación">
                  Negociación
                </Checkbox>
                <Checkbox
                  name="habilidadesBlandas"
                  value="Resolución de problemas"
                >
                  Resolución de problemas
                </Checkbox>
                <Checkbox
                  name="habilidadesBlandas"
                  value="Productividad/Iniciativa"
                >
                  Productividad/Iniciativa
                </Checkbox>
              </div>

              <div>
                <h3 className="font-bold py-5">
                  ¿Cuántos años de experiencia laboral posees en desarrollo de
                  software y/o diseño?
                </h3>
                <Radio
                  name="añosExperiencia"
                  value="No poseo experiencia laboral"
                  label="No poseo experiencia laboral"
                />
                <Radio
                  name="añosExperiencia"
                  value="Entre 0 a 1 año de experiencia laboral"
                  label="Entre 0 a 1 año de experiencia laboral"
                />
                <Radio
                  name="añosExperiencia"
                  value="Entre 1 a 2 años de experiencia laboral"
                  label="Entre 1 a 2 años de experiencia laboral"
                />
                <Radio
                  name="añosExperiencia"
                  value="Entre 2 a 3 años de experiencia laboral"
                  label="Entre 2 a 3 años de experiencia laboral"
                />
                <Radio
                  name="añosExperiencia"
                  value="Más de 4 años de experiencia laboral"
                  label="Más de 4 años de experiencia laboral"
                />
              </div>
            </div>

            <div>
              <h1 className="font-[700] py-5 mt-10 text-[32px]">
                ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
              </h1>
            </div>

            <div className="mt-10 mx-20">
              <TextArea
                name="trabajoIdeal"
                label="Déjanos una breve descripción con respecto tu trabajo ideal"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mt-6 mx-20">
              <div className="">
                <h3 className="font-bold mb-4">
                  Indícanos tu disponibilidad laboral:
                </h3>

                <Checkbox name="dispobilidad" value="Full Time">
                  Full Time
                </Checkbox>
                <Checkbox name="dispobilidad" value="Part Time">
                  Part Time
                </Checkbox>
                <Checkbox name="dispobilidad" value="Freelancer">
                  Freelancer
                </Checkbox>
              </div>

              <div>
                <h3 className="font-bold mb-4">
                  ¿Qué describe mejor tu situación actual?:
                </h3>
                <Radio
                  name="situacionActual"
                  value="Quiero trabajo desde mi ciudad actual"
                  label="Quiero trabajo desde mi ciudad actual"
                />
                <Radio
                  name="situacionActual"
                  value="Estoy disponible para migrar de mi ciudad dentro de mi país"
                  label="Estoy disponible para migrar de mi ciudad dentro de mi país"
                />
                <Radio
                  name="situacionActual"
                  value="Estoy disponible para migrar a otro país"
                  label="Estoy disponible para migrar a otro país"
                />
              </div>

              <div className="ml-10">
                <h3 className="font-bold mb-4">
                  ¿Cuentas con Visa de trabajo activa en?
                </h3>

                <Checkbox name="visa" value="Estados Unidos">
                  Estados Unidos
                </Checkbox>
                <Checkbox name="visa" value="Unión Europea">
                  Unión Europea
                </Checkbox>
                <Checkbox name="visa" value="Mi país de residencia actual">
                  Mi país de residencia actual
                </Checkbox>
                <Checkbox name="visa" value="Otros países">
                  Otros países
                </Checkbox>
              </div>
            </div>

            <div className="grid justify-end mx-20 mt-20 font-[Poppins]">
              <button
                type="submit"
                className="h-[58px] w-[156px] bg-[#2738F5] hover:bg-blue-600 text-[#FFFFFF] text-[22px] font-bold py-2 px-4 rounded-3xl"
              >
                GUARDAR
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default InfoPersonalForm;
