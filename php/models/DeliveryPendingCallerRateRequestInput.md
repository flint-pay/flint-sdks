[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPendingCallerRateRequestInput

A delivery method and choice group still waiting for a caller-supplied rate on a delivery quote.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_choice_group_id` | Required | string | Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_method_id` | Required | string | Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_method_revision_id` | Required | string | Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. |

