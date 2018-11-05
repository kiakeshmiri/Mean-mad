# mean-mad
Mongodb + ExpressJS + AnularJS + NodeJS + Dotnetcore + Material Demo

MEAN Stack plus MAD(DotNetCore) Stack Demo.
===

## Purpose

Demonstrating How AngularJS 7 can consume expressjs REST and compare in with dotnetcore WebAPI as an alternative. This application is contains 2 API severs : 1- expressjs + mongoose (Mongodb library for NodeJS) 2- dotnetcore + mongodb C# driver.

This application uses Observables Subjects for transfering asynchronous data between components.

Directories and ports are set up the way so you can easily switch back and forth between servers. (i.e. run NodeJS and test, then run dotnetcore). Both servers are using port 5000 but you can configure the ports in proxy.json file to your desired port. You can also define 2 separate ports and run both servers simultaneously. Just keep in mind mongodb server and angularjs development server do not to restart or change during your test. You can only turn on and off nodeJS or dotnetcore server.

This example only works on development mode (i.e. 'http://localhost:4200'). Production mode will be added to this project in future. There are so much improvements can be done on material and styles but I just wanted to focus on functionality in first version.

### Prerequisites
All the installations instructructions works on all supported platforms, However I've personally tested the steps on Windows 10 and Ubuntu 18.x successfully.

The following must be installed (preferably in order) before getting started.

```
Latest AngularJS (npm install -g @angular/cli).
Latest Angular Material (ng add @angular/material).
NodeJS (refer to https://nodejs.org/en/).
Mongodb (refer to  https://www.mongodb.com/download-center/community).
dotnetcore SDK (https://www.microsoft.com/net/download).
your favorite IDE (mine is VS code : https://code.visualstudio.com).

```
There are other packages that automatically will be installed by running npm install.

## Getting Started
After installing prerequisites Clone the repo on your machine and run following commands:

```
cd mean-mad
npm install
cd server
node app.js
```

This will lunch expressJS Api application and connects to default mongodb port (27017). this port can be configurable, experienced users can tweak the code or wait for next version. (I'll move all configurations to a unified config file).

```
npm start
```
This will lunch Angular development server using proxy.json. Open browser and go to http://localhost:4200. You can create posts and test and see how httpClient and Subject.next and Obersvables works.

Now let's focus on dotnetcore. The same exact logic and database structure is implemented in dotnetcore. To run the application and use dotnetcore instead Node and Exoress, simply Ctrl+c on first terminal (i.e. the same terminal that you ran node app.js). Open a new terminal and run the following:

```
cd mean-mad
cd dotnetcore
dotnet restore
dotnet watch run
```
Angular application (which is still running on port 4200) should work without any problem. As a matter of fact it should not even notice the switch. Now you are using the same database, same data but using dotnetcore vs NodeJS. KABOOM!

## Performance Comparison

I'll share my official statistics in near future but initially it's obvious that nodejs is a clear winner but it's too early to declare the winner. Http performance is not everything that we should care about, besides dotnetcore performance is very good compared to standard dotnet but still behind golang servers.

Dotnetcore advantage is support of microsoft and they are improving it and making it better and faster everyday. In addition to that for complex/big applications dotnetcore is a clear winner. There are tons of available middlewares for dotnetcore and enterprise coding / maintenance reduces overall costs.

Enjoy the demo.


# Angular Web Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2. In addition to that this project is using Angular Material(https://material.angular.io/).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




