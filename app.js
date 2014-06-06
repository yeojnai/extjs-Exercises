Ext.Loader.setConfig ({disableCaching:false});
Ext.Loader.setConfig({
		enable:true,
		paths: {
			pgp:'js/pgp'
		},	
	});
Ext.require('pgp.views.LoginPanel');	

Ext.onReady(function() {
	 Ext.onReady(function() {
			// create two instance of the 
			// login panel			
		Ext.create('pgp.views.LoginPanel', {
			renderTo: Ext.getBody(),
			PostUrl: 'user/add',
			title: 'Login'  
		});
					
		Ext.create('pgp.views.LoginPanel', {
			renderTo: Ext.getBody(),
			PostUrl: 'user/add',
			title: 'Login for admin' 
		});
	});	 
	Ext.create('Ext.container.Viewport', {
			id: 'viewport',
		    layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center'
		    },
			// create two instance of the 
			// login panel
			 items: [
				{
				   	xtype: 'xx',
					title: 'Login for members',
					
				},
				{
					xtype: 'xx',
					title: 'Login for admin',				
				}
			] 
		});
});