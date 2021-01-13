#!/bin/bash
#Description: Using notify-send, pop-up the current workspace number when changing workspaces
#Requires: xfce4-notifyd, libnotify, wmctrl

CURRENT_WORKSPACE=$(($(wmctrl -d | grep \* | cut -d' ' -f1)+1))
notify-send -t 500 "*$CURRENT_WORKSPACE*"
while true
	do
	
	NEW_WORKSPACE=$(($(wmctrl -d | grep \* | cut -d' ' -f1)+1))	
		if [ $CURRENT_WORKSPACE -ne $NEW_WORKSPACE ]; then
	notify-send -r  "*$CURRENT_WORKSPACE*"
	CURRENT_WORKSPACE=$NEW_WORKSPACE
										fi
done
exit 0
