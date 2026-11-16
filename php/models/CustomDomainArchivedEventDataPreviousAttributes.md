[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainArchivedEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_payment_attempt_count` | Optional | integer or null or null | Payment attempts in progress on this checkout hostname. `null` when `type` is `customer_account`. `active_payment_attempt_count`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesactive_payment_attempt_count). |
| `created_at` | Optional | string or null | When this domain resource was created, in RFC3339 format. `created_at`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributescreated_at). |
| `custom_domain_id` | Optional | string or null | Flint custom domain ID. `custom_domain_id`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributescustom_domain_id). |
| `dns_records` | Optional | Array of [CustomDomainDNSRecord](../models/CustomDomainDNSRecord.md#customdomaindnsrecord) or null | DNS records to add for setup or verification. For an archived hostname, records that can be deleted. `dns_records`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesdns_records). |
| `hostname` | Optional | string or null | Configured hostname, normalized to lowercase without a trailing dot. `hostname`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributeshostname). |
| `last_checked_at` | Optional | string or null or null | When the domain was last checked, in RFC3339 format; `null` when no check time is available. `last_checked_at`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributeslast_checked_at). |
| `payment_method_domain_id` | Optional | string or null or null | Payment method domain associated with this hostname. `null` when none is reported. `payment_method_domain_id`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributespayment_method_domain_id). |
| `redirect_expires_at` | Optional | string or null or null | End of the redirect window for an archived hostname. After archive, dns_records lists records you can delete. `null` when the hostname isn't archived. `redirect_expires_at`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesredirect_expires_at). |
| `status` | Optional | string or null | Current setup and availability state of the hostname. Archived domains retain their resource identity. Values: `"provisioning"`, `"active"`, `"attention_required"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesstatus). |
| `status_reason` | Optional | string or null or null | Machine-readable detail for the current status. `null` when no reason is reported, including for active and archived domains. Values: [10 declared values](CustomDomainInput.md#customdomaininput-status_reason-values). `status_reason`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesstatus_reason). |
| `type` | Optional | string or null | Whether the hostname serves checkout pages or the customer account Flint hosts. Values: `"checkout"`, `"customer_account"`. `type`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributestype). |
| `updated_at` | Optional | string or null | When this domain resource was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesupdated_at). |

### CustomDomainArchivedEventDataPreviousAttributes.active_payment_attempt_count

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.active_payment_attempt_count](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesactive_payment_attempt_count).

### CustomDomainArchivedEventDataPreviousAttributes.created_at

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.created_at](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributescreated_at).

### CustomDomainArchivedEventDataPreviousAttributes.custom_domain_id

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.custom_domain_id](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributescustom_domain_id).

### CustomDomainArchivedEventDataPreviousAttributes.dns_records

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.dns_records](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesdns_records).

### CustomDomainArchivedEventDataPreviousAttributes.hostname

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.hostname](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributeshostname).

### CustomDomainArchivedEventDataPreviousAttributes.last_checked_at

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.last_checked_at](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributeslast_checked_at).

### CustomDomainArchivedEventDataPreviousAttributes.payment_method_domain_id

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.payment_method_domain_id](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributespayment_method_domain_id).

### CustomDomainArchivedEventDataPreviousAttributes.redirect_expires_at

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.redirect_expires_at](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesredirect_expires_at).

### CustomDomainArchivedEventDataPreviousAttributes.status

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.status](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesstatus).

### CustomDomainArchivedEventDataPreviousAttributes.status_reason

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.status_reason](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesstatus_reason).

### CustomDomainArchivedEventDataPreviousAttributes.type

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.type](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributestype).

### CustomDomainArchivedEventDataPreviousAttributes.updated_at

Declared alternatives: [CustomDomainArchivedEvent.data fields 1.previous_attributes.updated_at](../models/CustomDomainArchivedEvent.md#customdomainarchivedeventdata-fields-1previous_attributesupdated_at).

