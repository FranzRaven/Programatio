#!/bin/bash

while true
do 
	slep 1
num=$(xprop -root _NET_CURRENT_DESKTOP|tail -c 3) 
let "num++"
notify-send "DESKTOP $num "


done
exit 0

