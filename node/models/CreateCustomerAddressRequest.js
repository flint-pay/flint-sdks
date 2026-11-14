import { d6021 as c0, d6019 as c2, d6020 as c3 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6282 as c1 } from '../descriptors/data/288.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6282 as d6282 } from '../descriptors/data/288.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6282;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["CreateCustomerAddressRequest"]:c1(),["SharedCodec0"]:c2(),["SharedCodec1"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
