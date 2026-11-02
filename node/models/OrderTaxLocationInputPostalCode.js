import { d967 as c0 } from '../descriptors/data/45.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5654 as c1 } from '../descriptors/data/255.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d967 as d967 } from '../descriptors/data/45.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d967;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationInputPostalCode"]:c0(),["OrderTaxLocationPostalAddressRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationInputPostalCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
