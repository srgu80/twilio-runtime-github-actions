exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello World test!"
    }

    callback(null, result);
  };
