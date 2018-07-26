const projects = [

    {

        title: "This Website!",
        image: "portfolio.png",
        description: "My portfolio was created to show off any other projects I've done. Each project card is populated from a JSON file which is iterated over by using a map. This was the first time I've animated an SVG image which was used at the top of the website.",
        skills: ['HTML5', 'CSS3', 'Sass', 'Webpack', 'ReactJS', 'NodeJS'],
        demo: "/",
        code: "https://github.com/connordowson/connor-dowson-portfolio"

    },

    {

        title: "The Swamp Donkeys Website",
        image: "tsd-image1.jpg",
        description: "A website created for an esports team me and my friends created that we take too seriously. This was the first time using Hugo to create a static site, and was also my first experience with buying a domain, and using FTP to upload content to the webserver, which was a steep learning curve. I also made the CSS for the site work mobile first so that mobile devices have less processing to do than desktops and tablets.",
        skills: ['HTML5', 'CSS3', 'Sass', 'Hugo', 'Javascript'],
        demo: "http://www.theswampdonkeys.com/",
        code: "https://github.com/connordowson/the-swamp-donkeys-2018"

    },

    {

        title: "Music Wall of Fame",
        image: "wall-of-fame.png",
        description: "A project I created using the Discogs API. A NodeJS script downloads each album cover by using its ID, and then they are all displayed on the page. I learnt a lot about using Maps and Keys creating this project.",
        skills: ['HTML5', 'CSS3', 'Sass', 'Webpack', 'ReactJS', 'NodeJS'],
        demo: "http://www.connordowson.com/walloffame",
        code: "https://github.com/connordowson/music-wall-of-fame"

    },

    {

        title: "Pokédex",
        image: "pokedex.jpg",
        description: "A Pokédex for the first 151 Pokémon (Kanto) made using React. The page updates as you use the search bar, which was done using state changes in React.",
        skills: ['HTML5', 'CSS3', 'Sass', 'Webpack', 'ReactJS'],
        demo: "http://www.connordowson.com/pokedex",
        code: "https://github.com/connordowson/pokedex"

    }

];

export default projects;