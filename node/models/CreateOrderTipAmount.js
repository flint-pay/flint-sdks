import { d307 as c0 } from '../descriptors/data/17.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5941 as c1 } from '../descriptors/data/268.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c3 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7287 as c4 } from '../descriptors/data/342.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d307 as d307 } from '../descriptors/data/17.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d307;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderTipAmount"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec136"]:c3(),["SharedCodec350"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderTipAmount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
