
import type { ApiRequestLogExpansionShape } from './ApiRequestLogExpansionShape.js';

export type ApiRequestLogResponseShapeMetadata = { "auth_mode": "api_key_or_partner" | "checkout_session" | (string & {}); "expansion_shapes": Array<ApiRequestLogExpansionShape>; "normalized_expand_paths": Array<string>; "response_shape_key": string; };
