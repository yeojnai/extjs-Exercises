Ext.application({
	name:'xx',
	launch : function() 
	{
Ext.create('Ext.container.Viewport', {
	id: 'viewport',
	layout: 'border',
	items: [
		
		{
		xtype: 'grid',
		region:	'center',

			title: 'User List',
			columns: [
				{ header: 'Username' },
				{ header: 'Name' },
				{ header: 'Password' }
		],
			height: 600,
			width: 900,
		},
		
		{
			xtype: 'panel',
			split: true,
			width: 320,
			bodyPadding: 10,
			align: 'right',
			region: 'east',
			title:'blah blah',
			
 	items: [
		{
			xtype: 'textfield',
			fieldLabel: 'Username'	
		},
		{
			xtype: 'textfield',
			fieldLabel: 'Password'
		},
		{
			xtype: 'textfield',
			fieldLabel: 'Email'
		},
		{
			xtype: 'textfield',
			fieldLabel: 'Name'
		},
		{
			xtype: 'textfield',
			fieldLabel: 'Salutation'
		}
	],
	buttons: [
		{
			xtype:'button',
			text:'New'
		},
		{
			xtype:'button',
			text:'Save'
		},
		{
			xtype:'button',
			text:'Delete'
		}
	],
	
		},
	
	],
	
});
}		

});
