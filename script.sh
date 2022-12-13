#!/bin/bash


echo "Create images . . ."

docker build -t ninomunich/project-bcknd:1.0 backend/.
docker build -t ninomunich/project-dtbase:1.0 database/.

echo "Pushing up images"

docker push ninomunich/project-bcknd:1.0
docker push ninomunich/project-dtbase:1.0

echo "Creating services in Kurbenetes cluster"

kubectl apply -f ./services.yml

echo "Creating the deployments"

kubectl apply -f ./deployment.yml 