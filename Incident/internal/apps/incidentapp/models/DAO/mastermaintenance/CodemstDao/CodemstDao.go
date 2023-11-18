package CodemstDao

import (
	"fmt"
	"incident/internal/apps/incidentapp/Commons"
	"incident/internal/apps/incidentapp/models/DTO/mastermaintenance"
)

func Get_all_codemst() {
	db := Commons.DBaccess()

	allcodemst, error := db.Query("SELECT * FROM ma_code")

	defer db.Close()

	if error != nil {
		fmt.Println(error)
	}
	var all_Codemst []mastermaintenance.Codemst

	for allcodemst.Next() {
		codemst := &mastermaintenance.Codemst{}
		allcodemst.Scan(&codemst.Id, &codemst.Code_1, &codemst.Code_2, &codemst.Code_nm_1, &codemst.Code_nm_2, &codemst.Active_flg, &codemst.Created_by, &codemst.Created_date, &codemst.Updated_by, &codemst.Updated_date, &codemst.Update_counter)

		all_Codemst = append(all_Codemst, *codemst)
	}
	fmt.Println(all_Codemst)
	//SQLの実行が完了するまで、待機する

}
