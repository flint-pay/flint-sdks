import type { InputValue } from '../runtime.js';


export type PackagesGetItemInput = { "package_id": InputValue<string>; "package_item_id": InputValue<string>; "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; };
