# API-FrontEnd

SiteAssets JSON Requirements 

Field	                             Type	                Description

Name _____________________________ String _____________ The asset name Size range: ..50

Description ______________________ String _____________ The asset description

Path _____________________________ String _____________ The asset file location url (must be an external address)

UserDownloadable _________________ Bool _______________ Indicates if the user can download the asset

IsLocal __________________________ Bool _______________ Indicates if the file provided in path should be saved locally, if true the file will be copied

AssetType ________________________ String _____________ The asset type can be: Image: 0, MailingList: 1, Document: 2, Other: 3

AssetUsage _______________________ String _____________ The asset usage can be: All, Site, Group, User, Product

GroupIdoptional __________________ Guid _______________ The group id to associate to the asset

ProductIdoptional ________________ Guid _______________ The product id to associate to the asset

AssetCategoryIdoptional __________ Guid _______________ The category id to associate to the asset

ThumbnailPathoptional	____________ Guid _______________ The URL with the thumb image to be shown on the site

GenerateThumbnailForExternalURL	__ Bool _______________ Indicates if the application should generate a thumb image
