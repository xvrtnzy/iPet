(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var REQUSET_URL = 'http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/393625397fc043188a3f8237c1da1c6f.json';
var data = "";
var str = "";

function getdate() {
	fetch(REQUSET_URL).then(function (response) {
		return response.json();
	}).then(function (json) {
		data = json;
		showdata();
	});
}

var showdata = function showdata() {
	data.map(function (value, index) {
		str += "\n\t\t\t  <div class=\"col-sm-6 col-md-4\">\n\t\t\t    <div class=\"thumbnail\">\n\t\t\t      <img class=\"thumbnail-image\" src=\"" + value.ImageName + "\" alt=\"...\">\n\t\t\t      <div class=\"caption\">\n\t\t\t        <h3>" + value.Variety + " " + value.Name + " <span class=\"label label-default\">" + value.HairType + "</span></h3>\n\t\t\t        <p class=\"ellipsis\">" + value.Resettlement + "</p>\n\t\t\t        <p><a href=\"tel:" + value.Phone + "\" class=\"btn btn-primary\" role=\"button\">\u9023\u7D61\u96FB\u8A71</a> <a href=\"mailto:" + value.Email + "\" class=\"btn btn-default\" role=\"button\">\u806F\u7D61\u4FE1\u7BB1</a></p>\n\t\t\t      </div>\n\t\t\t    </div>\n\t\t\t  </div>\n\t\t";
	});
	document.querySelector('#data-list').innerHTML = str;
};

getdate();

},{}]},{},[1]);
