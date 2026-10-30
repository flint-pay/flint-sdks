<?php
declare(strict_types=1);
namespace Flint;
final class PayoutSettingsResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Returns payout settings that control default payout behavior for the authenticated merchant.
     * @param PayoutSettingsGetParams|array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return PayoutSettings
     */
    public function get(array|Model|null $params = null, ?RequestOptions $options = null): PayoutSettings { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', $name . " can't be sent: path values belong in positional arguments", 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $name]]); $input[$name] = $value; } return Runtime::responsePayload($this->runtime->request('getPayoutSettings', $input, $options), ['data']); }
    /** Updates mutable payout settings for the authenticated merchant. Safe to retry with the same Idempotency-Key.
     * @param PayoutSettingsUpdateParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return PayoutSettings
     */
    public function update(array|Model $params, ?RequestOptions $options = null): PayoutSettings { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Idempotency-Key', 'Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('updatePayoutSettings', $input, $options), ['data']); }
}
