import { d9336 as c0, d9349 as c1, d9350 as c2 } from '../descriptors/data/420.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9336 as d9336 } from '../descriptors/data/420.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9336;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxLocationFullAddressRequest"]:c0(),["SharedCodec1982"]:c1(),["SharedCodec1983"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxLocationFullAddressRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
