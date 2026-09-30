


export type Analysis = { "applicability": "all_payments" | "on_session_only" | (string & {}); "attributes_used": Array<string>; "list_aliases_used"?: Array<string>; "stage": "pre_authorization" | "post_authorization" | (string & {}); };
