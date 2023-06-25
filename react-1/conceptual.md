### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a popular, powerful front-end framework that was developed by and sponsered by Facebook. It makes it easy to make reusable "view componenets" and oftentimes make it easier to build modular applications. React is a javaScript library that aims to allow developers to create fast user interfaces for websites and applications easily.


- What is Babel?
    Babel is a powerful and widely used JavaScript complier that allows developers to write modern JavaScript code and transpile it into a version that can run in all environemnts incluidng older browsers. JSX inst legal JavaScript and Babel takes JSX and transpiles it into JavaScript. 



- What is JSX?
    JSX inst legal JavaScript and Babel takes JSX and transpiles it into JavaScript. JSX is like HTML that is embedded in JavaScript. 



- How is a Component created in React?
    Componenets are building blocks of React. A component is independent and reuable bits of code and serve the same purpose as a JavaScript function but work in isolation and return JSX react element. Components are functions that know how to render themselves into HTML.



- What are some difference between state and props?
    Props are for configuring your component(data passed to a component or found via defaults), they are immuatable and can be strings. State is data specific to a component and can change. 
    



- What does "downward data flow" refer to in React?
    downward data flow is the idea that parent components pass data down to their children via props. React uses unidirectional data flow. The data from the parent is known as props. You can only transfer data from parent to child and not vice versa. This means that the child components cannot update or modify the data on their own, making sure that a clean data flow architecture is followed.



- What is a controlled component?
    A controlled component is a component that is controleld by react state while an uncontrolled component is a component that maintains its own internal state.  A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component.



- What is an uncontrolled component?
    uncontrolled components are components that react is not in control of the form state. In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM



- What is the purpose of the `key` prop when rendering a list of components?
    React uses the key prop to create a relationship between the component and the DOM element. the library uses this relationship to determine wheather or not the component should be re-rendered. React's key prop gives you the ability to control component instances.



- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around



- Describe useEffect.  What use cases is it used for in React components?
    useEffect is React's built in hook for "side effects". Fetching data, starting a timer, and manually changing the DOM are all side effects. each render has its own side effects and sometiems these side effects require clean-up(clearing a timeout, closing a connection). useEffect:
        - runs after first render
        - will run after all rerenders by default
        - accepts a callback function as its first argument 
        - returns undefined or a fucntion (if you return a function, the funciton will be run before the componenet unmounts or before teh effect runs again )



- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is another bulit in hook and it returns a mutable object with a key of current, whose value is equal to the intial value passed into the hook. The object persists across renders (so it’s like a local variable, but independent of state) and mutating the object does not trigger a re-render.




- When would you use a ref? When wouldn't you use one?
    common appplications of useRef is 1. accessing an underlying DOM element and 2. setting up/clearing timers. Sometimes, you need to access an HTMLElement to make use of a Web API or to integrate some other JavaScript library -this is a great time to use a ref!
    
    do not use refs to access the DOM and make changes such as toggle classes or setting text.
    
    

- What is a custom hook in React? When would you want to write one?
    Custom hooks are js functions that are used typically use bulit in hooks and can be reuable across diff components. 
