import { d264 as c0 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4398 as c1 } from '../descriptors/data/187.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c2 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6218 as c3, d6219 as c4, d6220 as c5, d6221 as c6, d6222 as c7, d6223 as c8 } from '../descriptors/data/288.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d264 as d264 } from '../descriptors/data/14.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec279"]:c3(),["SharedCodec280"]:c4(),["SharedCodec281"]:c5(),["SharedCodec282"]:c6(),["SharedCodec283"]:c7(),["SharedCodec284"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
