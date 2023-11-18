
import { useNavigate } from "react-router-dom";
import { useRecoilState} from "recoil";
import { allcodemstState } from "../../state/codemst";

function useUsermstActions(){
    //const [removecookie] = useCookies(["token"]);
    const navigate = useNavigate();

    return{
        searchBelongedCompany,
        searchBelongedDept,
        searchAuth,
        searchLanguage,
        update_usermst,
        SearchUsermst,
        SearchUsermstDetail,
        del_usermst
    }


    function update_usermst(){
        //Login.tsxの<button className="btn btn-primary">Login</button>の処理時、Home.tsxの画面に遷移する
    
        navigate('/home');

    }

    function searchBelongedCompany(){

        const allbelongedcompnay = [
            {id:1,companycd:"0001",companynm:"RYOBI",companynm_short:"RYOBI",class_id:1,status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:2,companycd:"0002",companynm:"RYOBI",companynm_short:"RMGT",class_id:1,status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:3,companycd:"0003",companynm:"RYOBI",companynm_short:"Rミラ",class_id:1,status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:4,companycd:"0004",companynm:"RYOBI",companynm_short:"Rミツギ",class_id:1,status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
        ]
        return allbelongedcompnay
    }

    function searchBelongedDept(){

        const allbelongeddept=[
            {id:1,companyid:1,deptcd:"0001",deptnm:"情報システム部",deptnm_short:"情シス",status_id:1,indirect_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:2,companyid:1,deptcd:"0002",deptnm:"総務部",deptnm_short:"総務",status_id:1,indirect_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:3,companyid:1,deptcd:"0003",deptnm:"法務部",deptnm_short:"法務",status_id:1,indirect_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:4,companyid:1,deptcd:"0004",deptnm:"調達部",deptnm_short:"調達",status_id:1,indirect_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
        ]

        return allbelongeddept
    }

    function searchAuth(){

        const allauth=[
            {id:1,authcd:"001",authnm:"Admin",status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:2,authcd:"002",authnm:"User",status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:3,authcd:"003",authnm:"Guest",status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            {id:4,authcd:"004",authnm:"Tester",status_id:1,created_by:"a0006802",created_date:"2021/01/01",updated_by:"a0006802",updated_date:"2021/01/01",update_counter:1},
            
        ]

        return allauth
    }


    function searchLanguage(){

        const allauth=[
            {id:1,code1:'0001',code2:'001',codename1:'language',codename2:'日本語',codename3:"ja",activeflg:true},
            {id:2,code1:'0001',code2:'002',codename1:'language',codename2:'英語',codename3:"en",activeflg:true},
            {id:3,code1:'0001',code2:'003',codename1:'language',codename2:'中国語',codename3:"ch",activeflg:true},        
        ]

        return allauth
    }

    function SearchUsermst(){

        const allusermst = [
            {id:1,usercd:'a0006802',belonged_company_nm:'R',belonged_dept_nm:'情シス',user_f_name:'Sato',user_l_name:'Norifumi',auth_nm:'Admin',language:"ja",activeflg:true},
            {id:2,usercd:'a0006803',belonged_company_nm:'R',belonged_dept_nm:'情シス',user_f_name:'Sato',user_l_name:'Norifumi',auth_nm:'Admin',anguage:"ja",activeflg:true},
            {id:3,usercd:'a0006804',belonged_company_nm:'R',belonged_dept_nm:'情シス',user_f_name:'Sato',user_l_name:'Norifumi',auth_nm:'Admin',anguage:"ja",activeflg:true},
            {id:4,usercd:'a0006805',belonged_company_nm:'R',belonged_dept_nm:'情シス',user_f_name:'Sato',user_l_name:'Norifumi',auth_nm:'Admin',anguage:"ja",activeflg:false},
        ]
        
        return allusermst;
    }

    function SearchUsermstDetail(usercd:string){

        const allusermst = 
            {id:1,usercd:'a0006802',belonged_company_nm:'R',belonged_dept_nm:'情シス',user_f_name:'Norifumi',user_l_name:'Sato',auth_nm:'Admin',activeflg:true}
        
        return allusermst;
    }

    function del_usermst(){
        

    }
}
export{useUsermstActions};