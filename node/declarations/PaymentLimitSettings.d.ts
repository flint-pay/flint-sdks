
import type { MoneyValue } from './MoneyValue.js';

/** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */ export type PaymentLimitSettings = { /** Maximum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling. */ "max_amounts"?: Record<string, MoneyValue>; /** Minimum USD amounts keyed by default, surface, or an exact payment_option.surface selector. Merchant settings cannot lower Flint's payment-option floor. */ "min_amounts"?: Record<string, MoneyValue>; };
