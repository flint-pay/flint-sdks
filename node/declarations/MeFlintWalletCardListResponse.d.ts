
import type { MeFlintWalletCard } from './MeFlintWalletCard.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type MeFlintWalletCardListResponse = { "data": Array<MeFlintWalletCard>; /** Always false. This operation returns the full usable card collection. */ "has_more": boolean; "meta"?: ResponseMeta; "request_id": string; };
