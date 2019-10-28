# [Tadpole](https://infinite-retreat-33183.herokuapp.com/)
![tadpole](https://media.giphy.com/media/3o6fJh1uKQDy3eUQec/giphy.gif)

## Project Overview
 Interactive personal branding website that generates branding templates based on word selections. 

## Project Description
This web application aims to help people design their personal brand by generating templates for their branding statement based on keywords.

Sometimes we can't find the right words to describe ourselves. Brand.me is an app that helps solve problems for those who want to create a personal branding statement and need a little boost with word recommendations. Brand.me is a cross-platform development, this app runs on Android and IOS free to use. Users will be able to contribute, vote and comment on suggestions. One of the main features of the app lays within the logic functionality. We have tried and tested our algorithms and continue to find ways to imrove the app, that aims to help make your personal branding statement seamless. Our main feature is the ability to take in user input and apply logic that will build recommended words you may use, add to your list. These are the key takeaways from Brand.me application and we hope you enjoy and grow along with it. The home page takes a users name and allows the user to select key words. This produces the top 10 personal branding templates based on words chosen. The user can create their own templates as well as edit existing templates which are added to the public database.

## Wireframes
![homepage](https://res.cloudinary.com/drdk7a56d/image/upload/v1571673495/Project%203/Screen_Shot_2019-10-21_at_11.56.29_AM_esgttu.png)
![page](https://res.cloudinary.com/drdk7a56d/image/upload/v1571673498/Project%203/Screen_Shot_2019-10-21_at_11.56.37_AM_t12qou.png)
![HomePage](https://res.cloudinary.com/dqjtq6a2x/image/upload/v1571498674/WireFrame/IMG_20191019_110652_hi8vea.jpg)

Top 4 templates page 
![top_4](https://res.cloudinary.com/dqjtq6a2x/image/upload/v1571498675/WireFrame/IMG_20191019_110656_aumh3e.jpg)

Create Template page
![create_table](https://res.cloudinary.com/dqjtq6a2x/image/upload/v1571498675/WireFrame/IMG_20191019_110700_jrihrs.jpg)

#### MVP 

 - Word selection for generation of personal brand templates.
 - Favorites which stores favorite templates.
 - Create Template section where user can build their own template and save to 	   their favorites. 
 - Up and down vote system that decides top templates.
 - Top Templates section which displays top templates based on votes.
 - Ability to edit suggested templates and save.

#### PostMVP 

- Comments section where users can make comments on templates. 
- Local storage for remembering favorites, votes and comments.
- Additional section on Homepage for user to enter industry and state which will   appear at the bottom of templates they create or edit.

## Priority Matrix

![matrix1](https://res.cloudinary.com/dqjtq6a2x/image/upload/v1571582466/Priority%20Matrix/IMG_20191018_153601_mehtgh.jpg)

![matrix](https://res.cloudinary.com/dqjtq6a2x/image/upload/v1571582467/Priority%20Matrix/IMG_20191018_153554_zddojk.jpg)

## ERD Diagram
![joinorm](https://res.cloudinary.com/drdk7a56d/image/upload/v1571678999/Project%203/Screen_Shot_2019-10-21_at_1.28.25_PM_ox8cbp.png)
![orm](https://res.cloudinary.com/drdk7a56d/image/upload/v1571663027/Project%203/IMG_3627_l8evo6.heic)

## React Component Hierarchy

![components](https://res.cloudinary.com/drdk7a56d/image/upload/v1571679565/Project%203/20191021_133757_b1psmh.jpg)



## Functional Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App	 | This will import dependencies, middleware   |
| Nav | This will render the header include the nav | 
| Footer | This will render the footer include the nav |
| Home | This will render the Home page	all buttons to lists and create lists|
| Create Template | This adds keywords to the database and lets you select item from list |
| Favorites | Functions here will add  items to list of favorites, remove items and render items|
| Delete | This will destroy  list items and return a success or throw an error|
|Edit | This will put and render the change in the views.


## Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project WireFrame | M | 4hrs | 3 | 3 |
| Building ORM | M | 2hrs | 1 | 1 |
| Building Server | H | 2hrs | 3 | 3 |
| Adding Backend Routes | H | 4hrs| 4 | 4 |
| Adding Controllers | H | 4hrs | 2 | 2 |
| Building Models | H | 4hrs| 4 | 4 |
| Building Join Tables | H | 4 hrs | 5 | 5 |
| Creating User Stories | M | 2.5hrs | 1 | 1 |
| Building Basic Frontend Structure | H | 4hrs | 3 | 3 | 
| Building Froms | H | 3hrs | 4 | 4 |
| Creating/Searching Seed Data | M | 2.5hrs | 1 | 1 |
| Creating View Files for Routes | M | 4hrs | 2 | 2 |
| Styling | H | 4hrs | 4 | 4 |
| Desktop Design | M | 3hrs | 2 | 2 | 
| Mobile Design | H | 4hrs | 4 | 4 |
| Git conflicts | H | 3.5hrs | 1 | 1 |
| Debugging | H | 4hrs | 06 | 6 |
| Unkown setbacks| H | 4hrs | 5 | 5 |
| Total | H | 60hrs| 55 | 55 |


## Additional Libraries
Axios, React Router, Font-awesome

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
