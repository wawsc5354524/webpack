try {
  if (localStorage.name) {
    defaultname = localStorage.name;
  }
} catch (e) {}

export default {
  name: defaultname
};
