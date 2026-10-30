<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $risk_list_id
 * @property-read array{'values': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListsCreateItemsInput extends Model {
    /** @param array{'risk_list_id': string, 'body': array{'values': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListsCreateItemsInput')); }
    /** Flint risk list ID. Example: "rl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When risk_list_id is omitted; use hasRiskListId() or valueOrDefault().
     */
    public function getRiskListId(): string { return $this->get('risk_list_id'); }
    public function hasRiskListId(): bool { return $this->has('risk_list_id'); }
    /** Values to add to the risk list. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID.
     * @return array{'values': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
