package mastermaintenance

import "time"

type Codemst struct {
	Id             uint64    `json:"id"`
	Code_1         string    `json:"code_1"`
	Code_2         string    `json:"code_2"`
	Code_nm_1      string    `json:"code_nm_1"`
	Code_nm_2      string    `json:"code_nm_2"`
	Active_flg     bool      `json:"Active_flg"`
	Created_by     string    `json:"created_by"`
	Created_date   time.Time `json:"created_date"`
	Updated_by     string    `json:"updated_by"`
	Updated_date   time.Time `json:"updated_date"`
	Update_counter uint64    `json:"update_counter"`
}
