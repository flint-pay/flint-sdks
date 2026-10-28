import { d3900 as c0 } from '../descriptors/data/164.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3909 as c1, d3910 as c2, d3911 as c3, d3912 as c4, d3913 as c5, d3914 as c6, d3915 as c7, d3916 as c8 } from '../descriptors/data/165.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3917 as c9, d3918 as c10, d3919 as c11, d3920 as c12, d3921 as c13, d3922 as c14, d3923 as c15, d3924 as c16, d3925 as c17 } from '../descriptors/data/166.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3900 as d3900 } from '../descriptors/data/164.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d3900;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSource"]:c0(),["SharedCodec122"]:c1(),["SharedCodec123"]:c2(),["SharedCodec124"]:c3(),["SharedCodec125"]:c4(),["SharedCodec126"]:c5(),["SharedCodec127"]:c6(),["SharedCodec128"]:c7(),["SharedCodec129"]:c8(),["SharedCodec130"]:c9(),["SharedCodec131"]:c10(),["SharedCodec132"]:c11(),["SharedCodec133"]:c12(),["SharedCodec134"]:c13(),["SharedCodec135"]:c14(),["SharedCodec136"]:c15(),["SharedCodec137"]:c16(),["SharedCodec138"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSource(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
