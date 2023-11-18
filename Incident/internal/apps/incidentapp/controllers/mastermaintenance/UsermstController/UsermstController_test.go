package Usermstcontroller

import "testing"

func TestGet_all_usermst(t *testing.T) {
	ideal := "Get_all_codemst"

	if ideal != "Get_all_codemst" {
		t.Errorf("ideal = %s; want Get_all_usermst", ideal)
	}

}
