import React, { Component } from "react";
import StudentList from "./StudentList.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addStudent,
  deleteStudent,
  updateStudent,
} from "./actions/studentActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.addNewStudent = this.addNewStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
  }
  componentWillMount() {}
  addNewStudent() {
    let name = this.refs.txtName.value;
    let grade = this.refs.txtGrade.value;
    let school = this.refs.txtSchool.value;
    this.props.addStudent({
      id:
        Math.max(
          ...this.props.studentList.map(function (o) {
            return o.id;
          })
        ) + 1,
      name: name,
      grade: grade,
      school: school,
    });
  }

  deleteStudent(id) {
    console.log(id);
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      this.props.deleteStudent(id);
    }
  }
  editStudentSubmit(id, name, grade, school) {
    this.props.updateStudent({
      id: id,
      name: name,
      grade: grade,
      school: school,
    });
  }
  render() {
    console.log("update", this.props);
    return (
      <div align="center">
        <div>
          <h1>...STUDENT REGISTRY...</h1>
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Grade</th>
                <th>School</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <StudentList
              deleteStudent={this.deleteStudent}
              studentList={this.props.studentList}
              editStudentSubmit={this.editStudentSubmit}
            />
          </table>
          <form>
            <input ref="txtName" placeholder="Enter Name" />
            <input ref="txtGrade" placeholder="Enter Grade" />
            <input ref="txtSchool" placeholder="Enter School" />

            <button onClick={this.addNewStudent}>Add New</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addStudent,
      deleteStudent,
      updateStudent,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
