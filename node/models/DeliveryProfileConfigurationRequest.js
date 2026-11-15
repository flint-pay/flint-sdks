import { d6590 as c0, d6593 as c1 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6604 as c2, d6605 as c3, d6606 as c4, d6607 as c5, d6608 as c6, d6609 as c7, d6610 as c8, d6611 as c9, d6612 as c10, d6613 as c11, d6614 as c12, d6615 as c13, d6616 as c14, d6617 as c15 } from '../descriptors/data/305.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6590 as d6590 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec600"]:c4(),["SharedCodec601"]:c5(),["SharedCodec602"]:c6(),["SharedCodec603"]:c7(),["SharedCodec604"]:c8(),["SharedCodec605"]:c9(),["SharedCodec606"]:c10(),["SharedCodec609"]:c11(),["SharedCodec610"]:c12(),["SharedCodec611"]:c13(),["SharedCodec612"]:c14(),["SharedCodec613"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
