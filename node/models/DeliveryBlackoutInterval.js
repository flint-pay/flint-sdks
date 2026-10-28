import { d3546 as c0 } from '../descriptors/data/145.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3546 as d3546 } from '../descriptors/data/145.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3546;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryBlackoutInterval"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryBlackoutInterval(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
