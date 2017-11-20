const jQuery = require('jQuery');
const Promise = require('bluebird');

exports.get = function(url, data){
    return Promise.resolve(jQuery.ajax({
    url: url,
    dataType: 'json',
    contentType: 'json',
    type: 'GET',
    data: data
  }));
};

exports.post = function(url, data){
  return Promise.resolve(jQuery.post(url, data));
};

exports.put = function(url, data){
  return Promise.resolve(jQuery.ajax({
    url: url,
    dataType: 'json',
    contentType: 'json',
    type: 'PUT',
    data: data
  }));
};

exports.delete = function(url){
  return Promise.resolve(jQuery.ajax({
    url: url,
    dataType: 'json',
    contentType: 'json',
    type: 'DELETE'
  }));
};