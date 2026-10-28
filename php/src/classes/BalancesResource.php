<?php
declare(strict_types=1);
namespace Flint;
final class BalancesResource {
    public function __construct(private readonly Runtime $runtime) {}
    /** Returns the current balance snapshot grouped by currency for the authenticated merchant in the standard list envelope. All balances fit on one page, so next_page_token is omitted. Default order: currency ascending; this key uniquely orders the results.
     * @param array<array-key, mixed>|Model|null $params Flat body fields and query/header parameters; path arguments follow URL order.
     * @return BalancesListResponse200
     */
    public function list(array|Model|null $params = null, ?RequestOptions $options = null): BalancesListResponse200 { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('currency', $rest)) { $input['currency'] = $rest['currency']; unset($rest['currency']); } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', 'Path values belong in positional arguments', 'not_sent'); $input[$name] = $value; } return SdkResponse::payload($this->runtime->request('listBalances', (new BalancesListInput($input))->toInputArray(), $options), []); }
    /** @return SdkResponse<BalancesListResponse200> */
    public function listWithResponse(array|Model|null $params = null, ?RequestOptions $options = null): SdkResponse { $input = []; $params = $params instanceof Model ? $params->toInputArray() : $params; $rest = $params ?? []; if ($rest && array_is_list($rest)) throw SdkError::create('validation', 'Expected associative params', 'not_sent'); if (array_key_exists('currency', $rest)) { $input['currency'] = $rest['currency']; unset($rest['currency']); } foreach ($rest as $name => $value) { if (array_key_exists($name, $input)) throw SdkError::create('validation', 'Path values belong in positional arguments', 'not_sent'); $input[$name] = $value; } $result = $this->runtime->request('listBalances', (new BalancesListInput($input))->toInputArray(), $options); return new SdkResponse($result->data, $result->meta, $result->raw); }
}
