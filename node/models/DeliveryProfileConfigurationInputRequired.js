import { d361 as c0 } from '../descriptors/data/22.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3867 as c1, d3873 as c2, d3874 as c3, d3877 as c4 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3878 as c5, d3879 as c6, d3882 as c7, d3883 as c8, d3884 as c9, d3885 as c10, d3886 as c11 } from '../descriptors/data/166.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d361 as d361 } from '../descriptors/data/22.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d361;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputRequired"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec333"]:c2(),["SharedCodec334"]:c3(),["SharedCodec337"]:c4(),["SharedCodec338"]:c5(),["SharedCodec339"]:c6(),["SharedCodec342"]:c7(),["SharedCodec343"]:c8(),["SharedCodec344"]:c9(),["SharedCodec345"]:c10(),["SharedCodec346"]:c11()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputRequired(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
