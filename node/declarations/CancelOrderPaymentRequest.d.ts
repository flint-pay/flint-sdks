


export type CancelOrderPaymentRequest = { /** Optional merchant-supplied cancellation reason. */ "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {}); /** Owning Flint payment attempt ID. Required while the payment leg belongs to an active attempt. */ "payment_attempt_id"?: string; };
