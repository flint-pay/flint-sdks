import { d3557 as c0, d3569 as c1, d3570 as c2, d3571 as c3, d3572 as c4, d3573 as c5, d3574 as c6 } from '../descriptors/data/146.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3608 as c7 } from '../descriptors/data/148.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3557 as d3557 } from '../descriptors/data/146.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3557;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryMethodOriginSelectorRequest"]:c0(),["SharedCodec100"]:c1(),["SharedCodec101"]:c2(),["SharedCodec102"]:c3(),["SharedCodec103"]:c4(),["SharedCodec104"]:c5(),["SharedCodec105"]:c6(),["SharedCodec99"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryMethodOriginSelectorRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
