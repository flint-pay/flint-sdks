<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $brand
 * @property-read int|null $exp_month
 * @property-read int|null $exp_year
 * @property-read string|null $last4
 * @property-read string|null $wallet
 * Presence-aware input; omitted fields throw when accessed. */
final class CardDetailsPreviousAttributesInput extends Model {
    /** @param array{'brand'?: string|null, 'exp_month'?: int|null, 'exp_year'?: int|null, 'last4'?: string|null, 'wallet'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CardDetailsPreviousAttributesInput')); }
    /** The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[1] (Value): string. The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When brand is omitted; use hasBrand() or valueOrDefault().
     */
    public function getBrand(): mixed { return $this->get('brand'); }
    public function hasBrand(): bool { return $this->has('brand'); }
    /** Month the card expires, from 1 to 12. anyOf[1] (Value): integer. Month the card expires, from 1 to 12. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When exp_month is omitted; use hasExpMonth() or valueOrDefault().
     */
    public function getExpMonth(): mixed { return $this->get('exp_month'); }
    public function hasExpMonth(): bool { return $this->has('exp_month'); }
    /** Four-digit year the card expires. anyOf[1] (Value): integer. Four-digit year the card expires. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When exp_year is omitted; use hasExpYear() or valueOrDefault().
     */
    public function getExpYear(): mixed { return $this->get('exp_year'); }
    public function hasExpYear(): bool { return $this->has('exp_year'); }
    /** Last four digits of the card number. anyOf[1] (Value): string. Last four digits of the card number. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay", "google_pay". anyOf[1] (Value): string. The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay", "google_pay". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When wallet is omitted; use hasWallet() or valueOrDefault().
     */
    public function getWallet(): mixed { return $this->get('wallet'); }
    public function hasWallet(): bool { return $this->has('wallet'); }
}
