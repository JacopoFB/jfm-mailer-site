const DataOptions = {
    "buyback": [
        {
            "name": "All Database",
            "desc": "",
            "icon": "",
            "price": 0,
            "tag": ""
        },
        {
            "name": "Half Conquest & Half Database",
            "desc": "",
            "icon": "",
            "price": 0,
            "tag": ""
        },
        {
            "name": "All Conquest",
            "desc": "",
            "icon": "",
            "price": 0,
            "tag": "",
        }
    ],
    "credit": [
        {
            "name": "Credit",
            "desc": "Target by credit score or payment history",
            "icon": "",
            "price": 0,
            "tag": "",
            "inputs": [
                {
                    "type": "radio",
                    "key": "creditType",
                    "label": "Credit Filter",
                    "options": [
                        {
                            "label": "Subprime",
                            "sublabel": "Credit score 580–680",
                            "value": "subprime"
                        },
                        {
                            "label": "Current Payment Greater Than",
                            "value": "current_payment",
                            "followUp": {
                                "type": "number",
                                "key": "minPayment",
                                "placeholder": "350",
                                "recommendedLabel": "Recommended: $350 or more"
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "bankruptcy": [
        {
            "name": "Discharge Bankruptcy",
            "desc": "",
            "icon": "",
            "price": 0,
            "tag": ""
        }
    ],
    "saturation": [
        {
            "name": "Saturation",
            "desc": "Mail to every address in a defined geographic area",
            "icon": "",
            "price": 0,
            "tag": "",
            "inputs": [
                {
                    "type": "text",
                    "key": "zipCode",
                    "label": "Zip Code",
                    "placeholder": "e.g. 90210"
                },
                {
                    "type": "number",
                    "key": "radius",
                    "label": "Radius (miles)",
                    "placeholder": "e.g. 10",
                    "unit": " mi",
                    "min": 1
                }
            ]
        }
    ],
    "service": [
        {
            "name": "All Database",
            "desc": "",
            "icon": "",
            "price": 0,
            "tag": ""
        },
        {
            "name": "Half Conquest & Half Database",
            "desc": "",
            "icon": "",
            "price": 0,
            "tag": ""
        },
        {
            "name": "All Conquest",
            "desc": "",
            "icon": "",
            "price": 0,
            "tag": "",
        }
    ],
};

export default DataOptions;