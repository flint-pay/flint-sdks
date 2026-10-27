import { d5116 as c0, d5121 as c5, d5122 as c6 } from '../descriptors/data/234.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2999 as c1 } from '../descriptors/data/114.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d815 as c2 } from '../descriptors/data/35.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3025 as c3 } from '../descriptors/data/116.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3889 as c4 } from '../descriptors/data/164.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3044 as c7 } from '../descriptors/data/118.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d815 as d815 } from '../descriptors/data/35.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d815;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePackageItemRequest"]:c0(),["Dimensions"]:c1(),["PackageCreateRequest"]:c2(),["ReturnShipmentLineItemAllocation"]:c3(),["SharedCodec226"]:c4(),["SharedCodec989"]:c5(),["SharedCodec990"]:c6(),["Weight"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageCreateRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
