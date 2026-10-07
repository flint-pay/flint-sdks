export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { APIKey } from '../declarations/APIKey.js';
import type { APIKeyListResponse } from '../declarations/APIKeyListResponse.js';
import type { APIKeyResponse } from '../declarations/APIKeyResponse.js';
import type { ApiKeysCreateInput } from '../declarations/ApiKeysCreateInput.js';
import type { ApiKeysCreateResponse } from '../declarations/ApiKeysCreateResponse.js';
import type { ApiKeysGetInput } from '../declarations/ApiKeysGetInput.js';
import type { ApiKeysGetResponse } from '../declarations/ApiKeysGetResponse.js';
import type { ApiKeysListInput } from '../declarations/ApiKeysListInput.js';
import type { ApiKeysListResponse } from '../declarations/ApiKeysListResponse.js';
import type { ApiKeysRevokeInput } from '../declarations/ApiKeysRevokeInput.js';
import type { ApiKeysRevokeResponse } from '../declarations/ApiKeysRevokeResponse.js';
import type { ApiKeysUpdateInput } from '../declarations/ApiKeysUpdateInput.js';
import type { ApiKeysUpdateResponse } from '../declarations/ApiKeysUpdateResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateAPIKeyResponse } from '../declarations/CreateAPIKeyResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ApiKeysResource {
    /**
 * Creates a merchant-bound external API key. secret_key is returned only in the initial successful response and accepted idempotent replays of the same create request.
 * POST /v1/api-keys
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.create({name: "example", scopes: []}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "expires_at"?: string | globalThis.Date; "name": string; "sandbox_id"?: string; "scopes": Array<"accounts.api_keys.read" | "accounts.api_keys.write" | "accounts.devices.read" | "accounts.devices.write" | "accounts.organizations.read" | "accounts.organizations.write" | "analytics.read" | "capabilities.read" | "checkouts.checkout_sessions.read" | "checkouts.checkout_sessions.write" | "checkouts.payment_links.read" | "checkouts.payment_links.write" | "commerce.bundles.read" | "commerce.bundles.write" | "commerce.catalog.read" | "commerce.catalog.write" | "commerce.credit_notes.read" | "commerce.credit_notes.write" | "commerce.delivery.read" | "commerce.delivery.write" | "commerce.gift_cards.adjustments.write" | "commerce.gift_cards.read" | "commerce.gift_cards.redemptions.write" | "commerce.gift_cards.secrets.write" | "commerce.gift_cards.write" | "commerce.inventory.read" | "commerce.inventory.write" | "commerce.inventory_locations.write" | "commerce.inventory_policies.write" | "commerce.invoices.read" | "commerce.invoices.write" | "commerce.orders.read" | "commerce.orders.write" | "commerce.products.read" | "commerce.products.write" | "commerce.promotions.read" | "commerce.promotions.write" | "commerce.refunds.read" | "commerce.refunds.tax_overrides.write" | "commerce.refunds.write" | "commerce.return_policies.write" | "commerce.return_reasons.write" | "commerce.returns.operations.write" | "commerce.returns.read" | "commerce.returns.resolutions.write" | "commerce.returns.write" | "commerce.subscription_plans.read" | "commerce.subscription_plans.write" | "commerce.subscriptions.read" | "commerce.subscriptions.write" | "customers.read" | "customers.sessions.write" | "customers.write" | "developer.feedback_reports.read" | "developer.feedback_reports.write" | "developer.partner_apps.read" | "developer.partner_apps.write" | "developer.request_logs.self.detail.read" | "developer.request_logs.self.read" | "developer.resource_timelines.read" | "developer.sandboxes.read" | "developer.sandboxes.write" | "merchant_billing.read" | "merchants.account_sessions.write" | "merchants.locations.read" | "merchants.locations.write" | "merchants.onboarding.read" | "merchants.onboarding.write" | "merchants.profile.read" | "merchants.profile.write" | "money_movement.balance_transactions.read" | "money_movement.balances.read" | "money_movement.payout_settings.read" | "money_movement.payout_settings.write" | "money_movement.payouts.read" | "money_movement.payouts.write" | "payments.disputes.read" | "payments.payment_intents.read" | "payments.payment_intents.write" | "payments.payment_method_domains.read" | "payments.payment_method_domains.write" | "payments.payment_methods.read" | "payments.payment_methods.write" | "payments.payment_options.read" | "reports.read" | "reports.write" | "risk.controls.write" | "risk.read" | "risk.reviews.write" | "settings.read" | "settings.write" | "webhooks.read" | "webhooks.write">; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateAPIKeyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "expires_at"?: string | globalThis.Date; "name": string; "sandbox_id"?: string; "scopes": Array<"accounts.api_keys.read" | "accounts.api_keys.write" | "accounts.devices.read" | "accounts.devices.write" | "accounts.organizations.read" | "accounts.organizations.write" | "analytics.read" | "capabilities.read" | "checkouts.checkout_sessions.read" | "checkouts.checkout_sessions.write" | "checkouts.payment_links.read" | "checkouts.payment_links.write" | "commerce.bundles.read" | "commerce.bundles.write" | "commerce.catalog.read" | "commerce.catalog.write" | "commerce.credit_notes.read" | "commerce.credit_notes.write" | "commerce.delivery.read" | "commerce.delivery.write" | "commerce.gift_cards.adjustments.write" | "commerce.gift_cards.read" | "commerce.gift_cards.redemptions.write" | "commerce.gift_cards.secrets.write" | "commerce.gift_cards.write" | "commerce.inventory.read" | "commerce.inventory.write" | "commerce.inventory_locations.write" | "commerce.inventory_policies.write" | "commerce.invoices.read" | "commerce.invoices.write" | "commerce.orders.read" | "commerce.orders.write" | "commerce.products.read" | "commerce.products.write" | "commerce.promotions.read" | "commerce.promotions.write" | "commerce.refunds.read" | "commerce.refunds.tax_overrides.write" | "commerce.refunds.write" | "commerce.return_policies.write" | "commerce.return_reasons.write" | "commerce.returns.operations.write" | "commerce.returns.read" | "commerce.returns.resolutions.write" | "commerce.returns.write" | "commerce.subscription_plans.read" | "commerce.subscription_plans.write" | "commerce.subscriptions.read" | "commerce.subscriptions.write" | "customers.read" | "customers.sessions.write" | "customers.write" | "developer.feedback_reports.read" | "developer.feedback_reports.write" | "developer.partner_apps.read" | "developer.partner_apps.write" | "developer.request_logs.self.detail.read" | "developer.request_logs.self.read" | "developer.resource_timelines.read" | "developer.sandboxes.read" | "developer.sandboxes.write" | "merchant_billing.read" | "merchants.account_sessions.write" | "merchants.locations.read" | "merchants.locations.write" | "merchants.onboarding.read" | "merchants.onboarding.write" | "merchants.profile.read" | "merchants.profile.write" | "money_movement.balance_transactions.read" | "money_movement.balances.read" | "money_movement.payout_settings.read" | "money_movement.payout_settings.write" | "money_movement.payouts.read" | "money_movement.payouts.write" | "payments.disputes.read" | "payments.payment_intents.read" | "payments.payment_intents.write" | "payments.payment_method_domains.read" | "payments.payment_method_domains.write" | "payments.payment_methods.read" | "payments.payment_methods.write" | "payments.payment_options.read" | "reports.read" | "reports.write" | "risk.controls.write" | "risk.read" | "risk.reviews.write" | "settings.read" | "settings.write" | "webhooks.read" | "webhooks.write">; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ApiKeysCreateResponse>>;
    /**
 * Returns external API key metadata. Secrets, internal keys, and demo-session keys are not returned.
 * GET /v1/api-keys/{api_key_id}
 * @example
 * client.apiKeys.get("example")
 */
    get(api_key_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<APIKeyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(api_key_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ApiKeysGetResponse>>;
    /**
 * Returns merchant-bound external API key metadata. Internal keys, demo-session keys, and secrets are never returned.
 * GET /v1/api-keys
 * @example
 * client.apiKeys.list()
 */
    list(params?: { "status"?: InputValue<"active" | "revoked">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<APIKeyListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "status"?: InputValue<"active" | "revoked">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ApiKeysListResponse>>;
    listPages(params?: { "status"?: InputValue<"active" | "revoked">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<APIKeyListResponse>;
    listPagesWithResponse(params?: { "status"?: InputValue<"active" | "revoked">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ApiKeysListResponse>>;
    listItems(params?: { "status"?: InputValue<"active" | "revoked">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<APIKey>;
    /**
 * Permanently revokes an external API key and returns metadata with status revoked.
 * POST /v1/api-keys/{api_key_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.revoke("example", {}, { idempotencyKey: idempotencyKey })
 */
    revoke(api_key_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<APIKeyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    revokeWithResponse(api_key_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ApiKeysRevokeResponse>>;
    /**
 * Updates an active external API key's name or complete scope list. API-key-authenticated callers may delegate only scopes already granted to the calling key.
 * PATCH /v1/api-keys/{api_key_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.apiKeys.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(api_key_id: InputValue<string>, params: (InputValue<{ "expires_at"?: string | globalThis.Date | null; "name"?: string; "scopes"?: Array<"accounts.api_keys.read" | "accounts.api_keys.write" | "accounts.devices.read" | "accounts.devices.write" | "accounts.organizations.read" | "accounts.organizations.write" | "analytics.read" | "capabilities.read" | "checkouts.checkout_sessions.read" | "checkouts.checkout_sessions.write" | "checkouts.payment_links.read" | "checkouts.payment_links.write" | "commerce.bundles.read" | "commerce.bundles.write" | "commerce.catalog.read" | "commerce.catalog.write" | "commerce.credit_notes.read" | "commerce.credit_notes.write" | "commerce.delivery.read" | "commerce.delivery.write" | "commerce.gift_cards.adjustments.write" | "commerce.gift_cards.read" | "commerce.gift_cards.redemptions.write" | "commerce.gift_cards.secrets.write" | "commerce.gift_cards.write" | "commerce.inventory.read" | "commerce.inventory.write" | "commerce.inventory_locations.write" | "commerce.inventory_policies.write" | "commerce.invoices.read" | "commerce.invoices.write" | "commerce.orders.read" | "commerce.orders.write" | "commerce.products.read" | "commerce.products.write" | "commerce.promotions.read" | "commerce.promotions.write" | "commerce.refunds.read" | "commerce.refunds.tax_overrides.write" | "commerce.refunds.write" | "commerce.return_policies.write" | "commerce.return_reasons.write" | "commerce.returns.operations.write" | "commerce.returns.read" | "commerce.returns.resolutions.write" | "commerce.returns.write" | "commerce.subscription_plans.read" | "commerce.subscription_plans.write" | "commerce.subscriptions.read" | "commerce.subscriptions.write" | "customers.read" | "customers.sessions.write" | "customers.write" | "developer.feedback_reports.read" | "developer.feedback_reports.write" | "developer.partner_apps.read" | "developer.partner_apps.write" | "developer.request_logs.self.detail.read" | "developer.request_logs.self.read" | "developer.resource_timelines.read" | "developer.sandboxes.read" | "developer.sandboxes.write" | "merchant_billing.read" | "merchants.account_sessions.write" | "merchants.locations.read" | "merchants.locations.write" | "merchants.onboarding.read" | "merchants.onboarding.write" | "merchants.profile.read" | "merchants.profile.write" | "money_movement.balance_transactions.read" | "money_movement.balances.read" | "money_movement.payout_settings.read" | "money_movement.payout_settings.write" | "money_movement.payouts.read" | "money_movement.payouts.write" | "payments.disputes.read" | "payments.payment_intents.read" | "payments.payment_intents.write" | "payments.payment_method_domains.read" | "payments.payment_method_domains.write" | "payments.payment_methods.read" | "payments.payment_methods.write" | "payments.payment_options.read" | "reports.read" | "reports.write" | "risk.controls.write" | "risk.read" | "risk.reviews.write" | "settings.read" | "settings.write" | "webhooks.read" | "webhooks.write">; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<APIKeyResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(api_key_id: InputValue<string>, params: (InputValue<{ "expires_at"?: string | globalThis.Date | null; "name"?: string; "scopes"?: Array<"accounts.api_keys.read" | "accounts.api_keys.write" | "accounts.devices.read" | "accounts.devices.write" | "accounts.organizations.read" | "accounts.organizations.write" | "analytics.read" | "capabilities.read" | "checkouts.checkout_sessions.read" | "checkouts.checkout_sessions.write" | "checkouts.payment_links.read" | "checkouts.payment_links.write" | "commerce.bundles.read" | "commerce.bundles.write" | "commerce.catalog.read" | "commerce.catalog.write" | "commerce.credit_notes.read" | "commerce.credit_notes.write" | "commerce.delivery.read" | "commerce.delivery.write" | "commerce.gift_cards.adjustments.write" | "commerce.gift_cards.read" | "commerce.gift_cards.redemptions.write" | "commerce.gift_cards.secrets.write" | "commerce.gift_cards.write" | "commerce.inventory.read" | "commerce.inventory.write" | "commerce.inventory_locations.write" | "commerce.inventory_policies.write" | "commerce.invoices.read" | "commerce.invoices.write" | "commerce.orders.read" | "commerce.orders.write" | "commerce.products.read" | "commerce.products.write" | "commerce.promotions.read" | "commerce.promotions.write" | "commerce.refunds.read" | "commerce.refunds.tax_overrides.write" | "commerce.refunds.write" | "commerce.return_policies.write" | "commerce.return_reasons.write" | "commerce.returns.operations.write" | "commerce.returns.read" | "commerce.returns.resolutions.write" | "commerce.returns.write" | "commerce.subscription_plans.read" | "commerce.subscription_plans.write" | "commerce.subscriptions.read" | "commerce.subscriptions.write" | "customers.read" | "customers.sessions.write" | "customers.write" | "developer.feedback_reports.read" | "developer.feedback_reports.write" | "developer.partner_apps.read" | "developer.partner_apps.write" | "developer.request_logs.self.detail.read" | "developer.request_logs.self.read" | "developer.resource_timelines.read" | "developer.sandboxes.read" | "developer.sandboxes.write" | "merchant_billing.read" | "merchants.account_sessions.write" | "merchants.locations.read" | "merchants.locations.write" | "merchants.onboarding.read" | "merchants.onboarding.write" | "merchants.profile.read" | "merchants.profile.write" | "money_movement.balance_transactions.read" | "money_movement.balances.read" | "money_movement.payout_settings.read" | "money_movement.payout_settings.write" | "money_movement.payouts.read" | "money_movement.payouts.write" | "payments.disputes.read" | "payments.payment_intents.read" | "payments.payment_intents.write" | "payments.payment_method_domains.read" | "payments.payment_method_domains.write" | "payments.payment_methods.read" | "payments.payment_methods.write" | "payments.payment_options.read" | "reports.read" | "reports.write" | "risk.controls.write" | "risk.read" | "risk.reviews.write" | "settings.read" | "settings.write" | "webhooks.read" | "webhooks.write">; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ApiKeysUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly apiKeys: ApiKeysResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateAPIKeyResponse } from '../declarations/CreateAPIKeyResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ApiKeysCreateResponse } from '../declarations/ApiKeysCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { APIKeyResponse } from '../declarations/APIKeyResponse.js';
export type { ApiKeysGetResponse } from '../declarations/ApiKeysGetResponse.js';
export type { APIKeyListResponse } from '../declarations/APIKeyListResponse.js';
export type { ApiKeysListResponse } from '../declarations/ApiKeysListResponse.js';
export type { APIKey } from '../declarations/APIKey.js';
export type { ApiKeysRevokeResponse } from '../declarations/ApiKeysRevokeResponse.js';
export type { ApiKeysUpdateResponse } from '../declarations/ApiKeysUpdateResponse.js';
export type { ApiKeysCreateInput } from '../declarations/ApiKeysCreateInput.js';
export type { ApiKeysGetInput } from '../declarations/ApiKeysGetInput.js';
export type { ApiKeysListInput } from '../declarations/ApiKeysListInput.js';
export type { ApiKeysRevokeInput } from '../declarations/ApiKeysRevokeInput.js';
export type { ApiKeysUpdateInput } from '../declarations/ApiKeysUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { APIKeyWithSecret } from '../declarations/APIKeyWithSecret.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { CreateAPIKeyRequestInput } from '../declarations/CreateAPIKeyRequestInput.js';
export type { UpdateAPIKeyRequestInput } from '../declarations/UpdateAPIKeyRequestInput.js';
export { makeCreateAPIKeyResponse } from '../declarations/makeCreateAPIKeyResponse.js';
export { makeAPIKeyResponse } from '../declarations/makeAPIKeyResponse.js';
export { makeAPIKeyListResponse } from '../declarations/makeAPIKeyListResponse.js';
export { makeAPIKey } from '../declarations/makeAPIKey.js';
export { makeAPIKeyWithSecret } from '../declarations/makeAPIKeyWithSecret.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
