 Ext.onReady(function(){
   Ext.application({
    name   : 'Exam',

    launch : function() {
	var Exam =  Ext.create('Ext.Panel', {
            renderTo : Ext.getBody(),
            frame:true,
			width: 320,
			bodyPadding: 10,
			
			
			 defaultType: 'textfield',
			 defaults: {
			 anchor: '100%'
			},
            title    : 'Login',
           
		    items: [
        {
            allowBlank: false,
			xtype: 'textfield',
            fieldLabel: 'Firstname',
			id: 'Fname'
           // emptyText: 'user id'
        },
        {
            allowBlank: false,
			xtype: 'textfield',
            fieldLabel: 'Lastname',
			id:'Lname'
			
          //  emptyText: 'password',
            //inputType: 'password'
        },
       
    ],
	 buttons: [{
        text: 'Submit',
		 handler : function() {
					
	
										Ext.Ajax.request({
										   url: '/user/xxx',
										   params: {
												
												Fname : Exam.down('[id=Fname]').getValue(),
												Lname : Exam.down('[id=Lname]').getValue()
										   },
										   method: 'POST',
										   success: function(response, opts) {
											  //var obj = ((Ext.getCmp('first').getValue()) + " " + (Ext.getCmp('last').getValue()));
											  //console.dir(obj);
											  Ext.Msg.alert('!',response.responseText);
										   },
										   failure: function(response, opts) {
											  console.log('server-side failure with status code ' + response.status);
										   }
										});
               
            }
	
	}],
		  
        });
    }
}); 
 });
 
 