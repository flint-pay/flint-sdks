import { d77 as c0, d1846 as c1, d1849 as c2, d430 as c3, d431 as c4, d1855 as c5, d2372 as c6, d2373 as c7, d2376 as c8 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d1849 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1849;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderChargeRequest"]:c2(),["SharedCodec160"]:c3(),["SharedCodec161"]:c4(),["SharedCodec492"]:c5(),["TaxCalculationRequest"]:c6(),["TaxComponentRequest"]:c7(),["TaxJurisdiction"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderChargeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
