import { d5116 as c0 } from '../descriptors/data/234.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2999 as c1 } from '../descriptors/data/114.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d813 as c2 } from '../descriptors/data/35.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3025 as c3 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3889 as c4 } from '../descriptors/data/164.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3044 as c5 } from '../descriptors/data/118.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d813 as d813 } from '../descriptors/data/35.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d813;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["PackageCreateInputCreated"]:c2(),["ReturnShipmentLineItemAllocation"]:c3(),["SharedCodec226"]:c4(),["Weight"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateInputCreated(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
