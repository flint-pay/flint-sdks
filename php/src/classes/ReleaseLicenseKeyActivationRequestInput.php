<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key
 * @property-read list<string> $product_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class ReleaseLicenseKeyActivationRequestInput extends Model {
    /** @param array{'key'?: string, 'product_ids'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReleaseLicenseKeyActivationRequestInput')); }
    /** The activation's full license key. Without a merchant credential, send it with product_ids. minLength: 1.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** The products this app accepts. Without a merchant credential, send this array with key to prove you hold the license. minItems: 1. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1. pattern: ^prod_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return list<string>
     * @throws SdkError When product_ids is omitted; use hasProductIds() or valueOrDefault().
     */
    public function getProductIds(): array { return $this->get('product_ids'); }
    public function hasProductIds(): bool { return $this->has('product_ids'); }
}
