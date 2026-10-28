import { d3864 as c0, d3867 as c1, d3873 as c2, d3874 as c3, d3875 as c4, d3876 as c5, d3877 as c6 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3878 as c7, d3879 as c8, d3880 as c9, d3881 as c10, d3882 as c11, d3883 as c12, d3884 as c13, d3885 as c14, d3886 as c15 } from '../descriptors/data/166.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3864 as d3864 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3864;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec333"]:c2(),["SharedCodec334"]:c3(),["SharedCodec335"]:c4(),["SharedCodec336"]:c5(),["SharedCodec337"]:c6(),["SharedCodec338"]:c7(),["SharedCodec339"]:c8(),["SharedCodec340"]:c9(),["SharedCodec341"]:c10(),["SharedCodec342"]:c11(),["SharedCodec343"]:c12(),["SharedCodec344"]:c13(),["SharedCodec345"]:c14(),["SharedCodec346"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
