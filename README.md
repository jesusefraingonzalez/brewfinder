# project-one

<h3> Title: Brewfinder</h3>
<h5><i>With User Zipcode</i></h5>

<h3>Description:</h3> 


        Brewfinder is a simple application that returns a list of local breweries based on a user's zipcode.  When the application opens, the user is instructed to enter a zipcode to find local breweries.  A list of breweries within that zipcode appears below.  The brewery listings include name, type (see types list below), address, phone, and website (if available).  The data source for the brewery's listing information is Open Brewery DB (https://www.openbrewerydb.org/), a free dataset and API with public information on breweries, cideries, brewpubs, and bottleshops.  Additionally, an image from the brewery's website appears with the brewery listing to help familiarize the user with the brewery's brand, products, or experience.  The image is generated via LinkPreview, a free API that pulls images from external websites (https://my.linkpreview.net/). If an website is not available, a plcaeholder image is presented.
    In addition to basic location information, Brewfinder identifies each "type" of brewery fromt the options below. This is one of the more unique features of the application enabling brew-enthusiats to learn about small and niche operators in their area. 

    <h5><i>Brewery "type" options & definitions:</i></h5> 

            micro - Most craft breweries. For example, Samual Adams is still considered a micro brewery.
            nano - An extremely small brewery which typically only distributes locally.
            regional - A regional location of an expanded brewery. Ex. Sierra Nevada's Asheville, NC location.
            brewpub - A beer-focused restaurant or restaurant/bar with a brewery on-premise.
            large - A very large brewery. Likely not for visitors. Ex. Miller-Coors. (deprecated)
            planning - A brewery in planning or not yet opened to the public.
            bar - A bar. No brewery equipment on premise. (deprecated)
            contract - A brewery that uses another brewery's equipment.
            proprietor - Similar to contract brewing but refers more to a brewery incubator.
            closed - A location which has been closed.

    Within each brewery listing card, the user can click on a "favorite" button to add that brewery to a compiled list of favorites among all users.  In the upper right corner a "Favorite Breweries" button appears and will generate the complete corwdsourced list of favorites when clicked.

    Brewfinder utilizes JQuery to create html elements for each set of brewery information (name, type, address, phone, website); and, those information fields are appended to individual cards. Standard AJAX calls are used to populate the data and images needed for each listing. Styling for the cards and container elements of the application is provided by UIKit, which is the embedded CSS toolkit utilized by BrewFinder.  

    The live site is found out:  https://jesusefraingonzalez.github.io/brewfinder/


<h5>Partial Screenshots of User Experience</h5>

<p>
    <img src="/Brewfinder (1).png" width="350" height="350" />
</p>

               
<p> <img src="/Brewfinder.png" width="350" height="350" />
</p>

<p>
    <img src="/Brewfinder (2).png" width="350" height="350" />
</p>





<h3>Installation:</h3>
    To run the development environment, clone the repository found at  https://github.com/jesusefraingonzalez/project-one

    Access to the Open Brewery DB can be found in the documentation (https://www.openbrewerydb.org/documentation).  Neither sign up nor an APIKey is required to access the database.

    Access to LinkPreview requires the user to sign-up & generate a required API Key. https://my.linkpreview.net/  the user may generate multiple API Keys under the free plan.

    The scripts to JQuery and UIKit are incldued in the html file.

<h3>Usage:</h3>
    Use this application to find your local breweries and add to a crowd-sourced list of favorites!

<h3>Credits:</h3> Efrain Gonzalez @jesusefraingonzalez, Taylor Ceneviva @taylorceneviva,  Laura Parker @lparker78

<h3>License:</h3> MIT   <i>Please use this project for your own learning!</i> 
