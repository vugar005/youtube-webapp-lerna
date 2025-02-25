# Youtube clone with Lerna 

<img src="https://github.com/vugar005/vg-common/blob/main/images/Youtube-logo.webp" alt="Youtube Angular brand" width="100%"  height="400px">

---
**NOTE**:

*This is project is for educaiton purpose only and was made to illustrate example of building microfrontend using Angular, Module Federation.*   

---


There is 1 host (shell) and 3 remote apps (watch-app, likes-app, history-app).     

There are 3 versions of source codes available:   
[Turborepo](https://github.com/vugar005/youtube-webapp-turborepo)   
[Nx](https://github.com/vugar005/youtube-webapp-nx)   
[Lerna (Current Repo)](https://github.com/vugar005/youtube-webapp-lerna)   

---
**NOTE**:

*Server side rendering is implemented only on Lerna and Turborepo edition*

---

## Features:   
☑ Multiple Angular applications on different domains   
☑ Shared UI components and utils  
☑ NgRx Store state management on each application   
☑ Communication between angular applications   
☑ Routing between applications     
☑ Server Side Rendering   

## Demo: ▶
http://youtube.vugar.app

---
**NOTE**:

*Hosted application is using Turborepo edition repo*

---

## Getting Started 🚀

1- On project root to install root dependencies   
```bash 
npm ci
```  
2- On project root to install microfrontend dependencies   
```bash
npm run bootstrap
```  
3- Start project and navigate to localhost:4200:  
```bash
npm run start
```

3- To lint all apps: 
```bash
npm run lint
```
Other commands: please see ```package.json``` for other commands.   

## Tech Stack:   
<div style="display:flex;">
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/angular.svg" title="Angular" alt="Angular" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/material.svg" title="Angular Material" alt="Angular Material" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/angular-universal.svg" title="Angular Universal" alt="Angular Universal" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/nestjs.svg" title="Angular Universal" alt="Angular Universal" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/ngrx.svg" title="NgRx" alt="NgRx store" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/rxjs.svg" title="RxJs" alt="RxJs" height="120"/>
<img src="https://github.com/vugar005/vg-common/blob/main/icons/brands/turborepo.svg" title="Turborepo"  alt="Turborepo" height="120"/>
</div>


## Pros and cons of Nx, Turborepo and Lerna tools
Below are just my experiences working in those tools. They can be inaccurate.   
### Lerna
✅ Supports both same and different versions of libraries (such as Angular, RxJs)   
✅ Native - Use Angular CLI   
❌ Configuration of applications required a change to `angular.json` to make it work. Switched to `ngx-build-plus` builders to support custom webpack config.  
❌ Slow development efficiency. Rebuild everytime you make changes to common packages such as UI   
❌ No dependency graph   

### Nx
❌ Not supports both same and different versions of libraries (such as Angular, RxJs). Only Monorepo.   
❌ Not native. Uses Nx CLI  
❌ Configuration of applications required a change to `angular.json` to make it work. Switched to Nx Officially Supported Builders to support custom webpack config.   
  Problems with adding new packages (such as ssr)    
✅ Very fast development efficiency   
✅ Powerful dependency graph   

### Turborepo
❌ Not supports both same and different versions of libraries (such as Angular, RxJs). Only Monorepo.   
✅ Native - Use Angular CLI  
❌ Configuration of applications required a change to `angular.json` to make it work. Switched to `ngx-build-plus` builders to support custom webpack config.   
✅ Fast development efficiency   
✅ Dependency graph  


## About me 🌴🏌️
Xtreme Junior Front end developer focused on nice architecture and long term webapps.
