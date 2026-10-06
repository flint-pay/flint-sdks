import { d77 as c0, d2218 as c1, d2216 as c2, d2232 as c3, d2268 as c4, d2270 as c5, d2271 as c6, d2217 as c7, d2230 as c8, d2231 as c9 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2218 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2218;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicy"]:c1(),["ReturnPolicyRevision"]:c2(),["ReturnPolicyScope"]:c3(),["ReturnRestockingFeePolicy"]:c4(),["ReturnShippingPolicy"]:c5(),["ReturnWindow"]:c6(),["SharedCodec577"]:c7(),["SharedCodec585"]:c8(),["SharedCodec586"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicy(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
