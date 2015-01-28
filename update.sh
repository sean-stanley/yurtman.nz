#!/bin/bash
export PATH=/home/sean/node-v0.10.31-linux-x64/bin:$PATH

cd $HOME/Deploy/foodcoop.org.nz
./stop.sh
npm install
./start.sh
