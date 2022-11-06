// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import InfoPersonalForm from "./InfoPersonalForm"


const InformacionPersonal = () => {
    return(
        <div className="container py-5">
            <div>
            <h1 className="font-[700] text-[30px] py-5 ml-40">INFORMACION PERSONAL</h1>
            <div className="w-4/5 mx-auto">
            <InfoPersonalForm />
            </div>
            
            </div>
            
        </div>
        
    )
}

export default InformacionPersonal