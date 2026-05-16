const { useState } = React;
 
export function ColorPicker (){ 
 const [color, setColor] = useState("#ffffff");

 const handleChange = e => {
  setColor(e.target.value)
 }

 return(
  <div id="color-picker-container"
        style={{backgroundColor: color,
                padding: "20px",
                borderRadius: "8px"}}
  > 
        <input id="color-input"
                type="color"
                value={color}
                onChange={handleChange}
          />      
  </div>
             
 );
}
