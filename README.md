works only locally right now, ports would need to be changed otherwise
also cannot return time based on IP yet

when running the container we need to publish the port that will be used e.g. 

`docker run -dit -p 3000:3000 --name <CONTAINER_NAME> <IMAGE_NAME>`
