
import type { DeliveryPreview } from './DeliveryPreview.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type DeliveryPreviewResponse = { "data": DeliveryPreview; "meta"?: ResponseMeta; "request_id"?: string; };
