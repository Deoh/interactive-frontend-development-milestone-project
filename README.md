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

The website was tested using `Google Chrome Dev tools` for various devices sizes to check scalability across different devicees and screen size.

Through manual testing both desktop and mobile:

- The navbar should scales correctly across different browsers and screen sizes sticking to the top as the user scroll the page and the navbar brand link works correctly.
- The website title should scales correctly across different screen sizes.
- The year selector when clicked should filters the dataset as intended. 
- The charts should all be linked together. Clicking on each graph should provide an addtional level of data filtering.

### HTML, CSS & JavaScript code
- HTML and CSS validation via [w3.org](https://www.w3.org/).
- JavaScript validation via [jshint.com](https://jshint.com/).

### Certain issues discovered when navigating the website were:

- The size of the year selector dropdown is unexpectedly long and will need to be fixed.
- The charts do not scale correctly across different screen sizes. 
- The stacked chart doesn't display the information accuratly. more work needs to be done on the custom reducer.

## Deployment

This project is deployed though GitHub pages.
- From the GitHub page click on the 'Settings' link,  and scroll down to the GitHub Pages section.
- click the 'source' tab and select 'Master Branch'. a link will then be provide.

## Credits

### Content
- The CSV data for this project was copied from [kaggle.com](https://www.kaggle.com/russellyates88/suicide-rates-overview-1985-to-2016)

### Media
- The photos used in this site were obtained from [pngriver.com](https://pngriver.com/)

### Acknowledgements

- I received inspiration for this project from code institute 'Data visualization mini project'