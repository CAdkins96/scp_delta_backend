"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agentSchema = new Schema({
    name: {
        type: String
    },
    playbook: {
        type: String
    },
    clearance: {
        type: String
    },
    supervisor: {
        type: Boolean
    },
    taskForce: {
        type: String
    },
    species: {
        type: String
    }
});

module.exports = mongoose.model('agent', agentSchema);