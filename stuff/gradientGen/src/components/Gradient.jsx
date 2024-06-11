import React from "react"

export default function Gradient(){
    const [gradient, setGradient] = React.useState({
        color1: "#000000",
        color2: "#000000",
        angle: "0",
    });

    // const [color1, setColor1] = React.useState([]); don't need
    // const [color2, setColor2] = React.useState([]); b/c I have this
    // const [angle, setAngle] = React.useState([]); for lines 4-8
    // commit test

    function handleChange(event){
        const {name,value} = event.target;
        setGradient(prevGradient => ({
            ...prevGradient, 
            [name]:value,
   
    }))
}

    const gradientBackground = {
        backgroundImage: `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`

    }

return (
    <>
    <div className="form">
        <input type="color" 
        className="form--color"
        name="color1"
        value={gradient.color1}
        onChange={handleChange}/>

         <input type="color" 
        className="form--color"
        name="color2"
        value={gradient.color2}
        onChange={handleChange}/>

         <input type="number" 
        className="form--angle"
        name="angle"
        value={gradient.angle}
        onChange={handleChange}/>

        <textarea 
        className="form--result"
        name="gradient"
        readOnly
        value={
            `background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2});     -moz-background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2}); -webkit: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`
        }
        />

    </div>
    {/* <div style={{backgroundImage: "linear-gradient(red, yellow)"}}> 
        test
    </div> */}
    <div style={gradientBackground}> 
        Your Gradient Result
    </div>
    </>
)
}


// 2 colors saved to state and number input for direction
// preview box to show gradient
// textarea to show css code
// obj with 3 properties to one state :)^

// div that passes state into a variable that renders the background: return statement that returns the var div?

// return needs 4 divs with color preview, (form type color)color 1, (form)color 2, (form type number)angle, result

// event listeners = onChange for color forms to save value to state  


// notes from ash: 

// state for each:
{/* <input */}
// type="color"
// id="Color 1"
// value={gradient.colorOne}
// onChange={(e) =>
//     setGradient({ ...gradient, colorOne: e.target.value })
// }
// name="colorOne"
// ></input>

// export default function Gradient() {
// const [gradient, setGradient] = React.useState({
//     colorOne: "#000000"
//     colorTwo: "#000000",
//     angle: "0",
// })