import { d4764 as c0 } from '../descriptors/data/214.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4764 as d4764 } from '../descriptors/data/214.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4764;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PromotionCombinesWithRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionCombinesWithRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
