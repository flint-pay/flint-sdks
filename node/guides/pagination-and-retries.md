<!-- Package 0.3.0-beta.1; API 2026-09-07 -->

# Pagination and retries

## Iterate through list results

Cursor helpers use Flint's `page_token` and `next_page_token`. The SDK follows cursors lazily, retaining your filters. `listItems` yields individual resources; `listPages` yields full SDK Results whose `data` is the original API envelope and whose `meta` contains HTTP metadata. A normal `list` call still fetches only one page and returns its unwrapped payload. Use `listWithResponse` to inspect the original envelope and cursor manually.

Node:

```js
for await (const customer of flint.customers.listItems(
  { page_size: 100 },
  { maxPages: 10, maxItems: 1000, deadlineMs: 60000 },
)) {
  console.log(customer.customer_id);
}
```

PHP:

```php
foreach ($flint->customers->listItems(
    ['page_size' => 100],
    new \Flint\RequestOptions(maxPages: 10, maxItems: 1000, deadlineMs: 60000),
) as $customer) {
    echo $customer->customer_id . PHP_EOL;
}
```

Helpers stop when the next cursor is absent or empty, or a caller limit is reached. All pages share one deadline. Pagination is not a stable snapshot of a changing collection. Resource timeline helpers iterate `data.entries`.

`packages.listItems()` iterates packages; `packages.listPackageItems()` lists contents of one package. Likewise, `riskLists.listItems()` iterates risk lists and `riskLists.listRiskListItems()` lists entries inside one risk list. The nested list operations have their own `Items` and `Pages` companions where pagination is declared.

## Retry policy

All operations make one attempt by default. Automatic retries are not enabled in this SDK configuration. The generator currently uses the declared retry limit as its default; supporting opt-in retries with a separate one-attempt default requires a generator change. Do not set `maxAttempts` above one in this release.

Pagination can make multiple requests to fetch distinct pages; it does not automatically retry a failed request. All pages share the caller's deadline.

## Persist keys before writes

Every write that declares `Idempotency-Key` in the pinned API contract supports `idempotencyKey` through request options (278 operations). Required-key endpoints accept the key here without duplicating it in the input; they still reject a missing key before dispatch. Supplying a key does not enable automatic retries. Pass `idempotencyKey` in request options, or the identical `Idempotency-Key` input/header. The SDK sends the supplied key and rejects conflicting key sources. Automatic key generation is disabled.

Create and persist a key when your application decides on the business action. Reuse that saved key and the identical input when resuming after a crash or timeout. A different action or changed request needs a new key. Replay lifetime and semantics follow the endpoint contract. The general window is 24 hours; inventory command keys persist for at least as long as their inventory effects, and merchant account sessions mint fresh secrets on repeated success. Follow each endpoint's documented scope and retention. If the final outcome is unknown, reconcile the action before resubmitting. A deliberate retry must reuse the persisted key and identical request body.

Node:

```js
// Load the key saved with this refund job before its first attempt.
const idempotencyKey = process.env.FLINT_REFUND_IDEMPOTENCY_KEY;
if (!idempotencyKey) throw new Error('Load the saved refund idempotency key');
const refund = await flint.refunds.create({
  payment_intent_id: 'pi_replace_with_your_payment_intent_id',
  amount_money: { amount: '500', currency: 'USD' },
  reason: 'requested_by_customer',
}, { idempotencyKey });
```

PHP:

```php
$idempotencyKey = getenv('FLINT_REFUND_IDEMPOTENCY_KEY');
if (!$idempotencyKey) throw new \RuntimeException('Load the saved refund idempotency key');
$refund = $flint->refunds->create([
    'payment_intent_id' => 'pi_replace_with_your_payment_intent_id',
    'amount_money' => ['amount' => '500', 'currency' => 'USD'],
    'reason' => 'requested_by_customer',
], new \Flint\RequestOptions(idempotencyKey: $idempotencyKey));
```

See Flint's [pagination guide](https://developers.withflintpay.com/docs/guides/pagination) and [idempotency contract](https://developers.withflintpay.com/docs/guides/idempotency). Policies were checked against the pinned API export and the published guides on September 11, 2026.

