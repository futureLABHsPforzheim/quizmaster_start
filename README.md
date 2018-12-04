To start clone this repository by using git clone https://github.com/futureLABHsPforzheim/quizmaster_start in your command line or terminal. Then use npm install in the cloned directory to instal the needed dependencies.

Some information and the exercise

Quizmaster-App
Your task will be to develop a smartphone app to play a quiz based on and about IoT technologies. Literally the idea is that the app can recognize iBeacon signals. The signals shall be used to query a web service for detail information about the signals. This may result in messages with questions, answers and checks of your answer selection. To receive a question an answer, you will have to find one of our iBeacons. Each iBeacon can  only trigger one web service request per question-answer tuple. The latter means that you will have to collect all answers for a single question by find-ing all iBeacons.
Thus, the functionality of our app will be rather simple: we will have many clients (your devices running the app you will have to develop) and web services which are utilized to respond to the IoT events issued by the iBeacons. The web services provide different operations to collect and pro-cess data:
-	 needed to register (you as a quiz player; with a unique username),
-	provide questions to your app, 
-	provide answers for each question (three answers may be collected for each question), and. 
-	to check your suggested answer.
To automate the requests between your frontend and the web service, we set up a network of four iBeacons within this room. Each iBeacon has its own configuration and sends out a BLE signal. 
To develop the frontend and make the app cross platform ready, we are going to use the Ionic framework. Therefore, we provided a base project on GitHub with basic structure that can be used for your extensions to complete the quizmaster app.
iBeacons
The provided iBeacons operate with the following configuration:
Name	Major	Minor	UUID	Range
MiniBeacon_52069	1	1	B9407F30-F5F8-466E-AFF9-25556B57FE6D	~ 2m
MiniBeacon_52078	2			
MiniBeacon_52080	3			
MiniBeacon_51923	4			

You will need this information to configure your app. The parameters above tell you how to listen and distinguish between the iBeacons. 

Task 1: Get iBeacon Data!
In the page home which is also given you need to scan for the iBeacons we suggest using the Ionic iBeacons plugin. Please follow the guide on https://ionicframework.com/docs/native/ibeacon/ to install the plugin and to find an example (how to use it). With the code given and your knowledge about iBeacon monitoring and sending HTTP requests, you will be able to further develop your app and retrieve question-answer tuples.
Task 2: Answer Check
Last but not least: Check if your suggested answer is correct. Implement a HTTP request to our web services to check whether a provided answer is right or not. Afterwards, increase or decrease your score.
Bonus task: High Score Page
If this was too easy for you, you may also create a high score page which displays all teams and their score. Remember to call a web service to get the high scores.
