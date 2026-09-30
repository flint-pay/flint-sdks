


export type BalanceTransactionRelatedResourceInput = ({  }) & (({ "payment_intent_id": string; "type": "payment_intent"; }) | ({ "refund_id": string; "type": "refund"; }) | ({ "dispute_id": string; "type": "dispute"; }) | ({ "payout_id": string; "type": "payout"; }) | ({ "payout_destination_id": string; "type": "payout_destination"; }) | ({ "merchant_subscription_invoice_id": string; "type": "merchant_subscription_invoice"; }));
