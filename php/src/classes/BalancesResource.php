<?php
declare(strict_types=1);
namespace Flint;
final class BalancesResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Returns the current balance snapshot grouped by currency for the authenticated merchant in the standard list envelope. All balances fit on one page, so next_page_token is omitted. Default order: currency ascending; this key uniquely orders the results.
     * @param BalancesListParams|array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return BalanceListResponse
     */
    public function list(array|Model|null $params = null, ?RequestOptions $options = null): BalanceListResponse { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'body must be an object', 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'INVALID_VALUE', 'param' => 'body']]); foreach (array_keys($rest) as $name) { foreach (['Flint-Version', 'X-Request-Id'] as $header) { if (strtolower((string)$name) === strtolower($header)) throw SdkError::create('validation', $header . " can't be sent: supply this header through request options", errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $header]]); } } if (array_key_exists('currency', $rest)) { $input['currency'] = $rest['currency']; unset($rest['currency']); } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', $name . " can't be sent: path values belong in positional arguments", 'not_sent', errorCode: 'INVALID_REQUEST', details: [['code' => 'NOT_ALLOWED', 'param' => $name]]); $input[$name] = $value; } return Runtime::responsePayload($this->runtime->request('listBalances', $input, $options), []); }
}
