import { d358 as c0 } from '../descriptors/data/22.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3867 as c1, d3873 as c2, d3874 as c3 } from '../descriptors/data/165.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3882 as c4, d3883 as c5, d3884 as c6, d3885 as c7, d3886 as c8 } from '../descriptors/data/166.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d358 as d358 } from '../descriptors/data/22.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d358;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationInputManual"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec333"]:c2(),["SharedCodec334"]:c3(),["SharedCodec342"]:c4(),["SharedCodec343"]:c5(),["SharedCodec344"]:c6(),["SharedCodec345"]:c7(),["SharedCodec346"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryProfileConfigurationInputManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
