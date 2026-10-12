import { d153 as c0 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d153 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d153;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutDeliveryPinnedDependency"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCheckoutDeliveryPinnedDependency(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
