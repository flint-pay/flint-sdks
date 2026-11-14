import { d265 as c0 } from '../descriptors/data/14.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6946 as c1 } from '../descriptors/data/325.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6899 as c3 } from '../descriptors/data/322.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6910 as c4, d6911 as c5, d6912 as c6, d6913 as c7, d6914 as c8, d6915 as c9, d6916 as c10, d6917 as c11, d6918 as c12, d6919 as c13, d6920 as c14, d6921 as c15 } from '../descriptors/data/323.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6922 as c16, d6923 as c17, d6924 as c18, d6925 as c19, d6926 as c20, d6927 as c21, d6928 as c22, d6929 as c23, d6930 as c24, d6931 as c25, d6932 as c26, d6933 as c27 } from '../descriptors/data/324.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d6982 as c28, d6983 as c29 } from '../descriptors/data/326.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d265 as d265 } from '../descriptors/data/14.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec142"]:c3(),["SharedCodec274"]:c4(),["SharedCodec275"]:c5(),["SharedCodec276"]:c6(),["SharedCodec277"]:c7(),["SharedCodec278"]:c8(),["SharedCodec279"]:c9(),["SharedCodec280"]:c10(),["SharedCodec281"]:c11(),["SharedCodec282"]:c12(),["SharedCodec283"]:c13(),["SharedCodec284"]:c14(),["SharedCodec285"]:c15(),["SharedCodec286"]:c16(),["SharedCodec287"]:c17(),["SharedCodec288"]:c18(),["SharedCodec289"]:c19(),["SharedCodec290"]:c20(),["SharedCodec291"]:c21(),["SharedCodec292"]:c22(),["SharedCodec293"]:c23(),["SharedCodec294"]:c24(),["SharedCodec295"]:c25(),["SharedCodec296"]:c26(),["SharedCodec297"]:c27(),["SharedCodec301"]:c28(),["SharedCodec302"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
