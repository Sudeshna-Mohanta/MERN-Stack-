## React Hooks :

- React hooks are functions that lets you use state and other features of a react components.
-They enable you to manage state and handle side-effects. 

``` js
function evenOdd (num){
  if(num%2!=0){
    return "odd";
  } else {
    return "even";
  }
}
evenOdd(5);  //call
````

- Hooks are functions that starts with `use` keyword.
-`useState` is a hook that allows you to add state to functional components.
- `useEffect`












## UseState Hook :
- useState is a hook that lets you add react state to functional components.
-Syntax: const [name , setName] = useState("Sudeshna");
- const [variable/state , function: to change the value] = useState("")
- By the help of function we can change/manipulate the value.

## Useref Hook :

- useRef is a hook that allows you to persist values between renders.
-Unlike state , changing a useref value does not cause a re-render.
-useref returns a mutuable ref objects with a .current property.
-Syntax : const ref = useRef(null)

