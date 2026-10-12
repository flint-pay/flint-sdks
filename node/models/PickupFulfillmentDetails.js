import { d2036 as c0, d66 as c1 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d2036 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PickupFulfillmentDetails"]:c0(),["PostalAddress"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePickupFulfillmentDetails(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
