import { d2163 as c0, d2165 as c1, d2240 as c2, d2241 as c3, d2175 as c4, d2242 as c5, d2176 as c6 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2240 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnActor"]:c0(),["ReturnDisposition"]:c1(),["ReturnReceipt"]:c2(),["ReturnReceiptLineItem"]:c3(),["ReturnSourceSystem"]:c4(),["ReturnUnverifiedItem"]:c5(),["SharedCodec547"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceipt(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
