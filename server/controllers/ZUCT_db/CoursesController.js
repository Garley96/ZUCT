import CoursesControllerGenerated from "./generated/CoursesControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import CoursesModel from "../../models/ZUCT_db/CoursesModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/courses`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     CoursesControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await CoursesModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...CoursesControllerGenerated,
  ...customControllers
};

