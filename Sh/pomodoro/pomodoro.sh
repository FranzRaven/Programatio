#!/usr/bin/env bash
#
clear
echo "Pomodoro Timer"
echo "4 set of 25min, 3 rest of 5min, 1 rest of 25min"
printf "\n"
echo "Starting ..."



work () {
	paplay zen_bell.ogg &
	echo "Working ..."
	sleep 25m | pv -t
	echo "work finished"
	printf "\n"
}
rest () {
	paplay alarm.ogg &
	echo "resting ..." 
	sleep 5m | pv -t
	echo "rest finished"
	printf "\n"
}
rest2 () {
	paplay alarm.ogg &
	echo "resting ..." 
	sleep 25m | pv -t
	echo "rest finished"
	printf "\n"
}
#for i in $(seq 0 1 5)
for i in {1..4}
do

	echo "round $i" | lolcat
	work
	rest
	
done

echo "round 5" | lolcat
work
rest2

