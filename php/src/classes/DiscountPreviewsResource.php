<?php
declare(strict_types=1);
namespace Flint;
final class DiscountPreviewsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Evaluates promotion outcomes for an order without changing it. Returns the complete result inside data, without creating a resource or requiring an idempotency key. Use `promotion_id` for server-side apply flows where you already know the promotion, including code-gated promotions, which then apply without a code and count only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`. The response includes applied, skipped, and single-threshold available promotion candidates.
     * @param DiscountPreviewsCreateParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return DiscountPreview
     */
    public function create(array|Model $params, ?RequestOptions $options = null): DiscountPreview { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('createDiscountPreview', $input, $options), ['data']); }
}
