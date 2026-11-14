import { d7238 as c0, d7251 as c2, d7252 as c3 } from '../descriptors/data/342.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1061 as c1 } from '../descriptors/data/53.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1061 as d1061 } from '../descriptors/data/53.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1061;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["OrderTaxLocationInputFullAddress"]:c1(),["SharedCodec1105"]:c2(),["SharedCodec1106"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationInputFullAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
