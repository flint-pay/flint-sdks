import { d7257 as c0 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c3 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7286 as c4, d7287 as c5, d7288 as c6 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7289 as c7 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7257 as d7257 } from '../descriptors/data/341.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7257;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTip"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec136"]:c3(),["SharedCodec349"]:c4(),["SharedCodec350"]:c5(),["SharedCodec351"]:c6(),["SharedCodec352"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderTip(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
