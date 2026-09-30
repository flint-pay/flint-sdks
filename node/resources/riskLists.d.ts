export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { RiskList } from '../declarations/RiskList.js';
import type { RiskListItem } from '../declarations/RiskListItem.js';
import type { RiskListItemListResponse } from '../declarations/RiskListItemListResponse.js';
import type { RiskListItemResponse } from '../declarations/RiskListItemResponse.js';
import type { RiskListItemResultsResponse } from '../declarations/RiskListItemResultsResponse.js';
import type { RiskListListResponse } from '../declarations/RiskListListResponse.js';
import type { RiskListResourceResponse } from '../declarations/RiskListResourceResponse.js';
import type { RiskListsAddItemsInput } from '../declarations/RiskListsAddItemsInput.js';
import type { RiskListsAddItemsResponse } from '../declarations/RiskListsAddItemsResponse.js';
import type { RiskListsCreateInput } from '../declarations/RiskListsCreateInput.js';
import type { RiskListsCreateResponse } from '../declarations/RiskListsCreateResponse.js';
import type { RiskListsDeleteItemInput } from '../declarations/RiskListsDeleteItemInput.js';
import type { RiskListsDeleteItemResponse } from '../declarations/RiskListsDeleteItemResponse.js';
import type { RiskListsGetInput } from '../declarations/RiskListsGetInput.js';
import type { RiskListsGetItemInput } from '../declarations/RiskListsGetItemInput.js';
import type { RiskListsGetItemResponse } from '../declarations/RiskListsGetItemResponse.js';
import type { RiskListsGetResponse } from '../declarations/RiskListsGetResponse.js';
import type { RiskListsListInput } from '../declarations/RiskListsListInput.js';
import type { RiskListsListResponse } from '../declarations/RiskListsListResponse.js';
import type { RiskListsListRiskListItemsInput } from '../declarations/RiskListsListRiskListItemsInput.js';
import type { RiskListsListRiskListItemsResponse } from '../declarations/RiskListsListRiskListItemsResponse.js';
import type { RiskListsRemoveInput } from '../declarations/RiskListsRemoveInput.js';
import type { RiskListsRemoveResponse } from '../declarations/RiskListsRemoveResponse.js';
import type { RiskListsUpdateInput } from '../declarations/RiskListsUpdateInput.js';
import type { RiskListsUpdateResponse } from '../declarations/RiskListsUpdateResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface RiskListsResource {
    /**
 * Add risk list items for the authenticated merchant environment.
 * POST /v1/risk-lists/{risk_list_id}/items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.addItems("example", {values: ["sdk-example"], "Idempotency-Key": idempotencyKey})
 */
    addItems(risk_list_id: InputValue<string>, params: (InputValue<({ "value"?: string; "values": Array<string>; }) & ((({ "value": unknown; }) & ({ "values"?: never })) | (({ "values": unknown; }) & ({ "value"?: never })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskListItemResultsResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    addItemsWithResponse(risk_list_id: InputValue<string>, params: (InputValue<({ "value"?: string; "values": Array<string>; }) & ((({ "value": unknown; }) & ({ "values"?: never })) | (({ "values": unknown; }) & ({ "value"?: never })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskListsAddItemsResponse>>;
    /**
 * Create a risk list for the authenticated merchant environment.
 * POST /v1/risk-lists
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.create({alias: "example", name: "example", item_type: "card_fingerprint", "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "alias": string; "item_type": "card_fingerprint" | "card_bin" | "email" | "email_domain" | "ip_address" | "country" | "customer_id" | "string" | "case_sensitive_string"; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskListResourceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "alias": string; "item_type": "card_fingerprint" | "card_bin" | "email" | "email_domain" | "ip_address" | "country" | "customer_id" | "string" | "case_sensitive_string"; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskListsCreateResponse>>;
    /**
 * Retire a risk list for the authenticated merchant environment.
 * DELETE /v1/risk-lists/{risk_list_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(risk_list_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskListResourceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(risk_list_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskListsRemoveResponse>>;
    /**
 * Delete a risk list item for the authenticated merchant environment.
 * DELETE /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.deleteItem("example", "example", {"Idempotency-Key": idempotencyKey})
 */
    deleteItem(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskListItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteItemWithResponse(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskListsDeleteItemResponse>>;
    /**
 * Get a risk list for the authenticated merchant environment.
 * GET /v1/risk-lists/{risk_list_id}
 * @example
 * client.riskLists.get("example", {})
 */
    get(risk_list_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<RiskListResourceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(risk_list_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskListsGetResponse>>;
    /**
 * Get a risk list item for the authenticated merchant environment.
 * GET /v1/risk-lists/{risk_list_id}/items/{risk_list_item_id}
 * @example
 * client.riskLists.getItem("example", "example", {})
 */
    getItem(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<RiskListItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getItemWithResponse(risk_list_id: InputValue<string>, risk_list_item_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskListsGetItemResponse>>;
    /**
 * List risk list items for the authenticated merchant environment.
 * GET /v1/risk-lists/{risk_list_id}/items
 * @example
 * client.riskLists.listRiskListItems("example", {})
 */
    listRiskListItems(risk_list_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<RiskListItemListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listRiskListItemsWithResponse(risk_list_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskListsListRiskListItemsResponse>>;
    listRiskListItemsPages(risk_list_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<RiskListItemListResponse>;
    listRiskListItemsPagesWithResponse(risk_list_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<RiskListsListRiskListItemsResponse>>;
    listRiskListItemsItems(risk_list_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<RiskListItem>;
    /**
 * List risk lists for the authenticated merchant environment.
 * GET /v1/risk-lists
 * @example
 * client.riskLists.list({})
 */
    list(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<RiskListListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<RiskListsListResponse>>;
    listPages(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<RiskListListResponse>;
    listPagesWithResponse(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<RiskListsListResponse>>;
    listItems(params?: { "include_archived"?: InputValue<boolean>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<RiskList>;
    /**
 * Update a risk list for the authenticated merchant environment.
 * PATCH /v1/risk-lists/{risk_list_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.riskLists.update("example", {name: "example", "Idempotency-Key": idempotencyKey})
 */
    update(risk_list_id: InputValue<string>, params: (InputValue<{ "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RiskListResourceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(risk_list_id: InputValue<string>, params: (InputValue<{ "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<RiskListsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly riskLists: RiskListsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { RiskListItemResultsResponse } from '../declarations/RiskListItemResultsResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { RiskListsAddItemsResponse } from '../declarations/RiskListsAddItemsResponse.js';
export type { RiskListResourceResponse } from '../declarations/RiskListResourceResponse.js';
export type { RiskListsCreateResponse } from '../declarations/RiskListsCreateResponse.js';
export type { RiskListsRemoveResponse } from '../declarations/RiskListsRemoveResponse.js';
export type { RiskListItemResponse } from '../declarations/RiskListItemResponse.js';
export type { RiskListsDeleteItemResponse } from '../declarations/RiskListsDeleteItemResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RiskListsGetResponse } from '../declarations/RiskListsGetResponse.js';
export type { RiskListsGetItemResponse } from '../declarations/RiskListsGetItemResponse.js';
export type { RiskListItemListResponse } from '../declarations/RiskListItemListResponse.js';
export type { RiskListsListRiskListItemsResponse } from '../declarations/RiskListsListRiskListItemsResponse.js';
export type { RiskListItem } from '../declarations/RiskListItem.js';
export type { RiskListListResponse } from '../declarations/RiskListListResponse.js';
export type { RiskListsListResponse } from '../declarations/RiskListsListResponse.js';
export type { RiskList } from '../declarations/RiskList.js';
export type { RiskListsUpdateResponse } from '../declarations/RiskListsUpdateResponse.js';
export type { RiskListsAddItemsInput } from '../declarations/RiskListsAddItemsInput.js';
export type { RiskListsCreateInput } from '../declarations/RiskListsCreateInput.js';
export type { RiskListsRemoveInput } from '../declarations/RiskListsRemoveInput.js';
export type { RiskListsDeleteItemInput } from '../declarations/RiskListsDeleteItemInput.js';
export type { RiskListsGetInput } from '../declarations/RiskListsGetInput.js';
export type { RiskListsGetItemInput } from '../declarations/RiskListsGetItemInput.js';
export type { RiskListsListRiskListItemsInput } from '../declarations/RiskListsListRiskListItemsInput.js';
export type { RiskListsListInput } from '../declarations/RiskListsListInput.js';
export type { RiskListsUpdateInput } from '../declarations/RiskListsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { RiskListItemResultsData } from '../declarations/RiskListItemResultsData.js';
export type { PublicRiskListItemResult } from '../declarations/PublicRiskListItemResult.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { AddRiskListItemsRequestInput } from '../declarations/AddRiskListItemsRequestInput.js';
export type { CreateRiskListRequestInput } from '../declarations/CreateRiskListRequestInput.js';
export type { UpdateRiskListRequestInput } from '../declarations/UpdateRiskListRequestInput.js';
export { makeRiskListItemResultsResponse } from '../declarations/makeRiskListItemResultsResponse.js';
export { makeRiskListResourceResponse } from '../declarations/makeRiskListResourceResponse.js';
export { makeRiskListItemResponse } from '../declarations/makeRiskListItemResponse.js';
export { makeRiskListItemListResponse } from '../declarations/makeRiskListItemListResponse.js';
export { makeRiskListItem } from '../declarations/makeRiskListItem.js';
export { makeRiskListListResponse } from '../declarations/makeRiskListListResponse.js';
export { makeRiskList } from '../declarations/makeRiskList.js';
export { makeRiskListItemResultsData } from '../declarations/makeRiskListItemResultsData.js';
export { makePublicRiskListItemResult } from '../declarations/makePublicRiskListItemResult.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
