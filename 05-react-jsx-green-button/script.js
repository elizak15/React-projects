const App = ({initialButtonText, addClassName }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(addClassName);

  const onButtonClick = () => {
    setButtonText("Hello from React");
    setClassesList("green-btn");
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me please" addClassName="" />);


// const App = (props) => {
//   console.log(props)
//   console.log("Called");
//   const [buttonText, setButtonText] = React.useState(props.initialButtonText);
//   const [classesList, setClassesList] = React.useState(props.addClassName);

//   const onButtonClick = () => {
//     setButtonText(`Hello from React, ${Math.random()}`);
//     setClassesList("green-btn");
//   };

//   return (
//     <div className="app">
//       <button className={classesList} onClick={onButtonClick}>
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// const container = document.getElementById("app");
// const root = ReactDOM.createRoot(container);
// root.render(<App initialButtonText="Click me please" addClassName="" />);