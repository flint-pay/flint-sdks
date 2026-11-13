[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CallerSuppliedDeliveryMethodResultRequest

The rate result you supply for one delivery method and choice group when creating a delivery quote with caller-supplied pricing.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_choice_group_id` | Required | string | Choice group the outcome is for. minLength: `1`. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_method_revision_id` | Required | string | Revision of the delivery method the outcome is for. minLength: `1`. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |
| `outcome` | Required | [CallerSuppliedDeliveryOutcomeRequest](../models/CallerSuppliedDeliveryOutcomeRequest.md#callersupplieddeliveryoutcomerequest) | Rate your integration supplies for this method and choice group. Your outcome for a caller-priced delivery method, selected by `type`: available with a price and windows, unavailable with a reason, or cannot calculate. |

