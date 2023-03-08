function yyyymmdd(date) {
	var mm = this.getMonth() + 1; // getMonth() is zero-based
 	var dd = this.getDate();

 	return [this.getFullYear(),
         (mm>9 ? '' : '0') + mm,
         (dd>9 ? '' : '0') + dd
        ].join('');
}

function textoAComparar(cadena){
	if (cadena.startsWith('<a ')){
		var n = cadena.indexOf('>');
		var res = cadena.substring(n+1, cadena.length);
		return res;	
	}
	return cadena;
}

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"spanish-string-asc" : function (s1, s2) {
		s1 = textoAComparar(s1);
		s2 = textoAComparar(s2);
		return s1.localeCompare(s2);
	},

	"spanish-string-desc" : function (s1, s2) {
		s1 = textoAComparar(s1);
		s2 = textoAComparar(s2);
		return s2.localeCompare(s1);
	},

	"date-spanish-string-asc" : function (s1, s2) {
		var res1 = s1.split("/");
		var dt1 = res1[2]+res1[1]+res1[0];
		var res2 = s2.split("/");
		var dt2 = res2[2]+res2[1]+res2[0];
		return dt1.localeCompare(dt2);
	},

	"date-spanish-string-desc" : function (s1, s2) {
		var res1 = s1.split("/");	
		var dt1 = res1[2]+res1[1]+res1[0];
		var res2 = s2.split("/");
		var dt2 = res2[2]+res2[1]+res2[0];
		return dt2.localeCompare(dt1);
	}
}

);