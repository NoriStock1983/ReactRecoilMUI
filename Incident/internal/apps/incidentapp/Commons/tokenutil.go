package Commons

import (
	"fmt"

	"github.com/golang-jwt/jwt"
)

func IsAuthorized(token string, secret string) (bool, error) {
	_, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(secret), nil
	})
	if err != nil {
		return false, err
	}
	return true, nil
}
