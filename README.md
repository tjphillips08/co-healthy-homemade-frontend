
# codesRus - Visionary Productions - SEI-Project 3 - CO Healthy Homemade

![Logo](https://user-images.githubusercontent.com/100719674/191805176-1912b5e6-df8c-4c77-b881-fc931ebbc69e.PNG)

## Product Description:

### Colorado Healthy Homemade is a personal chef service based out of Denver. Their service provides the client with a chef who goes to their home, prepares a menu, shops for the food, and prepares and portions the meals for the week. At the moment, the chef leaves a paper write-up of the weeks meals supplemented with photos delivered by text. The client has requested that we produce a product that allows the chef to view the client, provide the weekly menu via a calendar, and upload photos for reference. The client will be able to login and view the menu (or previous menus) by week, view the photos, and leave feedback (likes, dietary restrictions, allergies). Any correspondence between chef and client would trigger an email notification.

## User Story:

### As a Client, I want to be able to visit a website that details the chef and services provided. Create an account to request a consultation. Once services begin, I will be able to view menu plans by week, review reference photos, and provide feedback directly to the chef. As a chef, I will be able to upload the weeks menu and reference photos by client and week. Also, receive feedback from the client about previous menu, menu items, dietary restrictions, portions, and allergies.  


## Wireframes:


![Home Page](https://user-images.githubusercontent.com/100719674/190689991-ef10bdea-b967-4251-850d-03789b8b2938.png)
### Our homepage will present a header with photos and logo, a navbar for quick navigation, and a login. New or potential clients will be redirected to the Create Account form.

![AfterLoginCalendar](https://user-images.githubusercontent.com/100719674/190690875-3c54b718-6d4d-4c52-afd5-5447d0c0151a.png)
### After Login, the client and chef will interface with a calendar. This depends heavily on the API we select. We want the Chef to be able to proceed by client and update a client-specific calendar. The client will be able to navigate by week to view specific menus

![Nonclient Consult](https://user-images.githubusercontent.com/100719674/190691422-78868c99-4ef9-49b3-a13d-354389c9158c.png)
### Potential clients will be able to submit info and request a consultation using a form.

![Chef Form](https://user-images.githubusercontent.com/100719674/190691580-4c40cca7-5c78-45ac-a78e-761f5a2e174a.png)
### The chef form will provide the weekly menu and allow reference photos to be uploaded.

![Client Form](https://user-images.githubusercontent.com/100719674/190691755-7ccbf2a5-28bd-4081-a68a-6f8340151f88.png)
### The client form will provide the weekly menu, reference photos, and a place. to leave feedback for the chef.


## Application Photos:


<img width="1592" alt="Home" src="https://user-images.githubusercontent.com/100719674/191814864-6933d730-1a61-4156-aaf0-15a834e855a5.png">
The home page greats the user with a carousel of images detailing the Chef's work. There are two icons for the Client or Chef to login





<img width="1551" alt="Login" src="https://user-images.githubusercontent.com/100719674/191815335-88d60556-b4a5-43cb-98a5-c92e54e041fe.png">
The login form allows the Client or Chef to access the site using their credentials.





<img width="1382" alt="Register" src="https://user-images.githubusercontent.com/100719674/191815521-284f5928-8675-4b36-b839-d8ff09d83736.png">
If the client has not yet registered, they are redirected to the registration page.





<img width="1223" alt="About Us" src="https://user-images.githubusercontent.com/100719674/191815813-5d06203b-a8df-4cc4-a9a7-74b7328a4bc0.png">
 The about us and services pages give the user information about the Chef and CO Healthy Homemade. Linking directly to the contact us page so they can correspond with the Chef directly.





<img width="799" alt="Create a Meal" src="https://user-images.githubusercontent.com/100719674/191816384-13f0f8f8-70fb-46c8-9c22-7736f71bf069.png">
The Chef can use this form to upload a photo from their device and provide the client with meal details, reference photos, made on date, and number of portions.





<img width="514" alt="Weekly" src="https://user-images.githubusercontent.com/100719674/191817018-0ecb0cb9-3984-427c-8290-a8b9b9dece0e.png">
When the meal is created, it is displayed below the form. This allows the Chef to review and edit any meal.





<img width="946" alt="Meal Detail" src="https://user-images.githubusercontent.com/100719674/191817244-64c4a173-6efc-4001-97a0-26851136704f.png">
By clicking on the meal, the Chef can edit or delete the menu item. This form also allows the client to assign a day to each meal and plan out their week. Additionally, the contact ensures speedy communication between the Client and Chef. Providing a means to give feedback, request a change, or inform of dietary changes.



## Technologies Use:
### Express RESTful routing was used in tandem with MongoDB and Heroku to allows our client to store information.
### REACT was used to establish pages, info and links. REACT components were used for the navbar and header to allow for modular use.
### Bootstrap was used to build our forms, photo carousel, and style our site.
### Knowledge of HTML, CSS, and JavaScript were key to implementing the aforementined technology.


## Challenging Code:


<img width="627" alt="REACT-Bootstrap" src="https://user-images.githubusercontent.com/100719674/191821272-ed4cf5ce-4dcb-46f7-8cdc-c60bd28b701d.png">
 REACT-Bootstrap as a whole was tricky to implement. The number of imports in the above photo closely paralles the documentation read to make it work.



![Cloudinary Import](https://user-images.githubusercontent.com/100719674/191821236-dc648774-91ac-49ed-828f-c1f9c5442d6f.png)
Implementing Cloudinary are tying the photo upload in to our form was a two day hurdle. We ran in to conflicts with Bootstrap and our database through this process.


![File Uploader](https://user-images.githubusercontent.com/100719674/191821665-35ae54ee-a869-482c-8b6e-4e87800ff1f0.png)
The file uploader was a key feature for our client. Again, the documentation and our peers were key to attaining the functionality our team desired.



## API:
### https://cloudinary.com/
### Cloudinary was implemented to give our client the ability to upload photos from their tablet, computer, or mobile device and attach it directly the form.
### https://www.emailjs.com/
### This was implemented to give the client and potential clients the ability to communicate directly with the Chef via the application.

## Component Hierarchy:

### https://miro.com/app/board/uXjVPXWQn0Y=/

## Link:
### co-healthy-homemade.netlify.app

## Stretch Goals:
### User Authorization: We have the forms in place just didn't have the time. We intend on getting this implemented in the next day or two.
### Client List: We have this built on the backend. Once User Auth. is in place, the Chef will be able to view a list of clients and assign meals to them specifically.
### Mobile application via REACT Native

## The Developement Team:
### Project Lead/ Front-end Dev: Taylor Phillips 
### https://www.linkedin.com/in/taylorjphillips90/
### Back-end Dev: Mackenzie Lamour 
### https://www.linkedin.com/in/mackenzie-lamour/
### Design Coordinator: John Paul Haddad 
### https://www.linkedin.com/in/john-paul-haddad/

## Shout-outs:
## This application was a team effort. We would like to thank the following developers for their selflessness and contributions. We couldn't have done it without you! 
## David Robles 
## https://www.linkedin.com/in/david-robles-dr/

## Victoria Vela
## https://www.linkedin.com/in/victoria-vela1/

## Juan Venegas
## https://www.linkedin.com/in/juan-venegas-600254163/

## Tim "The Wizard" Rathert
## https://www.linkedin.com/in/tim-rathert/

## Eric "Plead the Fith" Fithian
## https://www.linkedin.com/in/eric-fithian/

## Joshua Smith
## https://www.linkedin.com/in/jws-maker/

## To the rest of our General Assembly cohort, we have found friendship and inspiration in each one of you. We are eternally grateful!!  




