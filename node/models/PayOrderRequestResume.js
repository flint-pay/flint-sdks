import { d5814 as c0 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1104 as c1 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7763 as c2, d7764 as c3, d7765 as c4 } from '../descriptors/data/372.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d1104 as d1104 } from '../descriptors/data/54.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1104;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PayOrderRequestResume"]:c1(),["SharedCodec1247"]:c2(),["SharedCodec1248"]:c3(),["SharedCodec1249"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestResume(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
