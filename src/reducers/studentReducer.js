const studentReducer = (state = [], action) => {
  // var stateCopy=[]
  switch (action.type) {
    case "ADD_STUDENT":
      var stateCopy = [...state, action.payload];
      localStorage.setItem("students", JSON.stringify(stateCopy));
      return stateCopy;

    case "DELETE_STUDENT":
      //   console.log("before statecopy", state);
      var stateCopy = state.filter((x) => x.id !== action.payload);
      //   console.log("after statecopy", stateCopy);

      localStorage.setItem("students", JSON.stringify(stateCopy));
      return stateCopy;

    case "UPDATE_STUDENT":
      stateCopy = state.map((student) => {
        const { id, name, grade, school } = action.payload;
        if (student.id === id) {
          student.name = name;
          student.grade = grade;
          student.school = school;
        }
        return student;
      });
      localStorage.setItem("students", JSON.stringify(stateCopy));
      return stateCopy;

    default:
      return state;
  }
};
export default studentReducer;
