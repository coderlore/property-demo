# Affording Housing Listing
A single page application using React and Typescript to display the listing of affordable properties.

![Screenshot of website](https://res.cloudinary.com/dyz5kerw5/image/upload/v1673041002/Screen_Shot_2023-01-06_at_10.11.02_AM_q2csfi.png)

## How It's Made:

**Tech used:** React and Typescript

Create React App with Typescript was used to setup the project. The dataset of the listings were provided as a json file and the json-loader package was installed. This allowed me to create a demo REST API. 

## Future Optimizations

Filtering the dataset
- Filter by property name. I have the search bar component setup, but need to figure out a way to get the data back to the parent. I also would have liked for the user's input to be case insensitive. 
- Filter by unit amentiy. This would have required the manipultion of the current result by applying filters, then return the filtered result.
- Filter by min and max occupancy range. Again, this would have required the manipulation of the current result by applying filters, then return the filtered result. 

Responsive Design and Accessibility
- Create a web page that adjusts for different screensizes. 
- Follow standards and best practices. Some things to check are text size, color pallete used, etc.

## Lessons Learned:

1. The main thing I learned was to keep things simple. I initially started building the backend thinking I would follow the MVC architechture. While that would have worked, installing and untilizing json server made things a lot easier. 
2. Going through the json server doc, I found there were different ways to query the data and found one that could sort the data alphabetically. 
3. I learned how to use react pagination library to display the property listings and by calculating the pages, the correct amount of pages were listed.
