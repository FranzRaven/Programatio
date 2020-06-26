#!/usr/bin/env bash


if [[ ! -e ~/Notebooks/Notes/diario.txt ]]; then
	    mkdir -p ~/Notebooks/Notes
	        touch ~/Notebooks/Notes/diario.txt
fi

echo "###################################"
echo "Ctrl+d p cerrar"
echo "###################################"

date    >> ~/Notebooks/Notes/diario.txt && 
cat    >> ~/Notebooks/Notes/diario.txt 


