exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello World test1!"
    }

    callback(null, result);
  };
