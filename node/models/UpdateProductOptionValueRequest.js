import { d8184 as c0 } from '../descriptors/data/398.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8204 as c1 } from '../descriptors/data/399.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d8204 as d8204 } from '../descriptors/data/399.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8204;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1776"]:c0(),["UpdateProductOptionValueRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateProductOptionValueRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
