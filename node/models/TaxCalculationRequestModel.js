import { d4281 as c0 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6109 as c1, d6110 as c2, d6111 as c3 } from '../descriptors/data/282.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6109 as d6109 } from '../descriptors/data/282.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6109;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["TaxCalculationRequestModel"]:c1(),["TaxComponentRequestModel"]:c2(),["TaxJurisdictionRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxCalculationRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
