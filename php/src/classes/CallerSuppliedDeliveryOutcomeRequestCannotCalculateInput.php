<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $failure_category
 * @property-read string $merchant_reference
 * @property-read bool $retryable
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput extends Model {
    /** @param array{'failure_category': string, 'merchant_reference'?: string, 'retryable': bool, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput')); }
    /** Why Flint could not calculate the method and the action that can make calculation succeed. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Value enum: "dependency_failure", "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     * @return string
     * @throws SdkError When failure_category is omitted; use hasFailureCategory() or valueOrDefault().
     */
    public function getFailureCategory(): string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When merchant_reference is omitted; use hasMerchantReference() or valueOrDefault().
     */
    public function getMerchantReference(): string { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`.
     * @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** Whether the method has a rate, is unavailable, or could not be priced. Value enum: "cannot_calculate".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
