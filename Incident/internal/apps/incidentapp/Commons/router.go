package Commons

import (
	"incident/internal/apps/incidentapp/controllers/mastermaintenance/CodemstController"
	Usermstcontroller "incident/internal/apps/incidentapp/controllers/mastermaintenance/UsermstController"

	"github.com/gin-gonic/gin"
)

func Router() *gin.Engine {
	router := gin.Default()

	mst := router.Group("/mst")
	{
		codemst := mst.Group("/codemst")
		{
			codemst.GET("/all", CodemstController.Get_all_codemst)
		}
		usermst := mst.Group("/usermst")
		{
			usermst.GET("/all", Usermstcontroller.Get_all_usermst)
		}
	}
	return router
}
