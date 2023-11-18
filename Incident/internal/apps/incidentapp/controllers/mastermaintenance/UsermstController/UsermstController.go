package Usermstcontroller

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Get_all_usermst(c *gin.Context) {
	c.JSON(http.StatusOK, "Get_all_usermst")
}
