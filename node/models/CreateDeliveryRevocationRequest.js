import { d236 as c0 } from '../descriptors/data/11.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6691 as c1, d6698 as c2, d6699 as c3, d6700 as c4 } from '../descriptors/data/309.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6701 as c5 } from '../descriptors/data/310.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d236 as d236 } from '../descriptors/data/11.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationRequest"]:c0(),["CreateDeliveryRevocationTarget"]:c1(),["SharedCodec255"]:c2(),["SharedCodec256"]:c3(),["SharedCodec257"]:c4(),["SharedCodec258"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
