#!/bin/bash

cd $HOME/Deploy/foodcoop.org.nz
forever start -a --plain -l $HOME/Deploy/Logs/foodcoop-forever.log -o $HOME/Deploy/Logs/foodcoop-stdout.log -e $HOME/Deploy/Logs/foodcoop-stderr.log server/web-server.js
