#!/bin/bash

APP="PsicHelp"

 function acp {
    git add -A .
    git commit -m "$*"
    git push
}


# ionic cordova platform add browser
# ionic cordova build browser --prod --release

# rm -rf docs
# cp www docs -r
# cd docs
# php -S 0.0.0.0:8015

# echo Teste primeiro localmente, funcionou?
# read answer
# if [ "$answer" != "${answer#[SsYy]}" ] ;then
#     echo OK, continuando
# else
#     echo Saindo!
#     exit
# fi
# cd ..

acp Publicando o webApp 
echo teste agora em https://bit.ly/psichelpweb funcionou?
read answer
if [ "$answer" != "${answer#[SsYy]}" ] ;then
    echo OK, Parabéns!
else
    echo Eita pau!!!!!!!!!!!!!!!!!!!
    exit
fi
