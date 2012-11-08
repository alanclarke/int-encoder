/*
 * int-encoder
 * https://github.com/alanclarke/int-encoder
 *
 * Copyright (c) 2012 alan clarke
 * Licensed under the MIT license.
 */


(function(){
	module.exports = (function(alphabet) {
		alphabet = (alphabet || 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
		var re = {
			is_alphabet: new RegExp('^['+alphabet+']*$'),
			is_int: /^\d*$/
		};
		return {
			encode:function(value){
				if(!re.is_int.test(value)){
					throw new Error("int-encoder:encode parameter must be a positive integer");
				}
				var result = '';
				if(value===0){ return alphabet[0]; }
				while(value>0){
					var v = value % alphabet.length;
					result = alphabet[v] + result;
					value -= v;
					value = Math.floor(value/alphabet.length);
				}
				return result;
			},
			decode:function(str){
				if(!re.is_alphabet.test(str)){
					throw new Error("int-encoder:decode parameter must be a string made up exclusively from characters from the alphabet option ("+alphabet+")");
				}
				var result = 0;
				for( var i =0; i < str.length; i++ ) {
					result += (alphabet.indexOf(str[i]) * Math.pow(alphabet.length,str.length - 1 - i ))
				}
				return result;
			},
			alphabet:function(_alphabet){
				if(_alphabet){
					alphabet = _alphabet;
					re.is_alphabet = new RegExp('^['+alphabet+']+$');
				} else {
					return alphabet;
				}
			}
		};
	})();
})();