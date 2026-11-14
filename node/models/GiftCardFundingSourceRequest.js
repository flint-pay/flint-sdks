import { d701 as c0 } from '../descriptors/data/39.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6914 as c1, d6915 as c2, d6916 as c3, d6917 as c4, d6918 as c5, d6919 as c6, d6920 as c7, d6921 as c8 } from '../descriptors/data/323.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6922 as c9, d6923 as c10, d6924 as c11, d6925 as c12, d6926 as c13, d6927 as c14, d6928 as c15, d6929 as c16, d6930 as c17 } from '../descriptors/data/324.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d701 as d701 } from '../descriptors/data/39.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d701;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec278"]:c1(),["SharedCodec279"]:c2(),["SharedCodec280"]:c3(),["SharedCodec281"]:c4(),["SharedCodec282"]:c5(),["SharedCodec283"]:c6(),["SharedCodec284"]:c7(),["SharedCodec285"]:c8(),["SharedCodec286"]:c9(),["SharedCodec287"]:c10(),["SharedCodec288"]:c11(),["SharedCodec289"]:c12(),["SharedCodec290"]:c13(),["SharedCodec291"]:c14(),["SharedCodec292"]:c15(),["SharedCodec293"]:c16(),["SharedCodec294"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
