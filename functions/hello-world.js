exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello World testr!"
    }

    callback(null, result);
  };
