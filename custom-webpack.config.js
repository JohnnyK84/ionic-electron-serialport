module.exports = {
  externals: [{
    serialport: "require('serialport')"
  },
  {
    '@serialport/parser-readline': "require('@serialport/parser-readline')"
  }]
};
