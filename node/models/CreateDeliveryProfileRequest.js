import { d156 as c0 } from '../descriptors/data/7.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3864 as c1, d3867 as c2, d3873 as c4, d3874 as c5, d3875 as c6, d3876 as c7, d3877 as c8 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3250 as c3 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3878 as c9, d3879 as c10, d3880 as c11, d3881 as c12, d3882 as c13, d3883 as c14, d3884 as c15, d3885 as c16, d3886 as c17 } from '../descriptors/data/166.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d156 as d156 } from '../descriptors/data/7.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d156;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryProfileRequest"]:c0(),["DeliveryProfileConfigurationRequest"]:c1(),["DeliveryProfileOriginPolicyRequest"]:c2(),["MetadataRequest"]:c3(),["SharedCodec333"]:c4(),["SharedCodec334"]:c5(),["SharedCodec335"]:c6(),["SharedCodec336"]:c7(),["SharedCodec337"]:c8(),["SharedCodec338"]:c9(),["SharedCodec339"]:c10(),["SharedCodec340"]:c11(),["SharedCodec341"]:c12(),["SharedCodec342"]:c13(),["SharedCodec343"]:c14(),["SharedCodec344"]:c15(),["SharedCodec345"]:c16(),["SharedCodec346"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
