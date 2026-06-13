import type { INodeProperties } from 'n8n-workflow';

export const merchantsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					]
				}
			},
			"options": [
				{
					"name": "Merchants All",
					"value": "Merchants All",
					"action": "List Merchants",
					"description": "List Merchants",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pos/merchants"
						}
					}
				},
				{
					"name": "Merchants Add",
					"value": "Merchants Add",
					"action": "Create Merchant",
					"description": "Create Merchant",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/pos/merchants"
						}
					}
				},
				{
					"name": "Merchants Delete",
					"value": "Merchants Delete",
					"action": "Delete Merchant",
					"description": "Delete Merchant",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/pos/merchants/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Merchants One",
					"value": "Merchants One",
					"action": "Get Merchant",
					"description": "Get Merchant",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pos/merchants/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "Merchants Update",
					"value": "Merchants Update",
					"action": "Update Merchant",
					"description": "Update Merchant",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/pos/merchants/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pos/merchants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
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
						"Merchants"
					],
					"operation": [
						"Merchants All"
					]
				}
			}
		},
		{
			"displayName": "POST /pos/merchants",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"San Francisco\",\n  \"contact_name\": \"Elon Musk\",\n  \"country\": \"US\",\n  \"county\": \"Santa Clara\",\n  \"email\": \"elon@musk.com\",\n  \"fax\": \"122-111-1111\",\n  \"id\": \"123\",\n  \"latitude\": \"40.759211\",\n  \"line1\": \"Main street\",\n  \"line2\": \"apt #\",\n  \"line3\": \"Suite #\",\n  \"line4\": \"delivery instructions\",\n  \"longitude\": \"-73.984638\",\n  \"name\": \"HQ US\",\n  \"phone_number\": \"111-111-1111\",\n  \"postal_code\": \"94104\",\n  \"row_version\": \"1-12345\",\n  \"salutation\": \"Mr\",\n  \"state\": \"CA\",\n  \"street_number\": \"25\",\n  \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n  \"type\": \"primary\",\n  \"website\": \"https://elonmusk.com\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"type": "string",
			"default": "EN",
			"description": "language code according to ISO 639-1. For the United States - EN",
			"routing": {
				"send": {
					"property": "language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "Main Location ID",
			"name": "main_location_id",
			"type": "string",
			"default": "12345",
			"description": "The main location ID of the merchant",
			"routing": {
				"send": {
					"property": "main_location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Dunkin Donuts",
			"description": "The name of the merchant",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "Service Charges",
			"name": "service_charges",
			"type": "json",
			"default": "[\n  {\n    \"active\": true,\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"Charge for delivery\",\n    \"percentage\": 12.5\n  }\n]",
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Status of this merchant.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				},
				{
					"name": "Other",
					"value": "other"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
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
						"Merchants"
					],
					"operation": [
						"Merchants Add"
					]
				}
			}
		},
		{
			"displayName": "DELETE /pos/merchants/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Delete"
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
						"Merchants"
					],
					"operation": [
						"Merchants Delete"
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
						"Merchants"
					],
					"operation": [
						"Merchants Delete"
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
						"Merchants"
					],
					"operation": [
						"Merchants Delete"
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
						"Merchants"
					],
					"operation": [
						"Merchants Delete"
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
						"Merchants"
					],
					"operation": [
						"Merchants Delete"
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
						"Merchants"
					],
					"operation": [
						"Merchants Delete"
					]
				}
			}
		},
		{
			"displayName": "GET /pos/merchants/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants One"
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
						"Merchants"
					],
					"operation": [
						"Merchants One"
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
						"Merchants"
					],
					"operation": [
						"Merchants One"
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
						"Merchants"
					],
					"operation": [
						"Merchants One"
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
						"Merchants"
					],
					"operation": [
						"Merchants One"
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
						"Merchants"
					],
					"operation": [
						"Merchants One"
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
						"Merchants"
					],
					"operation": [
						"Merchants One"
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
						"Merchants"
					],
					"operation": [
						"Merchants One"
					]
				}
			}
		},
		{
			"displayName": "PATCH /pos/merchants/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"San Francisco\",\n  \"contact_name\": \"Elon Musk\",\n  \"country\": \"US\",\n  \"county\": \"Santa Clara\",\n  \"email\": \"elon@musk.com\",\n  \"fax\": \"122-111-1111\",\n  \"id\": \"123\",\n  \"latitude\": \"40.759211\",\n  \"line1\": \"Main street\",\n  \"line2\": \"apt #\",\n  \"line3\": \"Suite #\",\n  \"line4\": \"delivery instructions\",\n  \"longitude\": \"-73.984638\",\n  \"name\": \"HQ US\",\n  \"phone_number\": \"111-111-1111\",\n  \"postal_code\": \"94104\",\n  \"row_version\": \"1-12345\",\n  \"salutation\": \"Mr\",\n  \"state\": \"CA\",\n  \"street_number\": \"25\",\n  \"string\": \"25 Spring Street, Blackburn, VIC 3130\",\n  \"type\": \"primary\",\n  \"website\": \"https://elonmusk.com\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
		{
			"displayName": "Language",
			"name": "language",
			"type": "string",
			"default": "EN",
			"description": "language code according to ISO 639-1. For the United States - EN",
			"routing": {
				"send": {
					"property": "language",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
		{
			"displayName": "Main Location ID",
			"name": "main_location_id",
			"type": "string",
			"default": "12345",
			"description": "The main location ID of the merchant",
			"routing": {
				"send": {
					"property": "main_location_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Dunkin Donuts",
			"description": "The name of the merchant",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
		{
			"displayName": "Owner ID",
			"name": "owner_id",
			"type": "string",
			"default": "12345",
			"routing": {
				"send": {
					"property": "owner_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
		{
			"displayName": "Service Charges",
			"name": "service_charges",
			"type": "json",
			"default": "[\n  {\n    \"active\": true,\n    \"amount\": 27500,\n    \"currency\": \"USD\",\n    \"id\": \"12345\",\n    \"name\": \"Charge for delivery\",\n    \"percentage\": 12.5\n  }\n]",
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "active",
			"description": "Status of this merchant.",
			"options": [
				{
					"name": "Active",
					"value": "active"
				},
				{
					"name": "Inactive",
					"value": "inactive"
				},
				{
					"name": "Other",
					"value": "other"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
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
						"Merchants"
					],
					"operation": [
						"Merchants Update"
					]
				}
			}
		},
];
