
import type { CheckoutSessionLineItemModifierUpdate } from './CheckoutSessionLineItemModifierUpdate.js';
import type { Order } from './Order.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OrdersUpdateLineItemResponseKnown = (({ "data": Order; "meta"?: ResponseMeta; "request_id"?: string; }) | ({ "data": CheckoutSessionLineItemModifierUpdate; "meta"?: ResponseMeta; "request_id"?: string; }));
