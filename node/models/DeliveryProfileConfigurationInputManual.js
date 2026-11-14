import { d527 as c0 } from '../descriptors/data/30.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6593 as c1 } from '../descriptors/data/304.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6604 as c2, d6605 as c3, d6613 as c4, d6614 as c5, d6615 as c6, d6616 as c7, d6617 as c8 } from '../descriptors/data/305.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d527 as d527 } from '../descriptors/data/30.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d527;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec598"]:c2(),["SharedCodec599"]:c3(),["SharedCodec609"]:c4(),["SharedCodec610"]:c5(),["SharedCodec611"]:c6(),["SharedCodec612"]:c7(),["SharedCodec613"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
