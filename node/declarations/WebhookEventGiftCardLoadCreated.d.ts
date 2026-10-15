
import type { GiftCardFundingDispute } from './GiftCardFundingDispute.js';
import type { GiftCardFundingSource } from './GiftCardFundingSource.js';
import type { GiftCardLoad } from './GiftCardLoad.js';
import type { GiftCardPurchaseRefundAllocation } from './GiftCardPurchaseRefundAllocation.js';
import type { GiftCardPurchaseRefundValueHold } from './GiftCardPurchaseRefundValueHold.js';
import type { GiftCardPurchaseRestoration } from './GiftCardPurchaseRestoration.js';
import type { GiftCardRefundProvenance } from './GiftCardRefundProvenance.js';
import type { MerchantWebhookEnvelope } from './MerchantWebhookEnvelope.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PartnerWebhookEnvelope } from './PartnerWebhookEnvelope.js';

export type WebhookEventGiftCardLoadCreated = (((({ "data"?: GiftCardLoad; "event_type"?: unknown; }) & (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)) | (({ "data"?: { "consideration_money": (({ "amount": string; "currency": string; }) | (null)); "created_at": string; "environment_grant_id": string; "environment_id"?: string; "funding_disputes": Array<GiftCardFundingDispute>; "gift_card_id": string; "gift_card_load_id": string; "idempotency_key": string; "merchant_id": string; "mode": "test" | "live" | (string & {}); "partner_app_install_id": string; "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>; "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>; "purchase_restoration"?: GiftCardPurchaseRestoration; "refund_provenance"?: GiftCardRefundProvenance; "refund_transferred_money"?: MoneyValue; "remaining_money": MoneyValue; "reversed_money": MoneyValue; "source": GiftCardFundingSource; "source_created_at": string | null; "source_type": unknown; "value_money": MoneyValue; "version": string; }; "event_type"?: unknown; }) & (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>))) & { "event_type": "gift_card_load.created" });
