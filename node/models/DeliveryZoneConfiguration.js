import { d3522 as c0, d3523 as c1, d3524 as c2, d3525 as c3, d3526 as c4, d3527 as c5, d3528 as c6 } from '../descriptors/data/144.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3717 as c7, d3718 as c8, d3719 as c9, d3720 as c10, d3725 as c11, d3726 as c12, d3727 as c13, d3728 as c14 } from '../descriptors/data/154.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3717 as d3717 } from '../descriptors/data/154.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3717;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZoneConfiguration"]:c7(),["SharedCodec104"]:c8(),["SharedCodec105"]:c9(),["SharedCodec106"]:c10(),["SharedCodec332"]:c11(),["SharedCodec333"]:c12(),["SharedCodec334"]:c13(),["SharedCodec335"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryZoneConfiguration(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
