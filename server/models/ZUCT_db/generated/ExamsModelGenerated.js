/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE examsModelGenerated.js PLEASE EDIT ../examsModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_ZUCT_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * exams
      */
    const examsSchema = new mongoose.Schema({
      place: {
        type: "String"
      },
      score: {
        type: "Number"
      },
      valid: {
        type: "Boolean"
      },
      // RELATIONS
      _courses: {
        type: Schema.ObjectId,
        ref: "courses"
      },
      _lecturer: {
        type: Schema.ObjectId,
        ref: "lecturers"
      },
      _students: {
        type: Schema.ObjectId,
        ref: "students"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Exams", examsSchema));

    return examsSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * examsModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * examsModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * examsModel.findBy_courses
  *   @description CRUD ACTION findBy_courses
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_courses(key) {
    return await generatedModel.model.find({ '_courses' : key});
  },
  
  /**
  * examsModel.findBy_lecturer
  *   @description CRUD ACTION findBy_lecturer
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_lecturer(key) {
    return await generatedModel.model.find({ '_lecturer' : key});
  },
  
  /**
  * examsModel.findBy_students
  *   @description CRUD ACTION findBy_students
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_students(key) {
    return await generatedModel.model.find({ '_students' : key});
  },
  
  /**
  * examsModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * examsModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * examsModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
    


};

export default generatedModel;
