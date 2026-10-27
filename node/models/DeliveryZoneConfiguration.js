import { d3537 as c0, d3538 as c1, d3539 as c2, d3540 as c3, d3541 as c4, d3542 as c5, d3543 as c6 } from '../descriptors/data/145.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3732 as c7, d3733 as c8, d3734 as c9, d3735 as c10, d3740 as c11, d3741 as c12, d3742 as c13, d3743 as c14 } from '../descriptors/data/155.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { d3732 as d3732 } from '../descriptors/data/155.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZoneConfiguration"]:c7(),["SharedCodec109"]:c8(),["SharedCodec110"]:c9(),["SharedCodec111"]:c10(),["SharedCodec337"]:c11(),["SharedCodec338"]:c12(),["SharedCodec339"]:c13(),["SharedCodec340"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
