function useKanbanboardActions(){
    return{
        SearchAllTask,
        searchBelongedCompany,
        searchBelongedDept
    }

    function SearchAllTask(){

        const alltask = [
            {id: "Column1",title: "申請済",cards: [{id: "Card1",title: "対応A",person_in_charge:"A"},{id: "Card5",title: "Card4",person_in_charge:"D"}]},
            {id: "Column2",title: "受付済",cards: [{id: "Card2",title: "問い合わせB",person_in_charge:"B"},{id: "Card6",title: "Card4",person_in_charge:"E"}]},
            {id: "Column3",title: "対応中",cards: [{id: "Card3",title: "問い合わせA",person_in_charge:"A"},{id: "Card7",title: "Card4",person_in_charge:"F"}]},
            {id: "Column4",title: "完了",cards: [{id: "Card4",title: "Card3",person_in_charge:"C"},{id: "Card8",title: "Card4",person_in_charge:"G"}]},
            {id: "Column5",title: "確認済",cards: []},
        ]
        
        return alltask;
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
}

export{useKanbanboardActions}