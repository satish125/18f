#RECALL.IT 

##[Public URL](http://demo.ntconcepts.com/recallit): http://demo.ntconcepts.com/recallit

###Approach to Developing the  RECALL.IT Prototype
Next Tier Concepts, Inc. (NT Concepts) created the RECALL.IT prototype in response to GSA RFQ 4QTFHS150004 using Agile development methods, tools, and staff based on our organizational process assets and successful experiences on other Agile efforts. RECALL.IT is a working development and design prototype (Pool Three Full Stack) using datasets from [openFDA](http://open.fda.gov). Our approach to create the RECALL.IT prototype followed our established Agile practices, the U.S. Digital Services Playbook, and the requirements set forth in the RFQ.

RECALL.IT is an open source dashboard app primarily for federal health inspector use that displays FDA recall data (circa 2004-2015) for foods, drugs, and devices. Users can view recall data statistics, filter the data by geographic area (city/state), and view specific details about the data in a sortable, filterable, table format. The app’s purpose is to give the federal health inspector a daily snapshot of current events, as well as provide historical insight to past recalls.

Letters A through Q below describe, demonstrate, and provide evidence as required by Attachment E that NT Concepts successfully followed the U.S. Digital Services Playbook to create the RECALL.IT prototype. Criteria fulfillment [screenshots](https://github.com/NTConcepts/18f/tree/master/ASSETS) are found as embedded links to our GitHub repository to exemplify the text.

#####CRITERIA A:

Upon receipt if this task order, a Product Manager (Michael DeLaFleur, PMP) was assigned by the NT Concepts VP for IT Services, and added to the GitHub repository used for this [prototype](https://github.com/NTConcepts/18f) as mdelafleur. He was added into our Agile tracking software (JIRA) and assigned that role in JIRA. Mr. DeLaFleur has over 20 years management experience, including Agile development. He ensured that features were built and feature and bug backlogs were managed.

#####CRITERIA B:

NT Concepts established a multidisciplinary and collaborative team using five of the 13 Full Stack labor categories. The team was assembled to match the scope and timeframe of the RECALL.IT prototype, and is evidenced by user accounts and activities in our GitHub repository. 

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


#####CRITERIA C:

For the RECALL.IT prototype, we researched likely users, and wrote user stories based on the needs of both a general user (“the public”) and federal health inspectors who need to analyze data on Class I, II, and III recalls. NT Concepts created user stories via human-centered design techniques and included the core team and business development stakeholders in the prototype development and design process. We held [daily demo sessions](https://github.com/NTConcepts/18f/tree/master/ASSETS/HCD) (via war room with GoToMeeting) during the sprint and received feedback on design, usability, and scope of the application, which in turn we tasked out in JIRA. 

#####CRITERIA D:

NT Concepts employed various human-centered/MVP design techniques to determine a) what users (federal health inspectors) wanted in the application, b) how we could technically answer those questions, and c) what would make the most business sense within the given timeline. We conducted short field research with “users”, and worked in a dedicated space as a team to translate the input into a rapid prototype. We started with [simple sketches and wireframes](https://github.com/NTConcepts/18f/blob/master/ASSETS/PROTOTYPE/OpenFDA_sketch.jpg), and quickly stood up a [clickable prototype](https://github.com/NTConcepts/18f/tree/master/ASSETS/HCD). We held daily [scrum and demo meetings](https://github.com/NTConcepts/18f/tree/master/ASSETS/HCD) for feedback on the UI/UX, [tested often](https://github.com/NTConcepts/18f/tree/master/ASSETS/AGILE%20REPORTS/TEST%20SESSIONS), and leveraged this iterative process to continuously inform the app interface and functionality.

#####CRITERIA E:

We created a simple [style guide](https://github.com/NTConcepts/18f/tree/master/ASSETS/STYLEGUIDE) and utilized popular open source pattern libraries such a Bootstrap CSS in the application, as evidenced by the code and commit history in the repository. 

#####CRITERIA F:

The NT Concepts team performed both usability testing and user acceptance testing. Test criteria were derived from acceptance criteria specified in user stories, and managed in JIRA with the Capture module for [direct team feedback](https://github.com/NTConcepts/18f/tree/master/ASSETS/AGILE%20REPORTS/TEST%20SESSIONS). Extensive accessibility testing was also performed to ensure 508 compliance. Exploratory UAT was conducted with a sample user group outside of the development team to drive any UI or functional modifications.

#####CRITERIA G:
Daily scrum stand-up meetings were held during the sprint and feedback on both usability and scope of the prototype application and resulted in the creation of new user stories and/or tasks assigned to user stories as evidenced through screenshots of our [JIRA sprint and scrum boards](https://github.com/NTConcepts/18f/tree/master/ASSETS/AGILE%20REPORTS/SPRINTS).


#####CRITERIA H:
The RECALL.IT framework was built using the AngularJS framework, which allowed our team to work with a flexible, extensible environment that supports a multitude of open source technologies. The app is designed “mobile first”, and utilizes Bootstrap for Angular and Bootstrap CSS to ensure a responsive experience regardless of device, browser, or platform. A custom open source JavaScript (Minerva) was used to handle the advanced, responsive dashboard interface within the AngularJS framework. A full listing of technologies utilized is located in [licensing.md](https://github.com/NTConcepts/18f/blob/master/licensing.md) in the repository.

#####CRITERIA I:

NT Concepts utilized modern, open-source technologies to develop RECALL.IT,  including AngularJS, LESS, D3, Bootstrap, php, and JQuery, as evidenced by the [code](https://github.com/NTConcepts/18f/tree/master/js) and commit history in the repository. 

#####CRITERIA J:

NT Concepts deployed the RECALL.IT app on IaaS provider [Amazon Web Services (AWS)](https://github.com/NTConcepts/18f/tree/master/ASSETS/AWS), specifically the Amazon Elastic Compute Cloud (Amazon EC2) web service. 

#####CRITERIA K:

NT Concepts utilized Jasmine, a behavior-driven development framework, for [testing JavaScript code](https://github.com/NTConcepts/18f/blob/master/tests/SpecRunner.html) [(screenshot)](https://github.com/NTConcepts/18f/blob/master/ASSETS/AGILE%20REPORTS/TEST%20SESSIONS/Jasmine%20Unit%20Test%202015-07-07%20at%207.34.23%20AM.png). Automated unit tests were written to cover all major JavaScript modules. Examples include testing external web service calls and the application bootstrapping process. BrowserStack was utilized for [desktop and mobile browser simulation testing](https://github.com/NTConcepts/18f/blob/master/ASSETS/AGILE%20REPORTS/TEST%20SESSIONS/), as well as actual physical device testing and reporting.

#####CRITERIA L:

NT Concepts used a [Github webhook](https://github.com/NTConcepts/18f/settings/hooks) [(screenshot of Github webhook for AWS)](https://github.com/NTConcepts/18f/tree/master/ASSETS/AWS) to continuously deploy our code to Amazon EC2. We also started to set up testing via AWS shell scripts to run after deployment completion.

#####CRITERIA M:
GitHub was used as a central repository for source code and platform for other collaborative needs. Branches were created to separate and assign individual tasks, and merged frequently to avoid major commit conflicts. An [install.md](https://github.com/NTConcepts/18f/blob/master/Install.md) was created to aid in initial project setup.

#####CRITERIA N:
Various methods of continuous monitoring were set up for the RECALL.IT project: JIRA was used to report bug/issue assignments and updates via email; GitHub a) alerted team members of code commits through repository subscription emails, and b) kicked off AWS autodeployment calls.

#####CRITERIA O:
RECALL.IT is deployed in Amazon EC2 Container Service which is runs faster and highly scalable and easy to manage Docker containers. The software for RECALL.IT is deployed in AWS WIndows EC2 Instance and is Code Deploy is setup and configured to auto deploy code when a commit is made to the master branch of the repository in GitHub.

#####CRITERIA P:
Simple instructions for installing on a php-based web server can be found in the [install.md](https://github.com/NTConcepts/18f/blob/master/Install.md) located on GitHub.

#####CRITERIA Q:
For RECALL.IT, we committed to collaborate in the open and publish our prototype publicly, and offer users a mechanism to report bugs and issues, and be responsive to these reports. RECALL.IT is publically accessible on the internet. Our GitHub repository (code, components) is publically accessible. The underlying platforms, libraries, and plugins are openly licensed and free of charge. Full [licensing information](https://github.com/NTConcepts/18f/blob/master/licensing.md) is attributed in our repository.


