import { d932 as c0 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3709 as c1, d3710 as c2 } from '../descriptors/data/153.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d932 as d932 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d932;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryMethodRevision"]:c0(),["SharedCodec1128"]:c1(),["SharedCodec1129"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryMethodRevision(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
