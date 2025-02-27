function skillsMember() {
  // This function is private and cannot be accessed from outside
  function checkSkill(skill) {
    return skill === 'Javascript';
  }

  // This function is public and can be accessed from outside
  function getSkill() {
    return checkSkill('Javascript');
  }

  // This function is public and can be accessed from outside
  function setSkill(skill) {
    return checkSkill(skill);
  }

  return {
    getSkill,
    setSkill,
  };
}