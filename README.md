# js-project
Background
	The World’s many languages are not static. They change from generation to generation for a variety of reasons; and rarely in two places do they change in the same way. After many generations, two groups of people who previously spoke the same language may be unable to understand each other, and in this way one language becomes many. Modern linguistics views languages as connected through these genetic links. Through the comparative method, ancestor languages that are poorly attested, but known to have existed, have been reconstructed by linguists. Now, languages can be taxonified based on their ancestors similar to animals.
	The purpose of this website is to act as an interactive family tree for languages. This website will also attempt to give the user a sense of how many people speak the languages within a given family through use of a treemap. Finally, this website hopes to be able to provide the user basic information about each language or family.

Functionality
Upon loading this website, users will be able to:

    -View a visual representation of many top-level language families upon loading the site.
    -Utilize a search bar to find a specific node in the tree, representing a language/family.
    -Click a language family that is represented visually in order to move to a new node on the tree.
    -Return to a higher node once leaving the root node.

	When the user has selected a language family, language, or dialect, the user should then be able to:

    -Click a descendent of the language.
    -Read a description of the language or the family.
    -If the language is still spoken the user should be able to:
    -Watch or listen to a sample of the spoken language
    -(If available) translate text to or from the language






Wireframes


The search bar will allow the user to select an individual language or family, both within or without the current family.
The descendants will appear in the treemap sized based on their number of speakers.
Extinct descendants; or those with too few speakers to make a clickable box on the treemap will appear in a list immediately below the descendants
If one exists, a sample of the spoken language from WikiTongues will appear immediately below the descendants.
The 1-2 paragraphs from any corresponding wikipedia article will appear below that.
If this language is one of the 133 languages supported by Google Translate, a translator will appear.



Technology
Langtree will be implemented using:
    -D3 to visualize data
    -Webpack to bundle Javascript code
    -npm
    -Glottolog API will provide basic information about the language
    -Wikipedia API will provide a description of each language
    -Google Translate API will provide translators where applicable


Implementation Timeline
    -Weekend - Setup project. Ensure functionality of webpack, canvas. Begin working with the APIs
    -Monday - Implement basic site logic. Connect the site to the APIs.
    -Tuesday - Wrap up basic site logic. Begin focus on site aesthetics.
    -Wednesday - Design the user interface, ensure that everything works as intended.
    -Thursday - Polish site. Time permitting, begin implementing bonus features. 
    Bonus Features
	There are a few things that may be implemented later on that are not fundamental to achieving the goals of this project. These include:
        -Light/Dark mode
        -Animations
        -Allow a user to view a “map” displaying a more traditional tree structure.
