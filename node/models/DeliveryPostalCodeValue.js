import { d3540 as c0 } from '../descriptors/data/145.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3540 as d3540 } from '../descriptors/data/145.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3540;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryPostalCodeValue"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryPostalCodeValue(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
