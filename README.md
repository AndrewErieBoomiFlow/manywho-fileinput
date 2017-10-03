# Boomi Flow File Input to Base64 String
Simple custom component that creates a file input box and converts it to a base64 string for transfering to a database or boomi process without the need of a third party service. 

1. Add input type component to a page. Through the pages meta data edit the "componentType" property to "fileInputBox"
2. Create a new player and copy and paste the html player file from the repo or use the following:

```
var manywho = {
            cdnUrl: 'https://assets.manywho.com',
            customResources: [
                'https://s3.amazonaws.com/files-manywho-com/395cd7c0-bc6c-4270-a44a-d6d2b53007bf/fileInputComponent.js'
            ],
            initialize: function () {
				...
       		}
		};
```

You're all set!


```
https://s3.amazonaws.com/files-manywho-com/77ba6381-d72f-4184-9bfb-b1d061e74c95/comps/fileInputComponent.js
```