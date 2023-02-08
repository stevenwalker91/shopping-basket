# Shopping Basket

Another project as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart) curriculum. The scope of this project was to create a shopping basket app where users could add items to the basket. 

See the [live demo here](https://stevenwalker91.github.io/shopping-basket/)



## What's new/what did I learn

This was my first time using react router and the react testing library to do unit testing. I felt on this one I really started to get to grip with React and using functional components. One of the areas I'm still not 100% is effective mocking of unit tests, as well as where to draw the line with testing across parent/children components. I suspect this will come with time and experience. 

This project has also made me reflect on when should a component become a 'shared' component. For example, I re-use the quantity toggle across the product area and the shopping basket, however, each of those areas have different functionality which means the component needs additional logic to handle being used across them. This is some more food for thought on future projects to really consider the use cases of components and whether it makes sense to reuse them or create a new one. Another opportunity to be explored is viability of perhaps re-using the visual part of the component but somehow abstracting some of the logic away from the component itself. Exposing myself to other well-established code bases should help with learning common design patterns and how this is usually done at scale.


## Other Comments

Given the primary objective of the project was react router and unit testing, I haven't focused too much on styling. For example, it's not particularly pretty or mobile responsive. I used a free API for the shop data, but the data quality isn't great, however it was the best I could do with free APIs that didn't require authentication.
