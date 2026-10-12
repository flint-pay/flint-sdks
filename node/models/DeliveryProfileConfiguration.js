import { d642 as c0, d651 as c1, d738 as c2, d2646 as c3 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d642 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d642;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfiguration"]:c0(),["DeliveryProfileOriginPolicy"]:c1(),["Dimensions"]:c2(),["Weight"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
