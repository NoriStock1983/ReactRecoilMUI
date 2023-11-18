
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AuthUserAtom } from "../state/authentication";
import { set } from "react-hook-form";

export{useAuthActions};

function useAuthActions(){
    //const [removecookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const [AuthUser,setAuthUser] = useRecoilState(AuthUserAtom);
    return{
        Login,
        logout
    }


    function Login(){
        //Login.tsxの<button className="btn btn-primary">Login</button>の処理時、Home.tsxの画面に遷移する
        setAuthUser({
            id:1,usercd:"a0006802",user_f_name:"Norifumi",user_l_name:"Sato",companyid:1,companynm:"RYOBI",companynm_short:"RYOBI",language:"en",class_id:1,status_id:1,created_by:"",created_date:new Date(),updated_by:"",updated_date:new Date(),update_counter:1
        });
        navigate('/incidentlist');

    }

    function logout(){
        

    }
}