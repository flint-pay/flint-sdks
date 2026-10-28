import { d159 as c0 } from '../descriptors/data/7.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3731 as c1, d3732 as c2, d3733 as c3, d3734 as c4, d3735 as c5, d3736 as c6, d3737 as c7 } from '../descriptors/data/158.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3950 as c8 } from '../descriptors/data/169.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c9 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3951 as c10, d3956 as c11 } from '../descriptors/data/170.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d159 as d159 } from '../descriptors/data/7.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d159;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryCondition"]:c1(),["DeliveryDistance"]:c2(),["DeliveryPostalCodeCondition"]:c3(),["DeliveryPostalCodeValue"]:c4(),["DeliveryRadiusCondition"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateCondition"]:c7(),["DeliveryZoneConfiguration"]:c8(),["MetadataRequest"]:c9(),["SharedCodec130"]:c10(),["SharedCodec370"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
