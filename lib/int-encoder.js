/*
 * int-encoder
 * https://github.com/alanclarke/int-encoder
 *
 * Copyright (c) 2012 alan clarke
 * Licensed under the MIT license.
 */
var bignum = require('bignum');

(function(){
	module.exports = (function(alphabet) {
		var alphabets = {
			'hex':'0123456789abcdef',
			'reset': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_'
		},re = {
			is_int: /^\d*$/
		},
		methods =  {
			encode:function(value, base){
				if(!re.is_int.test(value)&&!base){
					throw new Error("int-encoder:encode parameter must be a positive integer or string containing only digits");
				}
				value = bignum(value.toString(), base);
				var result = '';
				if(value.eq(0)){ return alphabet[0]; }
				while(value.gt(0)){
					var v = value.mod(alphabet.length);
					result = alphabet[v] + result;
					value = value.sub(v).div(alphabet.length);
				}
				return result;
			},
			decode:function(str, base){
				if(!re.is_alphabet.test(str)){
					throw new Error("int-encoder:decode parameter must be a string made up exclusively from characters from the alphabet option ("+alphabet+")");
				}
				var result = bignum(0);
				for( var i =0; i < str.length; i++ ) {
					var index = bignum(alphabet.indexOf(str[i]));
					result = result.add(index.mul(bignum(alphabet.length).pow(str.length - 1 - i)));
				}
				return result.toString(base);
			},
			alphabet:function(_alphabet){
				if(_alphabet){
					_alphabet = _alphabet.toString().split('')
					for(var i =0;i<_alphabet.length;i++){
						for(var j=0;j<_alphabet.length;j++){
							if((_alphabet[i]===_alphabet[j]) && (j!==i)){
								throw new Error("int-encoder:alphabet each character in alphabet must be unique, '"+alphabet[i]+"' appears more than once");
							}
						}
					}
					_alphabet = _alphabet.join('');
					alphabet = _alphabet;
					re.is_alphabet = new RegExp('^['+alphabet.replace('-','\\-')+']+$');
				} else {
					return alphabet;
				}
			}
		};
		methods.alphabet(alphabet || alphabets.reset);
		return methods;
	})();
})();
