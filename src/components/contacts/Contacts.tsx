import s from './Contacts.module.scss'
import sc from "../../common/styles/Container.module.css";
import {SuperButton} from "../SuperButton/SuperButton";
import {ContactDescription} from "./ContactDiscription/ContactDescription";
import {Title} from "../../common/commonComponents/title/Title";
import React, {useEffect, useState} from "react";
import {useFormik} from 'formik';
import axios from "axios";
import {CustomizedSnackbars} from "./snackBar/snackBar";
import {Box, CircularProgress} from "@mui/material";
import {Fade} from "react-awesome-reveal";

type LoginParamsType = {
    name: string;
    email: string;
    message: string;
};
type FormikErrorType = Partial<Omit<LoginParamsType, "captcha">>;

export const Contacts = () => {
    const [loader, setLoader] = useState<boolean>(false)
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const formik = useFormik({
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Email is missing";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Неверный email";
            }
            if (!values.name) {
                errors.name = "Обязательное поле";
            } else if (values.name.length < 2) {
                errors.name = "Имя не должно быть короче 2 символов";
            }
            if (!values.message) {
                errors.message = "К сожалению невозможно отправить пустое сообщение"
            }
            return errors;
        },
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: values => {
            setLoader(true)
            axios.post('https://smtp-nodejs-server-holistic.amvera.io/sendMessage', {
                name: values.name,
                message: values.message,
                email: values.email
            }).then((res) => {
                setTimeout(() => {
                    setLoader(false)
                    setOpen(true);
                    formik.resetForm({})
                }, 2000)
            }).catch(() => {
                setOpenError(true)
            })
        }
    })


    return <div id='contacts' className={s.contactsBlock}>

        <div className={s.titleContainer}>
            <Title title={'My contacts'}/>
        </div>
        <Fade cascade={true} damping={0.05} delay={-2}>
            <div className={`${sc.container} ${s.contactsContainer}`}>

                <ContactDescription/>

                <div className={s.formContainer}>
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <input id='name' name="name" placeholder={'Name'} className={s.input} type="text"
                               onChange={formik.handleChange}
                               value={formik.values.name}/>
                        {formik.errors.name && formik.touched.name ?
                            <div className={s.error}>{formik.errors.name}</div> : null}
                        <input id='email' name="email" placeholder={'Email'} className={s.input} type="text"
                               onChange={formik.handleChange}
                               value={formik.values.email}/>
                        {formik.errors.email && formik.touched.email ?
                            <div className={s.error}>{formik.errors.email}</div> : null}
                        <textarea id='message' name="message" placeholder={'Message'} className={s.textarea}
                                  onChange={formik.handleChange}
                                  value={formik.values.message}/>
                        {formik.errors.message && formik.touched.message ?
                            <div className={s.error}>{formik.errors.message}</div> : null}


                        {loader ? <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <CircularProgress/>
                            </Box> :
                            <div className={s.button}><SuperButton titleButton={"Send me message"} disabled={false}
                                                                   callback={() => {
                                                                   }}/></div>}
                        <CustomizedSnackbars open={open} openError={openError} handleClose={handleClose}/>
                    </form>
                </div>
            </div>
        </Fade>
    </div>

}