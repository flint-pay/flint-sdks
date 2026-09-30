
import type { LineItemFulfillmentOriginRequest } from './LineItemFulfillmentOriginRequest.js';
import type { LineItemFulfillmentSizeRequest } from './LineItemFulfillmentSizeRequest.js';
import type { LineItemFulfillmentWeightRequest } from './LineItemFulfillmentWeightRequest.js';

export type LineItemFulfillmentRequest = { "allowed_types"?: Array<string>; "combination_policy"?: "combine_when_compatible" | "separate_profile" | "separate_line_item" | "fulfill_alone" | (string & {}); "dimensions"?: LineItemFulfillmentSizeRequest; "origin_policy"?: LineItemFulfillmentOriginRequest; "requirement": "none" | "required" | (string & {}); "resolution_mode"?: "quote" | "manual" | (string & {}); "splitting_policy"?: "whole_line_item" | "quantity_split_allowed" | (string & {}); "weight"?: LineItemFulfillmentWeightRequest; };
