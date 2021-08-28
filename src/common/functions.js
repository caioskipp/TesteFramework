function verifyEmptyFields(field) {
  return !field || field.length === 0;
}

function verifyEmailFormat(field) {
  if (!field) {
    return false;
  }

  let pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !pattern.test(field.toLowerCase());
}

export default {
  verifyEmptyFields,
  verifyEmailFormat,
};
