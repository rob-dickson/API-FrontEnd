# API-FrontEnd

SiteAssets JSON Requirements

Field Type Description

Name //////////////////////////// String //////////// The asset name Size range: ..50

Description //////////////////// String //////////// The asset description

Path //////////////////////////// String //////////// The asset file location url (must be an external address)

UserDownloadable //////////////// Bool //////////// Indicates if the user can download the asset

IsLocal //////////////////////// Bool //////////// Indicates if the file provided in path should be saved locally, if true the file will be copied

AssetType //////////////////// String //////////// The asset type can be: Image: 0, MailingList: 1, Document: 2, Other: 3

AssetUsage //////////////////// String //////////// The asset usage can be: All, Site, Group, User, Product

GroupIdoptional //////////////// Guid //////////// The group id to associate to the asset

ProductIdoptional //////////// Guid //////////// The product id to associate to the asset

AssetCategoryIdoptional //////// Guid //////////// The category id to associate to the asset

ThumbnailPathoptional //////// Guid //////////// The URL with the thumb image to be shown on the site

GenerateThumbnailForExternalURL // Bool ////////////// Indicates if the application should generate a thumb image

Author: Robin Dickson 2023
