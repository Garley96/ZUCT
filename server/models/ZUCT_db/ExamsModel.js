import ExamsModelGenerated from "./generated/ExamsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ExamsModelGenerated.init();
  
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
      return await ExamsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ExamsModelGenerated,
  ...customModel
};
