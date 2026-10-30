<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $values
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListsCreateItemsParams extends Model {
    /** @param array{'values': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListsCreateItemsParams')); }
    /** Values to add to the risk list, in request order. Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. minItems: 1. maxItems: 500. [] (Value): string. Limited to 512 characters (Unicode code points) before normalization and after normalization. minLength: 1. maxLength: 512.
     * @return list<string>
     * @throws SdkError When values is omitted; use hasValues() or valueOrDefault().
     */
    public function getValues(): array { return $this->get('values'); }
    public function hasValues(): bool { return $this->has('values'); }
}
