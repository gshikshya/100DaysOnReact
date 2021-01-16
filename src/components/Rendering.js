import React, { Component } from 'react'

 class Rendering extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        message : false
     }
   }
   
  // render() {
  //   if (this.state.message) {
  //     return (
  //     <div> Conditional Rendering Met </div>
  //     ) 
  //     } else {
    
  //     return <div>Wrong Command</div>
  //     }
  //   }

  // render ()  {
  //   let Message 
  //   if (this.state.message ) {
  //     Message = <div> Conditional Rendering Met </div>
  //   }else {
  //     Message = <div> Wrong Command </div>
  //   }

  //   return (
  //     <div>{Message} </div>
  //   )
  // }


  // render () {
  //   return (
  //     this.state.message  ?
  //     <div> Conditional Rendering Met </div> :
  //     <div> wrong Command </div>
  //   )
  // }

  render (){
    return  this.state.message && <div>Conditional Renderinf Met </div>
  }

}

export default Rendering
