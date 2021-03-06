const validateLogin = ({ email, password }) => {
  if (!email) return { email: "Error, You must provider an email" };
  if (email) {
    const validate = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!validate) {
      return { email: "Error, Is not an email" };
    }
  }
  if (!password) return { password: "Error, You must provider a password" };
  if (password.length < 6)
    return {
      password: "Error, The password must be at least 6 characters",
    };
  return {};
};

const validateSignup = ({ name, email, password }) => {
  if (!name) return { name: "Error, You must provider a name" };
  if (name.length < 3)
    return {
      password: "Error, The name must be at least 6 characters",
    };
  if (!email) return { email: "Error, You must provider an email" };
  if (email) {
    const validate = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!validate) {
      return { email: "Error, Is not an email" };
    }
    return {};
  }
  if (!password) return { password: "Error, You must provider a password" };
  if (password.length < 6)
    return {
      password: "Error, The password must be at least 6 characters",
    };
};

const validateSubmit = ({ mood, sleep }) => {
  if (mood === "" || !mood)
    return { mood: "Error, You must provider a options" };
  if (sleep === "" || !sleep)
    return { sleep: "Error, You must provider an options" };
  return {};
};

module.exports = {
  validateLogin,
  validateSignup,
  validateSubmit,
};
