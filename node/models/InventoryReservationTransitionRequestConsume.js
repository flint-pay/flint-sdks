import { d4084 as c0 } from '../descriptors/data/174.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d695 as c1 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4012 as c2, d4013 as c3, d4014 as c4, d4015 as c5, d4011 as c6, d4008 as c7, d4009 as c8, d4010 as c9 } from '../descriptors/data/170.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d4079 as c10, d4080 as c11 } from '../descriptors/data/173.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d695 as d695 } from '../descriptors/data/30.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InventoryProvenanceRequest"]:c0(),["InventoryReservationTransitionRequestConsume"]:c1(),["InventorySourceSystemRequest"]:c2(),["SharedCodec147"]:c3(),["SharedCodec148"]:c4(),["SharedCodec149"]:c5(),["SharedCodec150"]:c6(),["SharedCodec837"]:c7(),["SharedCodec838"]:c8(),["SharedCodec839"]:c9(),["SharedCodec854"]:c10(),["SharedCodec855"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInventoryReservationTransitionRequestConsume(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
