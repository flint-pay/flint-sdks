[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainDNSRecordPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string or null | DNS name at which to publish this record. `name`: [declared alternatives](../models/CustomDomainDNSRecordPreviousAttributes.md#customdomaindnsrecordpreviousattributesname). |
| `type` | Optional | string or null | DNS record type to publish, such as cname or txt. Values: `"cname"`, `"txt"`. `type`: [declared alternatives](../models/CustomDomainDNSRecordPreviousAttributes.md#customdomaindnsrecordpreviousattributestype). |
| `value` | Optional | string or null | DNS record value to publish at name. `value`: [declared alternatives](../models/CustomDomainDNSRecordPreviousAttributes.md#customdomaindnsrecordpreviousattributesvalue). |

### CustomDomainDNSRecordPreviousAttributes.name

### CustomDomainDNSRecordPreviousAttributes.name variant 1

anyOf variant 1: DNS name at which to publish this record..

- Value shape: string. DNS name at which to publish this record. 

### CustomDomainDNSRecordPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. DNS name at which to publish this record. 

### CustomDomainDNSRecordPreviousAttributes.type

### CustomDomainDNSRecordPreviousAttributes.type variant 1

anyOf variant 1: DNS record type to publish, such as cname or txt..

- Value shape: string. DNS record type to publish, such as cname or txt. Values: `"cname"`, `"txt"`.

### CustomDomainDNSRecordPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. DNS record type to publish, such as cname or txt. 

### CustomDomainDNSRecordPreviousAttributes.value

### CustomDomainDNSRecordPreviousAttributes.value variant 1

anyOf variant 1: DNS record value to publish at name..

- Value shape: string. DNS record value to publish at name. 

### CustomDomainDNSRecordPreviousAttributes.value variant 2

anyOf variant 2.

- Value shape: null. DNS record value to publish at name. 

