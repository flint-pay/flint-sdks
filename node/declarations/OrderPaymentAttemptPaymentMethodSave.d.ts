


/** What became of the buyer's save_payment_method. The payment does not depend on it. */ export type OrderPaymentAttemptPaymentMethodSave = { /** payment_method_not_saveable: the buyer paid with Apple Pay, Google Pay, a bank account, or Affirm, and checkout saves only a card typed into it; save_payment_method_types on the checkout session lists what it saves. other: a reason this API version does not name. The values can grow. */ "reason": "payment_method_not_saveable" | "other" | (string & {}); /** not_saved: the payment went ahead without saving the payment method. The values can grow. */ "status": "not_saved" | (string & {}); };
