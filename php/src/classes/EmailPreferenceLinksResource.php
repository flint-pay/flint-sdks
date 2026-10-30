<?php
declare(strict_types=1);
namespace Flint;
final class EmailPreferenceLinksResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Reads an emailed preference token without signing the buyer in. The merchant key must match the token's merchant and environment. Tokens belong in the request body and must stay on your backend.
     * @param EmailPreferenceLinksLookupParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return EmailPreferenceLink
     */
    public function lookup(array|Model $params, ?RequestOptions $options = null): EmailPreferenceLink { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('lookupEmailPreferenceLink', $input, $options), ['data']); }
    /** Disables the email preference represented by an emailed token without signing the buyer in. Repeating the request keeps it disabled. The merchant key must match the token's merchant and environment.
     * @param EmailPreferenceLinksUnsubscribeParams|array<array-key, mixed>|Model $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return EmailPreferenceLink
     */
    public function unsubscribe(array|Model $params, ?RequestOptions $options = null): EmailPreferenceLink { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Idempotency-Key', 'Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (true) $input['body'] = (object) $rest; return Runtime::responsePayload($this->runtime->request('unsubscribeEmailPreferenceLink', $input, $options), ['data']); }
}
