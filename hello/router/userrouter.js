const express = require('express');

//login and register
const log = require('../controller/login');
const add = require('../controller/register');
//crud operations BOOK
const createbook = require('../components/create');
const deletebook = require('../components/delete');
const editbook = require('../components/edit');
const getbook = require('../components/read');
const viewdata = require('../components/view');
// CRUD IN CLIENT   
const getclient = require('../controller/ClientCRUD/getClient');
const addclient = require('../controller/ClientCRUD/Addclient');
const deleteclient = require('../controller/ClientCRUD/deleteclient');
const editclient = require('../controller/ClientCRUD/editclient');
const viewclient = require('../controller/ClientCRUD/Viewclient');
// CRUD IN CUSTOMER
const customadd = require('../controller/CustumCRUD/Addcustomer');
const getcustomer = require('../controller/CustumCRUD/getcustomer');
const deletecustomer = require('../controller/CustumCRUD/deletecustomer');
const editcustomer = require('../controller/CustumCRUD/editcustomer');
const viewcustomer = require('../controller/CustumCRUD/viewcustomer');
//CRUD IN TEAM
const addteam = require('../controller/TeamCRUD/Addteam');
const getteam = require('../controller/TeamCRUD/Getteam');
const viewteam = require('../controller/TeamCRUD/Viewteam');
const editteam = require('../controller/TeamCRUD/Editteam');
const deleteteam = require('../controller/TeamCRUD/Deleteteam');

//CRUD IN ORDER
const orderadd = require('../controller/OrderCRUD/Addorder');
const deleteorder = require('../controller/OrderCRUD/Deleteorder');
const editorder = require('../controller/OrderCRUD/Editorder');
const getorder = require('../controller/OrderCRUD/Getorder');
const vieworder = require('../controller/OrderCRUD/Vieworder');
const create = require('../controller/CreateOrderCRUD/Createorder');
const pagen = require('../controller/Pagination');

const router = express.Router()

//log , reg
router.route("/post").post(add)
router.route("/log").post(log)

//crud router
router.route("/bookpost").post(createbook);
router.route("/getbook").get(getbook);
router.route("/bookedit/:id").put(editbook);
router.route("/deletebook/:id").delete(deletebook);
router.route("/getview/:id").get(viewdata);
// client crud
router.route("/addclient").post(addclient);
router.route("/getclient").get(getclient);
router.route("/editclient/:id").put(editclient);
router.route("/deleteclient/:id").delete(deleteclient);
router.route("/viewclient/:id").get(viewclient);
// customer crud
router.route("/addcustomer").post(customadd);
router.route("/getcustomer").get(getcustomer);
router.route("/deletecustomer/:id").delete(deletecustomer);
router.route("/editcustomer/:id").put(editcustomer);
router.route("/viewcustomer/:id").get(viewcustomer);
// team crud
router.route("/addteam").post(addteam);
router.route("/getteam").get(getteam);
router.route("/deleteteam/:id").delete(deleteteam);
router.route("/editteam/:id").put(editteam);
router.route("/viewteam/:id").get(viewteam);
// order crud
router.route("/addorder").post(orderadd);
router.route("/deleteorder/:id").delete(deleteorder);
router.route("/editorder/:id").put(editorder);
router.route("/getorder").get(getorder);
router.route("/vieworder/:id").get(vieworder);
// create order 
router.route("/createorder").post(create);
// pagination
router.route("/paginateduser").get(pagen);






module.exports = router