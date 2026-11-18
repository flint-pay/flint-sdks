import { d8114 as c0, d8112 as c1, d8113 as c2 } from '../descriptors/data/353.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7646 as c3 } from '../descriptors/data/321.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7646 as d7646 } from '../descriptors/data/321.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7646;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["SharedCodec2"]:c1(),["SharedCodec3"]:c2(),["SubscriptionServiceLocationInputAddress"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionServiceLocationInputAddress(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
