import { d734 as c0 } from '../descriptors/data/40.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c1 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c2 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6910 as c3, d6911 as c4, d6912 as c5, d6913 as c6, d6914 as c7, d6915 as c8, d6916 as c9, d6917 as c10, d6918 as c11, d6919 as c12, d6920 as c13, d6921 as c14 } from '../descriptors/data/323.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6922 as c15, d6923 as c16, d6924 as c17, d6925 as c18, d6926 as c19, d6927 as c20, d6928 as c21, d6929 as c22, d6930 as c23, d6931 as c24, d6932 as c25, d6933 as c26 } from '../descriptors/data/324.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d734 as d734 } from '../descriptors/data/40.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d734;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec142"]:c2(),["SharedCodec274"]:c3(),["SharedCodec275"]:c4(),["SharedCodec276"]:c5(),["SharedCodec277"]:c6(),["SharedCodec278"]:c7(),["SharedCodec279"]:c8(),["SharedCodec280"]:c9(),["SharedCodec281"]:c10(),["SharedCodec282"]:c11(),["SharedCodec283"]:c12(),["SharedCodec284"]:c13(),["SharedCodec285"]:c14(),["SharedCodec286"]:c15(),["SharedCodec287"]:c16(),["SharedCodec288"]:c17(),["SharedCodec289"]:c18(),["SharedCodec290"]:c19(),["SharedCodec291"]:c20(),["SharedCodec292"]:c21(),["SharedCodec293"]:c22(),["SharedCodec294"]:c23(),["SharedCodec295"]:c24(),["SharedCodec296"]:c25(),["SharedCodec297"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
