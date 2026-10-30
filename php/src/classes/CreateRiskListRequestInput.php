<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $alias
 * @property-read string $item_type
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRiskListRequestInput extends Model {
    /** @param array{'alias': string, 'item_type': string, 'name': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRiskListRequestInput')); }
    /** minLength: 1. pattern: ^[a-z][a-z0-9_]{0,127}$.
     * @return string
     * @throws SdkError When alias is omitted; use hasAlias() or valueOrDefault().
     */
    public function getAlias(): string { return $this->get('alias'); }
    public function hasAlias(): bool { return $this->has('alias'); }
    /** Values are trimmed and compared exactly after item-type normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and Unicode composition. string and email are lowercased, with accents preserved. email requires a bare address. email_domain is lowercased, has one final dot removed, and converts internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full value. customer_id preserves the validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain", "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     * @return string
     * @throws SdkError When item_type is omitted; use hasItemType() or valueOrDefault().
     */
    public function getItemType(): string { return $this->get('item_type'); }
    public function hasItemType(): bool { return $this->has('item_type'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
