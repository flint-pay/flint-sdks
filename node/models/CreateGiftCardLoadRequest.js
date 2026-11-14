import { d259 as c0 } from '../descriptors/data/13.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c2 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6911 as c3, d6912 as c4, d6913 as c5, d6914 as c6, d6915 as c7, d6916 as c8, d6917 as c9, d6918 as c10, d6919 as c11, d6920 as c12, d6921 as c13, d6922 as c14 } from '../descriptors/data/326.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6923 as c15, d6924 as c16, d6925 as c17, d6926 as c18, d6927 as c19, d6928 as c20, d6929 as c21, d6930 as c22, d6931 as c23, d6932 as c24, d6933 as c25, d6934 as c26 } from '../descriptors/data/327.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d259 as d259 } from '../descriptors/data/13.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d259;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardLoadRequest"]:c0(),["MoneyValue"]:c1(),["SharedCodec141"]:c2(),["SharedCodec272"]:c3(),["SharedCodec273"]:c4(),["SharedCodec274"]:c5(),["SharedCodec275"]:c6(),["SharedCodec276"]:c7(),["SharedCodec277"]:c8(),["SharedCodec278"]:c9(),["SharedCodec279"]:c10(),["SharedCodec280"]:c11(),["SharedCodec281"]:c12(),["SharedCodec282"]:c13(),["SharedCodec283"]:c14(),["SharedCodec284"]:c15(),["SharedCodec285"]:c16(),["SharedCodec286"]:c17(),["SharedCodec287"]:c18(),["SharedCodec288"]:c19(),["SharedCodec289"]:c20(),["SharedCodec290"]:c21(),["SharedCodec291"]:c22(),["SharedCodec292"]:c23(),["SharedCodec293"]:c24(),["SharedCodec294"]:c25(),["SharedCodec295"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardLoadRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
