[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MetadataMapInput

Request input. Response: [MetadataMap](../models/MetadataMap.md#metadatamap).

Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.





Value shape: Map of string. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

