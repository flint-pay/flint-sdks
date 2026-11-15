import { d6590 as c0, d6593 as c1 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5912 as c2 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6008 as c3 } from '../descriptors/data/273.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6339 as c4 } from '../descriptors/data/291.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6604 as c5, d6605 as c6, d6606 as c7, d6607 as c8, d6608 as c9, d6609 as c10, d6610 as c11, d6611 as c12, d6612 as c13, d6613 as c14, d6614 as c15, d6615 as c16, d6616 as c17, d6617 as c18 } from '../descriptors/data/305.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5640 as c19 } from '../descriptors/data/246.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5640 as d5640 } from '../descriptors/data/246.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5640;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1680"]:c2(),["SharedCodec1683"]:c3(),["SharedCodec1691"]:c4(),["SharedCodec598"]:c5(),["SharedCodec599"]:c6(),["SharedCodec600"]:c7(),["SharedCodec601"]:c8(),["SharedCodec602"]:c9(),["SharedCodec603"]:c10(),["SharedCodec604"]:c11(),["SharedCodec605"]:c12(),["SharedCodec606"]:c13(),["SharedCodec609"]:c14(),["SharedCodec610"]:c15(),["SharedCodec611"]:c16(),["SharedCodec612"]:c17(),["SharedCodec613"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
