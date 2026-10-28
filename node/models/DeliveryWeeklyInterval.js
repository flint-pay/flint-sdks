import { d3565 as c0 } from '../descriptors/data/146.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3565 as d3565 } from '../descriptors/data/146.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryWeeklyInterval"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryWeeklyInterval(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
