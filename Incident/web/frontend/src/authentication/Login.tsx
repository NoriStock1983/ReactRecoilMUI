import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import "../i18n/config";
import * as Yup from 'yup';
import { useAuthActions } from './auth.action';

export{Login}

function Login(){

    const {t}=useTranslation();
    const authActions = useAuthActions();

    const validationSchema = Yup.object().shape({
        usercd: Yup.string().required(t('auth.message.required_usercd')),
        password: Yup.string().required(t('auth.message.required_password'))
    });

    const formOptions = {resolver:yupResolver(validationSchema)}
    const {register,handleSubmit,formState} = useForm(formOptions);
    const { errors, isSubmitting } = formState;


    return(
        <div className="card col-sm-4 offset-sm-4 mt-5">
            <h4 className="card-header">{t('auth.title')}</h4>
            <div className="card-body">
                <form onSubmit={handleSubmit(authActions.Login)}>
                    <div className="form-group">
                        <label>{t('auth.usercd')}</label>
                        <input type="text" {...register('usercd')} className={`form-control ${errors.usercd ? 'is-invalid':``}`}/>
                        <div className="invalid-feedback">{errors.usercd?.message}</div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>{t('auth.password')}</label>
                        <input type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid':``}`}/>
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <button className="btn btn-primary">{t('auth.signin')}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}