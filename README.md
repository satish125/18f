#RECALL.IT 

##[Public URL](http://demo.ntconcepts.com/recallit): http://demo.ntconcepts.com/recallit

###Approach to Developing the  RECALL.IT Prototype
Next Tier Concepts, Inc. (NT Concepts) created the RECALL.IT prototype in response to GSA RFQ 4QTFHS150004 using Agile development methods, tools, and staff based on our organizational process assets and successful experiences on other Agile efforts. RECALL.IT is a working development and design prototype (Pool Three Full Stack) using datasets from [openFDA](http://open.fda.gov). Our approach to create the RECALL.IT prototype followed our established Agile practices, the U.S. Digital Services Playbook, and the requirements set forth in the RFQ.

RECALL.IT is an open source dashboard app primarily for federal health inspector use that displays FDA recall data (circa 2004-2015) for foods, drugs, and devices. Users can view recall data statistics, filter the data by geographic area (city/state), and view specific details about the data in a sortable, filterable, table format. The app’s purpose is to give the federal health inspector a daily snapshot of current events, as well as provide historical insight to past recalls.

Letters a through q below describe, demonstrate, and provide evidence that NT Concepts successfully followed the U.S. Digital Services Playbook to create the RECALL.IT prototype. Criteria fulfillment [screenshots](https://github.com/NTConcepts/18f/tree/master/ASSETS) are found as embedded links to our GitHub repository to exemplify the text.

#####a. assigned one leader and gave that person authority and responsibility and held that person accountable for the quality of the prototype submitted.

Upon receipt if this task order, a Product Manager (Michael DeLaFleur, PMP) was assigned by the NT Concepts VP for IT Services, and added to the GitHub repository used for this [prototype](https://github.com/NTConcepts/18f) as mdelafleur. He was added into our Agile tracking software (JIRA) and assigned that role in JIRA. Mr. DeLaFleur has over 20 years management experience, including Agile development. He ensured that features were built and feature and bug backlogs were managed.

#####b. assembled a multidisciplinary and collaborative team that includes at a minimum five of the labor categories limited to the Design Pool, Development Pool categories to the full stack (i.e., Design and Development) as quoted in Attachment C. The quoter’s proposed mix of labor categories and level of effort for its working prototype, as reflected in Attachment C, shall be evaluated to assess the quoter’s understanding and capability to supply agile delivery services.

NT Concepts established a multidisciplinary and collaborative team using     five of the 13 Full Stack labor categories. The team was assembled to match the scope and timeframe of the RECALL.IT prototype, and is evidenced by user accounts and activities in our GitHub repository. 

Activities and responsibilities assigned outside of the five selected labor categories are part of the NT Concepts corporate infrastructure.

| Title | Name | GitHub |
|---|---|---|
| Product Manager | Michael DeLaFleur | mdelafleur | 
| Interaction Designer | Lauren Harkness | NTCLauren | 
| Technical Architect | Bhargavi Kodali | superbk | 
| Visual Designer | Paige Harley | pharley | 
| Front End Web Developer | Kevin Reamer | kevin-reamer | 
| Front End Web Developer | Daniel Pegues | pegues | 
| Front End Web Developer | David King | AsuScholar | 


#####c. Understand what people need, by including people in the prototype development and design process

For the RECALL.IT prototype, we researched likely users, and wrote user stories based on the needs of both a general user (“the public”) and federal health inspectors who need to analyze data on Class I, II, and III recalls. NT Concepts created user stories via human-centered design techniques and included the core team and business development stakeholders in the prototype development and design process. We held [daily demo sessions](https://github.com/NTConcepts/18f/tree/master/ASSETS/HCD) (via war room with GoToMeeting) during the sprint and received feedback on design, usability, and scope of the application, which in turn we tasked out in JIRA. 

#####d. Used at least three “human-centered design” techniques or tools

NT Concepts employed various human-centered/MVP design techniques to determine a) what users (federal health inspectors) wanted in the application, b) how we could technically answer those questions, and c) what would make the most business sense within the given timeline. We conducted short field research with “users”, and worked in a dedicated space as a team to translate the input into a rapid prototype. We started with [simple sketches and wireframes](https://github.com/NTConcepts/18f/blob/master/ASSETS/PROTOTYPE/OpenFDA_sketch.jpg), and quickly stood up a [clickable prototype](https://github.com/NTConcepts/18f/tree/master/ASSETS/HCD). We held daily demo meetings for feedback on the UI/UX, tested often, and leveraged this iterative process to continuously inform the app interface and functionality.

#####e. Created or used a design style guide and/or a pattern library

We created a simple [style guide](https://github.com/NTConcepts/18f/tree/master/ASSETS/STYLEGUIDE) and utilized popular open source pattern libraries such a Bootstrap CSS in the application, as evidenced by the code and commit history in the repository. 

#####f. Performed usability tests with people

The NT Concepts team performed both usability testing and user acceptance testing. Test criteria were derived from acceptance criteria specified in user stories, and managed in JIRA with the Capture module for direct team feedback. Extensive accessibility testing was also performed to ensure 508 compliance. Exploratory UAT was conducted with a sample user group outside of the development team to drive any UI or functional modifications.

#####g. used an iterative approach, where feedback informed subsequent work or versions of the prototype

Daily demo sessions were held during the sprint and feedback on both usability and scope of the prototype application and resulted in the creation of new user stories and/or tasks assigned to user stories as evidenced through screenshots of our Jira sprint and scrum boards.

#####h. created a prototype that works on multiple devices, and presents a responsive design

The RECALL.IT framework was built using the AngularJS framework, which allowed our team to work with a flexible, extensible environment that supports a multitude of open source technologies. The app is designed “mobile first”, and utilizes Bootstrap for Angular and Bootstrap CSS to ensure a responsive experience regardless of device, browser, or platform. A custom open source JavaScript (Minerva) was used to handle the advanced, responsive dashboard interface within the AngularJS framework. A full listing of technologies utilized is located in licensing.md in the repository.

i. used at least five modern and open-source technologies, regardless of architectural layer (frontend, backend, etc)

NT Concepts utilized modern, open-source technologies to develop RECALL.IT,  including AngularJS, LESS, D3, Bootstrap, php, and JQuery, as evidenced by the code and commit history in the repository. 

#####j. deployed the prototype on an Infrastructure as a Service (Iaas) or Platform as Service (Paas) provider, and indicated which provider they used.

NT Concepts deployed the RECALL.IT app on IaaS provider Amazon Web Services (AWS), specifically the Amazon Elastic Compute Cloud (Amazon EC2) web service. 

#####k. wrote unit tests for their code

NT Concepts utilized Jasmine, a behavior-driven development framework, for testing JavaScript code. Automated unit tests were written to cover all major JavaScript modules. Examples include testing external web service calls and the application bootstrapping process. Evidence can be run from XXX and viewed in the following folder in the GitHub repo. Cloud-based BrowserStack was utilized for desktop and mobile browser simulation testing, as well as actual physical device testing and reporting.

#####l. setup or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider.

NT Concepts used a Github webhook (screenshot of Github webhook for AWS) to continuously deploy our code to Amazon EC2. We also started to set up testing via AWS shell scripts to run after deployment completion.


#####m. setup or used configuration management
GitHub was used as a central repository for source code and platform for other collaborative needs. Branches were created to separate and assign individual tasks, and merged frequently to avoid major commit conflicts. An install.md was created to aid in initial project setup.

#####n. setup or used continuous monitoring
Various methods of continuous monitoring were set up for the RECALL.IT project: JIRA was used to report bug/issue assignments and updates via email; GitHub a) alerted team members of code commits through repository subscription emails, and b) kicked off AWS autodeployment calls.

#####o. deploy their software in a container (i.e., utilized operating-system-level virtualization)
RECALL.IT is deployed in Amazon EC2 Container Service which is runs faster and highly scalable and easy to manage Docker containers. The software for RECALL.IT is deployed in AWS WIndows EC2 Instance and is Code Deploy is setup and configured to auto deploy code when a commit is made to the master branch of the repository in GitHub.

#####p. provided sufficient documentation to install and run their prototype on another machine

Simple instructions for installing on a php-based web server can be found in the install.md located on GitHub.

#####q. prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge

For RECALL.IT, we committed to collaborate in the open and publish our prototype publicly, and offer users a mechanism to report bugs and issues, and be responsive to these reports. RECALL.IT is publically accessible on the internet. Our GitHub repository (code, components) is publically accessible. The underlying platforms, libraries, and plugins are openly licensed and free of charge. Full licensing information is attributed in our repository.


