const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose')
const express = require('express')

const Artwork = require('../models/artworkModel');

const app = express()

AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  rootPath: '/admin',
  resources: [Artwork],
})

const adminRouter = AdminJSExpress.buildRouter(adminJs);

module.exports = { adminJs, adminRouter };