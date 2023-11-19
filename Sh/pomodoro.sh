#!/usr/bin/env bash
#
clear
echo "Pomodoro Timer"
echo "4 set of 25min, 3 rest of 5min, 1 rest of 25min"
printf "\n"
echo "Starting ..."


work () {
	echo "Working ..." 
	paplay zen_bell.ogg & 
	 
	sleep 5 | pv -t
	echo "work finished"
	printf "\n"
}
rest () {
	echo "resting ..." & paplay zen_bell.ogg

	sleep 3 | pv -t
	echo "rest finished"
	printf "\n"
}
##for i in $(seq 0 1 5)
#for i in {1..5}
#do
#
#	echo "round $i" | lolcat
#	work
#	rest
#	
#done
