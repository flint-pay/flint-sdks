


export type DeliveryProfileOriginPolicyRequestInput = ({ "location_id"?: string; "type": "fixed_location" | "inventory_routing" | "method_origin"; }) & (({ "type": "fixed_location"; "location_id": unknown; }) | (({ "type": "inventory_routing"; }) & (({ "location_id"?: never }))) | (({ "type": "method_origin"; }) & (({ "location_id"?: never }))));
