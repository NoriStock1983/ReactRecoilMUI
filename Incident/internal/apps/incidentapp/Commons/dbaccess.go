package Commons

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func DBaccess() *sql.DB {

	db, error := sql.Open("postgres", "host=localhost port=5436 user=postgres password=postgres dbname=Incident_DB sslmode=disable")

	if error != nil {
		log.Fatal("DB Connect Error:", error)
	}
	return db
}
