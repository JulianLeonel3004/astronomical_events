# Astronomical events

![moon](https://user-images.githubusercontent.com/26194667/225506531-bf0624ae-0174-4a92-adb2-848534bcbfe6.jpg)


Astronomic events is a free software to be consumed and obtain information about astronomical events.
Now you can to consulte lunar eclipses. Information about solar eclipses is expected to be available soon.

Resource: 
 - https://eclipse.gsfc.nasa.gov

# How it consume?
Domain: https://astronomical-events.up.railway.app/lunareclipses

Query params available:
---------------------------
`?region=americas`

`?date=2028-12-31`

 - The date need to be exact
 
 - Posibble regions (not case sensitive):
      Asia, Australia, Pacific, Europe, Africa, Americas, Mid East

This feature does not support concatenated regions, but allow use both queryparams for example: `?region=america&date=2021-05-26`

Example of GET

`https://astronomical-events.up.railway.app/lunareclipses?region=america&date=2021-05-26`

`https://astronomical-events.up.railway.app/lunareclipses?region=america`

`https://astronomical-events.up.railway.app/lunareclipses?date=2021-05-26`


# Locally run

Dependencies npm and node

Steps:

Clone the project
1. `git clone https://github.com/JulianLeonel3004/astronomical_events.git`
2. `cd astronomical_events`
3. `npm install`
4. `npm start`

If terminal log write "run 8080", project is running correctly

# Would do you like collaborate?

You can to generate a PR with prefix about it context

`feature/name-branch`
`fix/name-branch`

If you want, you can to collaborate reporting issues o suggerencies
