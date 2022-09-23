import EnrollmentModelGenerated from "./generated/EnrollmentModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = EnrollmentModelGenerated.init();
  
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
      return await EnrollmentModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...EnrollmentModelGenerated,
  ...customModel
};
