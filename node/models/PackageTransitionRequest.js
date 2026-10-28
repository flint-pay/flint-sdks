import { d882 as c0 } from '../descriptors/data/41.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4864 as c1, d4865 as c2, d4866 as c3, d4867 as c4, d4868 as c5, d4869 as c6 } from '../descriptors/data/221.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4870 as c7 } from '../descriptors/data/222.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4136 as c8 } from '../descriptors/data/181.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d882 as d882 } from '../descriptors/data/41.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d882;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec1031"]:c1(),["SharedCodec1032"]:c2(),["SharedCodec1033"]:c3(),["SharedCodec1034"]:c4(),["SharedCodec1035"]:c5(),["SharedCodec1036"]:c6(),["SharedCodec1037"]:c7(),["SharedCodec406"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
