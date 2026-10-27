import { d131 as c0 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3462 as c1 } from '../descriptors/data/141.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d131 as d131 } from '../descriptors/data/5.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d131;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryLocationSetRequest"]:c0(),["DeliveryLocationSetConfiguration"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryLocationSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
