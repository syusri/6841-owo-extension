# Something Awesome: Google Chrome OWO & Keylogger Extension 
A Chrome extension that changes text to sound more cute and OWO. However, it acts maliciously in the background by logging your keystrokes and sending it to a local Apache server. Works locally only.

Made for COMP6841 in 21T1. 

In keeping with the Good Faith Code, this keylogger will only be used to track my activities alone, and is for educational purposes only.

# How to get it up and running on Linux
In terminal, become root and add files in the default root folder of the web server.:
sudo -s
cd /var/www/html
mkdir owo-extension
cd owo-extension

add contents of backend/ in this folder

Also reassign write permissions in /var/www:
chown -hR www-data:www-data html

Then in Google Chrome Extensions, load the extension/ folder.

Then to get the server running (assuming logged in as root using sudo -s):
service apache2 start
php -S localhost:8000

Then access the keylog through:
localhost:8000/key.log
