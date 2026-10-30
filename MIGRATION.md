# SDK 8.0.0

This guide covers upgrading from `7.0.0` to the `8.0.0-beta.1` prerelease. The breaking changes have no deprecated aliases or compatibility overloads. Install `@flintpay/node@8.0.0-beta.1` or `flintpay/flint:8.0.0-beta.1`. The API date is `2026-09-07`; this beta pins Flint `main` at `6cd24dfcae461df982718effa88460b3c732c1e2`. Stable releases will pin the backend commit serving production.

TypeScript reports most of these changes as compile errors, so run `tsc` after upgrading and work through the output. PHP reports them when the call runs; use the search patterns in [Finding call sites](#finding-call-sites).

What changed, most common first:

- [Names](#method-and-namespace-names): namespaces and methods follow API paths and operation IDs. 98 methods are renamed, and `developer` is split into five namespaces.
- [Calling convention](#one-calling-convention): every method takes `(path IDs, params?, options?)`. Idempotency keys go only in `options`.
- [Errors](#errors): classes follow the HTTP status, 403 is `PermissionError`, API error fields are first-class, and `kind` and `meta` are removed. PHP `getCode()` returns the error code.
- [Integers and money](#integers-and-money): `version` and other counters are numbers. `Money.amount` stays an exact string.
- [Outcomes and timeouts](#outcomes-retries-and-timeouts): `outcome: "unknown"` follows new rules, and money operations wait up to 150 seconds per attempt.
- [Results](#results-carry-lastresponse): results carry `lastResponse`, and the `*WithResponse` methods are removed.
- [Credentials](#credentials): a credential option passed empty throws instead of falling back to the environment.
- [Type names](#type-names), [examples](#examples-and-the-default-host), [packaging](#packaging) and [API contract changes](#api-contract-changes-in-800).

## Method and namespace names

The namespace is now the first path segment after `/v1`, in lowerCamelCase. The method is the operation ID without the namespace noun. Of 610 methods, 98 change: 45 move to another namespace and 53 keep their namespace under a new name. The `Pages` and `Items` helpers follow their method's new name. The generated `REFERENCE.md` lists every method.

The changes most integrations hit:

- `developer` is removed. Its methods move to `sandboxes`, `partnerApps`, `apiRequestLogs`, `resourceTimelines` and `authContext`.
- `reviews` is now `paymentReviews`.
- Payout destination methods move from `payoutSettings` to `payoutDestinations`.
- `merchants` is now `merchant`, and `merchantSubscriptionInvoices` is now `merchantBillingInvoices`.
- `remove` is now `delete` on every resource whose operation deletes it.
- `voidResource` and `closeSession` are now `void` and `close`.

```js
// 7.x
const context = await flint.developer.getAuthContext();
const sandboxes = await flint.developer.listSandboxes();
await flint.reviews.approve(paymentReviewId);
await flint.products.remove(productId);
await flint.invoices.voidResource(invoiceId);

// 8.0.0
const context = await flint.authContext.get();
const sandboxes = await flint.sandboxes.list();
await flint.paymentReviews.approve(paymentReviewId);
await flint.products.delete(productId);
await flint.invoices.void(invoiceId);
```

```php
// 7.x
$context = $flint->developer->getAuthContext();
$flint->products->remove($productId);

// 8.0.0
$context = $flint->authContext->get();
$flint->products->delete($productId);
```

What to do: rename each call using the tables below. Arguments don't change, except for the [13 methods](#one-calling-convention) that took `{ id, body }`.

### Namespace moves (45)

| 7.x | 8.0.0 | Route |
| --- | --- | --- |
| `customers.createDeletionRequest` | `customerDeletionRequests.create` | `POST /v1/customer-deletion-requests` |
| `customers.getDeletionRequest` | `customerDeletionRequests.get` | `GET /v1/customer-deletion-requests/{customer_deletion_request_id}` |
| `developer.getCurrentAPIKeyRequestLog` | `apiRequestLogs.get` | `GET /v1/api-request-logs/{api_request_log_id}` |
| `developer.listCurrentAPIKeyRequestLogs` | `apiRequestLogs.list` | `GET /v1/api-request-logs` |
| `developer.getAuthContext` | `authContext.get` | `GET /v1/auth-context` |
| `developer.createPartnerApp` | `partnerApps.create` | `POST /v1/partner-apps` |
| `developer.createPartnerAppCredential` | `partnerApps.createCredential` | `POST /v1/partner-apps/{partner_app_id}/credentials` |
| `developer.deletePartnerApp` | `partnerApps.delete` | `DELETE /v1/partner-apps/{partner_app_id}` |
| `developer.deletePartnerAppCredential` | `partnerApps.deleteCredential` | `DELETE /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}` |
| `developer.getPartnerApp` | `partnerApps.get` | `GET /v1/partner-apps/{partner_app_id}` |
| `developer.getPartnerAppCredential` | `partnerApps.getCredential` | `GET /v1/partner-apps/{partner_app_id}/credentials/{partner_app_credential_id}` |
| `developer.getPartnerAppInstall` | `partnerApps.getInstall` | `GET /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}` |
| `developer.listPartnerApps` | `partnerApps.list` | `GET /v1/partner-apps` |
| `developer.listPartnerAppCredentials` | `partnerApps.listCredentials` | `GET /v1/partner-apps/{partner_app_id}/credentials` |
| `developer.listPartnerAppInstalls` | `partnerApps.listInstalls` | `GET /v1/partner-apps/{partner_app_id}/installs` |
| `developer.revokePartnerEnvironmentGrant` | `partnerApps.revokeEnvironmentGrant` | `POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/environment-grants/{environment_grant_id}/revoke` |
| `developer.revokePartnerAppInstall` | `partnerApps.revokeInstall` | `POST /v1/partner-apps/{partner_app_id}/installs/{partner_app_install_id}/revoke` |
| `developer.rotatePartnerAppSecret` | `partnerApps.rotateSecret` | `POST /v1/partner-apps/{partner_app_id}/rotate-secret` |
| `developer.updatePartnerApp` | `partnerApps.update` | `PATCH /v1/partner-apps/{partner_app_id}` |
| `developer.getResourceTimeline` | `resourceTimelines.get` | `GET /v1/resource-timelines/{resource_id}` |
| `developer.createSandbox` | `sandboxes.create` | `POST /v1/sandboxes` |
| `developer.createSandboxAPIKey` | `sandboxes.createAPIKey` | `POST /v1/sandboxes/{sandbox_id}/api-keys` |
| `developer.deleteSandbox` | `sandboxes.delete` | `DELETE /v1/sandboxes/{sandbox_id}` |
| `developer.getSandbox` | `sandboxes.get` | `GET /v1/sandboxes/{sandbox_id}` |
| `developer.listSandboxes` | `sandboxes.list` | `GET /v1/sandboxes` |
| `developer.resetSandbox` | `sandboxes.reset` | `POST /v1/sandboxes/{sandbox_id}/reset` |
| `giftCardAdjustments.create` | `giftCards.adjustBalance` | `POST /v1/gift-cards/{gift_card_id}/adjust-balance` |
| `giftCardCashOuts.create` | `giftCards.cashOut` | `POST /v1/gift-cards/{gift_card_id}/cash-out` |
| `giftCardLoads.create` | `giftCards.createLoad` | `POST /v1/gift-cards/{gift_card_id}/loads` |
| `merchantSubscriptionInvoices.get` | `merchantBillingInvoices.get` | `GET /v1/merchant-billing-invoices/{merchant_billing_invoice_id}` |
| `merchantSubscriptionInvoices.list` | `merchantBillingInvoices.list` | `GET /v1/merchant-billing-invoices` |
| `merchants.get` | `merchant.get` | `GET /v1/merchant` |
| `merchants.update` | `merchant.update` | `PATCH /v1/merchant` |
| `payoutSettings.deletePayoutDestination` | `payoutDestinations.delete` | `DELETE /v1/payout-destinations/{payout_destination_id}` |
| `payoutSettings.getPayoutDestination` | `payoutDestinations.get` | `GET /v1/payout-destinations/{payout_destination_id}` |
| `payoutSettings.listPayoutDestinations` | `payoutDestinations.list` | `GET /v1/payout-destinations` |
| `payoutSettings.updatePayoutDestination` | `payoutDestinations.update` | `PATCH /v1/payout-destinations/{payout_destination_id}` |
| `promotions.listCodes` | `promotionCodes.list` | `GET /v1/promotion-codes` |
| `reviews.approve` | `paymentReviews.approve` | `POST /v1/payment-reviews/{payment_review_id}/approve` |
| `reviews.decline` | `paymentReviews.decline` | `POST /v1/payment-reviews/{payment_review_id}/decline` |
| `reviews.get` | `paymentReviews.get` | `GET /v1/payment-reviews/{payment_review_id}` |
| `reviews.list` | `paymentReviews.list` | `GET /v1/payment-reviews` |
| `settings.validateCustomDomain` | `customDomains.validate` | `POST /v1/custom-domains/{custom_domain_id}/validate` |
| `specification.get` | `openapi.getSpec` | `GET /v1/openapi.json` |
| `webhookEvents.listWebhookDeliveries` | `webhookDeliveries.list` | `GET /v1/webhook-deliveries` |

### `remove` becomes `delete` (27)

`remove` is now `delete` on these 27 namespaces, each calling `DELETE` on its resource: `bundles`, `categories`, `customDomains`, `deliveryLocationSets`, `deliveryMethods`, `deliveryProfiles`, `deliveryRateCallbacks`, `deliveryZones`, `devices`, `inventoryAllocationPolicies`, `inventoryItems`, `invoicePaymentTerms`, `locations`, `modifierGroups`, `modifierSets`, `organizations`, `paymentMethods`, `products`, `promotions`, `returnPolicies`, `returnReasons`, `riskLists`, `riskRules`, `subscriptionOffers`, `subscriptionPlans`, `webhookEndpoints`, `workloadIdentities`.

### Other method renames (26)

| 7.x | 8.0.0 | Route |
| --- | --- | --- |
| `checkoutSessions.closeSession` | `checkoutSessions.close` | `POST /v1/checkout-sessions/{checkout_session_id}/close` |
| `creditNotes.voidResource` | `creditNotes.void` | `POST /v1/credit-notes/{credit_note_id}/void` |
| `deliveryRateCallbacks.rotateSigningKey` | `deliveryRateCallbacks.rotateSecret` | `POST /v1/delivery-rate-callbacks/{delivery_rate_callback_id}/rotate-secret` |
| `deliveryRevocations.revokeDeliveryDependency` | `deliveryRevocations.create` | `POST /v1/delivery-revocations` |
| `invoices.assessLateFee` | `invoices.createLateFee` | `POST /v1/invoices/{invoice_id}/late-fees` |
| `invoices.recordManualPayment` | `invoices.createManualPayment` | `POST /v1/invoices/{invoice_id}/manual-payments` |
| `invoices.voidResource` | `invoices.void` | `POST /v1/invoices/{invoice_id}/void` |
| `me.removePaymentMethod` | `me.deletePaymentMethod` | `DELETE /v1/me/payment-methods/{payment_method_id}` |
| `me.savePaymentMethod` | `me.createPaymentMethod` | `POST /v1/me/payment-methods` |
| `onboarding.startFlow` | `onboarding.start` | `POST /v1/onboarding/start` |
| `onboarding.verifyEmailCode` | `onboarding.verifyEmail` | `POST /v1/onboarding/verify-email` |
| `orders.addCharge` | `orders.createCharge` | `POST /v1/orders/{order_id}/charges` |
| `orders.addLineItems` | `orders.createLineItems` | `POST /v1/orders/{order_id}/line-items` |
| `orders.closeSession` | `orders.close` | `POST /v1/orders/{order_id}/close` |
| `organizations.revokeMembership` | `organizations.removeMembership` | `DELETE /v1/organizations/{organization_id}/memberships/{user_id}` |
| `packages.voidResource` | `packages.void` | `POST /v1/packages/{package_id}/void` |
| `paymentMethods.save` | `paymentMethods.create` | `POST /v1/payment-methods` |
| `returnPolicies.publishRevision` | `returnPolicies.createRevision` | `POST /v1/return-policies/{return_policy_id}/revisions` |
| `returns.addLineItem` | `returns.createLineItem` | `POST /v1/returns/{return_id}/line-items` |
| `returns.processExisting` | `returns.process` | `POST /v1/returns/{return_id}/process` |
| `returns.waiveLineInspection` | `returns.waiveLineItemInspection` | `POST /v1/returns/{return_id}/line-items/{return_line_item_id}/waive-inspection` |
| `riskLists.addItems` | `riskLists.createItems` | `POST /v1/risk-lists/{risk_list_id}/items` |
| `riskRules.getAttributeRegistry` | `riskRules.getAttributes` | `GET /v1/risk-rules/attributes` |
| `shipments.voidResource` | `shipments.void` | `POST /v1/shipments/{shipment_id}/void` |
| `webhookEndpoints.createWebhookTestEvent` | `webhookEndpoints.createTestEvent` | `POST /v1/webhook-endpoints/{webhook_endpoint_id}/test-events` |
| `webhookEndpoints.rotateWebhookSecret` | `webhookEndpoints.rotateSecret` | `POST /v1/webhook-endpoints/{webhook_endpoint_id}/rotate-secret` |

### Removed aliases

The deprecated aliases from 7.0.0 are removed:

| Removed | Use |
| --- | --- |
| `me.listPayments`, `me.getPayment` | `me.listPaymentIntents`, `me.getPaymentIntent` |
| `me.listFlintWalletPaymentMethods` | `me.listFlintWalletCards` |
| `invoices.getOrCreateCheckoutSession` | `invoices.createCheckoutSession` |
| `returnResolutions.getOrCreateCheckoutSession` | `returnResolutions.createCheckoutSession` |
| `checkoutSessions.getDeliverySelectionHistory` | `checkoutSessions.getDeliverySelection` |
| `locations.publishGeography`, `locations.updateInventory` | `locations.update` |

New methods include `testClocks.list`, `create`, `get`, `delete` and `advance`, and `disputes.simulate`.

## One calling convention

Every method now takes the same arguments in both languages:

```
namespace.method(<path IDs>..., params?, options?)
```

- Path IDs come first, as strings, in path order.
- `params` is one flat object (PHP: an array or model) with the body fields, query parameters and operation headers such as `Flint-Challenge-Token`, under their API names. It's optional when the operation has no required field.
- `options` holds SDK request options: `idempotencyKey`, `clientRequestId`, credentials, `timeoutMs`, `deadlineMs`, `maxAttempts` and the rest.

In 7.x, 13 methods whose request body has alternatives took one object with path IDs and `body`. They now take the positional form, and TypeScript narrows `params` by its discriminator field:

| Method | Discriminator |
| --- | --- |
| `paymentIntents.confirm` | `credential_type` |
| `orders.pay` | `action` |
| `fulfillments.transition`, `packages.transition`, `inventoryTransfers.transition`, `inventoryReservations.transition`, `inventoryCounts.transition` | `action` |
| `inventoryAdjustments.create` | `reason` |
| `deliveryPreviews.create`, `subscriptionPreviews.create`, `me.createSubscriptionPreview` | `mode` |
| `checkoutSessions.createCustomerVerification` | `purpose` |
| `partnerApps.createCredential` (was `developer.createPartnerAppCredential`) | `type` |

The five `transition` methods in this table remain available and still take `action` in `params`.

```js
// 7.x
await flint.orders.pay(
  { order_id: orderId, body: { action: "pay", expected_version: order.version, payment_source: source } },
  { idempotencyKey },
);
await flint.paymentIntents.confirm({
  payment_intent_id: paymentIntentId,
  body: { credential_type: "payment_method", payment_method_id: paymentMethodId },
});

// 8.0.0
await flint.orders.pay(
  orderId,
  { action: "pay", expected_version: order.version, payment_source: source },
  { idempotencyKey },
);
await flint.paymentIntents.confirm(paymentIntentId, {
  credential_type: "payment_method",
  payment_method_id: paymentMethodId,
});
```

```php
// 7.x
$flint->orders->pay(
    ['order_id' => $orderId, 'body' => ['action' => 'pay', 'payment_source' => $source]],
    new RequestOptions(idempotencyKey: $key),
);

// 8.0.0
$flint->orders->pay(
    $orderId,
    ['action' => 'pay', 'payment_source' => $source],
    new RequestOptions(idempotencyKey: $key),
);
```

### Idempotency keys and request IDs

7.x also accepted `"Idempotency-Key"` inside `params`. 8.0.0 accepts a key only as `options.idempotencyKey`, so a key has one place to go. TypeScript no longer allows the header in `params`, and the SDK rejects it at runtime before sending.

```js
// 7.x
await flint.refunds.create({ order_id: orderId, refund_type: "full", "Idempotency-Key": key });

// 8.0.0
await flint.refunds.create({ order_id: orderId, refund_type: "full" }, { idempotencyKey: key });
```

PHP renames the `client_request_id` request option to `clientRequestId`, matching Node:

```php
// 7.x
new RequestOptions(client_request_id: $jobId);

// 8.0.0
new RequestOptions(clientRequestId: $jobId);
```

What to do: move path IDs out of `{ id, body }` objects, move `body` up to be `params`, and move every `Idempotency-Key` into `options`.

Array query parameters also accept a single value now: `{ status: "open" }` sends the same request as `{ status: ["open"] }`. This doesn't break existing calls.

## Errors

### Classes

Error classes follow the HTTP status only, never the error code, so a new code from Flint never changes which class you catch:

| Class | Parent | Thrown when |
| --- | --- | --- |
| `SdkError` | `Error` / `\RuntimeException` | Root of every SDK error. Never thrown directly |
| `ApiError` | `SdkError` | Flint answered with 400 to 599. Thrown as itself for 405, 410, 413, 415 and other 4xx statuses without a subclass |
| `InvalidRequestError` | `ApiError` | 400, 422 |
| `AuthenticationError` | `ApiError` | 401 |
| `PermissionError` | `ApiError` | 403 |
| `NotFoundError` | `ApiError` | 404 |
| `ConflictError` | `ApiError` | 409, 412 |
| `RateLimitError` | `ApiError` | 429 |
| `ServerError` | `ApiError` | 500 to 599, including a proxy's HTML error page (`code: "http_error"`) |
| `ConnectionError` | `SdkError` | No usable response: connection refused, DNS failure, reset, TLS failure |
| `TimeoutError` | `ConnectionError` | An attempt timed out (`attempt_timeout`) or the call's deadline passed (`deadline_exceeded`) |
| `CancelledError` | `SdkError` | Your `AbortSignal` (PHP `Cancellation`) fired |
| `UnexpectedResponseError` | `SdkError` | Flint answered with a success the SDK can't read, such as invalid JSON or an undeclared status |
| `InvalidInputError` | `SdkError` | The call's data failed a local check. Nothing was sent |
| `ConfigurationError` | `SdkError` | Client or request options, credentials or the base URL are unusable. Nothing was sent |
| `WebhookVerificationError` | `SdkError` | A webhook delivery failed verification |
| `PaginationLimitError` | `SdkError` | Automatic pagination reached its page limit with pages left |

Node exports the classes as `errors.X` and `SdkError` from the package root; PHP uses `Flint\SdkError` and `Flint\Errors\X`. `catch ApiError` now catches every error Flint answered with, and `catch ConnectionError` also catches timeouts.

`kind` and `ErrorKind` are removed. Replace `error.kind === "..."` with `instanceof`. Catch what you used to catch:

| 7.x `kind` | 7.x class | 8.0.0 |
| --- | --- | --- |
| `validation` | `ValidationError` | `InvalidRequestError` for API 400 and 422; `InvalidInputError` for local checks |
| `authentication` | `AuthenticationError` | `AuthenticationError` for 401; `PermissionError` for 403; `ConfigurationError` for missing, conflicting or failed credentials and auth modes; `WebhookVerificationError` for webhook failures, with the same `webhook_*` codes |
| `not_found` | `NotFoundError` | `NotFoundError` |
| `conflict` | `ConflictError` | `ConflictError` |
| `rate_limit` | `RateLimitError` | `RateLimitError` |
| `server` | `ServerError` | `ServerError` |
| `api` | `ApiError` (other statuses) | `ApiError`, now the parent of every API error. Catch it last |
| `transport` | `ConnectionError` | `ConnectionError` |
| `timeout` | `TimeoutError` | `TimeoutError` with `code: "attempt_timeout"` |
| `deadline` | `DeadlineError` | `TimeoutError` with `code: "deadline_exceeded"` |
| `protocol` | `ProtocolError` | `UnexpectedResponseError` |
| `destination` | `DestinationError` | `ConfigurationError` with `code: "invalid_destination"`, or `UnexpectedResponseError` with `code: "unexpected_redirect"` |
| `cancelled` | `CancelledError` | `CancelledError` |
| | | `PaginationLimitError` (new) |

Error constructors take a message and one init object (PHP: named arguments) instead of nine positional arguments, for building errors in tests:

```js
new errors.NotFoundError("Order not found", { status: 404, code: "RESOURCE_NOT_FOUND", requestId: "req_01K..." });
```

### Fields

The API error object's fields are now properties of the error, and the request context moves from `meta` onto the error itself:

| 7.x | 8.0.0 |
| --- | --- |
| `error.details.param`, `.type`, `.doc_url`, `.error_source`, `.request_log_url` | `error.param`, `error.type`, `error.docUrl`, `error.errorSource`, `error.requestLogUrl` |
| `error.details.remediation` | `error.remediation` (`retry`, `next_steps`, `next_actions`) |
| `error.details.details` | `error.details`, always an array (`[]` when absent) |
| `error.details` (the whole error object) | `error.body`, the decoded and redacted response body |
| `error.meta.requestId`, `.status`, `.headers`, `.attempts`, `.durationMs` | `error.requestId`, `error.status`, `error.headers`, `error.attempts`, `error.durationMs` |
| | `error.requestIds` (one per attempt that got an answer) and `error.operation` (such as `orders.pay`), new |
| `error.details.transportCode` (PHP `curlCode`, `curlError`) | `error.cause.code` (PHP `$e->getPrevious()->getCode()`) |
| PHP `$e->errorCode` | `$e->code` |
| PHP `$e->getCode()`, the HTTP status | `$e->getCode()` returns the error code, the same as `$e->code`. Read the status from `$e->status` |
| PHP message ending in `[HTTP 404, code ..., requestId ...]` | The API's message alone. `__toString()` keeps the status, code and request ID for logs |

`code` now means the same thing in Node and PHP: Flint's error code (`INSUFFICIENT_SCOPE`), `http_error` for a response without a Flint error body, or an SDK code (`credential_missing`). Uppercase codes come from Flint and lowercase codes from the SDK. `remediation.retry` is one of `same_request`, `after_refresh` or `none`. `type`, `errorSource` and `details[].reason` can gain new values, so keep a default branch.

```js
// 7.x
try {
  await flint.orders.applyGiftCard(orderId, { code }, { idempotencyKey });
} catch (error) {
  if (error instanceof SdkError && error.kind === "authentication" && error.status === 403) {
    return askForScope(error.details?.details?.[0]?.missing_scopes);
  }
  if (error instanceof SdkError && error.code === "GIFT_CARD_CHALLENGE_REQUIRED") {
    return startChallenge(error.details?.remediation?.next_actions);
  }
  log(error.meta?.requestId);
  throw error;
}

// 8.0.0
try {
  await flint.orders.applyGiftCard(orderId, { code }, { idempotencyKey });
} catch (error) {
  if (error instanceof errors.PermissionError) {
    return askForScope(error.details[0]?.missing_scopes);
  }
  if (error instanceof errors.ApiError && error.code === "GIFT_CARD_CHALLENGE_REQUIRED") {
    return startChallenge(error.remediation?.next_actions);
  }
  log(error.requestId);
  throw error;
}
```

```php
// 7.x
} catch (SdkError $e) {
    if ($e->getCode() === 403) { askForScope($e->details['details'][0]['missing_scopes'] ?? []); return; }
    if ($e->errorCode === 'GIFT_CARD_CHALLENGE_REQUIRED') { startChallenge($e->details['remediation']['next_actions'] ?? []); return; }
    error_log($e->meta['requestId'] ?? '');
    throw $e;
}

// 8.0.0
use Flint\Errors\{ApiError, PermissionError};

} catch (SdkError $e) {
    if ($e instanceof PermissionError) { askForScope($e->details[0]['missing_scopes'] ?? []); return; }
    if ($e instanceof ApiError && $e->code === 'GIFT_CARD_CHALLENGE_REQUIRED') { startChallenge($e->remediation['next_actions'] ?? []); return; }
    error_log($e->requestId ?? '');
    throw $e;
}
```

What to do: replace `kind` checks with classes, `meta.*` with the flat fields, and `details.*` with first-class fields. In PHP, replace `errorCode` with `code` and any `getCode()` status check with `status`. Check `outcome` first, then the class, then `code` or `remediation`.

### Local validation errors

A call whose data fails the SDK's own checks throws `InvalidInputError` before sending, with the same shape a server `400 INVALID_REQUEST` has: `code: "INVALID_REQUEST"`, a `details[]` array whose items carry `code` (`REQUIRED`, `INVALID_VALUE`, `UNKNOWN_FIELD` or `NOT_ALLOWED`) and `param`, and `outcome: "not_sent"`. `param` uses the API's path format (`line_items[0].type`, `metadata.k`, `Idempotency-Key`) instead of 7.x's `input.line_items[0].type`, so one handler can map local and server errors to the same form field:

```js
// 7.x
if (error.kind === "validation") showFormError(error.message); // "input.line_items[0].type: ..."

// 8.0.0
if (error instanceof errors.InvalidInputError || error instanceof errors.InvalidRequestError) {
  for (const detail of error.details) showFieldError(detail.param, detail.code, error.message);
}
```

Messages name the field and the allowed values, such as `line_items[0].type is required: one of "variant", "bundle", "custom"`, and show the value you sent only for enum mismatches. Branch on `code` and `details`, not on message text. `ConfigurationError` keeps SDK codes such as `credential_missing`, `invalid_option` and `invalid_destination`.

### Pagination limit

Automatic pagination (`*Pages`, `*Items`) still stops at 1,000 pages. When page 1,000 still has a next page, 8.0.0 throws `PaginationLimitError` (`code: "pagination_limit_exceeded"`) with `nextPageToken` and `pages`, where 7.x stopped without saying so. A `maxPages` you set yourself still stops quietly.

What to do: if you iterate collections that can exceed 1,000 pages, catch `PaginationLimitError` and continue from `nextPageToken`, or narrow the list with filters.

## Integers and money

Integer counters are now native numbers: `number` in Node and `int` in PHP. This covers `version` and `expected_version`, quantities, counts, sequences, seconds and bytes, which 7.x typed as integer strings (`` `${bigint}` `` in Node, `string` in PHP). Both runtimes check the safe integer range, up to 2^53 - 1 either side of zero, and never round: an out-of-range value you send throws `InvalidInputError`, and one Flint returns throws `UnexpectedResponseError`.

Money is the exception. `amount` and every other integer inside a `Money` object stay exact integer strings, as on the wire and in the API docs. Don't convert amounts to floating-point numbers.

```js
// 7.x
if (BigInt(order.version) >= BigInt(expected.version)) { ... }
await flint.orders.update(orderId, { expected_version: String(order.version), ... });

// 8.0.0
if (order.version >= expected.version) { ... }
await flint.orders.update(orderId, { expected_version: order.version, ... });

// Money is unchanged: sum amounts as bigint, then send a string
const refunded = refunds.reduce((sum, refund) => sum + BigInt(refund.amount_money.amount), 0n);
const total = { amount: String(refunded), currency: "USD" };
```

```php
// 8.0.0: counters are int
if ($order->version >= $expected->version) { ... }

// Money amounts are numeric strings; sum them exactly with bcmath
$refunded = '0';
foreach ($refunds as $refund) {
    $refunded = bcadd($refunded, $refund->amount_money->amount);
}
```

What to do: remove `BigInt(...)`, `String(...)` and `` `${bigint}` `` annotations around counters, and compare them as numbers. Keep exact handling for money.

## Outcomes, retries and timeouts

### `outcome`

Every error still reports `outcome` as `not_sent`, `response` or `unknown`, and 8.0.0 changes when each applies:

- `unknown` means the call may have run and the SDK has no final answer. It's reported when the retries end on `409 IDEMPOTENCY_KEY_IN_PROGRESS`, when they end with no answer after an attempt that may have run (a timeout or a dropped connection), and, for writes, when they end on a 5xx, on `IDEMPOTENCY_RECOVERY_REQUIRED` or on reason `outcome_unknown`. 7.x reported an in-progress key as a plain `response` conflict.
- `not_sent` now also covers calls where every attempt that reached Flint was refused before it ran.
- If a retry gets the replayed original answer, the SDK returns that result or error. A success the SDK read completely is returned even when it arrives after the deadline.
- `retryAllowed` now tells you whether resending the identical call with the same `idempotencyKey` is safe and may succeed. It's `true` after `deadline_exceeded`, where 7.x set it to `false`.
- Reads that end without an answer also report `unknown`, which for a read only means no answer. Reads can always be retried.

For a replay-safe write that ends on `IDEMPOTENCY_RECOVERY_REQUIRED`, `outcome` is `unknown` and `retryAllowed` is `true`. Keep the original key and request unchanged.

What to do on `unknown`: keep the action pending under its `idempotencyKey`. Never retry it with a new key. Then either resend the identical request with the same key later, which returns the original's result once it finishes, or read the resource to see whether the action happened:

```js
try {
  await flint.refunds.create(params, { idempotencyKey: job.key });
} catch (error) {
  if (!(error instanceof SdkError)) throw error;
  if (error.outcome === "unknown") {
    // May have run. Retry later with job.key, or look it up:
    const { data } = await flint.refunds.list({ idempotency_key: job.key });
    return data.length > 0 ? job.complete(data[0]) : job.retryLater(job.key, error.retryAfterMs);
  }
  if (error.retryAllowed) return job.retryLater(job.key, error.retryAfterMs);
  throw error;
}
```

```php
} catch (SdkError $e) {
    if ($e->outcome === SdkError::OUTCOME_UNKNOWN) { $job->retryLater($job->key, $e->retryAfterMs); return; }
    if ($e->retryAllowed) { $job->retryLater($job->key, $e->retryAfterMs); return; }
    throw $e;
}
```

Code that already reconciles on `outcome === "unknown"` now catches in-progress keys without changes.

### Money operation timeouts

Money operations now wait longer by default, because Flint may wait on the card network before answering:

| Operations | `timeoutMs` (per attempt) | `deadlineMs` (whole call) |
| --- | --- | --- |
| The payment operations listed below | 150,000 (150 s) | 300,000 (300 s) |
| Everything else | 10,000 (10 s), unchanged | 30,000 (30 s), unchanged |

The 150-second defaults apply to `checkoutSessions.create`, `update` and `close`; `creditNotes.createRefund`; `invoices.createCheckoutSession`; `me.createInvoiceCheckoutSession`; `orders.create`, `update`, `createCharge`, `deleteCharge`, `updateCharge`, `close`, `applyDiscount`, `removeDiscounts`, `repriceDiscounts`, `createLineItems`, `deleteLineItem`, `updateLineItem`, `pay`, `cancelPaymentAttempt` and `createPaymentIntent`; `paymentIntents.create`, `update`, `cancel`, `capture` and `confirm`; and `refunds.create`.

Options you pass still win: request options override client options, which override these defaults. These values are interim until Flint publishes a server-side execution limit.

What to do: if you set `timeoutMs` or `deadlineMs` on the client to shorten every call, that setting now also applies to money operations, and a short attempt timeout on a payment is more likely to end in `unknown`. Set shorter budgets per request instead, and allow request handlers, queues and load balancers at least as long as the money deadline.

## Results carry `lastResponse`

Every result now has a `lastResponse` with `status`, `headers`, `requestId`, `requestIds`, `idempotencyKey`, `attempts`, `durationMs` and the complete decoded `body`. In Node it's a non-enumerable property, so `JSON.stringify`, spread and `util.inspect` ignore it; in PHP it's the `lastResponse()` method, which returns `null` on models you built or nested values. The `*WithResponse`, `*PagesWithResponse` and `*WaitWithResponse` methods and the `SdkResponse` type are removed. Each of those methods made its own request, so they couldn't give you the request ID of a call you'd already made.

```js
// 7.x
const response = await flint.orders.getWithResponse(orderId);
const order = response.body.data;
log(response.meta.requestId);

// 8.0.0
const order = await flint.orders.get(orderId);
log(order.lastResponse.requestId);
order.lastResponse.body.meta; // the full envelope
```

```php
// 7.x
$response = $flint->orders->getWithResponse($orderId);
error_log($response->meta['requestId'] ?? '');

// 8.0.0
$order = $flint->orders->get($orderId);
error_log($order->lastResponse()?->requestId ?? '');
```

- Each page from `*Pages` has its own `lastResponse`; items from `*Items` don't. `*Wait` results carry the last poll's.
- Binary, redirect and stream methods keep `{ data, raw }` and rename `meta` to `lastResponse` (PHP `lastResponse()` on `Result`). `EventStream.meta` is now `EventStream.lastResponse`.
- The `diagnostics` callback's `errorKind` is now `errorName` (the class name), with a new `errorCode`.
- New client option `appInfo: { name, version?, url? }` adds your integration to the `User-Agent`, which now also names the runtime version and OS: `flintpay-node/8.0.0-beta.1 (Node.js 22.11.0; linux x64) woocommerce-flint/1.4.0`.

What to do: replace each `xWithResponse(...)` with `x(...)` and read `.lastResponse`.

## Credentials

A credential option that's present but empty now throws `ConfigurationError` with `code: "credential_missing"` before anything is sent. That includes `undefined`, `null`, `""` and blank strings, for every shortcut (`apiKey`, `checkoutToken`, `customerToken`, `invoiceToken`, `onboardingToken`, `token`) and every `credentials` entry. Client options fail in the constructor; request options fail when the call starts. In 7.x, `apiKey: undefined` fell back to `FLINT_API_KEY` and the other default credentials, so a tenant with no key could run as your app's own identity.

Default credentials (`FLINT_API_KEY`, `FLINT_ACCESS_TOKEN`, workload identity) are used only when no credential option is passed on the client or the request. Setting both environment variables throws `ConfigurationError` with `code: "credential_conflict"`, replacing 7.x’s `ambiguous_credentials`.

```js
// 7.x: tenant.flintKey === undefined silently used FLINT_API_KEY
const flint = new Client({ apiKey: tenant.flintKey });

// 8.0.0: throws ConfigurationError credential_missing:
// "apiKey was passed but is undefined. Pass a nonempty API key; default
// credentials are used only when no credential option is passed."
const flint = new Client({ apiKey: tenant.flintKey });
```

Apps that serve several merchants should also turn off default credentials, so no call can run under the app's own identity:

```js
const flint = new Client({ ambientCredentials: false });

await flint.orders.list(undefined, { apiKey: tenant.flintKey });
```

```php
$flint = new Client(new ClientOptions(ambientCredentials: false));

$flint->orders->list(null, new RequestOptions(apiKey: $tenant->flintKey));
```

What to do: to use default credentials, leave the credential option out instead of passing an empty value. In multi-tenant apps, set `ambientCredentials: false` and pass each tenant's credential.

## Type names

Generated type names change. Code that only calls methods doesn't need changes; code that imports types does.

| 7.x | 8.0.0 |
| --- | --- |
| Inline params object, or `{Namespace}{Method}Input` with path IDs and `body` | `{Namespace}{Method}Params`, such as `OrdersListParams` and `PaymentIntentsConfirmParams`. Node no longer exports the `*Input` wire types; PHP marks them `@internal` |
| `*RequestRequestInput`, such as `CheckoutBuyerFieldsRequestRequestInput` | `CheckoutBuyerFieldsRequestInput` (PHP `CheckoutBuyerFieldsRequest`) |
| `WebhookEventOrderPaid` | `OrderPaidEvent`; per audience, `OrderPaidMerchantEvent` |
| `IncomingWebhook<hash>Payload` | Removed. Use the event types |
| PHP per-operation classes, such as `DeveloperCreateSandboxInput` | Follow the method's new name: `SandboxesCreateInput` |
| PHP response classes with a status suffix, such as `ApiKeysCreateResponse201` | The declared API component, such as `CreateAPIKeyResponse`; inline response schemas use the operation name without a status suffix |
| `SdkResponse<T>` | Removed; see [`lastResponse`](#results-carry-lastresponse) |

When a response schema uses `$ref`, both SDKs reuse that declared component instead of adding a per-operation wrapper. For example, the response envelope for `apiKeys.create` is `CreateAPIKeyResponse`; the envelope for `apiKeys.get` is `APIKeyResponse`. Calls still return the payload described in [Results](#results-carry-lastresponse).

In Node, requests that used `ReturnSourceSystemInput` and `makeReturnSourceSystem` now use `ReturnSourceSystemRequestInput` and `makeReturnSourceSystemRequest`. Keep `ReturnSourceSystem` for response values.

`event_type` on each event type is now its exact literal, such as `"order.paid"`, so `if (event.event_type === "order.paid")` narrows the event.

## Examples and the default host

Generated examples read an optional `FLINT_BASE_URL` and use the default host when it's unset; they no longer require `API_BASE_URL`. The SDK itself doesn't read `FLINT_BASE_URL`, so pass `baseUrl` yourself if you want it.

The default host, `https://api.withflintpay.com`, serves sandbox and live mode: a `flint_test_` key runs in your sandbox and a `flint_live_` key in live mode. Remove `baseUrl: "https://api.staging.withflintpay.com"` from your configuration; the 5.1.0 notes that suggested it are out of date.

```js
// 8.0.0 examples
const flint = new Client({ baseUrl: process.env.FLINT_BASE_URL || undefined });
```

## Packaging

- `oauth.authorizePartnerInstall` is removed. `GET /v1/oauth/authorize` is a browser redirect to Flint's consent screen, so an API call can't complete it. Send the merchant's browser to `https://api.withflintpay.com/v1/oauth/authorize` with your query parameters; see [partner app installs](https://developers.withflintpay.com/docs/guides/partner-app-installs). `oauth.previewPartnerInstallAuthorization` stays.
- The Composer package no longer ships the repository's internal agent and contributor files (`AGENTS.md`, `CLAUDE.md`, `claude/`, `CONTRIBUTING.md`). It now includes `MIGRATION.md` and `CHANGELOG.md`.
- Release notes move from the root README to `CHANGELOG.md` and GitHub Releases.

## API contract changes in 8.0.0

This beta also updates the pinned API contract from Flint `0f83faf0` to `6cd24dfc`. The following breaking changes are recorded in the pinned Flint changelog after the 7.0.0 pin. They apply independently of the SDK package version.

- **Merchant and partner credentials.** Test credentials previously wrote shared merchant profile fields; they now get `403 FORBIDDEN` with reason `live_mode_required`. Use a live credential for `merchant.update` and merchant branding files. Onboarding tokens no longer authenticate partner app or install routes; use a live API key or another supported live credential. See [shared merchant profiles](https://developers.withflintpay.com/changelog/2026-10-29-shared-merchant-profile-live-only) and [partner app credentials](https://developers.withflintpay.com/changelog/2026-10-30-partner-app-routes-require-live-credential).
- **Bundle tax and availability.** Bundle requests and responses no longer have `taxable` or `line_item_tax_category`; remove those fields. All component variants must share both stored tax settings. A bundle that needs delivery configuration is no longer `available_for_sale`, and an empty bundle reports `delivery_configuration_status: "not_applicable"` instead of `"configured"`. Configure each component before offering it for sale. New digital product variants default to `digital_goods` when their tax category is omitted. See [bundle tax](https://developers.withflintpay.com/changelog/2026-10-30-bundle-tax-from-components) and [catalog readiness](https://developers.withflintpay.com/changelog/2026-10-30-catalog-readiness-and-positions).
- **Catalog ordering and references.** Omitted positions in product arrays now follow array order instead of all defaulting to zero; new variants append. Send explicit positions to retain the old ordering. Category `targeting_reference_count` now includes ended or exhausted promotions and historical policy revisions. Usage no longer advances the category version. Check all reference counts before deleting a category. See [catalog positions](https://developers.withflintpay.com/changelog/2026-10-30-catalog-readiness-and-positions) and [category references](https://developers.withflintpay.com/changelog/2026-10-30-category-targeting-reference-count).
- **Money inputs and the order ceiling.** Every money object requires both `amount` and `currency`; missing members now return `400 INVALID_REQUEST` instead of an internal error or an implicit zero. In these SDKs, send an explicit zero as `{ amount: "0", currency: "USD" }`. Order money inputs and computed amounts cannot exceed `99999999` minor units. Reduce an input or split the purchase when the ceiling would be exceeded. See [required money members](https://developers.withflintpay.com/changelog/2026-10-30-money-members-required) and [the order ceiling](https://developers.withflintpay.com/changelog/2026-10-30-order-money-ceiling).
- **Dispute reconciliation.** Dispute balance rows now include processor fees in `fee_money` and subtract them from `net_money`, instead of reporting a zero fee. An additional `card_dispute` billing fee applies only when Flint paid the processor fee. Sum the actual `net_money`; do not assume winning a dispute returns its fee. See [dispute fees](https://developers.withflintpay.com/changelog/2026-10-30-dispute-fee-once).
- **Onboarding and session actions.** Changing initial `country` or `requested_capabilities` after provisioning starts now returns `409 ACTION_NOT_ALLOWED` with reason `field_locked` instead of succeeding while ignoring the change. Omit them to preserve the initial intent. `NextAction.merchant_account_session` now uses the create request shape: replace singular `component` with `components`, and pass the recommended session body unchanged. See [onboarding intent](https://developers.withflintpay.com/changelog/2026-10-30-onboarding-frozen-intent) and [session next actions](https://developers.withflintpay.com/changelog/2026-10-30-session-next-action-request-body).
- **Error statuses and webhook recovery.** `ACTION_NOT_ALLOWED`, `LIMIT_REACHED`, `PAYMENT_OPTION_UNAVAILABLE` and `PROMOTION_DECLINED` consistently return `409`. Expired report downloads use `409 ACTION_NOT_ALLOWED` with reason `terminal_status`, replacing `410`. Image ingestion restarts use `409` with reason `image_ingestion_restart_required`; start a new attempt with a new key. Expired webhook payloads use reason `payload_expired`, running resends use `409 OPERATION_IN_PROGRESS`, and payload rendering failures use category `webhook_payload_render`. Update status, code and reason branches. See [one status per error code](https://developers.withflintpay.com/changelog/2026-10-30-one-status-per-error-code) and [webhook recovery](https://developers.withflintpay.com/changelog/2026-10-30-webhook-refusal-remediation).
- **Page tokens.** `page_size` can change between pages, but tokens issued before the pagination change may be rejected. On a `400` for an old token, restart without `page_token`; keep endpoint, filters, sort, merchant and environment the same. See [page token pagination](https://developers.withflintpay.com/changelog/2026-10-30-page-token-pagination).
- **Partner app updates.** Null `name`, `redirect_uris`, `permission_manifest`, `default_requested_permissions` and `expected_version` now fail instead of behaving as omitted fields. Omit fields to preserve them. Manifest scope errors identify the exact array index and use `NOT_ALLOWED` for scopes unavailable to installs. See [partner app updates](https://developers.withflintpay.com/changelog/2026-10-30-partner-app-patch-null-and-scope-param).
- **Subscription quantities.** Plan changes previously reset line quantities to target plan defaults. They now preserve paired line quantities, which changes charges and renewals. Send `line_items` with target plan line IDs and explicit quantities when quantities should change or a current line cannot be paired. See [subscription plan quantities](https://developers.withflintpay.com/changelog/2026-10-30-subscription-plan-change-carries-quantities).
- **Payment intent events.** A status event now records a stored status transition once; repeated observations no longer create separate events. A failure event records each new failed attempt once. Delivery remains at least once, so continue deduplicating by `webhook_event_id`. See [payment intent events](https://developers.withflintpay.com/changelog/2026-10-30-payment-intent-status-events-once).
- **Generated model constraints.** Structural variants omit fields they already forbid, response and input enums use their own supported values, and buyer invoice and fulfillment models omit unavailable expansions. Branding colors, return reason handles, reservation demands and refund adjustments publish existing validation constraints. Remove unsupported enum values and supply required refund adjustment `amount_money` and `reason`. See [schema shapes](https://developers.withflintpay.com/changelog/2026-10-30-schema-shapes-match-server).
- **OpenAPI representation.** Captured log bodies use explicit object, array and string unions; boolean selectors use typed boolean enums. `Flint-Version` is a patterned string, and partner credential exclusions use object schemas. Regenerate custom clients and pass the API date as a string if your generator previously required a date object. These representation changes preserve accepted wire values. See [captured bodies](https://developers.withflintpay.com/changelog/2026-10-30-openapi-captured-body-unions-and-boolean-enums) and [version and credential schemas](https://developers.withflintpay.com/changelog/2026-10-30-openapi-generator-compatible-version-and-credential-schemas).

## Finding call sites

TypeScript reports renamed methods, moved arguments, removed types and string counters as compile errors. For PHP and plain JavaScript, search for these patterns:

| Search for | Section |
| --- | --- |
| `developer\.`, `reviews\.`, `merchants\.`, `payoutSettings\.`, `\.remove\(`, `voidResource`, `closeSession`, `specification\.` | [Names](#method-and-namespace-names) |
| `body:` or `'body' =>` next to a path ID, `Idempotency-Key`, `client_request_id` | [Calling convention](#one-calling-convention) |
| `\.kind`, `ErrorKind`, `\.meta`, `errorCode`, `getCode\(\)`, `\.details\.`, `ValidationError`, `ProtocolError`, `DeadlineError`, `DestinationError` | [Errors](#errors) |
| `BigInt\(`, `` `${bigint}` ``, `String\(.*version` | [Integers and money](#integers-and-money) |
| `WithResponse\(`, `SdkResponse` | [Results](#results-carry-lastresponse) |
| `apiKey:`, `token:` and other credential options whose value can be empty | [Credentials](#credentials) |
| `WebhookEvent[A-Z]`, `IncomingWebhook`, `RequestRequest`, `Response[0-9]{3}` | [Type names](#type-names) |
| `api.staging.withflintpay.com`, `API_BASE_URL` | [Examples](#examples-and-the-default-host) |
| `authorizePartnerInstall` | [Packaging](#packaging) |

# SDK 7.0.0

This guide covers upgrading from `6.0.0`. The API date stays `2026-09-07`. Version 7.0.0 pins the Flint API contract on `main` at `0f83faf0` and generator `9f000b7` (one PHP validation fix after `808a1241`). Use it with an API build that serves this contract: the moved methods below call the renamed paths, which an older API build answers with `404 ROUTE_NOT_FOUND`. Flint keeps the old paths working only until its clients adopt the new ones, so 6.x methods that call moved paths stop working when Flint removes them. Retries, idempotency keys and webhook verification work as in 6.0.0.

## Moved paths

These methods keep their names and call the canonical paths:

| Methods | Path |
| --- | --- |
| `developer.getAuthContext` | `/v1/auth-context` |
| `developer.listSandboxes`, `createSandbox`, `getSandbox`, `deleteSandbox`, `resetSandbox`, `createSandboxAPIKey` | `/v1/sandboxes` |
| `developer.listCurrentAPIKeyRequestLogs`, `getCurrentAPIKeyRequestLog` | `/v1/api-request-logs` |
| `developer.getResourceTimeline` | `/v1/resource-timelines` |
| `developer.listPartnerApps`, `createPartnerApp`, `getPartnerApp`, `updatePartnerApp`, `deletePartnerApp`, `rotatePartnerAppSecret`, `listPartnerAppInstalls`, `getPartnerAppInstall`, `revokePartnerAppInstall`, `revokePartnerEnvironmentGrant` | `/v1/partner-apps` |
| `me.createFlintWalletStoreSetup` | `/v1/me/flint-wallet/cards/{flint_wallet_card_id}/store-setups` |
| `me.createInvoiceCheckoutSession`, `me.createReturnResolutionCheckoutSession` | `.../checkout-sessions` |
| `demoSessions.reset`, which now takes `demo_session_id` as its first argument | `/v1/demo-sessions/{demo_session_id}/reset` |

## Renamed and removed methods

| 6.x method | 7.0.0 |
| --- | --- |
| `me.listFlintWalletPaymentMethods` | `me.listFlintWalletCards` (`/v1/me/flint-wallet/cards`). The old name is a deprecated alias. |
| `me.listPayments`, `me.getPayment` | `me.listPaymentIntents`, `me.getPaymentIntent` (`/v1/me/payment-intents`). The old names are deprecated aliases. |
| `invoices.getOrCreateCheckoutSession`, `returnResolutions.getOrCreateCheckoutSession` | `createCheckoutSession` on the same resource, posting to `.../checkout-sessions`. The old names are deprecated aliases. |
| `checkoutSessions.getDeliverySelectionHistory` | `checkoutSessions.getDeliverySelection`. The old name is a deprecated alias. |
| `developer.listPartnerInstalls` | Removed. Use `partnerAppInstalls.list` (`/v1/partner-app-installs`), which onboarding sessions can't call. |
| `customers.setDefaultAddress`, `me.setDefaultAddress` | Removed. Use `updateAddress` with `is_default_shipping` or `is_default_billing`. |
| `subscriptions.changePaymentMethod`, `subscriptions.reactivate`, `subscriptions.updateBillingSchedule` | Removed. Use `subscriptions.update` with `payment_method_id`, `cancel_at_period_end: false` or `billing_schedule`. |
| `me.changeSubscriptionPaymentMethod`, `changeSubscriptionBillingInterval`, `changeSubscriptionDelivery`, `changeSubscriptionQuantity`, `reactivateSubscription` | Removed. Use `me.updateSubscription` with the matching field, or `cancel_at_period_end: false`. |

Aliases call the same operation as the new name. Move to the new names before the next major release.

New methods: `developer.listPartnerAppCredentials`, `createPartnerAppCredential`, `getPartnerAppCredential` and `deletePartnerAppCredential`; `checkoutSessions.listDeliverySelections`; `deliveryRevocations.list`; `disputes.accept`; and `taxConnection.get`, `connect`, `disconnect`, `listRegistrations`, `createRegistration`, `getRegistration`, `updateRegistration` and `deleteRegistration`.

## Requests

- Request bodies with alternatives require the field that selects one. For example, `invoices.create` takes `type`, payment link line items take `type`, `paymentIntents.confirm` and `orders.pay` payment intent selections take `credential_type`, `products.create` takes `variant_mode`, `shipments.create` takes `direction`, `riskPreviews.create` takes `mode`, and order charges take `calculation_type`. `apiKeys.create`, `developer.createSandbox` and `developer.createSandboxAPIKey` take `access` instead of `scope_preset`. The SDK rejects a request without its tag before sending it.
- Request objects are closed: undeclared fields fail validation before sending. Build payment link line item writes from the input fields, not from a fetched line item; `resolved_name`, `resolved_unit_price_money`, `resolved_price_range`, `is_catalog_item_unavailable` and `product_id` are read-only.
- Addresses (`AddressInput`) require `line1`, `city` and `country`. `state` and `postal_code` are required only for US addresses; send them as `null` or leave them out elsewhere. 6.x rejected such addresses before sending them.
- Customer create and update no longer take `billing_address` or `shipping_address`; manage saved addresses with the customer address methods.
- Metadata writes follow the published limits: up to 50 keys of 1 to 256 characters, values of 1 to 4096 characters, and no keys starting with `flint_`.
- Buyer return previews (`me.createReturnPreview`) accept `resolution_type: "store_credit"`.
- Webhook endpoints and delivery rate callbacks accept `signing_methods`.
- The `clientRequestId` request option (PHP `client_request_id`) sends your own request ID in `X-Request-Id`, which Flint stores as `client_request_id` on the request log. Flint's own request ID stays in the response's `X-Request-Id`.

## Responses

- Success envelopes and error objects require `request_id`. Flint already sends it; a mock or proxy that drops it gets a `protocol` error.
- Flint wallet cards return `flint_wallet_card_id` with nested `card` details (`brand`, `last4`, `exp_month`, `exp_year`) instead of a flat card with `id`.
- Inventory levels, movements and counts report physical versions, claim versions and observation sequences as int64 strings.

# SDK 6.0.0

This major release changes retries and idempotency keys and adds webhook JWT verification. The API contract pinned in [`sdk.lock.json`](sdk.lock.json) and the API date `2026-09-07` are unchanged from `5.1.0`.

Breaking changes:

- The 33 writes that require an idempotency key now require it in the method signature. TypeScript calls such as `refunds.create(params)` and `orders.pay(input)` no longer compile without `{ idempotencyKey }`; PHP throws a validation `SdkError` with `outcome` `not_sent` before sending. Pass a key you saved with the action before the first attempt, and reuse it to retry.
- Reads and keyed writes now retry on their own, up to 3 attempts in total. Set `maxAttempts: 1` to keep single-attempt behavior. If your code wraps SDK calls in its own retry loop, remove it or lower `maxAttempts` so attempts don't multiply.
- Node's generated `webhook-inbox` example `receiveWebhook` is now `async`.

## Webhook JWT verification

Flint can sign each webhook delivery with a short-lived ES256 JWT in `Authorization: Bearer`. The new verifiers check it against your webhook endpoint IDs (`whep_...`), not event IDs, using keys from the trusted API origin's `/.well-known/jwks.json`. The issuer comes from the base URL you configure, never from the token. Pass the original request bytes.

Flint signs deliveries with a JWT for endpoints whose `signing_methods` include `jwt`, the default for new endpoints. Endpoints that include `hmac` also carry the standard-webhooks headers; pass your `secrets` to verify those.

```js
import { verifyWebhookAsync } from "@flintpay/node/webhooks";

const verified = await verifyWebhookAsync(rawBody, headers, {
  endpointIds: ["whep_example"],
  baseUrl: "https://api.withflintpay.com",
});
```

```php
use Flint\Webhooks;

$verified = Webhooks::verifyDelivery($rawBody, $headers, [
    'endpoint_ids' => ['whep_example'],
    'base_url' => 'https://api.withflintpay.com',
    'cache' => $cache, // PSR-16
]);
```

`client.verifyWebhookAsync` and `$client->verifyWebhookDelivery` default the base URL from the client. Results add `signingMethod` (PHP `signing_method`), `"jwt"` or `"hmac"`. A bearer token with endpoint IDs is verified as a JWT only; during migration, also pass `secrets` to accept HMAC deliveries. `verifyWebhook` and `Webhooks::verify` remain HMAC-only. Answer 5xx for `webhook_jwks_unavailable` so Flint retries.

PHP needs `ext-openssl`. Under PHP-FPM, pass a PSR-16 `cache` or enable APCu so workers share keys and refresh limits, and treat that cache as a trust store. Apache needs `CGIPassAuth On` to pass `Authorization` to PHP. See the [Node](node/RUNTIME.md#jwt-delivery-verification) and [PHP](php/RUNTIME.md#jwt-delivery-verification) runtime guides. The generated `webhook-inbox` examples now take verification options instead of secrets, and Node's `receiveWebhook(client, db, rawBody, headers, options, eventId)` is now `async`, so `await` it.

## Retries and idempotency

Retries and idempotency keys follow each operation's idempotency class:

- Writes with an optional key (298 operations) get an SDK-generated `flint-sdk-` key when you pass none. The key is created once per call and reused on every retry of that call.
- Writes that require a key (33 operations) never get a generated key. Pass yours.
- Writes that take no key (9 operations, such as previews and lookups) are sent once.

GETs and keyed writes make up to 3 attempts. They retry when no response arrived, when the error's `remediation.retry` is `same_request`, or on 429, 500, 502, 503 and 504 responses without a Flint error body. They wait for `Retry-After` when present, otherwise back off with jitter from 500 ms up to 5 s, and never wait past the call's `deadlineMs`. When the next wait would cross the deadline, the last error is returned unchanged. Errors and `WithResponse` metadata expose the key that was sent as `idempotencyKey`, including `not_sent` failures.

# SDK 5.1.0

This compatible minor release enables default credential discovery for merchant operations. Explicit credentials continue to take precedence. With no explicit credentials, the SDK reads `FLINT_API_KEY` or `FLINT_ACCESS_TOKEN`, then workload identity configured by `FLINT_WORKLOAD_IDENTITY_ID`. Setting both credential variables raises `ambiguous_credentials`.

GitHub Actions jobs need `permissions: id-token: write`. Token and token-file sources also work through `FLINT_OIDC_TOKEN` and `FLINT_OIDC_TOKEN_FILE`. The default API URL is production; pass `baseUrl: "https://api.staging.withflintpay.com"` for staging. See the [Node guide](node/guides/default-credentials.md) or [PHP guide](php/guides/default-credentials.md).

Apps that serve multiple merchants should set `ambientCredentials: false` and pass tenant credentials explicitly. This prevents missing tenant credentials from using the app's own identity. No API contract or date changes in this release.

# SDK 5.0.0

This guide covers upgrading from `4.0.0`. The API date stays `2026-09-07` and the generator is unchanged. Version 5.0.0 pins the Flint API contract on `main` at `2d3123e0`, 34 commits after the production contract (`366e50d4`) that `4.0.0` was generated from. Use it with an API build that serves this contract.

## Credentials

Flint accepts secret API keys only in `Authorization: Bearer` and refuses the obsolete credential headers. The `merchantKey` mode and its `ApiKeyHeader` (`X-API-Key`) credential are removed. Use `apiKey`, or `authMode: "merchant"` with `BearerAuth`.

## Methods

| Removed method                  | Replacement                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| `orders.capturePayment`         | `paymentIntents.capture` with the payment intent ID.                                         |
| `orders.cancelPayment`          | `paymentIntents.cancel` with the payment intent ID.                                          |
| `developer.issueSandboxTestKey` | `developer.createSandboxAPIKey`, which creates a sandbox API key through the API key routes. |

New methods: `developer.createSandboxAPIKey` and `me.listSubscriptionPaymentRetries`. Payout destination methods and `merchantAccountSessions.refresh` keep their names and call the moved `/v1/payout-destinations` and `/v1/merchant-account-session-refreshes` routes. Both merchant account session handoffs answer `200`, and a retry with the same key and input replays the original handoff for 24 hours.

## Requests and responses

- Commerce and buyer writes that guard against concurrent changes take `expected_version` more widely, and resources report positive persisted `version` values. Replacing payout settings `default_payout_destinations`, `minimum_balance_by_currency`, `monthly_payout_days` or `weekly_payout_days` requires `expected_version`, and payout settings updates no longer accept `default_payout_destinations` input.
- Return replacement sources, return receipts and subscription line items name their `type` explicitly (for example `subscriptions.createLineItem` takes `type: "variant"`), and return policy scopes require `match_type`.
- List filters can recover a create by its original idempotency key. `inventoryTransfers.create` no longer requires an idempotency key; unkeyed calls create distinct drafts.
- Organizations require `parent_organization_id` on create, and `merchants.update` no longer accepts `organization_id`. Onboarding takes its environment from the credential rather than a request selector. The payout destination list filter is `available_payout_methods`.
- `InvoicePaymentAttempt` and `InvoiceActivity` no longer include `expected_settlement_at`, and money movement list `meta` no longer declares `request_id`; read the top-level `request_id`.
- Demo session operations take `Flint-Challenge-Token`.

# SDK 4.0.0

This guide covers upgrading from `3.0.0`. The API date stays `2026-09-07`. Install `@flintpay/node@4.0.0` or `flintpay/flint:4.0.0`. The earlier `4.0.0` preparation was never tagged or published; this entry includes its contract changes and the subsequent API and generator updates.

## Runtime requirements and imports

Node ESM consumers need Node.js 22.3 or later; CommonJS consumers need 22.12 or later. TypeScript consumers must install the optional `@types/node` peer dependency. Import from the package root or public resource subpaths rather than internal generated files. Webhook-only code can use `@flintpay/node/webhooks`; root exports and client verification still work. Operation examples are now `.mjs` only and require an explicit `API_BASE_URL` for your sandbox or local mock.

`REFERENCE.md` is a resource index. Saved operation links move to `reference/<resource>.md`, and model pages live under `models/`. Each package includes `RUNTIME.md` and `llms.txt`; follow the generated links for the current signatures and model names.

## Types, numeric values and model reads

- TypeScript int64/uint64 strings use `${bigint}` and also accept bigint inputs. Replace unvalidated broad `string` variables with validated integer strings or bigint. Integer strings and integer `ExactNumber` inputs require integer spelling: use `"5000"`, not `"5e3"` or `"5000.00"`. Integer-string responses must be canonical; `+1`, `01`, `-01` and trailing whitespace produce protocol errors. Do not convert money or webhook amounts to floating-point numbers.
- Request enums are closed. Correct unknown values rather than casting them into a request type; response enums continue to accept future strings. Dictionary key constraints such as metadata key lengths are now enforced.
- Import canonical response model names from the regenerated references. Equivalent aliases share one name, and response-only `NameInput` types and `makeName` factories are removed. Request bodies use their source component's input name. Use the owning operation's input type when preparing a request.
- Future object alternatives retain `Record<string, unknown>`. An `in` guard alone does not establish the value type; use a generated known-variant predicate or validate the field. An incompatible projected success payload raises a protocol error with the original `raw` response available.
- PHP omitted optional response fields return `null` through getters and magic properties. Use `has()` to distinguish omission from present-null. Required response fields still fail decoding when absent. Repeated nested reads can return the same immutable entity.
- PHP client resources are lazy read-only magic properties. Use property access or `isset()`, rather than reflection, `property_exists()` or `get_object_vars()`. `SchemaRegistry::definitions()` and `src/schema-definitions.json` are removed. Keep application-owned raw schemas for dynamic schema helpers; `contract()` and `codecs()` expose compiled plans.

## Credentials, errors and webhooks

Replace checkout ID/secret credentials with `checkoutToken`, or the explicit `checkout` mode with `CheckoutSessionBearer`. The production `apiKey` shortcut continues to send a merchant bearer credential. Method params no longer carry credential or API-version headers.

```js
await client.orders.get(orderId, undefined, { checkoutToken });
```

```php
$client->orders->get($orderId, null, new \Flint\RequestOptions(checkoutToken: $checkoutToken));
```

`checkoutSessions.create` now returns the `CheckoutSessionWithSecret` session directly. Read `url` and `checkout_auth_token` on that session instead of the retired `CheckoutAccess` / `CheckoutSessionLaunchResult` wrapper. Follow the generated result models for invoice, payment-link and Return checkout launches.

Read resources from verified webhook `event.data.object`, rather than resource-specific fields such as `event.data.payment_intent`. Amounts are exact int64 strings, including values larger than JavaScript's safe integer range. Event names and required payload fields follow the pinned production contract; older stored events can return `known: false`, so retain an unknown-event path.

Node error `code` offers known code completions with future strings. Narrow optional `details` before reading it: malformed or incompatible API details are `undefined`, while explicit `raw` recovery remains available. PHP error messages append HTTP status, provider code and request ID; use structured fields instead of exact message matching. PHP `getCode()` returns the HTTP status, or 0 without a response; `errorCode` remains the provider code. Errors and response metadata expose available idempotency keys, and errors expose a valid server wait as `retryAfterMs`.

## Request signatures

Most methods retain positional path IDs and flat params. These methods now take one object containing their path IDs and `body`, because their request bodies have alternatives:

- `checkoutSessions.createCustomerVerification`, `deliveryPreviews.create`, `fulfillments.transition`, `inventoryAdjustments.create`, `inventoryCounts.transition`, `inventoryReservations.transition`, `inventoryTransfers.transition`.
- `me.createSubscriptionPreview`, `orders.pay`, `packages.transition`, `paymentIntents.confirm`, `subscriptionPreviews.create`, `subscriptions.updateBillingSchedule`.

The generated references are authoritative for the exact names. The five action-dependent inventory names are removed: `inventoryCounts.apply`, `inventoryCounts.cancel`, `inventoryReservations.commit`, `inventoryReservations.consume` and `inventoryReservations.release`. Call the canonical transition methods instead. Their union request bodies use object-style inputs, so path IDs and `body` belong in the same input object/array. The action values below select the intended operation.

| Removed 3.0.0 method                | Node replacement                                                                                                      | PHP replacement                                                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `inventoryCounts.apply(id)`         | `await client.inventoryCounts.transition({ inventory_count_id: id, body: { action: "apply" } })`                      | `$client->inventoryCounts->transition(['inventory_count_id' => $id, 'body' => ['action' => 'apply']])`                                  |
| `inventoryCounts.cancel(id)`        | `await client.inventoryCounts.transition({ inventory_count_id: id, body: { action: "cancel" } })`                     | `$client->inventoryCounts->transition(['inventory_count_id' => $id, 'body' => ['action' => 'cancel']])`                                 |
| `inventoryReservations.commit(id)`  | `await client.inventoryReservations.transition({ inventory_reservation_id: id, body: { action: "commit", lines } })`  | `$client->inventoryReservations->transition(['inventory_reservation_id' => $id, 'body' => ['action' => 'commit', 'lines' => $lines]])`  |
| `inventoryReservations.consume(id)` | `await client.inventoryReservations.transition({ inventory_reservation_id: id, body: { action: "consume", lines } })` | `$client->inventoryReservations->transition(['inventory_reservation_id' => $id, 'body' => ['action' => 'consume', 'lines' => $lines]])` |
| `inventoryReservations.release(id)` | `await client.inventoryReservations.transition({ inventory_reservation_id: id, body: { action: "release", lines } })` | `$client->inventoryReservations->transition(['inventory_reservation_id' => $id, 'body' => ['action' => 'release', 'lines' => $lines]])` |

Reservation `lines` carry `inventory_reservation_line_id` and cumulative target quantities as exact integer strings. Use `target_committed_quantity` for commit, `target_consumed_quantity` for consume, and `target_released_from_held_quantity` or `target_released_from_committed_quantity` for release, according to the bucket being released. Count transitions also accept an optional `expected_version`. Persist and reuse an idempotency key when resubmitting the same action.

Location `publishGeography` and `updateInventory` remain deprecated aliases of `locations.update` with its unified sparse-update schema. The eight moved cross-resource methods below remain primary bindings under their 3.0.0 names; no new `paymentReviews`, `giftCards.adjustBalance`/`cashOut`, or `merchantBillingInvoices` names are added. `invoices.reverseManualPayment` is already canonical. The generator cannot emit cross-resource deprecated aliases.

`merchantBillingBalances.list` now returns the complete unpaginated body. Its `listItems`, `listPages` and `listPagesWithResponse` helpers are removed with the API pagination parameters; iterate the returned `data` array.

Use the Node `clientRequestId` or PHP `client_request_id` request option where declared, rather than `X-Request-Id` in method params. Values must be 1 to 128 visible ASCII characters. The response request ID remains server-assigned.

All requests keep a single attempt by default, with caller-supplied idempotency keys. Required keys still fail before dispatch. Pagination defaults to at most 1,000 pages, detects cursor cycles and repeated empty continuations, and applies `deadlineMs` per page. Use cancellation or explicit limits to bound the whole traversal.

## Moved operations

Except for the five removed inventory names mapped above, the SDK preserves these published names while calling the production routes. Parameters, result types and validation follow the new contract; a preserved method name is not a promise of the old request shape.

| Published SDK method                | Production operation and consumer change                                                                                                                                |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inventoryCounts.apply`             | Legacy name removed; use `inventoryCounts.transition` with `body.action: "apply"`.                                                                                      |
| `inventoryCounts.cancel`            | Legacy name removed; use `inventoryCounts.transition` with `body.action: "cancel"`.                                                                                     |
| `inventoryReservations.commit`      | Legacy name removed; use `inventoryReservations.transition` with `body.action: "commit"`; retain the required cumulative line targets.                                  |
| `inventoryReservations.consume`     | Legacy name removed; use `inventoryReservations.transition` with `body.action: "consume"`; retain the required cumulative line targets.                                 |
| `inventoryReservations.release`     | Legacy name removed; use `inventoryReservations.transition` with `body.action: "release"`; retain the required cumulative line targets.                                 |
| `reviews.approve`                   | `approvePaymentReview` on `/v1/payment-reviews/{payment_review_id}/approve`; approval does not capture payment.                                                         |
| `reviews.decline`                   | `declinePaymentReview`; use `payment_review_id`; a 202 means resolution is still processing.                                                                            |
| `reviews.get`                       | `getPaymentReview`; use `payment_review_id`; read the current payment-review schema.                                                                                    |
| `reviews.list`                      | `listPaymentReviews`; use `opened_after`/`opened_before` filters and current expansion options.                                                                         |
| `giftCardAdjustments.create`        | `adjustGiftCardBalance` at `/adjust-balance`; returns the current gift-card result.                                                                                     |
| `giftCardCashOuts.create`           | `cashOutGiftCard` at `/cash-out`; send required `cash_out_reference` instead of the old external/payout reference.                                                      |
| `merchantSubscriptionInvoices.get`  | `getMerchantBillingInvoice`; pass `merchant_billing_invoice_id`; fields use billing vocabulary.                                                                         |
| `merchantSubscriptionInvoices.list` | `listMerchantBillingInvoices`; fields and status filters use billing vocabulary.                                                                                        |
| `invoices.reverseManualPayment`     | `reverseInvoiceManualPayment`; pass both invoice and manual-payment IDs; reversal is for the named payment in full.                                                     |
| `locations.publishGeography`        | Deprecated alias of `locations.update` (`updateLocation`); send the unified geography fields. Address requires coordinate, and non-null coordinate requires its source. |
| `locations.updateInventory`         | Deprecated alias of `locations.update` (`updateLocation`); send `inventory_allocation_enabled` as a flat boolean; Location write and inventory authority apply.         |

## Operations removed from the API

These methods are removed without aliases:

| Removed method                    | Replacement                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------- |
| `capabilities.list`               | Read `readiness` from `merchants.get()`.                                                          |
| `payouts.listEntries`             | Use `balanceTransactions.list({ payout_id })`; results are newest first rather than oldest first. |
| `paymentMethods.setDefault`       | Set `default_payment_method_id` through `customers.update`; send null to clear it.                |
| `me.setDefaultPaymentMethod`      | Set `default_payment_method_id` through `me.update`; send null to clear it.                       |
| `organizations.transferOwnership` | Removed from the API. Account ownership changes are reserved for Flint.                           |

`oauth.exchangePartnerInstallToken` is also no longer generated: the production OAuth token exchange now requires form encoding. It remains an API operation (`exchangeOAuthToken`), but form-only CLI/OAuth flows are outside these SDKs. Use a form-capable HTTP client for that exchange. Partner authorization entry is anonymous and requires PKCE `code_challenge` and `code_challenge_method`.

## Routes with unchanged operation IDs

| Preserved method                               | Consumer change                                                                                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `customers.createDeletionRequest`              | Call with `{ customer_id }` params instead of a positional customer ID; customer ID moved to the body.                                       |
| `customers.getDeletionRequest`                 | Pass only the deletion-request ID; the customer ID is no longer in the route.                                                                |
| `settings.validateCustomDomain`                | Pass `custom_domain_id`, not `domain_type`; the route validates a standalone domain resource.                                                |
| `webhookEvents.listWebhookDeliveries`          | Call with `{ webhook_event_id, ...filters }` params instead of a positional event ID; deliveries are now a global filtered list.             |
| `checkoutSessions.confirmCustomerVerification` | The second positional ID is now named `checkout_session_customer_verification_id`; object params and named PHP arguments must use that name. |

Same-route operation-ID renames retain their published SDK names, including `orders.addCharge`, `orders.addLineItems`, `returns.processExisting`, `riskLists.addItems`, `paymentMethods.save` and `webhookEndpoints.rotateWebhookSecret`. Canonical input and result type names can still change.

## Orders, promotions and other contract changes

Order responses no longer include `requested_tip`. Read it from the relevant `tips` entry, which also has its ID and resolved amount. `requested_tip` stays a request field on order create/update and invoice quick pay. The `RequestedTip` model is removed. `orders.create`, `me.getOrder` and `me.getSubscription` do not accept checkout credentials; the two buyer reads use a customer session.

Promotion rule values and request exclusivity are typed and request enums are closed. Promotion application requests accept only the fields appropriate to their variant. Risk-list additions require plural `values`; singular `value` is rejected. Return decisions use current override reasons and nullable `automatic_resolution_type` instead of `decision_basis` and `selected_resolution_type`; Return policies use `release_timing` instead of `refund_timing`.

Payment-intent create/get results expose payment fields directly. Creation requires `payment_collection`; reads can omit it. Handle optional nullable `risk` and nullable `last_payment_error`. Capture/cancel/update return a payment intent; confirm uses the current action-bearing result. Payment methods use `archived` instead of `removed`; ordinary lists now include non-active unarchived methods, so card pickers should filter `status: ["active"]`.

The contract also updates version fences, required response fields, request bounds, nullable fields, list filters and error envelopes across resources. Rebuild typed callers and review the affected generated resource/model references. Shared error codes now describe generic categories with facts and remediation in the error envelope; replace checks for retired codes with the current structured error contract. This includes the earlier retirement of `AMOUNT_REQUIRED_FOR_MIXED_REFUND_TARGETS`, `CHECKOUT_PAYMENT_RESOLVING`, `PAYMENT_ATTEMPT_FROZEN`, `PAYMENT_ATTEMPT_IN_PROGRESS`, `PAYMENT_ATTEMPT_STILL_PROCESSING` and `PROMOTION_NO_ACTIVE_CODES`.

# SDK 3.0.0

This guide covers upgrading from `3.0.0-beta.20261012044000`. If you are upgrading from `2.0.0`, first apply the changes in the `3.0.0-beta` entries of the [README](README.md#packages), oldest first. The API version stays `2026-09-07`.

## Credentials and API version

Remove `X-Checkout-Session-ID`, `X-Checkout-Session-Secret` and `Flint-Version` from method params. TypeScript rejects them. Both SDKs reject credential headers in params before sending the request, and PHP also rejects `Flint-Version`. Supply credentials through client or request options instead. The SDK always sends the pinned `Flint-Version`; a value in params never changed it.

```js
await client.orders.get(orderId, undefined, {
  authMode: "checkout",
  credentials: {
    CheckoutSessionIDHeader: sessionId,
    CheckoutSessionSecretHeader: sessionSecret,
  },
});
```

```php
$client->orders->get($orderId, null, new RequestOptions(authMode: 'checkout', credentials: [
  'CheckoutSessionIDHeader' => $sessionId, 'CheckoutSessionSecretHeader' => $sessionSecret,
]));
```

## Payment intents and refunds

`paymentIntents.create` returns the payment intent itself, with a required `payment_collection`. `orders.createPaymentIntent` keeps the separate `payment_intent` and `payment_collection` fields.

```js
const intent = await client.paymentIntents.create(params, { idempotencyKey });
console.log(intent.payment_intent_id); // was intent.payment_intent.payment_intent_id
```

```php
echo $intent->payment_intent_id; // was $intent->payment_intent->payment_intent_id
```

- The Node `CreatePaymentIntentResult` and `GetPaymentIntentResult` types are removed. Use `PaymentIntentResult` for `paymentIntents.get`. In PHP, `create` returns `PaymentIntentsCreateResponse201Data` and `get` returns `PaymentIntentResult`.
- `risk` and `last_payment_error` are always present and can be `null`. Check for `null` before reading them.
- `refunds.create` returns `gift_card_codes` on the refund result. In PHP, it returns `CreateRefundResult` instead of `Refund`.

## Errors

Errors for state conflicts that returned 400 now return 409. Their `kind` is `conflict` instead of `validation`; one example is `GIFT_CARD_CHALLENGE_REQUIRED`. `INVALID_TOTALS` and `INVALID_LINE_ITEMS` become 500 `ORDER_TOTALS_UNAVAILABLE` (`server`), and `ORDER_TAX_NOT_UPDATABLE_AFTER_PAYMENT` becomes `ORDER_TAX_NOT_UPDATABLE`. Review checks that match on `kind` or `code`. `instanceof SdkError` still matches every error.

```js
import { errors } from "@flintpay/node";
if (error instanceof errors.ConflictError) {
  /* reload, then retry */
}
```

```php
use Flint\Errors\ConflictError;
try { /* call */ } catch (ConflictError $error) { /* reload, then retry */ }
```

In Node, `error.name` is the subclass name, such as `ConflictError`. Logs or tests that compare it to `"SdkError"` need updating.

## Webhooks

- Call `verifyWebhook(rawBody, headers, secrets)` from `@flintpay/node` or `Flint\Webhooks::verify(...)` without creating a client. Client methods still work.
- Results with `known: false` include `reason`: `unknown_event` or `unmatched_envelope`.
- `payment_intent.*` events carry the full payment intent in `data.payment_intent`.
- Money `amount` values in `invoice.*`, `order.paid`, `order.partially_paid` and `merchant_billing_balance.updated` events are int64 strings, like API responses (`MoneyValue`), not numbers. PHP getters return `MoneyValue`.
- `request.idempotency_key` in event envelopes is present only when the caller sent one.

## Other contract changes

- Delivery method `configuration.offer_windows` is removed. Sending it returns `UNKNOWN_FIELD`.
- Dimension `unit` must be `millimeter`, `centimeter` or `inch`. Pickup `maximum_distance.unit` must be `meter`, `kilometer` or `mile`.
- `checkoutSessions.create` `delivery_method_ids` must list 1 to 25 IDs; to use the defaults, omit the field.
- Line item and charge tax `calculation` no longer has `mode` and requires `components`. Set the mode in the order's `tax.calculation` instead.
- `me.listFlintWalletPaymentMethods` no longer returns `has_more`.
- Gift card purchase refund `value_allocations` use `amount_money` instead of `amount`.

# SDK 2.0.0

This release refreshes all generated runtimes and types. List methods now return page bodies with `data` and `next_page_token` directly. `listPages()` yields page bodies; use `listPagesWithResponse()` for HTTP metadata. Single-resource methods return the resource payload, while `WithResponse` methods retain the original body and HTTP metadata. Exact integer values remain decimal strings. CLI OAuth methods remain excluded.

# Migrating to 0.4.0-beta.1

This beta uses the updated `2026-09-07` API export. It adds `creditNotes.listRefunds()`, `creditNotes.createRefund()`, `invoices.assessLateFee()` and `invoices.waiveLateFee()` in Node and PHP. `creditNotes.listRefunds()` also has cursor pagination helpers. `creditNotes.createRefund()` requires a caller-chosen idempotency key; the invoice late fee writes accept one optionally. See each generated operation signature and the release compatibility report before upgrading.

The updated export changes existing interfaces as well. Invoice, order, promotion and subscription list filters that were scalar `status` or `refund_status` values now accept arrays. `exchangePartnerInstallToken()` has a broader response shape. Several exported models have new required fields, including `Customer.version`, and some PHP webhook payload class identities have changed. Update typed callers and response handling before upgrading. The generated release migration report records the full compatibility comparison, including findings that require provider review.

The export also adds four form-only CLI OAuth operations. They are not exposed by this SDK release because the generator does not support form-encoded request bodies. The packages expose 501 of the export's 505 outbound operations.

## Migrating to 0.3.0-beta.1

This release changes method names, request arguments and JSON return values. The API contract and `Flint-Version: 2026-09-07` stay unchanged.

## Resource names

All 497 operations now belong to resource groups instead of `client.api`. For example:

| Previous call                           | New call                              |
| --------------------------------------- | ------------------------------------- |
| `client.api.createPaymentIntent()`      | `client.paymentIntents.create()`      |
| `client.api.getPaymentIntent()`         | `client.paymentIntents.get()`         |
| `client.api.getOrder()`                 | `client.orders.get()`                 |
| `client.api.createOrderPaymentIntent()` | `client.orders.createPaymentIntent()` |
| `client.api.createRefund()`             | `client.refunds.create()`             |

PHP uses the same resource and method names, for example `$client->paymentIntents->get(...)`. PHP positional methods accept associative arrays for params; generated operation input classes describe canonical inputs and are used with object-style operations. HTTP endpoints and operation coverage stay unchanged. The old `api` group is removed; use the generated reference to migrate other calls.

## Request arguments

Path IDs now come first, in URL order, followed by flat params and request options. Remove the `body` wrapper from JSON request fields:

```js
await flint.paymentIntents.get(paymentIntentId);
await flint.refunds.create(
  {
    payment_intent_id: paymentIntentId,
    amount_money: { amount: "500", currency: "USD" },
    reason: "requested_by_customer",
  },
  { idempotencyKey: savedKey },
);
await flint.customers.update(
  customerId,
  { email: "buyer@example.com" },
  { idempotencyKey: savedKey },
);
```

PHP follows the same argument order with associative arrays and `new RequestOptions(...)`. Query/header parameters stay in params; the generated signature identifies each argument. If an optional params slot exists, use `undefined` in Node or `null` in PHP when supplying only request options. `WithResponse`, `Items`, and `Pages` companions follow the same ordering. Request examples in configuration and HTTP fixtures retain canonical inputs with a `body` wrapper; the generator translates them into public calls.

The following operations retain `(input, options)` and the `body` wrapper because the current generator cannot flatten their body shapes or resolve a body/query field collision: `fulfillments.transition`, `inventoryTransfers.transition`, `onboarding.advance`, `orders.pay`, `packages.transition`, `subscriptions.updateBillingSchedule`. See each generated signature before migrating these calls.

## Pagination and retries

Cursor endpoints now expose `Items` and `Pages` companions. Use `customers.listItems(...)` to iterate customers across pages. To avoid collisions with these helpers, the nested collection methods are named `packages.listPackageItems(...)` and `riskLists.listRiskListItems(...)`.

Automatic retries remain disabled: every operation makes one attempt. All 278 writes declaring `Idempotency-Key` now support explicit idempotency keys in request options, including endpoints where the key is required. Required keys remain validated before dispatch. Pass `{ idempotencyKey: savedKey }` in Node or `new RequestOptions(idempotencyKey: $savedKey)` in PHP. This does not enable retries. See the generated pagination and retries guide for limits and key lifetime.

## Authentication

Use the merchant bearer shortcut in Node:

```js
const flint = new Client({
  baseUrl: "https://api.withflintpay.com",
  apiKey: process.env.FLINT_API_KEY,
});
```

In PHP, use `new \Flint\ClientOptions(baseUrl: 'https://api.withflintpay.com', apiKey: getenv('FLINT_API_KEY'))`.

Explicit credential modes remain supported for merchant API-key headers, customer, onboarding, checkout and invoice authentication. A request-level `apiKey` overrides the client shortcut for that call. Do not combine a shortcut with `authMode` or `credentials` in the same options object.

## Response payloads

JSON methods now return the API's `data` payload directly. For example, `getPaymentIntent` returns the payment intent itself:

```js
const payment = await flint.paymentIntents.get(paymentIntentId);
console.log(payment.payment_intent_id, payment.status);
```

In PHP:

```php
$payment = $flint->paymentIntents->get($paymentIntentId);
echo $payment->payment_intent_id;
```

Remove the SDK `Result.data` / `Result->data` access and the API envelope's `data` access from existing call sites. The fields inside the payload still follow each operation's schema; some payloads contain a named resource, while others are the resource itself.

To access the complete decoded body, HTTP metadata or raw response, choose the companion method instead:

```js
const response = await flint.paymentIntents.getWithResponse(paymentIntentId);
console.log(response.body.data.payment_intent_id, response.meta.requestId);
```

PHP has the same `WithResponse` methods and `body`, `meta`, and `raw` properties. Each method call sends a request; choose the payload method or its companion for an action.

PDF downloads, redirects (`authorizePartnerInstall`, `getReportDownload`) and `streamWebhookEvents` retain their existing `Result` wrappers. `exchangePartnerInstallToken` and `getOpenAPISpec` return the complete decoded JSON body because they have no `data` envelope. Pagination/polling helpers retain their existing return conventions.

## Model names

The updated generator renames 63 additional models whose upstream names end in `Input` to use `Request`. For example, `CheckoutQuickPayItemInput` becomes `CheckoutQuickPayItemRequest`, with `CheckoutQuickPayItemRequestInput` as its input helper and `makeCheckoutQuickPayItemRequest` as its Node factory. Update model imports, factories and PHP class references using the generated reference. Explicit model name overrides remain in effect; wire field names are unchanged.

## Historical beta response compatibility limitations

Live staging checks on September 12, 2026 identified three API/OpenAPI mismatches affecting both SDKs. `developer.getAuthContext` can return `expires_at: null`, `checkoutSessions.list` can return `delivery_method_ids: null`, and `deliveryQuotes.list` can return null basis IDs and `input_requirements` collections. The declared schemas do not permit those nulls, so affected HTTP 200 responses raise a protocol error during decoding. The hosted OpenAPI export has the same declarations as the pinned contract.

These were observations from the prior beta release; SDK 2.0.0 uses a newer API export and generator with nullable object support. The observations were made against staging; production behavior was not tested. Live QA exercised 87 of the 497 operations, including expected management denials for test keys, and does not establish exhaustive compatibility or payment-lifecycle coverage.

# Migrating from @flintpay/node 0.1.0

The generated 0.2 beta is an intentional breaking upgrade. It is initially published under npm's `next` tag. Keep using 0.1.0 until you have migrated and tested your integration.

- Node.js 22+ replaces Node.js 18+. The new package ships ESM; CommonJS `require()` is no longer an advertised export.
- Import `Client` instead of `Flint`. Supply `baseUrl`, named `credentials`, and `authMode`; the client does not read environment variables automatically.
- Operations use `client.api.<OpenAPI operationId>`, for example `client.api.getPaymentIntent({ payment_intent_id })`.
- Inputs use the public API's wire field names. JSON request bodies are nested under `body`; path/query parameters are sibling input properties.
- Results expose `data`, `meta`, and raw response access. Update code expecting the previous response shape.
- Exact integers/decimals use strings. Ambiguous numeric/string unions use explicit numeric wrappers. Follow generated input types instead of converting money to JavaScript floating point.
- The clients send `Flint-Version: 2026-09-07`. Review API-version changes as well as SDK-interface changes.
- Authentication modes distinguish merchant keys, customer sessions, onboarding, checkout credential pairs, and invoice tokens. A mode must be applicable to the operation.
- Retry and pagination helpers only exist where the SDK profile declares them. Do not assume the old SDK's helper behavior carries over.

Compare your production call sites against the generated reference and run your payment, refund, checkout, and webhook flows against a sandbox before upgrading. The generator's compatibility baseline does not describe the old handwritten SDK.
