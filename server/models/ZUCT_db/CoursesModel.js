import CoursesModelGenerated from "./generated/CoursesModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CoursesModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CoursesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CoursesModelGenerated,
  ...customModel
};
