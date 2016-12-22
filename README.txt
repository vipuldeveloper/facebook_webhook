
ngrok is require to make your local app to public available

eg. to expose localhost:4567 to publically available, you need to run below command.

./ngrok http 4567

----------

To start node server, run below command

node myFirstbot.js

----------
for config you need to install config:

npm install config

----------
npm install -update

----------

To working with json file need jsonfile npm:

    npm install --save jsonfile

------------
Need to run below command for page token, if page token changes:

curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<page token>"

-------------

TO Fix 100 Error Issue..
https://graph.facebook.com/v2.6/me/subscribed_apps?method=POST&access_token=<TEST_USER_PAGE_ACCESS_TOKEN>