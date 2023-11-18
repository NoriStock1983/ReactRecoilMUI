# goバージョン
FROM golang:1.21.0-alpine3.18
RUN mkdir /app

ADD . /app

WORKDIR /app

RUN go build -o main cmd/incidentapp/main.go

CMD ["/app/main"]