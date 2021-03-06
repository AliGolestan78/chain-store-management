const productModel = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const employeeModel = require("../models/employeeModel");
const Branch = require("../models/branchModel");
const Stock = require("../models/stockModel");

exports.getHomePage = catchAsync(async (req, res, next) => {
  const products = await productModel.Product.find();
  res.status(200).render("home", {
    title: "Home",
    products,
  });
});

exports.showEmployees = catchAsync(async (req, res, next) => {
  const employees = await employeeModel.Employee.find();
  res.status(200).render("employee", {
    title: "Employees",
    employees,
  });
});

exports.showBranchs = catchAsync(async (req, res, next) => {
  const branches = await Branch.find();

  res.status(200).render("branch", {
    title: "Branches",
    branches,
  });
});

exports.showStocks = catchAsync(async (req, res, next) => {
  const stocks = await Stock.find();

  res.status(200).render("stock", {
    title: "Stocks",
    stocks,
  });
});

exports.addStock = catchAsync(async (req, res, next) => {
  res.status(200).render("add-stock", {
    title: "Add Stock",
  });
});

exports.addBranch = catchAsync(async (req, res, next) => {
  res.status(200).render("add-branch", {
    title: "Add Branch",
  });
});

exports.addEmployee = (req, res, next) => {
  res.status(200).render("add-employee", {
    title: "Add Employee",
  });
};

exports.addProduct = (req, res, next) => {
  res.status(200).render("add-product", {
    title: "Add Product",
  });
};

exports.updateStock = catchAsync(async (req, res, next) => {
  const stock = await Stock.findById(req.params.id);
  res.status(200).render("update-stock", {
    title: "Update Stock",
    stock,
  });
});

exports.updateBranch = catchAsync(async (req, res, next) => {
  const branch = await Branch.findById(req.params.id);
  res.status(200).render("update-branch", {
    title: "Update Branch",
    branch,
  });
});

exports.updateEmployee = catchAsync(async (req, res, next) => {
  const employee = await employeeModel.Employee.findById(req.params.id);
  res.status(200).render("update-employee", {
    title: "Update Employee",
    employee,
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await productModel.Product.findById(req.params.id);
  res.status(200).render("update-product", {
    title: "Update Product",
    product,
  });
});
