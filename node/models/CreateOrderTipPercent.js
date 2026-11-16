import { d308 as c0 } from '../descriptors/data/17.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c3 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7289 as c4 } from '../descriptors/data/343.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d308 as d308 } from '../descriptors/data/17.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTipPercent"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec136"]:c3(),["SharedCodec352"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderTipPercent(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
