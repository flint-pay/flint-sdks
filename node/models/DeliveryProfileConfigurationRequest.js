import { d5069 as c0 } from '../descriptors/data/224.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5072 as c1, d5081 as c2, d5082 as c3, d5083 as c4, d5084 as c5, d5085 as c6, d5086 as c7, d5087 as c8, d5088 as c9 } from '../descriptors/data/225.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5089 as c10, d5090 as c11, d5091 as c12, d5092 as c13, d5093 as c14, d5094 as c15 } from '../descriptors/data/226.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5069 as d5069 } from '../descriptors/data/224.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5069;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec459"]:c2(),["SharedCodec460"]:c3(),["SharedCodec461"]:c4(),["SharedCodec462"]:c5(),["SharedCodec463"]:c6(),["SharedCodec464"]:c7(),["SharedCodec465"]:c8(),["SharedCodec466"]:c9(),["SharedCodec467"]:c10(),["SharedCodec472"]:c11(),["SharedCodec473"]:c12(),["SharedCodec474"]:c13(),["SharedCodec475"]:c14(),["SharedCodec476"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
