#!/usr/bin/env bash
#
clear
echo "Timer"
read -p "Enter n° of sets: " sets 
read -p "Enter set time(minutes): " set
read -p "Enter rest time(seconds): " rest
printf "\n"
echo "Starting ..."



work () {
	paplay zen_bell.ogg &
	echo "Working ..."
	sleep ${set}m  | pv -t
	echo "work finished"
	printf "\n"
}
rest () {
	paplay alarm.ogg &
	echo "resting ..." 
	sleep ${rest}s | pv -t
	echo "rest finished"
	printf "\n"
}

#for i in $(seq 0 1 5)
for ((i=1; i<=$sets; i++))
do

	echo "round $i" | lolcat
	work
	rest
	
done



