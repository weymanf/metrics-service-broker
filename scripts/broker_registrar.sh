#!/bin/bash

gulp build

cf push metrics-service-broker
cf create-service-broker metrics-service-broker $BROKER_ADMIN $BROKER_PASSWORD $BROKER_URL
cf enable-service-access metrics-service-broker
