import React from 'react';
import ApiContext from '../ApiContext/ApiContext';


class EditSchoolClassForm extends React.Component {
  static contextType = ApiContext;
  // component that allows user
  // to fill in class details
/*
  static defaultProps = {
    id: '',
    notes:'',
    recipe:'',
    rating: 5
  };*/

  constructor(props) {
    //states a class can have
    super(props);

    this.state = {
      id:this.props.id,
      name: this.props.name,
      type: this.props.type,
      video:this.props.video,
      category: this.props.category,
      instructions: this.props.instructions,
      image: this.props.image,
      notes: this.props.notes,
      rating: this.props.rating
  };
  }
  deleteHandle = (e) => {
    e.preventDefault();
    this.context.deleteClass(this.context.getClassId());
    this.context.closeClass();
    this.props.history.goBack();
  }

  //methods to update show state from user input
  cancelHandle = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  updateInstructions(instructions) {
    this.setState({ instructions:  instructions});
  }

  updateNotes(notes) {
    this.setState({ notes: notes });
  }

  updateRanking(rating) {
    this.setState({ rating: rating });
  }

  render() {
    return (
      <div id="schoolClassDetails">
        <form className="folder" onSubmit={(event) => {
          event.preventDefault();
          let drinkObject = {
            id:this.props.id,
            name: this.props.name,
            type: this.props.type,
            video:this.props.video,
            category: this.props.category,
            instructions: this.state.instructions,
            image: this.props.image,
            notes: this.state.notes,
            rating: this.state.rating
          };
          console.log(drinkObject)
          this.context.updateCockTail(drinkObject, this.context.getCockTailId());
          this.props.history.goBack();
        }}>
          <div className="class-details">
            <h2 className="classDetailsHeading"> Class Details</h2>
            <button type="cancel" className="cancelShowButton" onClick={this.cancelHandle}>
              Back
        </button>
            <div className="form-group">
              <label htmlFor="classname">Instructions </label>
              <input type="text" className="folder__control"
                name="classname" id="classname" value={this.state.instructions} onChange={e => this.updateInstructions(e.target.value)} required="required" />
              <br />
              <label htmlFor="name">Notes</label>
              <input type="text" className="folder__control"
                name="building" id="building" value={this.state.notes} onChange={e => this.updateNotes(e.target.value)} required="required" />
              <br />
            
            </div>
            <div className="editClass__button__group">
              <button type="submit" className="saveClassButton" >
                Save
        </button>
              <button type="reset" className="delClassButton" onClick={this.deleteHandle}>
                Delete
        </button>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

export default EditSchoolClassForm;