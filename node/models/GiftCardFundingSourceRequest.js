import { d699 as c0 } from '../descriptors/data/38.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6913 as c1, d6914 as c2, d6915 as c3, d6916 as c4, d6917 as c5, d6918 as c6, d6919 as c7, d6920 as c8 } from '../descriptors/data/325.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6921 as c9, d6922 as c10, d6923 as c11, d6924 as c12, d6925 as c13, d6926 as c14, d6927 as c15, d6928 as c16, d6929 as c17 } from '../descriptors/data/326.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d699 as d699 } from '../descriptors/data/38.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d699;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec270"]:c1(),["SharedCodec271"]:c2(),["SharedCodec272"]:c3(),["SharedCodec273"]:c4(),["SharedCodec274"]:c5(),["SharedCodec275"]:c6(),["SharedCodec276"]:c7(),["SharedCodec277"]:c8(),["SharedCodec278"]:c9(),["SharedCodec279"]:c10(),["SharedCodec280"]:c11(),["SharedCodec281"]:c12(),["SharedCodec282"]:c13(),["SharedCodec283"]:c14(),["SharedCodec284"]:c15(),["SharedCodec285"]:c16(),["SharedCodec286"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
