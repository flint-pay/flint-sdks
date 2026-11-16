import { d5941 as c0, d5943 as c3, d5944 as c4, d5942 as c5 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7644 as c1, d7646 as c6, d7636 as c7, d7637 as c8 } from '../descriptors/data/365.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5691 as c9 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5691 as d5691 } from '../descriptors/data/249.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["ModifierRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec1685"]:c3(),["SharedCodec1686"]:c4(),["SharedCodec1687"]:c5(),["SharedCodec1731"]:c6(),["SharedCodec1739"]:c7(),["SharedCodec1740"]:c8(),["UpdateModifierGroupRequest"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateModifierGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
