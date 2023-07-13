# API-FrontEnd

SiteAssets JSON Requirements

Field Type Description

Name **************\_************** String ******\_****** The asset name Size range: ..50

Description **********\_\_********** String ******\_****** The asset description

Path **************\_************** String ******\_****** The asset file location url (must be an external address)

UserDownloadable ********\_******** Bool ******\_\_\_****** Indicates if the user can download the asset

IsLocal ************\_\_************ Bool ******\_\_\_****** Indicates if the file provided in path should be saved locally, if true the file will be copied

AssetType **********\_\_\_\_********** String ******\_****** The asset type can be: Image: 0, MailingList: 1, Document: 2, Other: 3

AssetUsage **********\_\_\_********** String ******\_****** The asset usage can be: All, Site, Group, User, Product

GroupIdoptional ********\_\_******** Guid ******\_\_\_****** The group id to associate to the asset

ProductIdoptional ******\_\_\_\_****** Guid ******\_\_\_****** The product id to associate to the asset

AssetCategoryIdoptional ****\_\_**** Guid ******\_\_\_****** The category id to associate to the asset

ThumbnailPathoptional ****\_\_\_\_**** Guid ******\_\_\_****** The URL with the thumb image to be shown on the site

GenerateThumbnailForExternalURL ** Bool ******\_******** Indicates if the application should generate a thumb image

Author: Robin Dickson 2023
