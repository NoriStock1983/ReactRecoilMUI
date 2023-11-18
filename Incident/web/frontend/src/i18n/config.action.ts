
import { useNavigate } from "react-router-dom";
import { useRecoilState} from "recoil";
import { AuthUserAtom } from "../state/authentication";

function usei18nActions(){
    //const [removecookie] = useCookies(["token"]);

    return{
        SearchUseLang,
        useUserLanguage
    }



    function SearchUseLang(){

        const useLang = {lang:'ja',langname:'日本語'}
        
        return useLang;
    }

    function useUserLanguage(){
        const [AuthUser] = useRecoilState(AuthUserAtom);
        return AuthUser.language;

    }
}
export{usei18nActions};