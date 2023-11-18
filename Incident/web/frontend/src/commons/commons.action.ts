
import { useNavigate } from "react-router-dom";

function useMstActions(){
    //const [removecookie] = useCookies(["token"]);
    const navigate = useNavigate();

    return{
        searchBelongedCompany,
        searchBelongedDept,
        searchAuth,
        searchLanguage,
        searchCategory,
        searchSubCategory

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
    function searchCategory(){

        const allcategory=[
            {id:1,code1:'0002',code2:'001',codename1:'category',codename2:'業務システム',codename3:"ja",activeflg:true},
            {id:2,code1:'0002',code2:'002',codename1:'category',codename2:'OS',codename3:"en",activeflg:true}, 
            {id:3,code1:'0002',code2:'003',codename1:'category',codename2:'PC機器',codename3:"en",activeflg:true},    
        ]

        return allcategory
    }


    function searchSubCategory(){

        const allsubcategory=[
            {id:1,code1:'0001',code2:'001',codename1:'subcategory',codename2:'JOMAC',codename3:"JOMAC",activeflg:true},
            {id:2,code1:'0001',code2:'002',codename1:'subcategory',codename2:'Windows',codename3:"Windows",activeflg:true},
            {id:3,code1:'0001',code2:'003',codename1:'subcategory',codename2:'プリンタ',codename3:"Printer",activeflg:true},        
        ]

        return allsubcategory
    }
}
export{useMstActions};