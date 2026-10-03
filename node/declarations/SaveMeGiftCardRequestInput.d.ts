


export type SaveMeGiftCardRequestInput = ({  }) & (({ /** minLength: 1. */ "code": string; "credential_type": ("code") & ("code"); }) | ({ "credential_type": ("recipient_access") & ("recipient_access"); /** minLength: 1. */ "grant_id": string; /** minLength: 1. */ "recipient_access_token": string; }));
