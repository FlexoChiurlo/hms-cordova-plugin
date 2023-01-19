const fse = require('fs-extra')
const path = require('path')

var projectRoot
/*
 *  This hook take the agconnect-service.json, located in the root plugin folder, and copy it in platforms/android/app.
 *  Required in order to make an android build for Huawei
 * 
 * /
module.exports = function (context) {
    console.log(context.hook + ': Copying agconnect-service.json file')

    projectRoot = path.resolve(path.dirname(context.scriptLocation), '..')
    console.log('Project root directory:', projectRoot)
    var originPath = path.join(projectRoot, 'agconnect-services.json')
    console.log('originPath:', originPath)
    var destPath = path.join('platforms', 'android', 'app', 'agconnect-services.json')
    console.log('destPath:', destPath)

    fse.copySync(originPath, destPath)

}
