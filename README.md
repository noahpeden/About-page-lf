This project is a weather app made for DagonIT using the Open Weather Map API, create react app, and Firebase as a quick, prototyping database. 

**Live URL:** [https://dagon-weather.surge.sh](https://dagon-weather.surge.sh)

There are several **main features**.

1. User can search by city.
2. Weather will be displayed by current temperature, description of the weather, what time it was searched at, and the name of the city where the weather is.
3. The user can also use the Your Location button to find the weather for their location. The disadvantage is it takes longer to search these paramaters than by city name. However there is a loading indicator for this feature.
4. The user can search a random US city.
5. The user can look at all past searches, including other users' searches in the Past Searches page. In future iterations I could easily add in authorization so that users can only see what they personally searched.
6. There are six shallow passing tests utilizing enzyme and jest.


**A couple of notes.** I utilized a stage-2 proposal called transform-class-properties because it cuts down on quite a bit of boilerplate for React including not needing a constructor, super, or `this.function = this.function.bind(this)`.  With transform-class-properties you can just declare your functions like `function = () => {}` and it implicitly binds the function to this. Also initial state can be declared without `this.state = {myState: ''}`, it's now just `state = {myState: ''}`

I also used styled-components because I like the idea of being able to dynamically change the styling of components within my JS files. It also cuts down on having to search through a bunch of Sass or CSS files to find which one styles a certain component. I know that there's a small performance hit, but with such a small web-app like this it doesn't really matter.

Finally I tried to utilize git workflow with feature branches and pull requests to the master branch.

