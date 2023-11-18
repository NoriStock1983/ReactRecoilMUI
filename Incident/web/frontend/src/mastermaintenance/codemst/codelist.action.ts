
import { useNavigate } from "react-router-dom";
import { useRecoilState} from "recoil";
import { allcodemstState } from "../../state/codemst";

function useCodemstActions(){
    //const [removecookie] = useCookies(["token"]);
    const navigate = useNavigate();

    return{
        update_codemst,
        SearchCodemst,
        del_codemst
    }


    function update_codemst(){
        //Login.tsxの<button className="btn btn-primary">Login</button>の処理時、Home.tsxの画面に遷移する
    
        navigate('/home');

    }

    function SearchCodemst(){

        const allcodemst = [
            {id:1,code1:'0001',code2:'001',codename1:'codetest1',codename2:'codetest2',codename3:'codetest2',activeflg:true},
            {id:2,code1:'0002',code2:'002',codename1:'codetest3',codename2:'codetest4',codename3:'codetest2',activeflg:true},
            {id:3,code1:'0003',code2:'003',codename1:'codetest5',codename2:'codetest6',codename3:'codetest2',activeflg:true},
            {id:4,code1:'0004',code2:'004',codename1:'codetest7',codename2:'codetest8',codename3:'codetest2',activeflg:false},
        ]
        
        return allcodemst;
    }

    function del_codemst(){
        

    }
}
export{useCodemstActions};