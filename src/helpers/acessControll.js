const { AccessControl } = require("accesscontrol");
const { roles, resources } = require("./rbac");
const { admin, user } = roles
const { post } = resources;


const ac = new AccessControl
const allResources = Object.values(resources)

ac.grant(admin)
    .create(allResources)
    .read(allResources)
    .update(allResources)
    .delete(allResources)

ac.grand(user)
    .create(post)
    .readAny(post)
    .updateOwn(post)
    .deleteOwn(post)


module.exports = ac