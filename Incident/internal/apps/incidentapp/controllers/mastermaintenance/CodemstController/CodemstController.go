package CodemstController

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Get_all_codemst(c *gin.Context) {

	allcodemst, error := json.Marshal("Get_all_codemst")

	if error != nil {
		panic(error)
	}

	c.JSON(http.StatusOK, allcodemst)
}
