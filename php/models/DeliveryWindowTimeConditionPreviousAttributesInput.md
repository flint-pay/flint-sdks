[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryWindowTimeConditionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_minute` | Optional | integer or null | Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. `end_minute`: [declared alternatives](../models/DeliveryWindowTimeConditionPreviousAttributesInput.md#deliverywindowtimeconditionpreviousattributesinputend_minute). |
| `start_minute` | Optional | integer or null | First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. `start_minute`: [declared alternatives](../models/DeliveryWindowTimeConditionPreviousAttributesInput.md#deliverywindowtimeconditionpreviousattributesinputstart_minute). |
| `weekdays` | Optional | Array of string or null | Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. `weekdays`: [declared alternatives](../models/DeliveryWindowTimeConditionPreviousAttributesInput.md#deliverywindowtimeconditionpreviousattributesinputweekdays). |

### DeliveryWindowTimeConditionPreviousAttributesInput.end_minute

### DeliveryWindowTimeConditionPreviousAttributesInput.end_minute variant 1

anyOf variant 1: Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`..

- Value shape: integer. Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. 

### DeliveryWindowTimeConditionPreviousAttributesInput.end_minute variant 2

anyOf variant 2.

- Value shape: null. Minute of the day at which matching stops, counted from midnight in the window's timezone, from 1 to 1440 and after `start_minute`. The minute itself does not match. Send it with `start_minute`. 

### DeliveryWindowTimeConditionPreviousAttributesInput.start_minute

### DeliveryWindowTimeConditionPreviousAttributesInput.start_minute variant 1

anyOf variant 1: First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`..

- Value shape: integer. First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. 

### DeliveryWindowTimeConditionPreviousAttributesInput.start_minute variant 2

anyOf variant 2.

- Value shape: null. First minute of the day that matches, counted from midnight in the window's timezone, from 0 to 1439. Send it with `end_minute`. 

### DeliveryWindowTimeConditionPreviousAttributesInput.weekdays

### DeliveryWindowTimeConditionPreviousAttributesInput.weekdays variant 1

anyOf variant 1: Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday..

- Value shape: Array of string. Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. Items: minLength: `1`. 

### DeliveryWindowTimeConditionPreviousAttributesInput.weekdays variant 2

anyOf variant 2.

- Value shape: null. Lowercase weekday names, such as `monday`, with no duplicates. Omit it to match every weekday. 

