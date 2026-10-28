import { d3809 as c0, d3810 as c1, d3811 as c3, d3812 as c4, d3813 as c5, d3814 as c6, d3815 as c7 } from '../descriptors/data/159.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3809 as d3809 } from '../descriptors/data/159.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3809;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateOrderDiscount"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefRequest"]:c3(),["SharedCodec1038"]:c4(),["SharedCodec1039"]:c5(),["SharedCodec3"]:c6(),["SharedCodec4"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateOrderDiscount(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
