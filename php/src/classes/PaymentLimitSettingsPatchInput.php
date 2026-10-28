<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array<array-key, array{'amount': string, 'currency': string}|object>|\stdClass|null $max_amounts
 * @property-read array<array-key, array{'amount': string, 'currency': string}|object>|\stdClass|null $min_amounts
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLimitSettingsPatchInput extends Model {
    /** @param array{'max_amounts'?: array<array-key, array{'amount': string, 'currency': string}|object>|\stdClass|null, 'min_amounts'?: array<array-key, array{'amount': string, 'currency': string}|object>|\stdClass|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLimitSettingsPatchInput')); }
    /** Shape $ (Value): Map of object or null. Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null to clear this map; reads then omit it. minProperties: 1. Shape $.* (Value): object. Shape $.*.amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Shape $.*.currency (Required): string. minLength: 1. Value enum: "USD".
     * @return array<array-key, array{'amount': string, 'currency': string}|object>|\stdClass|null
     * @throws SdkError When max_amounts is omitted; use hasMaxAmounts() or valueOrDefault().
     */
    public function getMaxAmounts(): array|object|null { return $this->get('max_amounts'); }
    public function hasMaxAmounts(): bool { return $this->has('max_amounts'); }
    /** Shape $ (Value): Map of object or null. Map replaced as a whole: the keys you send become the full map. Replaces this merchant limit map. Keys are default, a surface, payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing selector bounds and effective minimum/maximum range. Send null to clear this map; reads then omit it. minProperties: 1. Shape $.* (Value): object. Shape $.*.amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Shape $.*.currency (Required): string. minLength: 1. Value enum: "USD".
     * @return array<array-key, array{'amount': string, 'currency': string}|object>|\stdClass|null
     * @throws SdkError When min_amounts is omitted; use hasMinAmounts() or valueOrDefault().
     */
    public function getMinAmounts(): array|object|null { return $this->get('min_amounts'); }
    public function hasMinAmounts(): bool { return $this->has('min_amounts'); }
}
