
import { useNavigate } from "react-router-dom";
import { useRecoilState} from "recoil";

function useIncidentActions(){
    //const [removecookie] = useCookies(["token"]);
    const navigate = useNavigate();

    return{
        clickAllStatus,
        clickallcategory,
        SearchIncidentlist,
        SearchIncidentlist2
    }

    function clickAllStatus(){
        //状態区分のALLをクリックすると、その他の状態区分のチェックを反転する。

    }

    function clickallcategory(){
        //分類のALLをクリックすると、その他の分類のチェックを反転する。

    }

    function SearchIncidentlist(){

        const allincidentlist = [
            {id:1,incidentno:'',status:'作成中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:2,incidentno:'202311110001',status:'申請中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:3,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'うまく動作しない',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:4,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:5,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:6,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:7,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:8,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:9,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:10,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:11,incidentno:'202311110001',status:'調査中',category:'PC機器',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:12,incidentno:'202311110001',status:'調査中',category:'PC機器',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:13,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:14,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:15,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:16,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:17,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:18,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:19,incidentno:'202311110001',status:'調査中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},

        ]
        
        return allincidentlist;
    }

    function SearchIncidentlist2(){

        const allincidentlist = [
            {id:1,incidentno:'',status:'作成中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},
            {id:2,incidentno:'202311110001',status:'申請中',category:'業務システム',subcategory:'JOMAC',title:'やりやがって',priority:'高',urgency:'高',reporting_date:'2023/11/11',corresponde_date:'2023/12/1',inquiry_companynm:'THI',inquiry_deptnm:'EDP',inquiry_person:'海崎良'},

        ]
        
        return allincidentlist;
    }
}
export{useIncidentActions};