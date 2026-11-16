import { d8184 as c0 } from '../descriptors/data/398.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8203 as c1, d8204 as c2 } from '../descriptors/data/399.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8203 as d8203 } from '../descriptors/data/399.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8203;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1776"]:c0(),["UpdateProductOptionRequest"]:c1(),["UpdateProductOptionValueRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
