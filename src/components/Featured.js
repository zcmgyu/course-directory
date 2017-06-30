import React from 'react';

// const Featured = ({match}) => {
//   let name = match.params.name
//   let topic = match.params.topic
//   return (
//     <div className="main-content">
//       <h2>{name}</h2>
//       <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
//     </div>
//   );
// }

// export default Featured;

export default class Featured extends React.Component {
  
  render() {
    // const { match } = this.props
    // let {name, topic} = match.params
    let {name, topic} = this.props.match.params
    return (
      <div className="main-content">
        <h2>{name}</h2>
        <p>Introducing <strong></strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
      </div>
      )
  }
}