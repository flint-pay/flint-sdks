import { d141 as c0 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3522 as c1, d3523 as c2, d3524 as c3, d3525 as c4, d3526 as c5, d3527 as c6, d3528 as c7 } from '../descriptors/data/144.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3717 as c8, d3718 as c9, d3719 as c10, d3720 as c11, d3725 as c12, d3726 as c13, d3727 as c14, d3728 as c15 } from '../descriptors/data/154.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d141 as d141 } from '../descriptors/data/6.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryCondition"]:c1(),["DeliveryDistance"]:c2(),["DeliveryPostalCodeCondition"]:c3(),["DeliveryPostalCodeValue"]:c4(),["DeliveryRadiusCondition"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateCondition"]:c7(),["DeliveryZoneConfiguration"]:c8(),["SharedCodec104"]:c9(),["SharedCodec105"]:c10(),["SharedCodec106"]:c11(),["SharedCodec332"]:c12(),["SharedCodec333"]:c13(),["SharedCodec334"]:c14(),["SharedCodec335"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
