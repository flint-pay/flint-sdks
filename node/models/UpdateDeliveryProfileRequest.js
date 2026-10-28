import { d3864 as c0, d3867 as c1, d3873 as c5, d3874 as c6, d3875 as c7, d3876 as c8, d3877 as c9 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3251 as c2 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3348 as c3 } from '../descriptors/data/137.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3656 as c4 } from '../descriptors/data/154.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3878 as c10, d3879 as c11, d3880 as c12, d3881 as c13, d3882 as c14, d3883 as c15, d3884 as c16, d3885 as c17, d3886 as c18 } from '../descriptors/data/166.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2589 as c19 } from '../descriptors/data/107.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2589 as d2589 } from '../descriptors/data/107.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2589;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["MetadataPatchRequest"]:c2(),["SharedCodec1256"]:c3(),["SharedCodec1262"]:c4(),["SharedCodec333"]:c5(),["SharedCodec334"]:c6(),["SharedCodec335"]:c7(),["SharedCodec336"]:c8(),["SharedCodec337"]:c9(),["SharedCodec338"]:c10(),["SharedCodec339"]:c11(),["SharedCodec340"]:c12(),["SharedCodec341"]:c13(),["SharedCodec342"]:c14(),["SharedCodec343"]:c15(),["SharedCodec344"]:c16(),["SharedCodec345"]:c17(),["SharedCodec346"]:c18(),["UpdateDeliveryProfileRequest"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
