[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainDNSRecordPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string or null | DNS name at which to publish this record. `name`: [declared alternatives](../models/CustomDomainDNSRecordPreviousAttributesInput.md#customdomaindnsrecordpreviousattributesinputname). |
| `type` | Optional | string or null | DNS record type to publish, such as cname or txt. Values: `"cname"`, `"txt"`. `type`: [declared alternatives](../models/CustomDomainDNSRecordPreviousAttributesInput.md#customdomaindnsrecordpreviousattributesinputtype). |
| `value` | Optional | string or null | DNS record value to publish at name. `value`: [declared alternatives](../models/CustomDomainDNSRecordPreviousAttributesInput.md#customdomaindnsrecordpreviousattributesinputvalue). |

### CustomDomainDNSRecordPreviousAttributesInput.name

### CustomDomainDNSRecordPreviousAttributesInput.name variant 1

anyOf variant 1: DNS name at which to publish this record..

- Value shape: string. DNS name at which to publish this record. 

### CustomDomainDNSRecordPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. DNS name at which to publish this record. 

### CustomDomainDNSRecordPreviousAttributesInput.type

### CustomDomainDNSRecordPreviousAttributesInput.type variant 1

anyOf variant 1: DNS record type to publish, such as cname or txt..

- Value shape: string. DNS record type to publish, such as cname or txt. Values: `"cname"`, `"txt"`.

### CustomDomainDNSRecordPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. DNS record type to publish, such as cname or txt. 

### CustomDomainDNSRecordPreviousAttributesInput.value

### CustomDomainDNSRecordPreviousAttributesInput.value variant 1

anyOf variant 1: DNS record value to publish at name..

- Value shape: string. DNS record value to publish at name. 

### CustomDomainDNSRecordPreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. DNS record value to publish at name. 

