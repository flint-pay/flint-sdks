
import type { LineItemFulfillmentOriginRequestInput } from './LineItemFulfillmentOriginRequestInput.js';
import type { LineItemFulfillmentSizeRequestInput } from './LineItemFulfillmentSizeRequestInput.js';
import type { LineItemFulfillmentWeightRequestInput } from './LineItemFulfillmentWeightRequestInput.js';

export type LineItemFulfillmentRequestInput = { "allowed_types"?: Array<string>; "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone"; "dimensions"?: LineItemFulfillmentSizeRequestInput; "origin_policy"?: LineItemFulfillmentOriginRequestInput; "requirement": "none" | "required"; "resolution_mode"?: "quote" | "manual"; "splitting_policy"?: "whole_line_item" | "quantity_split_allowed"; "weight"?: LineItemFulfillmentWeightRequestInput; };
