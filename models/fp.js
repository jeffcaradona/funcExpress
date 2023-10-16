

exports.copyObject = (originalObject) => Object.assign({}, originalObject);

exports.addObject = (locals, strObjName, objEntity) => {
  let localCopy = this.copyObject(locals);
  localCopy[strObjName] = objEntity;
  return localCopy;
};
