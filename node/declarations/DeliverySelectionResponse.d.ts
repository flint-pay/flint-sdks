
import type { DeliverySelection } from './DeliverySelection.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliverySelectionResponse = { "data": DeliverySelection; "meta"?: ResponseMeta; "request_id"?: string; };
