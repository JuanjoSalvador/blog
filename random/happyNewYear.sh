#!/bin/bash

############################################
# Author: Juanjo Salvador Piedra
# Website: http://juanjosalvador.es
# GitHub: https://github.es/JuanjoSalvador
# Twitter: @Linuxneitor
# Telegram: @JuanjoSalvador
############################################

# PATH to your Telegram-Cli installation
PATH="/home/juanjo/GitHub/tg"
# Replace this with your own message
MESSAGE="Feliz año nuevo! De parte de Juanjo y el equipo de JotaDevs ;)"
# File where is all usernames (one per line)
FILE="usernames.txt"

while IFS='' read -r USERNAME; do
	$PATH/bin/telegram-cli -W -e "msg $USERNAME $MESSAGE" > /dev/null && echo "Message sent to $USERNAME"
done < "$FILE"