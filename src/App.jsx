import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/* 
AS AN employee:

1.I WANT to keep a count of all the tickets I have completed
SO THAT I can manage my workflow

2.I WANT to be able to track the number of tickets my coworkers have completed
SO THAT I can compare the number of tickets we complete

Task:
 1.To create a ticket tracking system. 
 2.Each employee is on the data file and should be able to increment/decrement their ticket count.


Requirements:

1. Should be built in React
2. Each component should manage its own state
3. The components should be generated using a map()

Plan:

− Create the components you think you will need (at least an employee component, possibly more)
− Map over the data file below to create the components
− Pass data into them via props
− Use State to handle the increment and decrement of tickets
− Style it however you like, but don’t leave it blank.


-----------------------------------
const Button = (props) => {
  let className = "button ";

  props.isPrimary is a boolean, true or false

  if (props.isSecondary === true) {
    className += "button--secondary";
  } else {
    className += "button--primary";
  }

  return <button className={className}>{props.buttonText}</button>;
};
--------------------------------------------










class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
    this.state = { curValue: 1 }
  }
  
  changeValue = ({curValue, newValue}) => {
    this.setState({ curValue: newValue !== 100 ? newValue : 99 })
  }
  
  handleValueChange = (newValue, isField) => {
    const {
      props: { id, onChange },
      state: {
        curValue
      }
    } = this

    newValue = parseInt(newValue, 10)

    if (!newValue) {
      if (isField) {
        newValue = ''
      } else {
        newValue = 1
      }
    }
    if (newValue < 0) {
      newValue = 1
    }
    if (!isField) {      
      this.inputRef.current.style.transform = newValue > curValue ? 'translateY(-100%)' : 'translateY(100%)'
      this.inputRef.current.style.opacity = 0
       
    setTimeout(() => {
        this.inputRef.current.style.transitionDuration = '0s'
        this.inputRef.current.style.transform = newValue > curValue ? 'translateY(100%)' : 'translateY(-100%)'
        this.inputRef.current.style.opacity = 0
        this.changeValue({ curValue, newValue })
        
        setTimeout(() => {
          this.inputRef.current.style.transitionDuration = '0.3s'
          this.inputRef.current.style.transform = 'translateY(0)'
          this.inputRef.current.style.opacity = 1
        }, 20)
      }, 250)
    } else {
      this.changeValue({ curValue, newValue })
    }    
  }

  render () {
    const {
      state: {
        curValue
      }
    } = this
    
    return (
      <div {...{ className: 'counter' }}>
        <button
          {...{
            className: 'button',
            onClick: () => { this.handleValueChange(curValue - 1) },
            title: '-1'
          }}
        >
          −
        </button>
        <div {...{ className: 'input-wrapper' }}>
          <input
          {...{
            className: 'input',
            maxlength: 2,
            onChange: e => {
              e.preventDefault()
              this.handleValueChange(e.target.value, true)
            },
            ref: this.inputRef,
            type: 'text',
            value: curValue
          }} 
        />
        </div>
        <button
          {...{
            className: 'button',
            onClick: () => { this.handleValueChange(curValue + 1) },
            title: '+1'
          }}
        >
          +
        </button>
      </div>
    )
  }
.input-wrapper{
  width: 4rem;
  height: 4rem;
  border-radius: 0.6rem/0.8rem;
  background-color: $cAccent;
  overflow: hidden;
  box-shadow:
    inset 0 0 0.8rem 0.1rem rgba(darken($cAccent, 20%), 0.2),
    0 20px 30px -10px rgba(darken($cAccent, 20%), 0.26);
}

.input{
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  text-align: center;
  color: #fff;
  font-weight: 900;
  font-size: 2rem;
  outline: none;
  transition-property: transform, opacity;
  text-transform: linear;
  transition-duration: 0.25s;
}

.button{
  background: none;
  border: none;
  padding: 0.8rem;
  color: rgba($cAccent, 0.35);
  font-size: 1.6rem;
  outline: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  
  &:hover{
    color: $cAccent; 
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));





*/
