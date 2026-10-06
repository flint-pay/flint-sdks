
import type { ApiRequestLogExpansionShapeInput } from './ApiRequestLogExpansionShapeInput.js';

export type ApiRequestLogResponseShapeMetadataInput = { "auth_mode": "api_key_or_partner" | "checkout_session"; "expansion_shapes": Array<ApiRequestLogExpansionShapeInput>; "normalized_expand_paths": Array<string>; "response_shape_key": string; };
