import { d4734 as c0, d4735 as c5, d4736 as c7, d4737 as c8, d4738 as c11, d4742 as c12, d4730 as c14 } from '../descriptors/data/214.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3251 as c1, d3250 as c2, d3252 as c9, d3253 as c10 } from '../descriptors/data/131.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3265 as c3 } from '../descriptors/data/132.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4729 as c4 } from '../descriptors/data/213.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3168 as c6 } from '../descriptors/data/127.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3271 as c13 } from '../descriptors/data/133.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2610 as c15 } from '../descriptors/data/109.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d2610 as d2610 } from '../descriptors/data/109.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2610;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InlineModifierGroupRequest"]:c0(),["MetadataPatchRequest"]:c1(),["MetadataRequest"]:c2(),["ModifierOverride"]:c3(),["ModifierRequest"]:c4(),["ModifierSetGroupRequest"]:c5(),["MoneyValue"]:c6(),["SharedCodec1003"]:c7(),["SharedCodec1004"]:c8(),["SharedCodec1252"]:c9(),["SharedCodec1253"]:c10(),["SharedCodec1290"]:c11(),["SharedCodec184"]:c12(),["SharedCodec185"]:c13(),["TextModifierConfigRequest"]:c14(),["UpdateModifierSetRequest"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierSetRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
