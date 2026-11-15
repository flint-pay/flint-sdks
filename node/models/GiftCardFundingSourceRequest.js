import { d700 as c0 } from '../descriptors/data/38.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6915 as c1, d6916 as c2, d6917 as c3, d6918 as c4, d6919 as c5, d6920 as c6, d6921 as c7, d6922 as c8 } from '../descriptors/data/325.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6923 as c9, d6924 as c10, d6925 as c11, d6926 as c12, d6927 as c13, d6928 as c14, d6929 as c15, d6930 as c16, d6931 as c17 } from '../descriptors/data/326.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d700 as d700 } from '../descriptors/data/38.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d700;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec270"]:c1(),["SharedCodec271"]:c2(),["SharedCodec272"]:c3(),["SharedCodec273"]:c4(),["SharedCodec274"]:c5(),["SharedCodec275"]:c6(),["SharedCodec276"]:c7(),["SharedCodec277"]:c8(),["SharedCodec278"]:c9(),["SharedCodec279"]:c10(),["SharedCodec280"]:c11(),["SharedCodec281"]:c12(),["SharedCodec282"]:c13(),["SharedCodec283"]:c14(),["SharedCodec284"]:c15(),["SharedCodec285"]:c16(),["SharedCodec286"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
