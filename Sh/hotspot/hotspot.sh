#! /usr/bin/env sh

 IFNAME="wlp3s0u1"
 CON_NAME="Aleister"

 nmcli con add type wifi ifname $IFNAME con-name $CON_NAME autoconnect yes ssid $CON_NAME

nmcli con modify $CON_NAME 802-11-wireless.mode ap 802-11-wireless.band bg ipv4.method shared
nmcli con modify $CON_NAME wifi-sec.key-mgmt wpa-psk
nmcli con modify $CON_NAME wifi-sec.psk "jotspot666"
nmcli con up $CON_NAMnmcli connection show $CON_NAME
