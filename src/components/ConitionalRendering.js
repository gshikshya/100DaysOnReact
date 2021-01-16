
import React, { Component } from 'react'

 class ConitionalRendering extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn :true
     }
   }
   
   // Using If Else

  // render() {
  //     if (this.state.isLoggedIn){
  //       return (
  //          <div> Welcome Shikshya</div>
  //       )
  //     }else {
  //       return <div>Welcome Guest </div>
  //     }
   
  // }



  // using element variable

  // render () {
  //   let message 
  //   if (this.state.isLoggedIn){
  //     message = <div> Welcome Shikshya </div>
  //   }else {
  //     message = <div>Welcome Guest</div>
  //   }
  //   return (
  //     <div>
  //     {message}
  //     </div>
  //   )
  // }

  // using ternanry conditional operator
  
  // render () {
  // return (
  //   this.state.isLoggedIn ?
  //   <div>Welcome Shikshya</div> :
  //   <div> Welcome Guest </div>
  //   )
  // }


  // using Short circuit operator
  render() {

   return this.state.isLoggedIn && <div>Welome Shikshya </div>

  }






}


export default ConitionalRendering
