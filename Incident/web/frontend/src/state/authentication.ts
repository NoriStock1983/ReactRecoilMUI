import { atom, selector } from 'recoil';

export type AuthUserType = {
    id:number,
    usercd:string,
    user_f_name:string,
    user_l_name:string,
    companyid:number,
    companynm:string,
    companynm_short:string,
    language:string,
    class_id:number,
    status_id:number,
    created_by:string,
    created_date:Date,
    updated_by:string,
    updated_date:Date,
    update_counter:number

}

const AuthUserAtom = atom<AuthUserType>({
    key: 'AuthUserAtom',
    default: {
        id:0,usercd:"",user_f_name:"",user_l_name:"",companyid:0,companynm:"TEST",companynm_short:"",language:"",class_id:1,status_id:1,created_by:"",created_date:new Date(),updated_by:"",updated_date:new Date(),update_counter:1
    }
});

export {
    AuthUserAtom 
};