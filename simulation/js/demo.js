/* This  script file is edited by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/



jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }
                var o = instance.getOffset(el, true),
                    o2 = instance.getOffset(el),
                    s = jsPlumb.getSize(el),
                    pxy = [e.pageX || e.clientX, e.pageY || e.clientY],
                    c = [pxy[0] - (o.left + (s[0] / 2)), pxy[1] - (o.top + (s[1] / 2))],
                    oo = [c[0] / s[0], c[1] / s[1]],
                    DIST = 350,
                    l = o2.left + (oo[0] * DIST),
                    t = o2.top + (oo[1] * DIST);

                var id = el.getAttribute("id");
                instance.animate(el, {left: l, top: t}, { duration: 350, easing: 'easeOutBack' });
            });
        },

    // notice there are no dragOptions specified here, which is different from the
    // draggableConnectors2 demo.  all connections on this page are therefore
    // implicitly in the default scope.
	// for all live red connection//
        endpoint = {
            anchors: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 3, stroke: "#C50806" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint);
					},
					
			//for lamp connection//
 endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 3, stroke: "#1684F8" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare1 = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint1);
					},			
					
					//for some switch to decade resistance box connection///
					
				endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 3, stroke: "#F8DD16" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare2 = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint2);
					},		
					
				//for powerboard neagative connection///
					
				endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 3, stroke: "black" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 100,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },

        prepare3 = function (elId) {
            initAnimation(elId);            			
			
            return instance.addEndpoint(elId, endpoint3);
					},		
					
					

    // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 162;
            var x = (0.2 * w) + Math.floor(Math.random() * (0.5 * w));
            var y = (0.2 * h) + Math.floor(Math.random() * (0.6 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: [ "Image", { url: "./images/littledot.png" } ],
        Connector: [ "Bezier", { curviness:-90 } ],
        Container: "canvas"
    });
	
	/*jsPlumb.connect({ 
  sourceId:"bd3",
  targetId:"bd5",
  connector: [ "Bezier", { curviness:175 } ],
  paintStyle:{ lineWidth:25, strokeStyle:'yellow' }
});*/

	
	
	
	
	
	

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("bd1"),            
            e2 = prepare("bd2"),
			e3 = prepare3("bd3"),
            e4 = prepare("bd4"),
			e5 = prepare3("bd5"),
			e6 = prepare("bd6"),
            e7 = prepare("bd7"),
			e8 = prepare3("bd8"),
			/*e9 = prepare("bd9"),
            e10 = prepare("bd10"),*/			
			e11 = prepare("bd11"),            
            e12 = prepare1("bd12"),
			e13 = prepare("bd13"),
            e14 = prepare("bd14"),
			e15 = prepare3("bd15"),
			e16 = prepare("bd16"),
            e17 = prepare2("bd17"),
			e18 = prepare1("bd18"),			
			e19 = prepare3("bd19"),
			e20 = prepare1("bd20"),
			e21 = prepare1("bd21"),
			e22 = prepare2("bd22"),
			e23 = prepare3("bd23"),
			e24 = prepare2("bd24"),
			e25 = prepare("bd25"),
			e26 = prepare1("bd26"),
			e27 = prepare2("bd27"),
			e28 = prepare3("bd28"),
			e29 = prepare1("bd29"),
			e30 = prepare1("bd30"),
			e31 = prepare("bd31"),
			e32 = prepare1("bd32"),
			e33 = prepare2("bd33"),
			e34 = prepare3("bd34"),
			e35 = prepare("bd35"),
			e36 = prepare1("bd36"),
			e37 = prepare1("bd37"),
			e38 = prepare3("bd38");			
            /*clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        /*instance.on(clearBtn, "click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            instance.detachEveryConnection();
        });*/
		
		
             //instance.connect({ source: e11, target: e19 });
			 //delete clicked connection
      instance.bind("click", function (conn, originalEvent) {
           if ( confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?")) {////for clicking on a connection
               instance.deleteConnection(conn);			  
			         }	

         /*else if (conn.sourceId=='bd8' && conn.targetId=='bd12') {
			alert('series R');
		  movepoint();
		  }				

         else if(conn.sourceId=='bd12' && conn.targetId=='bd1') {
			   alert('parallel R');
		  movepoint2();
		  }	*/	  
		   
        }); 
		
		
		   
		
		
    });

   // jsPlumb.fire("jsPlumbDemoLoaded", instance);


 //jsPlumb.fire("jsPlumbDemoLoaded", instance);

    document.getElementById("check").addEventListener("click", function () {
        //var d = instance.exportData();
        //console.log(instance.getAllConnections());

      
        var correct_connections_1_12 = [
            {
                "source": "bd1",
                "target": "bd12"
            },

            {
                "source": "bd12",
                "target": "bd1"
            }
        ];

        var correct_connections_2_11 = [
            {
                "source": "bd2",
                "target": "bd11"
            },

            {
                "source": "bd11",
                "target": "bd2"
            }
        ];        

        var correct_connections_7_6 = [
            {
                "source": "bd7",
                "target": "bd6"
            },
    
            {
                "source": "bd6",
                "target": "bd7"
            }
        ];

        var correct_connections_8_5 = [
            {
                "source": "bd8",
                "target": "bd5"
            },

            {
                "source": "bd5",
                "target": "bd8"
            }
        ];

        
       /* var correct_connections_9_3 = [
            {
                "source": "bd9",
                "target": "bd3"
            },

            {
                "source": "bd3",
                "target": "bd9"
            }
        ];

        var correct_connections_10_23= [
            {
                "source": "bd10",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd10"
            }
        ];*/
		var correct_connections_4_35= [
            {
                "source": "bd4",
                "target": "bd35"
            },

            {
                "source": "bd35",
                "target": "bd4"
            }
        ];
		
		var correct_connections_14_31= [
            {
                "source": "bd14",
                "target": "bd31"
            },

            {
                "source": "bd31",
                "target": "bd14"
            }
        ];
		
		var correct_connections_32_18= [
            {
                "source": "bd32",
                "target": "bd18"
            },

            {
                "source": "bd18",
                "target": "bd32"
            }
        ];
		var correct_connections_33_22= [
            {
                "source": "bd33",
                "target": "bd22"
            },

            {
                "source": "bd22",
                "target": "bd33"
            }
        ];
		
		var correct_connections_34_23= [
            {
                "source": "bd34",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd34"
            }
        ];
		var correct_connections_15_19= [
            {
                "source": "bd15",
                "target": "bd19"
            },

            {
                "source": "bd19",
                "target": "bd15"
            }
        ];
		var correct_connections_19_23= [
            {
                "source": "bd19",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd19"
            }
        ];
		var correct_connections_16_25= [
            {
                "source": "bd16",
                "target": "bd25"
            },

            {
                "source": "bd25",
                "target": "bd16"
            }
        ];
		var correct_connections_20_26= [
            {
                "source": "bd20",
                "target": "bd26"
            },

            {
                "source": "bd26",
                "target": "bd20"
            }
        ];
		var correct_connections_27_24= [
            {
                "source": "bd27",
                "target": "bd24"
            },

            {
                "source": "bd24",
                "target": "bd27"
            }
        ];
		var correct_connections_28_23= [
            {
                "source": "bd28",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd28"
            }
        ];
		var correct_connections_38_23= [
            {
                "source": "bd38",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd38"
            }
        ];
		       //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "bd1",
                "target": "bd12"
            },
    
            {
                "source": "bd12",
                "target": "bd1"
            },
            
            {
                "source": "bd2",
                "target": "bd11"
            },

            {
                "source": "bd11",
                "target": "bd2"
            },

            {
                "source": "bd7",
                "target": "bd6"
            },
    
            {
                "source": "bd6",
                "target": "bd7"
            },
			
			{
                "source": "bd8",
                "target": "bd5"
            },

            {
                "source": "bd5",
                "target": "bd8"
            },
			
           /* {
                "source": "bd9",
                "target": "bd3"
            },

            {
                "source": "bd3",
                "target": "bd9"
            },
			 {
                "source": "bd10",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd10"
            },*/
			{
                "source": "bd4",
                "target": "bd35"
            },

            {
                "source": "bd35",
                "target": "bd4"
            },
			{
                "source": "bd14",
                "target": "bd31"
            },

            {
                "source": "bd31",
                "target": "bd14"
            },
			
			{
                "source": "bd32",
                "target": "bd18"
            },

            {
                "source": "bd18",
                "target": "bd32"
            },
			
			{
                "source": "bd33",
                "target": "bd22"
            },

            {
                "source": "bd22",
                "target": "bd33"
            },
			
			{
                "source": "bd34",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd34"
            },
			
			{
                "source": "bd15",
                "target": "bd19"
            },

            {
                "source": "bd19",
                "target": "bd15"
            },
			
			{
                "source": "bd19",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd19"
            },
			
			{
                "source": "bd16",
                "target": "bd25"
            },

            {
                "source": "bd25",
                "target": "bd16"
            },
			
			{
                "source": "bd20",
                "target": "bd26"
            },

            {
                "source": "bd26",
                "target": "bd20"
            },
			
			{
                "source": "bd27",
                "target": "bd24"
            },

            {
                "source": "bd24",
                "target": "bd27"
            },
			
			{
                "source": "bd28",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd28"
            },
			
			{
                "source": "bd38",
                "target": "bd23"
            },

            {
                "source": "bd23",
                "target": "bd38"
            },
        ];

        var actual_connections = instance.getAllConnections();

				var is_connected_1_12 = false;
				var is_connected_2_11 = false;
				var is_connected_7_6 = false;
				var is_connected_8_5 = false;
				//var is_connected_9_3 = false;
				//var is_connected_10_23 = false;
				 var is_connected_4_35 = false;
				 var is_connected_14_31 = false;
				 var is_connected_32_18 = false;
				 var is_connected_33_22 = false;
				 var is_connected_34_23 = false;	
				 var is_connected_15_19 = false;
				 var is_connected_19_23 = false;
				 var is_connected_16_25 = false;
				 var is_connected_20_26 = false;
				 var is_connected_27_24 = false;
				 var is_connected_28_23 = false;
				 var is_connected_38_23 = false;
       
        var unallowed_connection_present = false;
        var count =0; // counts number of connection


        actual_connections.forEach(function (connection) {
            count++;
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }

            if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return (conn.source === this_connection.source && conn.target === this_connection.target);
                }));
            }
            // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false

        });

        //checking for 3_7 connection
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_2_11){
                is_connected_2_11 = correct_connections_2_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_7_6){
                is_connected_7_6 = correct_connections_7_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_8_5){
                is_connected_8_5 = correct_connections_8_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		/*actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_9_3){
                is_connected_9_3 = correct_connections_9_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_10_23){
                is_connected_10_23 = correct_connections_23_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });*/
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_4_35){
                is_connected_4_35 = correct_connections_4_35.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_14_31){
                is_connected_14_31 = correct_connections_14_31.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_32_18){
                is_connected_32_18 = correct_connections_32_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_33_22){
                is_connected_33_22 = correct_connections_33_22.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_34_23){
                is_connected_34_23 = correct_connections_34_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_15_19){
                is_connected_15_19 = correct_connections_15_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_19_23){
                is_connected_19_23 = correct_connections_19_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
        
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_16_25){
                is_connected_16_25 = correct_connections_16_25.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_20_26){
                is_connected_20_26 = correct_connections_20_26.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_27_24){
                is_connected_27_24 = correct_connections_27_24.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_28_23){
                is_connected_28_23 = correct_connections_28_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });
		
		actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if(!is_connected_38_23){
                is_connected_38_23 = correct_connections_38_23.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
              // if this_connection exists in correct_connections
            // remove this connection from correct ones
            // continue
            // else
            // return false
        });

        if (is_connected_1_12 && is_connected_2_11 && is_connected_7_6 && is_connected_8_5 /*&& is_connected_9_3 && is_connected_10_23*/ && is_connected_4_35 && is_connected_14_31 && is_connected_32_18 && is_connected_33_22 && is_connected_34_23 && is_connected_15_19 && is_connected_19_23 && is_connected_16_25 && is_connected_20_26 && is_connected_27_24 && is_connected_28_23 && is_connected_38_23 && !unallowed_connection_present) {
			
			if(document.getElementById('conph').value ==220 || document.getElementById('conph').value ==200 || document.getElementById('conph').value ==180 && document.getElementById('refph').value ==220 ){  
            alert("RIGHT CONNECTION \n START SIMULATION");
			document.getElementById('red_switch').style['pointer-events'] = "auto";
			document.getElementById('plot').disabled=false;
			document.getElementById('table').disabled=false;
			document.getElementById('tabledlt').disabled=false;
            }
			else if(document.getElementById('conph').value !=220 || document.getElementById('conph').value !=200 || document.getElementById('conph').value !=180 && document.getElementById('refph').value !=220) {
               alert("set the Control phase voltage and Reference phase voltage properly");
                
            } 
		}			
else{
	alert('wrong connection');
	
}


    });
});

//function deleteconnection(){
	//window.location.reload();
//}	
	
	
	
	
	
	
	
	
	
	
	
	
	







