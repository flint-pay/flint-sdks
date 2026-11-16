import { d6691 as c0, d6698 as c1, d6699 as c2, d6700 as c3 } from '../descriptors/data/309.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6701 as c4 } from '../descriptors/data/310.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6691 as d6691 } from '../descriptors/data/309.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6691;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationTarget"]:c0(),["SharedCodec255"]:c1(),["SharedCodec256"]:c2(),["SharedCodec257"]:c3(),["SharedCodec258"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationTarget(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
