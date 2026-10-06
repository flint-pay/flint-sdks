
import type { MeFlintWalletCardInput } from './MeFlintWalletCardInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type MeFlintWalletCardListResponseInput = { "data": Array<MeFlintWalletCardInput>; /** Always false. This operation returns the full usable card collection. */ "has_more"?: never; "meta"?: ResponseMetaInput; "request_id": string; };
