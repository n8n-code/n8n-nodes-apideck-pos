import type { INodeProperties } from 'n8n-workflow';

export const ordersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					]
				}
			},
			"options": [
				{
					"name": "Orders All",
					"value": "Orders All",
					"action": "List Orders",
					"description": "List Orders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pos/orders"
						}
					}
				},
				{
					"name": "Orders Add",
					"value": "Orders Add",
					"action": "Create Order",
					"description": "Create Order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/pos/orders"
						}
					}
				},
				{
					"name": "Orders Delete",
					"value": "Orders Delete",
					"action": "Delete Order",
					"description": "Delete Order",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/pos/orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Orders One",
					"value": "Orders One",
					"action": "Get Order",
					"description": "Get Order",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pos/orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Orders Update",
					"value": "Orders Update",
					"action": "Update Order",
					"description": "Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/pos/orders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Orders Pay",
					"value": "Orders Pay",
					"action": "Pay Order",
					"description": "Pay Order",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/pos/orders/{{$parameter[\"id\"]}}/pay"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pos/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "Cursor",
			"name": "cursor",
			"description": "Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cursor",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "Number of results to return. Minimum 1, Maximum 200, Default 20",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "Location ID",
			"name": "location_id",
			"description": "ID of the location.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "location_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders All"
					]
				}
			}
		},
		{
			"displayName": "POST /pos/orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Closed Date",
			"name": "closed_date",
			"type": "string",
			"default": "2022-08-13",
			"routing": {
				"send": {
					"property": "closed_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"description": "Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).",
			"options": [
				{
					"name": "UNKNOWN CURRENCY",
					"value": "UNKNOWN_CURRENCY"
				},
				{
					"name": "AED",
					"value": "AED"
				},
				{
					"name": "AFN",
					"value": "AFN"
				},
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "AMD",
					"value": "AMD"
				},
				{
					"name": "ANG",
					"value": "ANG"
				},
				{
					"name": "AOA",
					"value": "AOA"
				},
				{
					"name": "ARS",
					"value": "ARS"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "AWG",
					"value": "AWG"
				},
				{
					"name": "AZN",
					"value": "AZN"
				},
				{
					"name": "BAM",
					"value": "BAM"
				},
				{
					"name": "BBD",
					"value": "BBD"
				},
				{
					"name": "BDT",
					"value": "BDT"
				},
				{
					"name": "BGN",
					"value": "BGN"
				},
				{
					"name": "BHD",
					"value": "BHD"
				},
				{
					"name": "BIF",
					"value": "BIF"
				},
				{
					"name": "BMD",
					"value": "BMD"
				},
				{
					"name": "BND",
					"value": "BND"
				},
				{
					"name": "BOB",
					"value": "BOB"
				},
				{
					"name": "BOV",
					"value": "BOV"
				},
				{
					"name": "BRL",
					"value": "BRL"
				},
				{
					"name": "BSD",
					"value": "BSD"
				},
				{
					"name": "BTN",
					"value": "BTN"
				},
				{
					"name": "BWP",
					"value": "BWP"
				},
				{
					"name": "BYR",
					"value": "BYR"
				},
				{
					"name": "BZD",
					"value": "BZD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				},
				{
					"name": "CDF",
					"value": "CDF"
				},
				{
					"name": "CHE",
					"value": "CHE"
				},
				{
					"name": "CHF",
					"value": "CHF"
				},
				{
					"name": "CHW",
					"value": "CHW"
				},
				{
					"name": "CLF",
					"value": "CLF"
				},
				{
					"name": "CLP",
					"value": "CLP"
				},
				{
					"name": "CNY",
					"value": "CNY"
				},
				{
					"name": "COP",
					"value": "COP"
				},
				{
					"name": "COU",
					"value": "COU"
				},
				{
					"name": "CRC",
					"value": "CRC"
				},
				{
					"name": "CUC",
					"value": "CUC"
				},
				{
					"name": "CUP",
					"value": "CUP"
				},
				{
					"name": "CVE",
					"value": "CVE"
				},
				{
					"name": "CZK",
					"value": "CZK"
				},
				{
					"name": "DJF",
					"value": "DJF"
				},
				{
					"name": "DKK",
					"value": "DKK"
				},
				{
					"name": "DOP",
					"value": "DOP"
				},
				{
					"name": "DZD",
					"value": "DZD"
				},
				{
					"name": "EGP",
					"value": "EGP"
				},
				{
					"name": "ERN",
					"value": "ERN"
				},
				{
					"name": "ETB",
					"value": "ETB"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "FJD",
					"value": "FJD"
				},
				{
					"name": "FKP",
					"value": "FKP"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "GEL",
					"value": "GEL"
				},
				{
					"name": "GHS",
					"value": "GHS"
				},
				{
					"name": "GIP",
					"value": "GIP"
				},
				{
					"name": "GMD",
					"value": "GMD"
				},
				{
					"name": "GNF",
					"value": "GNF"
				},
				{
					"name": "GTQ",
					"value": "GTQ"
				},
				{
					"name": "GYD",
					"value": "GYD"
				},
				{
					"name": "HKD",
					"value": "HKD"
				},
				{
					"name": "HNL",
					"value": "HNL"
				},
				{
					"name": "HRK",
					"value": "HRK"
				},
				{
					"name": "HTG",
					"value": "HTG"
				},
				{
					"name": "HUF",
					"value": "HUF"
				},
				{
					"name": "IDR",
					"value": "IDR"
				},
				{
					"name": "ILS",
					"value": "ILS"
				},
				{
					"name": "INR",
					"value": "INR"
				},
				{
					"name": "IQD",
					"value": "IQD"
				},
				{
					"name": "IRR",
					"value": "IRR"
				},
				{
					"name": "ISK",
					"value": "ISK"
				},
				{
					"name": "JMD",
					"value": "JMD"
				},
				{
					"name": "JOD",
					"value": "JOD"
				},
				{
					"name": "JPY",
					"value": "JPY"
				},
				{
					"name": "KES",
					"value": "KES"
				},
				{
					"name": "KGS",
					"value": "KGS"
				},
				{
					"name": "KHR",
					"value": "KHR"
				},
				{
					"name": "KMF",
					"value": "KMF"
				},
				{
					"name": "KPW",
					"value": "KPW"
				},
				{
					"name": "KRW",
					"value": "KRW"
				},
				{
					"name": "KWD",
					"value": "KWD"
				},
				{
					"name": "KYD",
					"value": "KYD"
				},
				{
					"name": "KZT",
					"value": "KZT"
				},
				{
					"name": "LAK",
					"value": "LAK"
				},
				{
					"name": "LBP",
					"value": "LBP"
				},
				{
					"name": "LKR",
					"value": "LKR"
				},
				{
					"name": "LRD",
					"value": "LRD"
				},
				{
					"name": "LSL",
					"value": "LSL"
				},
				{
					"name": "LTL",
					"value": "LTL"
				},
				{
					"name": "LVL",
					"value": "LVL"
				},
				{
					"name": "LYD",
					"value": "LYD"
				},
				{
					"name": "MAD",
					"value": "MAD"
				},
				{
					"name": "MDL",
					"value": "MDL"
				},
				{
					"name": "MGA",
					"value": "MGA"
				},
				{
					"name": "MKD",
					"value": "MKD"
				},
				{
					"name": "MMK",
					"value": "MMK"
				},
				{
					"name": "MNT",
					"value": "MNT"
				},
				{
					"name": "MOP",
					"value": "MOP"
				},
				{
					"name": "MRO",
					"value": "MRO"
				},
				{
					"name": "MUR",
					"value": "MUR"
				},
				{
					"name": "MVR",
					"value": "MVR"
				},
				{
					"name": "MWK",
					"value": "MWK"
				},
				{
					"name": "MXN",
					"value": "MXN"
				},
				{
					"name": "MXV",
					"value": "MXV"
				},
				{
					"name": "MYR",
					"value": "MYR"
				},
				{
					"name": "MZN",
					"value": "MZN"
				},
				{
					"name": "NAD",
					"value": "NAD"
				},
				{
					"name": "NGN",
					"value": "NGN"
				},
				{
					"name": "NIO",
					"value": "NIO"
				},
				{
					"name": "NOK",
					"value": "NOK"
				},
				{
					"name": "NPR",
					"value": "NPR"
				},
				{
					"name": "NZD",
					"value": "NZD"
				},
				{
					"name": "OMR",
					"value": "OMR"
				},
				{
					"name": "PAB",
					"value": "PAB"
				},
				{
					"name": "PEN",
					"value": "PEN"
				},
				{
					"name": "PGK",
					"value": "PGK"
				},
				{
					"name": "PHP",
					"value": "PHP"
				},
				{
					"name": "PKR",
					"value": "PKR"
				},
				{
					"name": "PLN",
					"value": "PLN"
				},
				{
					"name": "PYG",
					"value": "PYG"
				},
				{
					"name": "QAR",
					"value": "QAR"
				},
				{
					"name": "RON",
					"value": "RON"
				},
				{
					"name": "RSD",
					"value": "RSD"
				},
				{
					"name": "RUB",
					"value": "RUB"
				},
				{
					"name": "RWF",
					"value": "RWF"
				},
				{
					"name": "SAR",
					"value": "SAR"
				},
				{
					"name": "SBD",
					"value": "SBD"
				},
				{
					"name": "SCR",
					"value": "SCR"
				},
				{
					"name": "SDG",
					"value": "SDG"
				},
				{
					"name": "SEK",
					"value": "SEK"
				},
				{
					"name": "SGD",
					"value": "SGD"
				},
				{
					"name": "SHP",
					"value": "SHP"
				},
				{
					"name": "SLL",
					"value": "SLL"
				},
				{
					"name": "SOS",
					"value": "SOS"
				},
				{
					"name": "SRD",
					"value": "SRD"
				},
				{
					"name": "SSP",
					"value": "SSP"
				},
				{
					"name": "STD",
					"value": "STD"
				},
				{
					"name": "SVC",
					"value": "SVC"
				},
				{
					"name": "SYP",
					"value": "SYP"
				},
				{
					"name": "SZL",
					"value": "SZL"
				},
				{
					"name": "THB",
					"value": "THB"
				},
				{
					"name": "TJS",
					"value": "TJS"
				},
				{
					"name": "TMT",
					"value": "TMT"
				},
				{
					"name": "TND",
					"value": "TND"
				},
				{
					"name": "TOP",
					"value": "TOP"
				},
				{
					"name": "TRC",
					"value": "TRC"
				},
				{
					"name": "TRY",
					"value": "TRY"
				},
				{
					"name": "TTD",
					"value": "TTD"
				},
				{
					"name": "TWD",
					"value": "TWD"
				},
				{
					"name": "TZS",
					"value": "TZS"
				},
				{
					"name": "UAH",
					"value": "UAH"
				},
				{
					"name": "UGX",
					"value": "UGX"
				},
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "USN",
					"value": "USN"
				},
				{
					"name": "USS",
					"value": "USS"
				},
				{
					"name": "UYI",
					"value": "UYI"
				},
				{
					"name": "UYU",
					"value": "UYU"
				},
				{
					"name": "UZS",
					"value": "UZS"
				},
				{
					"name": "VEF",
					"value": "VEF"
				},
				{
					"name": "VND",
					"value": "VND"
				},
				{
					"name": "VUV",
					"value": "VUV"
				},
				{
					"name": "WST",
					"value": "WST"
				},
				{
					"name": "XAF",
					"value": "XAF"
				},
				{
					"name": "XAG",
					"value": "XAG"
				},
				{
					"name": "XAU",
					"value": "XAU"
				},
				{
					"name": "XBA",
					"value": "XBA"
				},
				{
					"name": "XBB",
					"value": "XBB"
				},
				{
					"name": "XBC",
					"value": "XBC"
				},
				{
					"name": "XBD",
					"value": "XBD"
				},
				{
					"name": "XCD",
					"value": "XCD"
				},
				{
					"name": "XDR",
					"value": "XDR"
				},
				{
					"name": "XOF",
					"value": "XOF"
				},
				{
					"name": "XPD",
					"value": "XPD"
				},
				{
					"name": "XPF",
					"value": "XPF"
				},
				{
					"name": "XPT",
					"value": "XPT"
				},
				{
					"name": "XTS",
					"value": "XTS"
				},
				{
					"name": "XXX",
					"value": "XXX"
				},
				{
					"name": "YER",
					"value": "YER"
				},
				{
					"name": "ZAR",
					"value": "ZAR"
				},
				{
					"name": "ZMK",
					"value": "ZMK"
				},
				{
					"name": "ZMW",
					"value": "ZMW"
				},
				{
					"name": "BTC",
					"value": "BTC"
				},
				{
					"name": "ETH",
					"value": "ETH"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Customer ID",
			"name": "customer_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "customer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Customers",
			"name": "customers",
			"type": "json",
			"default": "[\n  {\n    \"emails\": [\n      {\n        \"email\": \"elon@musk.com\",\n        \"id\": \"123\",\n        \"type\": \"primary\"\n      }\n    ],\n    \"first_name\": \"Elon\",\n    \"id\": \"12345\",\n    \"last_name\": \"Musk\",\n    \"middle_name\": \"D.\",\n    \"phone_numbers\": [\n      {\n        \"area_code\": \"323\",\n        \"country_code\": \"1\",\n        \"extension\": \"105\",\n        \"id\": \"12345\",\n        \"number\": \"111-111-1111\",\n        \"type\": \"primary\"\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "customers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Discounts",
			"name": "discounts",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"10% off\",\n    \"product_id\": {},\n    \"scope\": \"order\",\n    \"type\": \"percentage\"\n  }\n]",
			"routing": {
				"send": {
					"property": "discounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employee_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "employee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Fulfillments",
			"name": "fulfillments",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"pickup_details\": {\n      \"accepted_at\": \"2020-09-30T07:43:32.000Z\",\n      \"auto_complete_duration\": \"P1W3D\",\n      \"cancel_reason\": \"Not hungry\",\n      \"canceled_at\": \"2016-09-04T23:59:33.123Z\",\n      \"curbside_pickup_details\": {\n        \"buyer_arrived_at\": \"2016-09-04T23:59:33.123Z\"\n      },\n      \"expired_at\": \"2016-09-04T23:59:33.123Z\",\n      \"expires_at\": \"2016-09-04T23:59:33.123Z\",\n      \"note\": \"Pickup in the back.\",\n      \"picked_up_at\": \"2016-09-04T23:59:33.123Z\",\n      \"pickup_at\": \"2016-09-04T23:59:33.123Z\",\n      \"pickup_window_duration\": \"P1W3D\",\n      \"placed_at\": \"2016-09-04T23:59:33.123Z\",\n      \"prep_time_duration\": \"P1W3D\",\n      \"ready_at\": \"2016-09-04T23:59:33.123Z\",\n      \"recipient\": {\n        \"address\": {\n          \"city\": \"San Francisco\",\n          \"contact_name\": \"Elon Musk\",\n          \"country\": \"US\",\n          \"county\": \"Santa Clara\",\n          \"email\": \"elon@musk.com\",\n          \"fax\": \"122-111-1111\",\n          \"id\": \"123\",\n          \"latitude\": \"40.759211\",\n          \"line1\": \"Main street\",\n          \"line2\": \"apt #\",\n          \"line3\": \"Suite #\",\n          \"line4\": \"delivery instructions\",\n          \"longitude\": \"-73.984638\",\n          \"name\": \"HQ US\",\n          \"phone_number\": \"111-111-1111\",\n          \"postal_code\": \"94104\",\n          \"row_version\": \"1-12345\",\n          \"salutation\": \"Mr\",\n          \"state\": \"CA\",\n          \"street_number\": \"25\",\n          \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n          \"type\": \"primary\",\n          \"website\": \"https://elonmusk.com\"\n        },\n        \"customer_id\": \"12345\",\n        \"display_name\": \"Elon Musk\",\n        \"email\": {\n          \"email\": \"elon@musk.com\",\n          \"id\": \"123\",\n          \"type\": \"primary\"\n        },\n        \"phone_number\": {\n          \"area_code\": \"323\",\n          \"country_code\": \"1\",\n          \"extension\": \"105\",\n          \"id\": \"12345\",\n          \"number\": \"111-111-1111\",\n          \"type\": \"primary\"\n        }\n      },\n      \"rejected_at\": \"2016-09-04T23:59:33.123Z\"\n    },\n    \"shipment_details\": {},\n    \"type\": \"shipment\"\n  }\n]",
			"routing": {
				"send": {
					"property": "fulfillments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Key",
			"name": "idempotency_key",
			"type": "string",
			"default": "random_string",
			"description": "A value you specify that uniquely identifies this request among requests you have sent.",
			"routing": {
				"send": {
					"property": "idempotency_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Line Items",
			"name": "line_items",
			"type": "json",
			"default": "[\n  {\n    \"applied_discounts\": [\n      {\n        \"amount\": 27500,\n        \"currency\": \"USD\",\n        \"discount_id\": \"12345\",\n        \"id\": \"12345\"\n      }\n    ],\n    \"applied_taxes\": [\n      {\n        \"amount\": 27500,\n        \"currency\": {},\n        \"id\": {},\n        \"tax_id\": \"sales-tax\"\n      }\n    ],\n    \"id\": {},\n    \"item\": {\n      \"id\": {}\n    },\n    \"modifiers\": [\n      {\n        \"alternate_name\": \"Modifier New\",\n        \"amount\": 27500,\n        \"currency\": {},\n        \"id\": \"12345\",\n        \"modifier_group_id\": \"123\",\n        \"name\": \"New York Strip Steak - no cheese\"\n      }\n    ],\n    \"name\": \"New York Strip Steak\",\n    \"quantity\": 1,\n    \"total_amount\": 27500,\n    \"total_discount\": 3000,\n    \"total_tax\": 2000,\n    \"unit_price\": 27500.5\n  }\n]",
			"routing": {
				"send": {
					"property": "line_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location ID",
			"name": "location_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant ID",
			"name": "merchant_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "merchant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "A note with information about this order, may be printed on the order receipt and displayed in apps",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Order Date",
			"name": "order_date",
			"type": "string",
			"default": "2022-08-12",
			"routing": {
				"send": {
					"property": "order_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Order Number",
			"name": "order_number",
			"type": "string",
			"default": "1F",
			"routing": {
				"send": {
					"property": "order_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Order Type ID",
			"name": "order_type_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "order_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Payment Status",
			"name": "payment_status",
			"type": "options",
			"default": "open",
			"description": "Is this order paid or not?",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Paid",
					"value": "paid"
				},
				{
					"name": "Refunded",
					"value": "refunded"
				},
				{
					"name": "Credited",
					"value": "credited"
				},
				{
					"name": "Partially Paid",
					"value": "partially_paid"
				},
				{
					"name": "Partially Refunded",
					"value": "partially_refunded"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				}
			],
			"routing": {
				"send": {
					"property": "payment_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Payments",
			"name": "payments",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\"\n  }\n]",
			"routing": {
				"send": {
					"property": "payments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Reference ID",
			"name": "reference_id",
			"type": "string",
			"default": "my-order-001",
			"description": "An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.",
			"routing": {
				"send": {
					"property": "reference_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Refunded",
			"name": "refunded",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "refunded",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Refunds",
			"name": "refunds",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"location_id\": {},\n    \"reason\": \"The reason for the refund being issued.\",\n    \"tender_id\": {},\n    \"transaction_id\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "refunds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Seat",
			"name": "seat",
			"type": "string",
			"default": "23F",
			"routing": {
				"send": {
					"property": "seat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Service Charges",
			"name": "service_charges",
			"type": "json",
			"default": "[\n  {\n    \"active\": true,\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"Charge for delivery\",\n    \"percentage\": 12.5\n  }\n]",
			"description": "Optional service charges or gratuity tip applied to the order.",
			"routing": {
				"send": {
					"property": "service_charges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "options",
			"default": "api",
			"description": "Source of order. Indicates the way that the order was placed.",
			"options": [
				{
					"name": "In Store",
					"value": "in-store"
				},
				{
					"name": "Online",
					"value": "online"
				},
				{
					"name": "Opt",
					"value": "opt"
				},
				{
					"name": "API",
					"value": "api"
				},
				{
					"name": "Kiosk",
					"value": "kiosk"
				},
				{
					"name": "Caller ID",
					"value": "caller-id"
				},
				{
					"name": "Google",
					"value": "google"
				},
				{
					"name": "Invoice",
					"value": "invoice"
				}
			],
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "open",
			"description": "Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Draft",
					"value": "draft"
				},
				{
					"name": "Delivered",
					"value": "delivered"
				},
				{
					"name": "Delayed",
					"value": "delayed"
				},
				{
					"name": "Voided",
					"value": "voided"
				},
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Table",
			"name": "table",
			"type": "string",
			"default": "1F",
			"routing": {
				"send": {
					"property": "table",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Taxes",
			"name": "taxes",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"auto_applied\": true,\n    \"currency\": \"USD\",\n    \"id\": \"state-sales-tax\",\n    \"name\": \"State Sales Tax\",\n    \"percentage\": 15\n  }\n]",
			"routing": {
				"send": {
					"property": "taxes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Tenders",
			"name": "tenders",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"buyer_tendered_cash_amount\": 27500,\n    \"card\": {\n      \"billing_address\": {\n        \"city\": \"San Francisco\",\n        \"contact_name\": \"Elon Musk\",\n        \"country\": \"US\",\n        \"county\": \"Santa Clara\",\n        \"email\": \"elon@musk.com\",\n        \"fax\": \"122-111-1111\",\n        \"id\": \"123\",\n        \"latitude\": \"40.759211\",\n        \"line1\": \"Main street\",\n        \"line2\": \"apt #\",\n        \"line3\": \"Suite #\",\n        \"line4\": \"delivery instructions\",\n        \"longitude\": \"-73.984638\",\n        \"name\": \"HQ US\",\n        \"phone_number\": \"111-111-1111\",\n        \"postal_code\": \"94104\",\n        \"row_version\": \"1-12345\",\n        \"salutation\": \"Mr\",\n        \"state\": \"CA\",\n        \"street_number\": \"25\",\n        \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n        \"type\": \"primary\",\n        \"website\": \"https://elonmusk.com\"\n      },\n      \"bin\": \"41111\",\n      \"card_type\": \"credit\",\n      \"cardholder_name\": \"John Doe\",\n      \"customer_id\": \"12345\",\n      \"enabled\": true,\n      \"exp_month\": 1,\n      \"exp_year\": 2022,\n      \"fingerprint\": \" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.\",\n      \"id\": \"12345\",\n      \"last_4\": \"The last 4 digits of the card number.\",\n      \"merchant_id\": \"12345\",\n      \"prepaid_type\": \"prepaid\",\n      \"reference_id\": \"card-001\",\n      \"version\": \"230320320320\"\n    },\n    \"card_entry_method\": \"swiped\",\n    \"card_status\": \"authorized\",\n    \"change_back_cash_amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": {},\n    \"location_id\": {},\n    \"name\": \"10% off\",\n    \"note\": \"An optional note associated with the tender at the time of payment.\",\n    \"payment_id\": {},\n    \"percentage\": 10,\n    \"total_amount\": 27.5,\n    \"total_discount\": 3,\n    \"total_processing_fee\": 0,\n    \"total_refund\": 0,\n    \"total_service_charge\": 0,\n    \"total_tax\": 2.75,\n    \"total_tip\": 7,\n    \"transaction_id\": {},\n    \"type\": \"cash\"\n  }\n]",
			"routing": {
				"send": {
					"property": "tenders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Total Amount",
			"name": "total_amount",
			"type": "number",
			"default": 275,
			"routing": {
				"send": {
					"property": "total_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Total Discount",
			"name": "total_discount",
			"type": "number",
			"default": 300,
			"routing": {
				"send": {
					"property": "total_discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Total Refund",
			"name": "total_refund",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "total_refund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Total Service Charge",
			"name": "total_service_charge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "total_service_charge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Total Tax",
			"name": "total_tax",
			"type": "number",
			"default": 275,
			"routing": {
				"send": {
					"property": "total_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Total Tip",
			"name": "total_tip",
			"type": "number",
			"default": 700,
			"routing": {
				"send": {
					"property": "total_tip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "230320320320",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Voided",
			"name": "voided",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "voided",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "Voided At",
			"name": "voided_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "voided_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /pos/orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Delete"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Delete"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Delete"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Delete"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /pos/orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /pos/orders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Closed Date",
			"name": "closed_date",
			"type": "string",
			"default": "2022-08-13",
			"routing": {
				"send": {
					"property": "closed_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"description": "Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).",
			"options": [
				{
					"name": "UNKNOWN CURRENCY",
					"value": "UNKNOWN_CURRENCY"
				},
				{
					"name": "AED",
					"value": "AED"
				},
				{
					"name": "AFN",
					"value": "AFN"
				},
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "AMD",
					"value": "AMD"
				},
				{
					"name": "ANG",
					"value": "ANG"
				},
				{
					"name": "AOA",
					"value": "AOA"
				},
				{
					"name": "ARS",
					"value": "ARS"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "AWG",
					"value": "AWG"
				},
				{
					"name": "AZN",
					"value": "AZN"
				},
				{
					"name": "BAM",
					"value": "BAM"
				},
				{
					"name": "BBD",
					"value": "BBD"
				},
				{
					"name": "BDT",
					"value": "BDT"
				},
				{
					"name": "BGN",
					"value": "BGN"
				},
				{
					"name": "BHD",
					"value": "BHD"
				},
				{
					"name": "BIF",
					"value": "BIF"
				},
				{
					"name": "BMD",
					"value": "BMD"
				},
				{
					"name": "BND",
					"value": "BND"
				},
				{
					"name": "BOB",
					"value": "BOB"
				},
				{
					"name": "BOV",
					"value": "BOV"
				},
				{
					"name": "BRL",
					"value": "BRL"
				},
				{
					"name": "BSD",
					"value": "BSD"
				},
				{
					"name": "BTN",
					"value": "BTN"
				},
				{
					"name": "BWP",
					"value": "BWP"
				},
				{
					"name": "BYR",
					"value": "BYR"
				},
				{
					"name": "BZD",
					"value": "BZD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				},
				{
					"name": "CDF",
					"value": "CDF"
				},
				{
					"name": "CHE",
					"value": "CHE"
				},
				{
					"name": "CHF",
					"value": "CHF"
				},
				{
					"name": "CHW",
					"value": "CHW"
				},
				{
					"name": "CLF",
					"value": "CLF"
				},
				{
					"name": "CLP",
					"value": "CLP"
				},
				{
					"name": "CNY",
					"value": "CNY"
				},
				{
					"name": "COP",
					"value": "COP"
				},
				{
					"name": "COU",
					"value": "COU"
				},
				{
					"name": "CRC",
					"value": "CRC"
				},
				{
					"name": "CUC",
					"value": "CUC"
				},
				{
					"name": "CUP",
					"value": "CUP"
				},
				{
					"name": "CVE",
					"value": "CVE"
				},
				{
					"name": "CZK",
					"value": "CZK"
				},
				{
					"name": "DJF",
					"value": "DJF"
				},
				{
					"name": "DKK",
					"value": "DKK"
				},
				{
					"name": "DOP",
					"value": "DOP"
				},
				{
					"name": "DZD",
					"value": "DZD"
				},
				{
					"name": "EGP",
					"value": "EGP"
				},
				{
					"name": "ERN",
					"value": "ERN"
				},
				{
					"name": "ETB",
					"value": "ETB"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "FJD",
					"value": "FJD"
				},
				{
					"name": "FKP",
					"value": "FKP"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "GEL",
					"value": "GEL"
				},
				{
					"name": "GHS",
					"value": "GHS"
				},
				{
					"name": "GIP",
					"value": "GIP"
				},
				{
					"name": "GMD",
					"value": "GMD"
				},
				{
					"name": "GNF",
					"value": "GNF"
				},
				{
					"name": "GTQ",
					"value": "GTQ"
				},
				{
					"name": "GYD",
					"value": "GYD"
				},
				{
					"name": "HKD",
					"value": "HKD"
				},
				{
					"name": "HNL",
					"value": "HNL"
				},
				{
					"name": "HRK",
					"value": "HRK"
				},
				{
					"name": "HTG",
					"value": "HTG"
				},
				{
					"name": "HUF",
					"value": "HUF"
				},
				{
					"name": "IDR",
					"value": "IDR"
				},
				{
					"name": "ILS",
					"value": "ILS"
				},
				{
					"name": "INR",
					"value": "INR"
				},
				{
					"name": "IQD",
					"value": "IQD"
				},
				{
					"name": "IRR",
					"value": "IRR"
				},
				{
					"name": "ISK",
					"value": "ISK"
				},
				{
					"name": "JMD",
					"value": "JMD"
				},
				{
					"name": "JOD",
					"value": "JOD"
				},
				{
					"name": "JPY",
					"value": "JPY"
				},
				{
					"name": "KES",
					"value": "KES"
				},
				{
					"name": "KGS",
					"value": "KGS"
				},
				{
					"name": "KHR",
					"value": "KHR"
				},
				{
					"name": "KMF",
					"value": "KMF"
				},
				{
					"name": "KPW",
					"value": "KPW"
				},
				{
					"name": "KRW",
					"value": "KRW"
				},
				{
					"name": "KWD",
					"value": "KWD"
				},
				{
					"name": "KYD",
					"value": "KYD"
				},
				{
					"name": "KZT",
					"value": "KZT"
				},
				{
					"name": "LAK",
					"value": "LAK"
				},
				{
					"name": "LBP",
					"value": "LBP"
				},
				{
					"name": "LKR",
					"value": "LKR"
				},
				{
					"name": "LRD",
					"value": "LRD"
				},
				{
					"name": "LSL",
					"value": "LSL"
				},
				{
					"name": "LTL",
					"value": "LTL"
				},
				{
					"name": "LVL",
					"value": "LVL"
				},
				{
					"name": "LYD",
					"value": "LYD"
				},
				{
					"name": "MAD",
					"value": "MAD"
				},
				{
					"name": "MDL",
					"value": "MDL"
				},
				{
					"name": "MGA",
					"value": "MGA"
				},
				{
					"name": "MKD",
					"value": "MKD"
				},
				{
					"name": "MMK",
					"value": "MMK"
				},
				{
					"name": "MNT",
					"value": "MNT"
				},
				{
					"name": "MOP",
					"value": "MOP"
				},
				{
					"name": "MRO",
					"value": "MRO"
				},
				{
					"name": "MUR",
					"value": "MUR"
				},
				{
					"name": "MVR",
					"value": "MVR"
				},
				{
					"name": "MWK",
					"value": "MWK"
				},
				{
					"name": "MXN",
					"value": "MXN"
				},
				{
					"name": "MXV",
					"value": "MXV"
				},
				{
					"name": "MYR",
					"value": "MYR"
				},
				{
					"name": "MZN",
					"value": "MZN"
				},
				{
					"name": "NAD",
					"value": "NAD"
				},
				{
					"name": "NGN",
					"value": "NGN"
				},
				{
					"name": "NIO",
					"value": "NIO"
				},
				{
					"name": "NOK",
					"value": "NOK"
				},
				{
					"name": "NPR",
					"value": "NPR"
				},
				{
					"name": "NZD",
					"value": "NZD"
				},
				{
					"name": "OMR",
					"value": "OMR"
				},
				{
					"name": "PAB",
					"value": "PAB"
				},
				{
					"name": "PEN",
					"value": "PEN"
				},
				{
					"name": "PGK",
					"value": "PGK"
				},
				{
					"name": "PHP",
					"value": "PHP"
				},
				{
					"name": "PKR",
					"value": "PKR"
				},
				{
					"name": "PLN",
					"value": "PLN"
				},
				{
					"name": "PYG",
					"value": "PYG"
				},
				{
					"name": "QAR",
					"value": "QAR"
				},
				{
					"name": "RON",
					"value": "RON"
				},
				{
					"name": "RSD",
					"value": "RSD"
				},
				{
					"name": "RUB",
					"value": "RUB"
				},
				{
					"name": "RWF",
					"value": "RWF"
				},
				{
					"name": "SAR",
					"value": "SAR"
				},
				{
					"name": "SBD",
					"value": "SBD"
				},
				{
					"name": "SCR",
					"value": "SCR"
				},
				{
					"name": "SDG",
					"value": "SDG"
				},
				{
					"name": "SEK",
					"value": "SEK"
				},
				{
					"name": "SGD",
					"value": "SGD"
				},
				{
					"name": "SHP",
					"value": "SHP"
				},
				{
					"name": "SLL",
					"value": "SLL"
				},
				{
					"name": "SOS",
					"value": "SOS"
				},
				{
					"name": "SRD",
					"value": "SRD"
				},
				{
					"name": "SSP",
					"value": "SSP"
				},
				{
					"name": "STD",
					"value": "STD"
				},
				{
					"name": "SVC",
					"value": "SVC"
				},
				{
					"name": "SYP",
					"value": "SYP"
				},
				{
					"name": "SZL",
					"value": "SZL"
				},
				{
					"name": "THB",
					"value": "THB"
				},
				{
					"name": "TJS",
					"value": "TJS"
				},
				{
					"name": "TMT",
					"value": "TMT"
				},
				{
					"name": "TND",
					"value": "TND"
				},
				{
					"name": "TOP",
					"value": "TOP"
				},
				{
					"name": "TRC",
					"value": "TRC"
				},
				{
					"name": "TRY",
					"value": "TRY"
				},
				{
					"name": "TTD",
					"value": "TTD"
				},
				{
					"name": "TWD",
					"value": "TWD"
				},
				{
					"name": "TZS",
					"value": "TZS"
				},
				{
					"name": "UAH",
					"value": "UAH"
				},
				{
					"name": "UGX",
					"value": "UGX"
				},
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "USN",
					"value": "USN"
				},
				{
					"name": "USS",
					"value": "USS"
				},
				{
					"name": "UYI",
					"value": "UYI"
				},
				{
					"name": "UYU",
					"value": "UYU"
				},
				{
					"name": "UZS",
					"value": "UZS"
				},
				{
					"name": "VEF",
					"value": "VEF"
				},
				{
					"name": "VND",
					"value": "VND"
				},
				{
					"name": "VUV",
					"value": "VUV"
				},
				{
					"name": "WST",
					"value": "WST"
				},
				{
					"name": "XAF",
					"value": "XAF"
				},
				{
					"name": "XAG",
					"value": "XAG"
				},
				{
					"name": "XAU",
					"value": "XAU"
				},
				{
					"name": "XBA",
					"value": "XBA"
				},
				{
					"name": "XBB",
					"value": "XBB"
				},
				{
					"name": "XBC",
					"value": "XBC"
				},
				{
					"name": "XBD",
					"value": "XBD"
				},
				{
					"name": "XCD",
					"value": "XCD"
				},
				{
					"name": "XDR",
					"value": "XDR"
				},
				{
					"name": "XOF",
					"value": "XOF"
				},
				{
					"name": "XPD",
					"value": "XPD"
				},
				{
					"name": "XPF",
					"value": "XPF"
				},
				{
					"name": "XPT",
					"value": "XPT"
				},
				{
					"name": "XTS",
					"value": "XTS"
				},
				{
					"name": "XXX",
					"value": "XXX"
				},
				{
					"name": "YER",
					"value": "YER"
				},
				{
					"name": "ZAR",
					"value": "ZAR"
				},
				{
					"name": "ZMK",
					"value": "ZMK"
				},
				{
					"name": "ZMW",
					"value": "ZMW"
				},
				{
					"name": "BTC",
					"value": "BTC"
				},
				{
					"name": "ETH",
					"value": "ETH"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Customer ID",
			"name": "customer_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "customer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Customers",
			"name": "customers",
			"type": "json",
			"default": "[\n  {\n    \"emails\": [\n      {\n        \"email\": \"elon@musk.com\",\n        \"id\": \"123\",\n        \"type\": \"primary\"\n      }\n    ],\n    \"first_name\": \"Elon\",\n    \"id\": \"12345\",\n    \"last_name\": \"Musk\",\n    \"middle_name\": \"D.\",\n    \"phone_numbers\": [\n      {\n        \"area_code\": \"323\",\n        \"country_code\": \"1\",\n        \"extension\": \"105\",\n        \"id\": \"12345\",\n        \"number\": \"111-111-1111\",\n        \"type\": \"primary\"\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "customers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Discounts",
			"name": "discounts",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"10% off\",\n    \"product_id\": {},\n    \"scope\": \"order\",\n    \"type\": \"percentage\"\n  }\n]",
			"routing": {
				"send": {
					"property": "discounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employee_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "employee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Fulfillments",
			"name": "fulfillments",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"pickup_details\": {\n      \"accepted_at\": \"2020-09-30T07:43:32.000Z\",\n      \"auto_complete_duration\": \"P1W3D\",\n      \"cancel_reason\": \"Not hungry\",\n      \"canceled_at\": \"2016-09-04T23:59:33.123Z\",\n      \"curbside_pickup_details\": {\n        \"buyer_arrived_at\": \"2016-09-04T23:59:33.123Z\"\n      },\n      \"expired_at\": \"2016-09-04T23:59:33.123Z\",\n      \"expires_at\": \"2016-09-04T23:59:33.123Z\",\n      \"note\": \"Pickup in the back.\",\n      \"picked_up_at\": \"2016-09-04T23:59:33.123Z\",\n      \"pickup_at\": \"2016-09-04T23:59:33.123Z\",\n      \"pickup_window_duration\": \"P1W3D\",\n      \"placed_at\": \"2016-09-04T23:59:33.123Z\",\n      \"prep_time_duration\": \"P1W3D\",\n      \"ready_at\": \"2016-09-04T23:59:33.123Z\",\n      \"recipient\": {\n        \"address\": {\n          \"city\": \"San Francisco\",\n          \"contact_name\": \"Elon Musk\",\n          \"country\": \"US\",\n          \"county\": \"Santa Clara\",\n          \"email\": \"elon@musk.com\",\n          \"fax\": \"122-111-1111\",\n          \"id\": \"123\",\n          \"latitude\": \"40.759211\",\n          \"line1\": \"Main street\",\n          \"line2\": \"apt #\",\n          \"line3\": \"Suite #\",\n          \"line4\": \"delivery instructions\",\n          \"longitude\": \"-73.984638\",\n          \"name\": \"HQ US\",\n          \"phone_number\": \"111-111-1111\",\n          \"postal_code\": \"94104\",\n          \"row_version\": \"1-12345\",\n          \"salutation\": \"Mr\",\n          \"state\": \"CA\",\n          \"street_number\": \"25\",\n          \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n          \"type\": \"primary\",\n          \"website\": \"https://elonmusk.com\"\n        },\n        \"customer_id\": \"12345\",\n        \"display_name\": \"Elon Musk\",\n        \"email\": {\n          \"email\": \"elon@musk.com\",\n          \"id\": \"123\",\n          \"type\": \"primary\"\n        },\n        \"phone_number\": {\n          \"area_code\": \"323\",\n          \"country_code\": \"1\",\n          \"extension\": \"105\",\n          \"id\": \"12345\",\n          \"number\": \"111-111-1111\",\n          \"type\": \"primary\"\n        }\n      },\n      \"rejected_at\": \"2016-09-04T23:59:33.123Z\"\n    },\n    \"shipment_details\": {},\n    \"type\": \"shipment\"\n  }\n]",
			"routing": {
				"send": {
					"property": "fulfillments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Key",
			"name": "idempotency_key",
			"type": "string",
			"default": "random_string",
			"description": "A value you specify that uniquely identifies this request among requests you have sent.",
			"routing": {
				"send": {
					"property": "idempotency_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Line Items",
			"name": "line_items",
			"type": "json",
			"default": "[\n  {\n    \"applied_discounts\": [\n      {\n        \"amount\": 27500,\n        \"currency\": \"USD\",\n        \"discount_id\": \"12345\",\n        \"id\": \"12345\"\n      }\n    ],\n    \"applied_taxes\": [\n      {\n        \"amount\": 27500,\n        \"currency\": {},\n        \"id\": {},\n        \"tax_id\": \"sales-tax\"\n      }\n    ],\n    \"id\": {},\n    \"item\": {\n      \"id\": {}\n    },\n    \"modifiers\": [\n      {\n        \"alternate_name\": \"Modifier New\",\n        \"amount\": 27500,\n        \"currency\": {},\n        \"id\": \"12345\",\n        \"modifier_group_id\": \"123\",\n        \"name\": \"New York Strip Steak - no cheese\"\n      }\n    ],\n    \"name\": \"New York Strip Steak\",\n    \"quantity\": 1,\n    \"total_amount\": 27500,\n    \"total_discount\": 3000,\n    \"total_tax\": 2000,\n    \"unit_price\": 27500.5\n  }\n]",
			"routing": {
				"send": {
					"property": "line_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location ID",
			"name": "location_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant ID",
			"name": "merchant_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "merchant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "A note with information about this order, may be printed on the order receipt and displayed in apps",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Order Date",
			"name": "order_date",
			"type": "string",
			"default": "2022-08-12",
			"routing": {
				"send": {
					"property": "order_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Order Number",
			"name": "order_number",
			"type": "string",
			"default": "1F",
			"routing": {
				"send": {
					"property": "order_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Order Type ID",
			"name": "order_type_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "order_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Payment Status",
			"name": "payment_status",
			"type": "options",
			"default": "open",
			"description": "Is this order paid or not?",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Paid",
					"value": "paid"
				},
				{
					"name": "Refunded",
					"value": "refunded"
				},
				{
					"name": "Credited",
					"value": "credited"
				},
				{
					"name": "Partially Paid",
					"value": "partially_paid"
				},
				{
					"name": "Partially Refunded",
					"value": "partially_refunded"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				}
			],
			"routing": {
				"send": {
					"property": "payment_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Payments",
			"name": "payments",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\"\n  }\n]",
			"routing": {
				"send": {
					"property": "payments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Reference ID",
			"name": "reference_id",
			"type": "string",
			"default": "my-order-001",
			"description": "An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.",
			"routing": {
				"send": {
					"property": "reference_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Refunded",
			"name": "refunded",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "refunded",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Refunds",
			"name": "refunds",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"location_id\": {},\n    \"reason\": \"The reason for the refund being issued.\",\n    \"tender_id\": {},\n    \"transaction_id\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "refunds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Seat",
			"name": "seat",
			"type": "string",
			"default": "23F",
			"routing": {
				"send": {
					"property": "seat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Service Charges",
			"name": "service_charges",
			"type": "json",
			"default": "[\n  {\n    \"active\": true,\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"Charge for delivery\",\n    \"percentage\": 12.5\n  }\n]",
			"description": "Optional service charges or gratuity tip applied to the order.",
			"routing": {
				"send": {
					"property": "service_charges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "options",
			"default": "api",
			"description": "Source of order. Indicates the way that the order was placed.",
			"options": [
				{
					"name": "In Store",
					"value": "in-store"
				},
				{
					"name": "Online",
					"value": "online"
				},
				{
					"name": "Opt",
					"value": "opt"
				},
				{
					"name": "API",
					"value": "api"
				},
				{
					"name": "Kiosk",
					"value": "kiosk"
				},
				{
					"name": "Caller ID",
					"value": "caller-id"
				},
				{
					"name": "Google",
					"value": "google"
				},
				{
					"name": "Invoice",
					"value": "invoice"
				}
			],
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "open",
			"description": "Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Draft",
					"value": "draft"
				},
				{
					"name": "Delivered",
					"value": "delivered"
				},
				{
					"name": "Delayed",
					"value": "delayed"
				},
				{
					"name": "Voided",
					"value": "voided"
				},
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Table",
			"name": "table",
			"type": "string",
			"default": "1F",
			"routing": {
				"send": {
					"property": "table",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Taxes",
			"name": "taxes",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"auto_applied\": true,\n    \"currency\": \"USD\",\n    \"id\": \"state-sales-tax\",\n    \"name\": \"State Sales Tax\",\n    \"percentage\": 15\n  }\n]",
			"routing": {
				"send": {
					"property": "taxes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Tenders",
			"name": "tenders",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"buyer_tendered_cash_amount\": 27500,\n    \"card\": {\n      \"billing_address\": {\n        \"city\": \"San Francisco\",\n        \"contact_name\": \"Elon Musk\",\n        \"country\": \"US\",\n        \"county\": \"Santa Clara\",\n        \"email\": \"elon@musk.com\",\n        \"fax\": \"122-111-1111\",\n        \"id\": \"123\",\n        \"latitude\": \"40.759211\",\n        \"line1\": \"Main street\",\n        \"line2\": \"apt #\",\n        \"line3\": \"Suite #\",\n        \"line4\": \"delivery instructions\",\n        \"longitude\": \"-73.984638\",\n        \"name\": \"HQ US\",\n        \"phone_number\": \"111-111-1111\",\n        \"postal_code\": \"94104\",\n        \"row_version\": \"1-12345\",\n        \"salutation\": \"Mr\",\n        \"state\": \"CA\",\n        \"street_number\": \"25\",\n        \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n        \"type\": \"primary\",\n        \"website\": \"https://elonmusk.com\"\n      },\n      \"bin\": \"41111\",\n      \"card_type\": \"credit\",\n      \"cardholder_name\": \"John Doe\",\n      \"customer_id\": \"12345\",\n      \"enabled\": true,\n      \"exp_month\": 1,\n      \"exp_year\": 2022,\n      \"fingerprint\": \" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.\",\n      \"id\": \"12345\",\n      \"last_4\": \"The last 4 digits of the card number.\",\n      \"merchant_id\": \"12345\",\n      \"prepaid_type\": \"prepaid\",\n      \"reference_id\": \"card-001\",\n      \"version\": \"230320320320\"\n    },\n    \"card_entry_method\": \"swiped\",\n    \"card_status\": \"authorized\",\n    \"change_back_cash_amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": {},\n    \"location_id\": {},\n    \"name\": \"10% off\",\n    \"note\": \"An optional note associated with the tender at the time of payment.\",\n    \"payment_id\": {},\n    \"percentage\": 10,\n    \"total_amount\": 27.5,\n    \"total_discount\": 3,\n    \"total_processing_fee\": 0,\n    \"total_refund\": 0,\n    \"total_service_charge\": 0,\n    \"total_tax\": 2.75,\n    \"total_tip\": 7,\n    \"transaction_id\": {},\n    \"type\": \"cash\"\n  }\n]",
			"routing": {
				"send": {
					"property": "tenders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Total Amount",
			"name": "total_amount",
			"type": "number",
			"default": 275,
			"routing": {
				"send": {
					"property": "total_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Total Discount",
			"name": "total_discount",
			"type": "number",
			"default": 300,
			"routing": {
				"send": {
					"property": "total_discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Total Refund",
			"name": "total_refund",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "total_refund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Total Service Charge",
			"name": "total_service_charge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "total_service_charge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Total Tax",
			"name": "total_tax",
			"type": "number",
			"default": 275,
			"routing": {
				"send": {
					"property": "total_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Total Tip",
			"name": "total_tip",
			"type": "number",
			"default": 700,
			"routing": {
				"send": {
					"property": "total_tip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "230320320320",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Voided",
			"name": "voided",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "voided",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "Voided At",
			"name": "voided_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "voided_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Update"
					]
				}
			}
		},
		{
			"displayName": "POST /pos/orders/{id}/pay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "ID of the record you are acting upon.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Raw",
			"name": "raw",
			"description": "Include raw response. Mostly used for debugging purposes",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "raw",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Consumer ID",
			"name": "x-apideck-consumer-id",
			"required": true,
			"description": "ID of the consumer which you want to get or push data from",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-consumer-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "X Apideck App ID",
			"name": "x-apideck-app-id",
			"required": true,
			"description": "The ID of your Unify application",
			"default": "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-app-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "X Apideck Service ID",
			"name": "x-apideck-service-id",
			"description": "Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-apideck-service-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Fields",
			"name": "fields",
			"description": "The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded.",
			"default": "id,updated_at",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fields",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Closed Date",
			"name": "closed_date",
			"type": "string",
			"default": "2022-08-13",
			"routing": {
				"send": {
					"property": "closed_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Created At",
			"name": "created_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was created.",
			"routing": {
				"send": {
					"property": "created_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Created By",
			"name": "created_by",
			"type": "string",
			"default": "12345",
			"description": "The user who created the object.",
			"routing": {
				"send": {
					"property": "created_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Currency",
			"name": "currency",
			"type": "options",
			"default": "USD",
			"description": "Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).",
			"options": [
				{
					"name": "UNKNOWN CURRENCY",
					"value": "UNKNOWN_CURRENCY"
				},
				{
					"name": "AED",
					"value": "AED"
				},
				{
					"name": "AFN",
					"value": "AFN"
				},
				{
					"name": "ALL",
					"value": "ALL"
				},
				{
					"name": "AMD",
					"value": "AMD"
				},
				{
					"name": "ANG",
					"value": "ANG"
				},
				{
					"name": "AOA",
					"value": "AOA"
				},
				{
					"name": "ARS",
					"value": "ARS"
				},
				{
					"name": "AUD",
					"value": "AUD"
				},
				{
					"name": "AWG",
					"value": "AWG"
				},
				{
					"name": "AZN",
					"value": "AZN"
				},
				{
					"name": "BAM",
					"value": "BAM"
				},
				{
					"name": "BBD",
					"value": "BBD"
				},
				{
					"name": "BDT",
					"value": "BDT"
				},
				{
					"name": "BGN",
					"value": "BGN"
				},
				{
					"name": "BHD",
					"value": "BHD"
				},
				{
					"name": "BIF",
					"value": "BIF"
				},
				{
					"name": "BMD",
					"value": "BMD"
				},
				{
					"name": "BND",
					"value": "BND"
				},
				{
					"name": "BOB",
					"value": "BOB"
				},
				{
					"name": "BOV",
					"value": "BOV"
				},
				{
					"name": "BRL",
					"value": "BRL"
				},
				{
					"name": "BSD",
					"value": "BSD"
				},
				{
					"name": "BTN",
					"value": "BTN"
				},
				{
					"name": "BWP",
					"value": "BWP"
				},
				{
					"name": "BYR",
					"value": "BYR"
				},
				{
					"name": "BZD",
					"value": "BZD"
				},
				{
					"name": "CAD",
					"value": "CAD"
				},
				{
					"name": "CDF",
					"value": "CDF"
				},
				{
					"name": "CHE",
					"value": "CHE"
				},
				{
					"name": "CHF",
					"value": "CHF"
				},
				{
					"name": "CHW",
					"value": "CHW"
				},
				{
					"name": "CLF",
					"value": "CLF"
				},
				{
					"name": "CLP",
					"value": "CLP"
				},
				{
					"name": "CNY",
					"value": "CNY"
				},
				{
					"name": "COP",
					"value": "COP"
				},
				{
					"name": "COU",
					"value": "COU"
				},
				{
					"name": "CRC",
					"value": "CRC"
				},
				{
					"name": "CUC",
					"value": "CUC"
				},
				{
					"name": "CUP",
					"value": "CUP"
				},
				{
					"name": "CVE",
					"value": "CVE"
				},
				{
					"name": "CZK",
					"value": "CZK"
				},
				{
					"name": "DJF",
					"value": "DJF"
				},
				{
					"name": "DKK",
					"value": "DKK"
				},
				{
					"name": "DOP",
					"value": "DOP"
				},
				{
					"name": "DZD",
					"value": "DZD"
				},
				{
					"name": "EGP",
					"value": "EGP"
				},
				{
					"name": "ERN",
					"value": "ERN"
				},
				{
					"name": "ETB",
					"value": "ETB"
				},
				{
					"name": "EUR",
					"value": "EUR"
				},
				{
					"name": "FJD",
					"value": "FJD"
				},
				{
					"name": "FKP",
					"value": "FKP"
				},
				{
					"name": "GBP",
					"value": "GBP"
				},
				{
					"name": "GEL",
					"value": "GEL"
				},
				{
					"name": "GHS",
					"value": "GHS"
				},
				{
					"name": "GIP",
					"value": "GIP"
				},
				{
					"name": "GMD",
					"value": "GMD"
				},
				{
					"name": "GNF",
					"value": "GNF"
				},
				{
					"name": "GTQ",
					"value": "GTQ"
				},
				{
					"name": "GYD",
					"value": "GYD"
				},
				{
					"name": "HKD",
					"value": "HKD"
				},
				{
					"name": "HNL",
					"value": "HNL"
				},
				{
					"name": "HRK",
					"value": "HRK"
				},
				{
					"name": "HTG",
					"value": "HTG"
				},
				{
					"name": "HUF",
					"value": "HUF"
				},
				{
					"name": "IDR",
					"value": "IDR"
				},
				{
					"name": "ILS",
					"value": "ILS"
				},
				{
					"name": "INR",
					"value": "INR"
				},
				{
					"name": "IQD",
					"value": "IQD"
				},
				{
					"name": "IRR",
					"value": "IRR"
				},
				{
					"name": "ISK",
					"value": "ISK"
				},
				{
					"name": "JMD",
					"value": "JMD"
				},
				{
					"name": "JOD",
					"value": "JOD"
				},
				{
					"name": "JPY",
					"value": "JPY"
				},
				{
					"name": "KES",
					"value": "KES"
				},
				{
					"name": "KGS",
					"value": "KGS"
				},
				{
					"name": "KHR",
					"value": "KHR"
				},
				{
					"name": "KMF",
					"value": "KMF"
				},
				{
					"name": "KPW",
					"value": "KPW"
				},
				{
					"name": "KRW",
					"value": "KRW"
				},
				{
					"name": "KWD",
					"value": "KWD"
				},
				{
					"name": "KYD",
					"value": "KYD"
				},
				{
					"name": "KZT",
					"value": "KZT"
				},
				{
					"name": "LAK",
					"value": "LAK"
				},
				{
					"name": "LBP",
					"value": "LBP"
				},
				{
					"name": "LKR",
					"value": "LKR"
				},
				{
					"name": "LRD",
					"value": "LRD"
				},
				{
					"name": "LSL",
					"value": "LSL"
				},
				{
					"name": "LTL",
					"value": "LTL"
				},
				{
					"name": "LVL",
					"value": "LVL"
				},
				{
					"name": "LYD",
					"value": "LYD"
				},
				{
					"name": "MAD",
					"value": "MAD"
				},
				{
					"name": "MDL",
					"value": "MDL"
				},
				{
					"name": "MGA",
					"value": "MGA"
				},
				{
					"name": "MKD",
					"value": "MKD"
				},
				{
					"name": "MMK",
					"value": "MMK"
				},
				{
					"name": "MNT",
					"value": "MNT"
				},
				{
					"name": "MOP",
					"value": "MOP"
				},
				{
					"name": "MRO",
					"value": "MRO"
				},
				{
					"name": "MUR",
					"value": "MUR"
				},
				{
					"name": "MVR",
					"value": "MVR"
				},
				{
					"name": "MWK",
					"value": "MWK"
				},
				{
					"name": "MXN",
					"value": "MXN"
				},
				{
					"name": "MXV",
					"value": "MXV"
				},
				{
					"name": "MYR",
					"value": "MYR"
				},
				{
					"name": "MZN",
					"value": "MZN"
				},
				{
					"name": "NAD",
					"value": "NAD"
				},
				{
					"name": "NGN",
					"value": "NGN"
				},
				{
					"name": "NIO",
					"value": "NIO"
				},
				{
					"name": "NOK",
					"value": "NOK"
				},
				{
					"name": "NPR",
					"value": "NPR"
				},
				{
					"name": "NZD",
					"value": "NZD"
				},
				{
					"name": "OMR",
					"value": "OMR"
				},
				{
					"name": "PAB",
					"value": "PAB"
				},
				{
					"name": "PEN",
					"value": "PEN"
				},
				{
					"name": "PGK",
					"value": "PGK"
				},
				{
					"name": "PHP",
					"value": "PHP"
				},
				{
					"name": "PKR",
					"value": "PKR"
				},
				{
					"name": "PLN",
					"value": "PLN"
				},
				{
					"name": "PYG",
					"value": "PYG"
				},
				{
					"name": "QAR",
					"value": "QAR"
				},
				{
					"name": "RON",
					"value": "RON"
				},
				{
					"name": "RSD",
					"value": "RSD"
				},
				{
					"name": "RUB",
					"value": "RUB"
				},
				{
					"name": "RWF",
					"value": "RWF"
				},
				{
					"name": "SAR",
					"value": "SAR"
				},
				{
					"name": "SBD",
					"value": "SBD"
				},
				{
					"name": "SCR",
					"value": "SCR"
				},
				{
					"name": "SDG",
					"value": "SDG"
				},
				{
					"name": "SEK",
					"value": "SEK"
				},
				{
					"name": "SGD",
					"value": "SGD"
				},
				{
					"name": "SHP",
					"value": "SHP"
				},
				{
					"name": "SLL",
					"value": "SLL"
				},
				{
					"name": "SOS",
					"value": "SOS"
				},
				{
					"name": "SRD",
					"value": "SRD"
				},
				{
					"name": "SSP",
					"value": "SSP"
				},
				{
					"name": "STD",
					"value": "STD"
				},
				{
					"name": "SVC",
					"value": "SVC"
				},
				{
					"name": "SYP",
					"value": "SYP"
				},
				{
					"name": "SZL",
					"value": "SZL"
				},
				{
					"name": "THB",
					"value": "THB"
				},
				{
					"name": "TJS",
					"value": "TJS"
				},
				{
					"name": "TMT",
					"value": "TMT"
				},
				{
					"name": "TND",
					"value": "TND"
				},
				{
					"name": "TOP",
					"value": "TOP"
				},
				{
					"name": "TRC",
					"value": "TRC"
				},
				{
					"name": "TRY",
					"value": "TRY"
				},
				{
					"name": "TTD",
					"value": "TTD"
				},
				{
					"name": "TWD",
					"value": "TWD"
				},
				{
					"name": "TZS",
					"value": "TZS"
				},
				{
					"name": "UAH",
					"value": "UAH"
				},
				{
					"name": "UGX",
					"value": "UGX"
				},
				{
					"name": "USD",
					"value": "USD"
				},
				{
					"name": "USN",
					"value": "USN"
				},
				{
					"name": "USS",
					"value": "USS"
				},
				{
					"name": "UYI",
					"value": "UYI"
				},
				{
					"name": "UYU",
					"value": "UYU"
				},
				{
					"name": "UZS",
					"value": "UZS"
				},
				{
					"name": "VEF",
					"value": "VEF"
				},
				{
					"name": "VND",
					"value": "VND"
				},
				{
					"name": "VUV",
					"value": "VUV"
				},
				{
					"name": "WST",
					"value": "WST"
				},
				{
					"name": "XAF",
					"value": "XAF"
				},
				{
					"name": "XAG",
					"value": "XAG"
				},
				{
					"name": "XAU",
					"value": "XAU"
				},
				{
					"name": "XBA",
					"value": "XBA"
				},
				{
					"name": "XBB",
					"value": "XBB"
				},
				{
					"name": "XBC",
					"value": "XBC"
				},
				{
					"name": "XBD",
					"value": "XBD"
				},
				{
					"name": "XCD",
					"value": "XCD"
				},
				{
					"name": "XDR",
					"value": "XDR"
				},
				{
					"name": "XOF",
					"value": "XOF"
				},
				{
					"name": "XPD",
					"value": "XPD"
				},
				{
					"name": "XPF",
					"value": "XPF"
				},
				{
					"name": "XPT",
					"value": "XPT"
				},
				{
					"name": "XTS",
					"value": "XTS"
				},
				{
					"name": "XXX",
					"value": "XXX"
				},
				{
					"name": "YER",
					"value": "YER"
				},
				{
					"name": "ZAR",
					"value": "ZAR"
				},
				{
					"name": "ZMK",
					"value": "ZMK"
				},
				{
					"name": "ZMW",
					"value": "ZMW"
				},
				{
					"name": "BTC",
					"value": "BTC"
				},
				{
					"name": "ETH",
					"value": "ETH"
				}
			],
			"routing": {
				"send": {
					"property": "currency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Customer ID",
			"name": "customer_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "customer_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Customers",
			"name": "customers",
			"type": "json",
			"default": "[\n  {\n    \"emails\": [\n      {\n        \"email\": \"elon@musk.com\",\n        \"id\": \"123\",\n        \"type\": \"primary\"\n      }\n    ],\n    \"first_name\": \"Elon\",\n    \"id\": \"12345\",\n    \"last_name\": \"Musk\",\n    \"middle_name\": \"D.\",\n    \"phone_numbers\": [\n      {\n        \"area_code\": \"323\",\n        \"country_code\": \"1\",\n        \"extension\": \"105\",\n        \"id\": \"12345\",\n        \"number\": \"111-111-1111\",\n        \"type\": \"primary\"\n      }\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "customers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Discounts",
			"name": "discounts",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"10% off\",\n    \"product_id\": {},\n    \"scope\": \"order\",\n    \"type\": \"percentage\"\n  }\n]",
			"routing": {
				"send": {
					"property": "discounts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employee_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "employee_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Fulfillments",
			"name": "fulfillments",
			"type": "json",
			"default": "[\n  {\n    \"id\": \"12345\",\n    \"pickup_details\": {\n      \"accepted_at\": \"2020-09-30T07:43:32.000Z\",\n      \"auto_complete_duration\": \"P1W3D\",\n      \"cancel_reason\": \"Not hungry\",\n      \"canceled_at\": \"2016-09-04T23:59:33.123Z\",\n      \"curbside_pickup_details\": {\n        \"buyer_arrived_at\": \"2016-09-04T23:59:33.123Z\"\n      },\n      \"expired_at\": \"2016-09-04T23:59:33.123Z\",\n      \"expires_at\": \"2016-09-04T23:59:33.123Z\",\n      \"note\": \"Pickup in the back.\",\n      \"picked_up_at\": \"2016-09-04T23:59:33.123Z\",\n      \"pickup_at\": \"2016-09-04T23:59:33.123Z\",\n      \"pickup_window_duration\": \"P1W3D\",\n      \"placed_at\": \"2016-09-04T23:59:33.123Z\",\n      \"prep_time_duration\": \"P1W3D\",\n      \"ready_at\": \"2016-09-04T23:59:33.123Z\",\n      \"recipient\": {\n        \"address\": {\n          \"city\": \"San Francisco\",\n          \"contact_name\": \"Elon Musk\",\n          \"country\": \"US\",\n          \"county\": \"Santa Clara\",\n          \"email\": \"elon@musk.com\",\n          \"fax\": \"122-111-1111\",\n          \"id\": \"123\",\n          \"latitude\": \"40.759211\",\n          \"line1\": \"Main street\",\n          \"line2\": \"apt #\",\n          \"line3\": \"Suite #\",\n          \"line4\": \"delivery instructions\",\n          \"longitude\": \"-73.984638\",\n          \"name\": \"HQ US\",\n          \"phone_number\": \"111-111-1111\",\n          \"postal_code\": \"94104\",\n          \"row_version\": \"1-12345\",\n          \"salutation\": \"Mr\",\n          \"state\": \"CA\",\n          \"street_number\": \"25\",\n          \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n          \"type\": \"primary\",\n          \"website\": \"https://elonmusk.com\"\n        },\n        \"customer_id\": \"12345\",\n        \"display_name\": \"Elon Musk\",\n        \"email\": {\n          \"email\": \"elon@musk.com\",\n          \"id\": \"123\",\n          \"type\": \"primary\"\n        },\n        \"phone_number\": {\n          \"area_code\": \"323\",\n          \"country_code\": \"1\",\n          \"extension\": \"105\",\n          \"id\": \"12345\",\n          \"number\": \"111-111-1111\",\n          \"type\": \"primary\"\n        }\n      },\n      \"rejected_at\": \"2016-09-04T23:59:33.123Z\"\n    },\n    \"shipment_details\": {},\n    \"type\": \"shipment\"\n  }\n]",
			"routing": {
				"send": {
					"property": "fulfillments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "12345",
			"description": "A unique identifier for an object.",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Idempotency Key",
			"name": "idempotency_key",
			"type": "string",
			"default": "random_string",
			"description": "A value you specify that uniquely identifies this request among requests you have sent.",
			"routing": {
				"send": {
					"property": "idempotency_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Line Items",
			"name": "line_items",
			"type": "json",
			"default": "[\n  {\n    \"applied_discounts\": [\n      {\n        \"amount\": 27500,\n        \"currency\": \"USD\",\n        \"discount_id\": \"12345\",\n        \"id\": \"12345\"\n      }\n    ],\n    \"applied_taxes\": [\n      {\n        \"amount\": 27500,\n        \"currency\": {},\n        \"id\": {},\n        \"tax_id\": \"sales-tax\"\n      }\n    ],\n    \"id\": {},\n    \"item\": {\n      \"id\": {}\n    },\n    \"modifiers\": [\n      {\n        \"alternate_name\": \"Modifier New\",\n        \"amount\": 27500,\n        \"currency\": {},\n        \"id\": \"12345\",\n        \"modifier_group_id\": \"123\",\n        \"name\": \"New York Strip Steak - no cheese\"\n      }\n    ],\n    \"name\": \"New York Strip Steak\",\n    \"quantity\": 1,\n    \"total_amount\": 27500,\n    \"total_discount\": 3000,\n    \"total_tax\": 2000,\n    \"unit_price\": 27500.5\n  }\n]",
			"routing": {
				"send": {
					"property": "line_items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Location ID",
			"name": "location_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Merchant ID",
			"name": "merchant_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "merchant_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "A note with information about this order, may be printed on the order receipt and displayed in apps",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Order Date",
			"name": "order_date",
			"type": "string",
			"default": "2022-08-12",
			"routing": {
				"send": {
					"property": "order_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Order Number",
			"name": "order_number",
			"type": "string",
			"default": "1F",
			"routing": {
				"send": {
					"property": "order_number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Order Type ID",
			"name": "order_type_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "order_type_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Payment Status",
			"name": "payment_status",
			"type": "options",
			"default": "open",
			"description": "Is this order paid or not?",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Paid",
					"value": "paid"
				},
				{
					"name": "Refunded",
					"value": "refunded"
				},
				{
					"name": "Credited",
					"value": "credited"
				},
				{
					"name": "Partially Paid",
					"value": "partially_paid"
				},
				{
					"name": "Partially Refunded",
					"value": "partially_refunded"
				},
				{
					"name": "Unknown",
					"value": "unknown"
				}
			],
			"routing": {
				"send": {
					"property": "payment_status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Payments",
			"name": "payments",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\"\n  }\n]",
			"routing": {
				"send": {
					"property": "payments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Reference ID",
			"name": "reference_id",
			"type": "string",
			"default": "my-order-001",
			"description": "An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.",
			"routing": {
				"send": {
					"property": "reference_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Refunded",
			"name": "refunded",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "refunded",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Refunds",
			"name": "refunds",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"location_id\": {},\n    \"reason\": \"The reason for the refund being issued.\",\n    \"tender_id\": {},\n    \"transaction_id\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "refunds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Seat",
			"name": "seat",
			"type": "string",
			"default": "23F",
			"routing": {
				"send": {
					"property": "seat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Service Charges",
			"name": "service_charges",
			"type": "json",
			"default": "[\n  {\n    \"active\": true,\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"Charge for delivery\",\n    \"percentage\": 12.5\n  }\n]",
			"description": "Optional service charges or gratuity tip applied to the order.",
			"routing": {
				"send": {
					"property": "service_charges",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Source",
			"name": "source",
			"type": "options",
			"default": "api",
			"description": "Source of order. Indicates the way that the order was placed.",
			"options": [
				{
					"name": "In Store",
					"value": "in-store"
				},
				{
					"name": "Online",
					"value": "online"
				},
				{
					"name": "Opt",
					"value": "opt"
				},
				{
					"name": "API",
					"value": "api"
				},
				{
					"name": "Kiosk",
					"value": "kiosk"
				},
				{
					"name": "Caller ID",
					"value": "caller-id"
				},
				{
					"name": "Google",
					"value": "google"
				},
				{
					"name": "Invoice",
					"value": "invoice"
				}
			],
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "open",
			"description": "Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()",
			"options": [
				{
					"name": "Open",
					"value": "open"
				},
				{
					"name": "Draft",
					"value": "draft"
				},
				{
					"name": "Delivered",
					"value": "delivered"
				},
				{
					"name": "Delayed",
					"value": "delayed"
				},
				{
					"name": "Voided",
					"value": "voided"
				},
				{
					"name": "Completed",
					"value": "completed"
				},
				{
					"name": "Hidden",
					"value": "hidden"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Table",
			"name": "table",
			"type": "string",
			"default": "1F",
			"routing": {
				"send": {
					"property": "table",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Taxes",
			"name": "taxes",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"auto_applied\": true,\n    \"currency\": \"USD\",\n    \"id\": \"state-sales-tax\",\n    \"name\": \"State Sales Tax\",\n    \"percentage\": 15\n  }\n]",
			"routing": {
				"send": {
					"property": "taxes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Tenders",
			"name": "tenders",
			"type": "json",
			"default": "[\n  {\n    \"amount\": 27500,\n    \"buyer_tendered_cash_amount\": 27500,\n    \"card\": {\n      \"billing_address\": {\n        \"city\": \"San Francisco\",\n        \"contact_name\": \"Elon Musk\",\n        \"country\": \"US\",\n        \"county\": \"Santa Clara\",\n        \"email\": \"elon@musk.com\",\n        \"fax\": \"122-111-1111\",\n        \"id\": \"123\",\n        \"latitude\": \"40.759211\",\n        \"line1\": \"Main street\",\n        \"line2\": \"apt #\",\n        \"line3\": \"Suite #\",\n        \"line4\": \"delivery instructions\",\n        \"longitude\": \"-73.984638\",\n        \"name\": \"HQ US\",\n        \"phone_number\": \"111-111-1111\",\n        \"postal_code\": \"94104\",\n        \"row_version\": \"1-12345\",\n        \"salutation\": \"Mr\",\n        \"state\": \"CA\",\n        \"street_number\": \"25\",\n        \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n        \"type\": \"primary\",\n        \"website\": \"https://elonmusk.com\"\n      },\n      \"bin\": \"41111\",\n      \"card_type\": \"credit\",\n      \"cardholder_name\": \"John Doe\",\n      \"customer_id\": \"12345\",\n      \"enabled\": true,\n      \"exp_month\": 1,\n      \"exp_year\": 2022,\n      \"fingerprint\": \" Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.\",\n      \"id\": \"12345\",\n      \"last_4\": \"The last 4 digits of the card number.\",\n      \"merchant_id\": \"12345\",\n      \"prepaid_type\": \"prepaid\",\n      \"reference_id\": \"card-001\",\n      \"version\": \"230320320320\"\n    },\n    \"card_entry_method\": \"swiped\",\n    \"card_status\": \"authorized\",\n    \"change_back_cash_amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": {},\n    \"location_id\": {},\n    \"name\": \"10% off\",\n    \"note\": \"An optional note associated with the tender at the time of payment.\",\n    \"payment_id\": {},\n    \"percentage\": 10,\n    \"total_amount\": 27.5,\n    \"total_discount\": 3,\n    \"total_processing_fee\": 0,\n    \"total_refund\": 0,\n    \"total_service_charge\": 0,\n    \"total_tax\": 2.75,\n    \"total_tip\": 7,\n    \"transaction_id\": {},\n    \"type\": \"cash\"\n  }\n]",
			"routing": {
				"send": {
					"property": "tenders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Total Amount",
			"name": "total_amount",
			"type": "number",
			"default": 275,
			"routing": {
				"send": {
					"property": "total_amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Total Discount",
			"name": "total_discount",
			"type": "number",
			"default": 300,
			"routing": {
				"send": {
					"property": "total_discount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Total Refund",
			"name": "total_refund",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "total_refund",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Total Service Charge",
			"name": "total_service_charge",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "total_service_charge",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Total Tax",
			"name": "total_tax",
			"type": "number",
			"default": 275,
			"routing": {
				"send": {
					"property": "total_tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Total Tip",
			"name": "total_tip",
			"type": "number",
			"default": 700,
			"routing": {
				"send": {
					"property": "total_tip",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Updated At",
			"name": "updated_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"description": "The date and time when the object was last updated.",
			"routing": {
				"send": {
					"property": "updated_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Updated By",
			"name": "updated_by",
			"type": "string",
			"default": "12345",
			"description": "The user who last updated the object.",
			"routing": {
				"send": {
					"property": "updated_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"type": "string",
			"default": "230320320320",
			"routing": {
				"send": {
					"property": "version",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Voided",
			"name": "voided",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "voided",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "Voided At",
			"name": "voided_at",
			"type": "string",
			"default": "2020-09-30T07:43:32.000Z",
			"routing": {
				"send": {
					"property": "voided_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Orders"
					],
					"operation": [
						"Orders Pay"
					]
				}
			}
		},
];
