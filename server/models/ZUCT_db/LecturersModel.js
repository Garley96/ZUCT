import LecturersModelGenerated from "./generated/LecturersModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = LecturersModelGenerated.init();
  
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
      return await LecturersModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LecturersModelGenerated,
  ...customModel
};
