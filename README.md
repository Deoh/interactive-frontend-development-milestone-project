# Your Project's Name

An interactive data dashboard to visualize a dataset of global suicide rates between 1985 and 2015.
 
## UX
 
This site uses a number of dynamic charts using dc.js,in an attempt to bring to light the global suicide rates between different age groups and the gender balance between 1985 and 2015.

- the  user of this site would interact with the dynamic chart to tailor their information about suicide rates based on year, gender and age groups.

ADD WIREFRAME, MOCKUP

## Features

The site is split into a number of sections to represent different aspects of the dataset. Scrolling down the page, your first greeted with the option to filter subsequent charts based on the
year between 1985 to 2015.
Scrolling further down the page you'll find chart the will show you:
- The gender balance of suicides.
- The age distrbution.
- The number of suicide between the generations.
- The gender distrbution between the generations.
- The correlation suicide rates per year.

### Features Left to Implement
- Add a number display showing the gender balance as a percentage value. 
- Add a Global heat map to show the suicide rates between countries.

## Technologies Used

- [HTML](https://html.com)

- CSS

- [Javascript](https://www.javascript.com)
    - Coding language used in the development of the dynamic charts

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- Crossfilter.js
    - javascript Librery.

- [D3.js](https://d3js.org/)
    - A JavaScript library for manipulating documents based on data. This helps you bring data to life using HTML, SVG, and CSS. 

- DC.js
    - A dimensional charting javascript library.
- [Bootswatch](https://bootswatch.com)
    - Website themes based on bootstrap.
    
- [Bootstrap](https://getbootstrap.com)
    - The project uses **Bootstrap**, a front-end component libraryto to help build a responsive, mobile-first website.

- [Google Fonts](https://fonts.google.com)
    -  The project uses **Google Fonts** for the font styling of the website.
## Testing

Through manual testing:

- The navbar should scales correctly across different browsers and screen sizes sticking to the top as the user scroll the page and the navbar brand link works correctly.
- The website title should scales correctly across different screen sizes.
- The year selector when clicked should filters the dataset as intended. 
- The charts should all be linked together. Clicking on each graph should provide an addtional level of data filtering.

### Certain issues discovered when navigating the website were:

- The size of the year selector dropdown is unexpectedly long and will need to be fixed.
- The charts do not scale correctly across different screen sizes.
- stacked chart doesn't display the information accuratly. more work needs to be done on the custom reducer.


In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from [pngriver.com](https://pngriver.com/)

### Acknowledgements

- I received inspiration for this project from X