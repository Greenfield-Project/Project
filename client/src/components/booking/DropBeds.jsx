import React from 'react'
import {DropItems} from './DropItems.jsx'
import Downshift from "downshift";

class DropBeds extends React.Component{
constructor(props){
super(props)
DropItems=this.props.DropItems

this.state={
  selectedBed=""
}
this.onChange=this.onChange.bind(this)
}
//change the selected bed to the number of beds in the BedItems.jsx
onChange(selectedBed){
  this.setState({selectedBed=this.selectedBed.DropItems.bed})
}


  render (){
    return(
      <Downshift
      onChange={this.onChange}
      selectedItem={this.state.selectedBed}
      itemToString={beds => (beds ? DropItems.bed : "")}>
         {({
          isOpen,
          getToggleButtonProps,
          getItemProps,
          highlightedIndex,
          selectedItem: dsSelectedItem,
          getLabelProps
        })=>(
          <div>
             <label
              style={{ marginTop: "1rem", display: "block" }}
              {...getLabelProps()}>
              Select the number of beds
            </label>{" "}
            <br />
            <button className="dropdown-button" {...getToggleButtonProps()}>
              {this.state.selectedBed !== ""
                ? this.state.selectedBed
                : "Select a Bed ..."}
            </button>
            <div style={{ position: "relative" }}>
              {isOpen ? (
                <div className="downshift-dropdown">
                  {this.DropItems.map((item, index) => (
                    <div
                      className="dropdown-item"
                      {...getItemProps({ key: index, index, item })}
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: dsSelectedItem === item ? "bold" : "normal"
                      }}
                    >
                      {item.bed}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>


          
    </div>)
        
        
        
        
        
        }
      </Downshift>
  );
         

}
 }  
export default DropBeds