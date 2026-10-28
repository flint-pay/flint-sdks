import { d3031 as c0 } from '../descriptors/data/117.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3059 as c1 } from '../descriptors/data/119.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d5241 as c2, d5246 as c3, d5249 as c5 } from '../descriptors/data/242.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2502 as c4 } from '../descriptors/data/102.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2502 as d2502 } from '../descriptors/data/102.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2502;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec1"]:c0(),["SharedCodec1171"]:c1(),["SharedCodec1252"]:c2(),["SharedCodec239"]:c3(),["UpdateWorkloadIdentityRequest"]:c4(),["WorkloadIdentityClaimConditionRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWorkloadIdentityRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
