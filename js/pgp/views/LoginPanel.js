Ext.define('pgp.views.LoginPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xx',
	title: 'Enter credentials',
    defaultType: 'textfield',
    defaults: {
        anchor: '-10',
        labelWidth: 170,
		padding: 10,
    },
	postUrl: '',
    initComponent : function() {
		// initialize UI
        this.items = this.buildItems();
		this.buttons = this.buildButtons();
		// must always be called
        this.callParent(arguments);
    },
	buildItems: function(){
        return [
			{
	            xtype: 'textfield',
	            fieldLabel: 'Firstname',
				itemId: 'Fname'
	        }, 
			{
	            xtype: 'textfield',
				itemId: 'Lname',
				name: 'password',
	            fieldLabel: 'Lastname'
		
	        },
		];
    },	
	buildButtons: function() {
	var me = this;
	xxx = me;
	console.log(this);
		return [
			{
	            text: 'Submit',
	            handler: function() {
				
					// create a reference to component with itemId: 'username'
					
			Ext.Ajax.request({
			url: '/user/add',
			params: {
			Fname : me.down('#Fname').getValue(),
			Lname : me.down('#Lname').getValue()
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
		}
		];
	}
	
});