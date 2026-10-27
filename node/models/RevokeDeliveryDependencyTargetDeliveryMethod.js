import { d931 as c0 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3707 as c1 } from '../descriptors/data/153.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3727 as c2 } from '../descriptors/data/154.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d931 as d931 } from '../descriptors/data/41.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d931;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RevokeDeliveryDependencyTargetDeliveryMethod"]:c0(),["SharedCodec1126"]:c1(),["SharedCodec328"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyTargetDeliveryMethod(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
