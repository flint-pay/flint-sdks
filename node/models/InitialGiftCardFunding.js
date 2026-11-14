import { d732 as c0 } from '../descriptors/data/39.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c1 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6898 as c2 } from '../descriptors/data/324.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6909 as c3, d6910 as c4, d6911 as c5, d6912 as c6, d6913 as c7, d6914 as c8, d6915 as c9, d6916 as c10, d6917 as c11, d6918 as c12, d6919 as c13, d6920 as c14 } from '../descriptors/data/325.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6921 as c15, d6922 as c16, d6923 as c17, d6924 as c18, d6925 as c19, d6926 as c20, d6927 as c21, d6928 as c22, d6929 as c23, d6930 as c24, d6931 as c25, d6932 as c26 } from '../descriptors/data/326.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d732 as d732 } from '../descriptors/data/39.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d732;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec136"]:c2(),["SharedCodec266"]:c3(),["SharedCodec267"]:c4(),["SharedCodec268"]:c5(),["SharedCodec269"]:c6(),["SharedCodec270"]:c7(),["SharedCodec271"]:c8(),["SharedCodec272"]:c9(),["SharedCodec273"]:c10(),["SharedCodec274"]:c11(),["SharedCodec275"]:c12(),["SharedCodec276"]:c13(),["SharedCodec277"]:c14(),["SharedCodec278"]:c15(),["SharedCodec279"]:c16(),["SharedCodec280"]:c17(),["SharedCodec281"]:c18(),["SharedCodec282"]:c19(),["SharedCodec283"]:c20(),["SharedCodec284"]:c21(),["SharedCodec285"]:c22(),["SharedCodec286"]:c23(),["SharedCodec287"]:c24(),["SharedCodec288"]:c25(),["SharedCodec289"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
