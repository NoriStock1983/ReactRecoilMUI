package usermstdao

import "incident/internal/apps/incidentapp/Commons"

func Get_all_usermst() {
	db := Commons.DBaccess()

	db.Query("SELECT * FROM usermst")
	//SQLの実行が完了するまで、待機する
	defer db.Close()
}
