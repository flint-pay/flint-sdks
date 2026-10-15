import { d323 as c0, d1850 as c1, d1852 as c2, d2423 as c3, d2424 as c4, d2427 as c5 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1852 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1852;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderCalculatedChargeTax"]:c1(),["OrderCharge"]:c2(),["TaxCalculationRequest"]:c3(),["TaxComponentRequest"]:c4(),["TaxJurisdiction"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderCharge(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
