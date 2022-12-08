# PTWD
**pay the web dev**

# What?
'small' django rest framework app to validate whether or not someone has paid before the due date

# How?
upon sending a GET request with the proper randomly gennerated identifier in the HTTP Headers, the backend simply checks if the current date is past the set due date and adjusts the 'due' object accordingly, returning a boolean to the client.

# Then What?
the frontend upon receiving the boolean, is free to do whatever they want to do with it.
[Example]()

# Why?
idk i'm bored
