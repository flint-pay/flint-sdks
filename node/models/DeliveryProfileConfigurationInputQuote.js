import { d468 as c0 } from '../descriptors/data/25.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5072 as c1, d5085 as c2 } from '../descriptors/data/225.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5090 as c3, d5091 as c4, d5092 as c5, d5093 as c6, d5094 as c7 } from '../descriptors/data/226.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d468 as d468 } from '../descriptors/data/25.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d468;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputQuote"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec463"]:c2(),["SharedCodec472"]:c3(),["SharedCodec473"]:c4(),["SharedCodec474"]:c5(),["SharedCodec475"]:c6(),["SharedCodec476"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputQuote(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
