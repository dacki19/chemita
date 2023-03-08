$(function() {
	
	
	$(document).ready(function () {
		 $('#tablePending thead tr')
	        .clone(true)
	        .addClass('filters')
	        .appendTo('#tablePending thead');
	 
	    var table = $('#tablePending').DataTable({
	    	
	    	  language: {
	    		  "orderable": false, "targets":  [8, 9],
	    	        "decimal": "",
	    	        "emptyTable": "No hay información",
	    	        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
	    	        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
	    	        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
	    	        "infoPostFix": "",
	    	        "thousands": ",",
	    	        "lengthMenu": "Mostrar _MENU_ Entradas",
	    	        "loadingRecords": "Cargando...",
	    	        "processing": "Procesando...",
	    	        "search": "Buscar:",
	    	        "zeroRecords": "Sin resultados encontrados",
	    	        "paginate": {
	    	            "first": "Primero",
	    	            "last": "Ultimo",
	    	            "next": "Siguiente",
	    	            "previous": "Anterior"
	    	        }
	    	    },
	    	
	        orderCellsTop: true,
	        fixedHeader: true,
	        initComplete: function () {
	            var api = this.api();
	            api
                .columns()
                .eq(0)
                .each(function (colIdx) {
                    // Set the header cell to contain the input element
                    var cell = $('.filters th').eq(
                        $(api.column(colIdx).header()).index()
                    );
                    var title = $(cell).text();
                    if(title == "Nombre"){
                    	  $(cell).html('<input type="text" size=25 placeholder="" />');
                    }else{
                    	  $(cell).html('<input type="text" size=10 placeholder="" />');
                    }
                  
 
                    // On every keypress in this input
                    $(
                        'input',
                        $('.filters th').eq($(api.column(colIdx).header()).index())
                    )
                        .off('keyup change')
                        .on('keyup change', function (e) {
                            e.stopPropagation();
 
                            // Get the search value
                            $(this).attr('title', $(this).val());
                            var regexr = '({search})'; //$(this).parents('th').find('select').val();
 
                            var cursorPosition = this.selectionStart;
                            // Search the column for that value
                            api
                                .column(colIdx)
                                .search(
                                    this.value != ''
                                        ? regexr.replace('{search}', '(((' + this.value + ')))')
                                        : '',
                                    this.value != '',
                                    this.value == ''
                                )
                                .draw();
 
                            $(this)
                                .focus()[0]
                                .setSelectionRange(cursorPosition, cursorPosition);
                        });
                });
        },
    });
	      
	 });
	
	
	$('#tablePosicion').DataTable({
		"lengthChange" : false,
		"pageLength" : 10,
		"searching" : true,
		"search": "Buscar:",
		"order" : [ [ 0, 'asc' ] ],
		"columnDefs" : [ {
			"type" : "spanish-string",
			"targets" : [ 1, 2, 3, 4, 5 ]
		}, {
			"type" : "date-spanish-string",
			"targets" : [ 4, 5 ]
		},
		{
		      "targets":  [ 0, 1],
		      "searchable": true
		    },
		    {
		        "targets": [ 2, 3, 4, 5, 6 ],
		        "orderable": false
		      }
		
		],
		"language" : {
			"info" : "Pág _PAGE_ de _PAGES_",
			"paginate" : {
				"first" : "Primero",
				"last" : "Último",
				"next" : "Siguiente",
				"previous" : "Anterior"
			}
		}
	});	
	
	
	 $('#tableEnvio').DataTable( {
	      "columnDefs": [
	        { "orderable": false, "targets":  [2] } // Deshabilita la 8ª y 9ª columna para ordenar (la de edición o borrado)...
	      ], 
	      "searching": false,
	      "language": {
	        "info": "Pág _PAGE_ de _PAGES_",
	        "infoEmpty": "",
	        "emptyTable": "",
	        "lengthMenu": "Mostrar _MENU_ filas",
	      "zeroRecords": "",
	        "paginate": {
	          "first":      "Primero",
	          "last":       "Último",
	          "next":       "Siguiente",
	          "previous":   "Anterior"
	        }
	      }
	    });
	
	 
	 $('#tablaUsuarios').DataTable( {
	      "columnDefs": [
	        { "orderable": false, "targets":  [2] } // Deshabilita la 8ª y 9ª columna para ordenar (la de edición o borrado)...
	      ], 
	      "searching": false,
	      "language": {
	        "info": "Pág _PAGE_ de _PAGES_",
	        "infoEmpty": "",
	        "emptyTable": "",
	        "lengthMenu": "Mostrar _MENU_ filas",
	      "zeroRecords": "",
	        "paginate": {
	          "first":      "Primero",
	          "last":       "Último",
	          "next":       "Siguiente",
	          "previous":   "Anterior"
	        }
	      }
	    });
	
	
	
	$(document).ready(function () {
		 $('#tableLabores thead tr')
	        .clone(true)
	        .addClass('filters')
	        .appendTo('#tableLabores thead');
	 
	    var table = $('#tableLabores').DataTable({
	    	
	    	  language: {
	    		  "orderable": true, "targets":  [1,2,3],
	    		  "searchable": false, "targets":  [5,6,7,8, 9],
	    	        "decimal": "",
	    	        "emptyTable": "No hay información",
	    	        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
	    	        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
	    	        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
	    	        "infoPostFix": "",
	    	        "thousands": ",",
	    	        "lengthMenu": "Mostrar _MENU_ Entradas",
	    	        "loadingRecords": "Cargando...",
	    	        "processing": "Procesando...",
	    	        "search": "Buscar:",
	    	        "zeroRecords": "Sin resultados encontrados",
	    	        "paginate": {
	    	            "first": "Primero",
	    	            "last": "Ultimo",
	    	            "next": "Siguiente",
	    	            "previous": "Anterior"
	    	        }
	    	    },
	    	
	        orderCellsTop: true,
	        fixedHeader: true,
	        initComplete: function () {
	            var api = this.api();
	            api
               .columns()
               .eq(0)
               .each(function (colIdx) {
                   // Set the header cell to contain the input element
                   var cell = $('.filters th').eq(
                       $(api.column(colIdx).header()).index()
                   );
                   var title = $(cell).text();
                   if(title == "Nombre"){
                   	  $(cell).html('<input type="text" size=25 placeholder="" />');
                   }else{
                   	  $(cell).html('<input type="text" size=10 placeholder="" />');
                   }
                 

                   // On every keypress in this input
                   $(
                       'input',
                       $('.filters th').eq($(api.column(colIdx).header()).index())
                   )
                       .off('keyup change')
                       .on('keyup change', function (e) {
                           e.stopPropagation();

                           // Get the search value
                           $(this).attr('title', $(this).val());
                           var regexr = '({search})'; //$(this).parents('th').find('select').val();

                           var cursorPosition = this.selectionStart;
                           // Search the column for that value
                           api
                               .column(colIdx)
                               .search(
                                   this.value != ''
                                       ? regexr.replace('{search}', '(((' + this.value + ')))')
                                       : '',
                                   this.value != '',
                                   this.value == ''
                               )
                               .draw();

                           $(this)
                               .focus()[0]
                               .setSelectionRange(cursorPosition, cursorPosition);
                       });
               });
       },
   });
	      
	 });
	
	
	
	
	$(document).ready(function () {
		 $('#tableDetallesHst thead tr')
	        .clone(true)
	        .addClass('filters')
	        .appendTo('#tableDetallesHst thead');
	 
	    var table = $('#tableDetallesHst').DataTable({
	    	
	    	  language: {
	    		  "orderable": true, "targets":  [1,2,3],
	    		  "searchable": false, "targets":  [5,6,7,8, 9],
	    	        "decimal": "",
	    	        "emptyTable": "No hay información",
	    	        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
	    	        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
	    	        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
	    	        "infoPostFix": "",
	    	        "thousands": ",",
	    	        "lengthMenu": "Mostrar _MENU_ Entradas",
	    	        "loadingRecords": "Cargando...",
	    	        "processing": "Procesando...",
	    	        "search": "Buscar:",
	    	        "zeroRecords": "Sin resultados encontrados",
	    	        "paginate": {
	    	            "first": "Primero",
	    	            "last": "Ultimo",
	    	            "next": "Siguiente",
	    	            "previous": "Anterior"
	    	        }
	    	    },
	    	    "lengthMenu": [
	  		      [5, 10, 15, 25, -1],
	  		      [5, 10, 15, 25, "All"]
	  		    ],
	  		    "scrollY": "200px",
	  		    "dom": 'rtipS',
	  		    // searching: false,
	  		    "deferRender": true,
	        orderCellsTop: true,
	        fixedHeader: true,
	        initComplete: function () {
	        	
	        	
	        	
	        	  var column = this.api().column(2);

			      var select = $('<select class="filter"><option value="">TODO</option></select>')
			        .appendTo('#selectTriggerFilter')
			        .on('change', function() {
			          var val = $(this).val();
			          column.search(val ? '^' + $(this).val() + '$' : val, true, false).draw();
			        });

//			      column.data().unique().sort().each(function(d, j) {
//			        select.append('<option value="">TODO</option>');
			      select.append('<option value=" ">NO</option>');
			        select.append('<option value="Libro Completo">SI</option>');
//			      });
	        	
	        	
	        	
	            var api = this.api();
	            api
              .columns()
              .eq(0)
              .each(function (colIdx) {
                  // Set the header cell to contain the input element
                  var cell = $('.filters th').eq(
                      $(api.column(colIdx).header()).index()
                  );
                  var title = $(cell).text();
                  if(title == "Nombre"){
                  	  $(cell).html('<input type="text" size=25 placeholder="" />');
                  }else{
                  	  $(cell).html('<input type="text" size=10 placeholder="" />');
                  }
                

                  // On every keypress in this input
                  $(
                      'input',
                      $('.filters th').eq($(api.column(colIdx).header()).index())
                  )
                      .off('keyup change')
                      .on('keyup change', function (e) {
                          e.stopPropagation();

                          // Get the search value
                          $(this).attr('title', $(this).val());
                          var regexr = '({search})'; //$(this).parents('th').find('select').val();

                          var cursorPosition = this.selectionStart;
                          // Search the column for that value
                          api
                              .column(colIdx)
                              .search(
                                  this.value != ''
                                      ? regexr.replace('{search}', '(((' + this.value + ')))')
                                      : '',
                                  this.value != '',
                                  this.value == ''
                              )
                              .draw();

                          $(this)
                              .focus()[0]
                              .setSelectionRange(cursorPosition, cursorPosition);
                      });
              });
      },
  });
	    $('#tableDetallesHst').show();
	 });
	
	
	
	$(document).ready(function() {
	   
		$('#tablaHistoricos').DataTable({
	    	language: {
    		  "orderable": true, "targets":  [1,2,3],
    		  "searchable": false, "targets":  [5,6,7,8, 9],
    	        "decimal": "",
    	        "emptyTable": "No hay información",
    	        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
    	        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
    	        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
    	        "infoPostFix": "",
    	        "thousands": ",",
    	        "lengthMenu": "Mostrar _MENU_ Entradas",
    	        "loadingRecords": "Cargando...",
    	        "processing": "Procesando...",
    	        "search": "Buscar:",
    	        "zeroRecords": "Sin resultados encontrados",
    	        "paginate": {
    	            "first": "Primero",
    	            "last": "Ultimo",
    	            "next": "Siguiente",
    	            "previous": "Anterior"
    	        }
    	    },});
	    $('#tablaHistoricos').show();
	    $('#div_header').show();	    
	} );

	
	  $(document).ready(function () {  
          $("#myTable").DataTable({  
        	
        	  "language":  
              {  
                  "processing": "<div class='overlay custom-loader-background'><i class='fa fa-cog fa-spin custom-loader-color'></i></div>"  
              },  
              "processing": true, 
              "serverSide": true,
              "filter": true, 
              "orderMulti": false
        	  
          });  
      });  
	
	
	
	$(document).ready(function () {
		
		
		 $('#tableHistorico thead tr')
	        .clone(true)
	        .addClass('filters')
	        .appendTo('#tableHistorico thead');
	 
	    var table = $('#tableHistorico').DataTable({
	    	
	    	  language: {
	    		  "orderable": true, "targets":  [1,2,3],
	    		  "searchable": false, "targets":  [5,6,7,8, 9],
	    	        "decimal": "",
	    	        "emptyTable": "No hay información",
	    	        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
	    	        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
	    	        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
	    	        "infoPostFix": "",
	    	        "thousands": ",",
	    	        "lengthMenu": "Mostrar _MENU_ Entradas",
	    	        "loadingRecords": "Cargando...",
	    	        "processing": "Procesando...",
	    	        "search": "Buscar:",
	    	        "zeroRecords": "Sin resultados encontrados",
	    	        "paginate": {
	    	            "first": "Primero",
	    	            "last": "Ultimo",
	    	            "next": "Siguiente",
	    	            "previous": "Anterior"
	    	        }
	    	    },
	    	    "lengthMenu": [
	  		      [15, 25, 35, 50, -1],
	  		      [15, 25, 35, 50, "All"]
	  		    ],
	  		    "scrollY": "200px",
	  		    "dom": 'rtipS',
	  		  "paging": false,
	  		"info": false,
	  		    // searching: false,
	  		    "deferRender": true,
	        initComplete: function () {
	        	
	        	
	        	
	        	  var column = this.api().column(4);

//			      });
	        	
	        	
	        	
	            var api = this.api();
	            api
            .columns()
            .eq(0)
            .each(function (colIdx) {
                // Set the header cell to contain the input element
                var cell = $('.filters th').eq(
                    $(api.column(colIdx).header()).index()
                );
                var title = $(cell).text();
                if(title == "Nombre"){
                	  $(cell).html('<input type="text" size=25 placeholder="" />');
                }else{
                	  $(cell).html('<input type="text" size=10 placeholder="" />');
                }
              

                // On every keypress in this input
                $(
                    'input',
                    $('.filters th').eq($(api.column(colIdx).header()).index())
                )
                    .off('keyup change')
                    .on('keyup change', function (e) {
                        e.stopPropagation();

                        // Get the search value
                        $(this).attr('title', $(this).val());
                        var regexr = '({search})'; //$(this).parents('th').find('select').val();

                        var cursorPosition = this.selectionStart;
                        // Search the column for that value
                        api
                            .column(colIdx)
                            .search(
                                this.value != ''
                                    ? regexr.replace('{search}', '(((' + this.value + ')))')
                                    : '',
                                this.value != '',
                                this.value == ''
                            )
                            .draw();

                        $(this)
                            .focus()[0]
                            .setSelectionRange(cursorPosition, cursorPosition);
                    });
            });
    },
});
	    $('#tableHistorico').show();
	 });
	
	
	
	
	
	
	
	
	$(document).ready(function () {
		 $('#tableRefabricacion thead tr')
	        .clone(true)
	        .addClass('filters')
	        .appendTo('#tableRefabricacion thead');
	 
	    var table = $('#tableRefabricacion').DataTable({
	    	
	    	  language: {
	    		  "orderable": true, "targets":  [1,2,3],
	    		  "searchable": false, "targets":  [5,6,7,8, 9],
	    	        "decimal": "",
	    	        "emptyTable": "No hay información",
	    	        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
	    	        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
	    	        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
	    	        "infoPostFix": "",
	    	        "thousands": ",",
	    	        "lengthMenu": "Mostrar _MENU_ Entradas",
	    	        "loadingRecords": "Cargando...",
	    	        "processing": "Procesando...",
	    	        "search": "Buscar:",
	    	        "zeroRecords": "Sin resultados encontrados",
	    	        "paginate": {
	    	            "first": "Primero",
	    	            "last": "Ultimo",
	    	            "next": "Siguiente",
	    	            "previous": "Anterior"
	    	        }
	    	    },
	    	    "lengthMenu": [
	  		      [5, 10, 15, 20, -1],
	  		      [5, 10, 15, 20, "All"]
	  		    ],
	  		    "scrollY": "200px",
	  		    "dom": 'rtipS',
	  		  "paging": false,
	  		"info": false,
	  		    // searching: false,
	  		    "deferRender": true,
	        initComplete: function () {
	        	
	        	
	        	
	        	  var column = this.api().column(4);

//			      });
	        	
	        	
	        	
	            var api = this.api();
	            api
             .columns()
             .eq(0)
             .each(function (colIdx) {
                 // Set the header cell to contain the input element
                 var cell = $('.filters th').eq(
                     $(api.column(colIdx).header()).index()
                 );
                 var title = $(cell).text();
                 if(title == "Nombre"){
                 	  $(cell).html('<input type="text" size=25 placeholder="" />');
                 }else{
                 	  $(cell).html('<input type="text" size=10 placeholder="" />');
                 }
               

                 // On every keypress in this input
                 $(
                     'input',
                     $('.filters th').eq($(api.column(colIdx).header()).index())
                 )
                     .off('keyup change')
                     .on('keyup change', function (e) {
                         e.stopPropagation();

                         // Get the search value
                         $(this).attr('title', $(this).val());
                         var regexr = '({search})'; //$(this).parents('th').find('select').val();

                         var cursorPosition = this.selectionStart;
                         // Search the column for that value
                         api
                             .column(colIdx)
                             .search(
                                 this.value != ''
                                     ? regexr.replace('{search}', '(((' + this.value + ')))')
                                     : '',
                                 this.value != '',
                                 this.value == ''
                             )
                             .draw();

                         $(this)
                             .focus()[0]
                             .setSelectionRange(cursorPosition, cursorPosition);
                     });
             });
     },
 });
	      
	 });
	
	
	
	
	
	$(document).ready(function () {
		 $('#tablePedidos thead tr')
	        .clone(true)
	        .addClass('filters')
	        .appendTo('#tablePedidos thead');
		 
	 
	    var table = $('#tablePedidos').DataTable({
	    	
	    	  language: {
	    		  "orderable": true, "targets":  [1,2,3],
	    		  "searchable": false, "targets":  [5,6,7,8, 9],
	    	        "decimal": "",
	    	        "emptyTable": "No hay información",
	    	        "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
	    	        "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
	    	        "infoFiltered": "(Filtrado de _MAX_ total entradas)",
	    	        "infoPostFix": "",
	    	        "thousands": ",",
	    	        "lengthMenu": "Mostrar _MENU_ Entradas",
	    	        "loadingRecords": "Cargando...",
	    	        "processing": "Procesando...",
	    	        "search": "Buscar:",
	    	        "zeroRecords": "Sin resultados encontrados",
	    	        "paginate": {
	    	            "first": "Primero",
	    	            "last": "Ultimo",
	    	            "next": "Siguiente",
	    	            "previous": "Anterior"
	    	        }
	    	    },
	  		    "scrollY": "400px",
	  		    "dom": 'rtipS',
	  		    // searching: false,
	  		    "deferRender": true,
	        orderCellsTop: true,
	        fixedHeader: true,
	        initComplete: function () {
	        	
	        	
	        	
	        	  var column = this.api().column(4);

			      var select = $('<select class="filter"><option value="">TODO</option></select>')
			        .appendTo('#selectTriggerFilter')
			        .on('change', function() {
			          var val = $(this).val();
			          column.search(val ? '^' + $(this).val() + '$' : val, true, false).draw();
			        });

//			      column.data().unique().sort().each(function(d, j) {
//			        select.append('<option value="">TODO</option>');
			      select.append('<option value="NO">NO</option>');
			        select.append('<option value="SI">SI</option>');
//			      });
	        	
	        	
	        	
	            var api = this.api();
	            api
              .columns()
              .eq(0)
              .each(function (colIdx) {
                  // Set the header cell to contain the input element
                  var cell = $('.filters th').eq(
                      $(api.column(colIdx).header()).index()
                  );
                  var title = $(cell).text();
                  if(title == "Nombre"){
                  	  $(cell).html('<input type="text" size=25 placeholder="" />');
                  }else{
                	  
                	  if(title == "Abrir"){
                		  $(cell).html('<label > </label>');
                	  }else{
                		  
                		  $(cell).html('<input type="text" size=20 placeholder="" />');
                	  }
                  }
                

                  // On every keypress in this input
                  $(
                      'input',
                      $('.filters th').eq($(api.column(colIdx).header()).index())
                  )
                      .off('keyup change')
                      .on('keyup change', function (e) {
                          e.stopPropagation();

                          // Get the search value
                          $(this).attr('title', $(this).val());
                          var regexr = '({search})'; //$(this).parents('th').find('select').val();

                          var cursorPosition = this.selectionStart;
                          // Search the column for that value
                          api
                              .column(colIdx)
                              .search(
                                  this.value != ''
                                      ? regexr.replace('{search}', '(((' + this.value + ')))')
                                      : '',
                                  this.value != '',
                                  this.value == ''
                              )
                              .draw();

                          $(this)
                              .focus()[0]
                              .setSelectionRange(cursorPosition, cursorPosition);
                      });
              });
      },
  });
	    $('#tablePedidos').show();     
	 });
	
	


});	