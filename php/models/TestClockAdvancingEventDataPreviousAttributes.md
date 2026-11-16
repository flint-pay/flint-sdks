[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TestClockAdvancingEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the test clock was created, in real time. `created_at`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributescreated_at). |
| `frozen_at` | Optional | string or null | The time the test clock shows. Customers created on the clock, and their subscriptions, treat it as the current time. After you advance the clock, `frozen_at` is the time you advanced it to, while `status` is `advancing` and after. `frozen_at`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesfrozen_at). |
| `name` | Optional | string or null | Your label for the test clock. Omitted when you didn't set one. `name`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesname). |
| `status` | Optional | string or null | Where the test clock is in its lifecycle. Read it before advancing, and after an advance until it's `ready` or `failed`. Values: `"ready"`, `"advancing"`, `"failed"`, `"archived"`. `status`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesstatus). |
| `test_clock_id` | Optional | string or null | Unique identifier for the test clock. `test_clock_id`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributestest_clock_id). |
| `updated_at` | Optional | string or null | When the test clock last changed, in real time. `updated_at`: [declared alternatives](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesupdated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion). |

### TestClockAdvancingEventDataPreviousAttributes.created_at

Declared alternatives: [TestClockAdvancingEvent.data fields 1.previous_attributes.created_at](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributescreated_at).

### TestClockAdvancingEventDataPreviousAttributes.frozen_at

Declared alternatives: [TestClockAdvancingEvent.data fields 1.previous_attributes.frozen_at](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesfrozen_at).

### TestClockAdvancingEventDataPreviousAttributes.name

Declared alternatives: [TestClockAdvancingEvent.data fields 1.previous_attributes.name](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesname).

### TestClockAdvancingEventDataPreviousAttributes.status

Declared alternatives: [TestClockAdvancingEvent.data fields 1.previous_attributes.status](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesstatus).

### TestClockAdvancingEventDataPreviousAttributes.test_clock_id

Declared alternatives: [TestClockAdvancingEvent.data fields 1.previous_attributes.test_clock_id](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributestest_clock_id).

### TestClockAdvancingEventDataPreviousAttributes.updated_at

Declared alternatives: [TestClockAdvancingEvent.data fields 1.previous_attributes.updated_at](../models/TestClockAdvancingEvent.md#testclockadvancingeventdata-fields-1previous_attributesupdated_at).

### TestClockAdvancingEventDataPreviousAttributes.version

Declared alternatives: [PaymentSplitCanceledEvent.data fields 1.previous_attributes.version](../models/PaymentSplitCanceledEvent.md#paymentsplitcanceledeventdata-fields-1previous_attributesversion).

