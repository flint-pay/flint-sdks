import { d229 as c0 } from '../descriptors/data/13.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3025 as c1 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3889 as c2 } from '../descriptors/data/164.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3867 as c3, d3868 as c4, d3869 as c5 } from '../descriptors/data/163.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d229 as d229 } from '../descriptors/data/13.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateShipmentRequest"]:c0(),["ReturnShipmentLineItemAllocation"]:c1(),["SharedCodec226"]:c2(),["SharedCodec227"]:c3(),["SharedCodec228"]:c4(),["SharedCodec229"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateShipmentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
