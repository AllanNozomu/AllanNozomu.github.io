#!bin/bash

current_date=$(date '+%d/%m/%Y')
echo '{ "lastTimeUpdate" : "' $current_date '"}' > src/lastTimeUpdate.json