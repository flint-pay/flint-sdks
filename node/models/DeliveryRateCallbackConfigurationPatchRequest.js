import { d3677 as c0 } from '../descriptors/data/152.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3677 as d3677 } from '../descriptors/data/152.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3677;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateCallbackConfigurationPatchRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateCallbackConfigurationPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
