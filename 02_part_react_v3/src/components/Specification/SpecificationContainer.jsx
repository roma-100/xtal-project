//***********  SpecificationContainer.jsx ****** */
//http://localhost:3000/specification
import React from "react";

import { connect } from 'react-redux'
import {compose} from 'redux'
import SpecificationStep1 from './SpecificationStep1';
import {
    Navigate, // == redirect
    useLocation,
    useNavigate,
    useParams,
    useMatch,
  } from "react-router-dom";

class SpecificationContainer extends React.Component {
  componentDidMount() {
    console.log ('SpecificationContainer did mount')
    console.log ('filterFrequencyType: ' + this.props.gen_models.filterFrequencyType)
    console.log ('filterTemperatureRange: ' + this.props.gen_models.filterTemperatureRange)
    console.log ('generatorId: ' + this.props.router.params.generatorId) //Receive from Router <Link to={`/specification/${props.genModelId}`}>Specification</Link>
    //get data from store
    //debugger
  }
  render() {
    
    //debugger
    return (
      <div>
        
        <SpecificationStep1 {...this.props} 
            />
    </div>      
    );
  }
}

const mapStateToProps = (state) => {
    return {
      gen_models: state.gen_modelsReducer,
    };
  };
  
  const mapDispatchToProps = { 
/*     filterFrequencyTypeTC,
    filterInitTC,
    filterTemperatureRangeTC */
  
  }

/* 
const ComplexDialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsContainer) */

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      let match = useMatch("/profile/25714");
      return (
        <Component {...props} router={{ location, navigate, params, match }} />
      );
    }
  
    return ComponentWithRouterProp;
  }

  const ComplexSpecificationContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter //, withAuthRedirect
  )(SpecificationContainer);

export default ComplexSpecificationContainer