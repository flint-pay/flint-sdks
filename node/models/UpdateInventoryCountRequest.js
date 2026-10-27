import { d4030 as c0 } from '../descriptors/data/171.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4012 as c1, d4013 as c2, d4014 as c3, d4015 as c4, d4011 as c5, d4008 as c6, d4009 as c7, d4010 as c8 } from '../descriptors/data/170.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2446 as c9 } from '../descriptors/data/98.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d2446 as d2446 } from '../descriptors/data/98.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2446;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryCountObservationRequest"]:c0(),["InventorySourceSystemRequest"]:c1(),["SharedCodec147"]:c2(),["SharedCodec148"]:c3(),["SharedCodec149"]:c4(),["SharedCodec150"]:c5(),["SharedCodec837"]:c6(),["SharedCodec838"]:c7(),["SharedCodec839"]:c8(),["UpdateInventoryCountRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
