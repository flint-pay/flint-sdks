import { d1884 as c0, d41 as c1 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1884 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1884;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderReturnCreditSettlement"]:c0(),["SharedCodec6"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderReturnCreditSettlement(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
