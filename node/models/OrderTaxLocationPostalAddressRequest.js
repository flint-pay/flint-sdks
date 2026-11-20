import { d9381 as c0 } from '../descriptors/data/426.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9381 as d9381 } from '../descriptors/data/426.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationPostalAddressRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationPostalAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
