<?php
declare(strict_types=1);
namespace Flint;
final class RememberedBuyersResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Resolves a remembered buyer token without sending a code. Only a checkout credential can call this route, including after the checkout ends. A merchant key is refused. The email is always masked. code_channel is sms or email when this checkout can request a recognition code for the buyer, and null otherwise; it does not consider code caps. An unknown, expired, ended, replaced, other business's, or other sandbox's token returns the same 404 RESOURCE_NOT_FOUND.
     * @param RememberedBuyersLookupParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return RememberedBuyer
     */
    public function lookup(array|Model $params, ?RequestOptions $options = null): RememberedBuyer { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('lookupRememberedBuyer', $input, $options), ['data']); }
    /** Ends the remembered identity named by the body token and returns its final masked resource with no supported actions. Only a checkout credential can call this route, including after the checkout ends. A repeat without an idempotency replay returns 404 RESOURCE_NOT_FOUND. Forgetting never changes saved cards.
     * @param RememberedBuyersRevokeParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return RememberedBuyer
     */
    public function revoke(array|Model $params, ?RequestOptions $options = null): RememberedBuyer { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Idempotency-Key', 'Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('revokeRememberedBuyer', $input, $options), ['data']); }
}
