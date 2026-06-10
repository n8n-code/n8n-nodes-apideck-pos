import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { ordersDescription } from './resources/orders';
import { paymentsDescription } from './resources/payments';
import { merchantsDescription } from './resources/merchants';
import { locationsDescription } from './resources/locations';
import { itemsDescription } from './resources/items';
import { modifiersDescription } from './resources/modifiers';
import { modifierGroupsDescription } from './resources/modifier-groups';
import { orderTypesDescription } from './resources/order-types';
import { tendersDescription } from './resources/tenders';

export class ApideckPos implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Apideck Pos',
		name: 'N8nDevApideckPos',
		icon: { light: 'file:./apideck-pos.png', dark: 'file:./apideck-pos.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'POS API documentation.',
		defaults: { name: 'Apideck Pos' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevApideckPosApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Orders",
					"value": "Orders",
					"description": ""
				},
				{
					"name": "Payments",
					"value": "Payments",
					"description": ""
				},
				{
					"name": "Merchants",
					"value": "Merchants",
					"description": ""
				},
				{
					"name": "Locations",
					"value": "Locations",
					"description": ""
				},
				{
					"name": "Items",
					"value": "Items",
					"description": ""
				},
				{
					"name": "Modifiers",
					"value": "Modifiers",
					"description": ""
				},
				{
					"name": "Modifier Groups",
					"value": "Modifier Groups",
					"description": ""
				},
				{
					"name": "Order Types",
					"value": "Order Types",
					"description": ""
				},
				{
					"name": "Tenders",
					"value": "Tenders",
					"description": ""
				}
			],
			"default": ""
		},
		...ordersDescription,
		...paymentsDescription,
		...merchantsDescription,
		...locationsDescription,
		...itemsDescription,
		...modifiersDescription,
		...modifierGroupsDescription,
		...orderTypesDescription,
		...tendersDescription
		],
	};
}
