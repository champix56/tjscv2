import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import ImageFlowLayout from '../ImageFlowLayout/ImageFlowLayout';
import InputText from '../InputText/InputText';
const initialState={
  meme:{image:{},titre:'',texts:[]},
  images:[]
};
class MemeForm extends Component {
  constructor(props){
    super(props);
    this.state=initialState;
  }
  componentDidMount=()=>{
    fetch('http://localhost:780/images').then((responseStream=>responseStream.json())).then((objetjson)=>{
      this.setState({images:objetjson});
    console.log(objetjson);
  
  })
  }
  render() {
    return (
      <form className={styles.MemeForm} data-testid="MemeForm">
      <h3>titre</h3>
      <InputText changementSubi={
        (evt)=>{
            this.setState({
              meme:{...this.state.meme,titre:evt.currentTarget.value}
              })
          }
        } 
      value={this.state.meme.titre}/>
      <h3>Selection images : </h3>
      <ImageFlowLayout images={this.state.images} onClick={(image)=>{

      this.setState({meme:{...this.state.meme,image:image}})
      
      }}></ImageFlowLayout>
      {JSON.stringify(this.state)}
  </form>
    );
  }
}
 
MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
