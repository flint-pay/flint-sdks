import { d530 as c0 } from '../descriptors/data/31.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6593 as c1 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6604 as c2, d6605 as c3, d6608 as c4, d6609 as c5, d6610 as c6, d6613 as c7, d6614 as c8, d6615 as c9, d6616 as c10, d6617 as c11 } from '../descriptors/data/305.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d530 as d530 } from '../descriptors/data/31.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d530;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec602"]:c4(),["SharedCodec603"]:c5(),["SharedCodec604"]:c6(),["SharedCodec609"]:c7(),["SharedCodec610"]:c8(),["SharedCodec611"]:c9(),["SharedCodec612"]:c10(),["SharedCodec613"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
