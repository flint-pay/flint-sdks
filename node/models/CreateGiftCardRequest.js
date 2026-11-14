import { d265 as c0 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6947 as c1 } from '../descriptors/data/328.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6900 as c3 } from '../descriptors/data/325.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6911 as c4, d6912 as c5, d6913 as c6, d6914 as c7, d6915 as c8, d6916 as c9, d6917 as c10, d6918 as c11, d6919 as c12, d6920 as c13, d6921 as c14, d6922 as c15 } from '../descriptors/data/326.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6923 as c16, d6924 as c17, d6925 as c18, d6926 as c19, d6927 as c20, d6928 as c21, d6929 as c22, d6930 as c23, d6931 as c24, d6932 as c25, d6933 as c26, d6934 as c27 } from '../descriptors/data/327.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6983 as c28, d6984 as c29 } from '../descriptors/data/329.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d265 as d265 } from '../descriptors/data/14.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec141"]:c3(),["SharedCodec272"]:c4(),["SharedCodec273"]:c5(),["SharedCodec274"]:c6(),["SharedCodec275"]:c7(),["SharedCodec276"]:c8(),["SharedCodec277"]:c9(),["SharedCodec278"]:c10(),["SharedCodec279"]:c11(),["SharedCodec280"]:c12(),["SharedCodec281"]:c13(),["SharedCodec282"]:c14(),["SharedCodec283"]:c15(),["SharedCodec284"]:c16(),["SharedCodec285"]:c17(),["SharedCodec286"]:c18(),["SharedCodec287"]:c19(),["SharedCodec288"]:c20(),["SharedCodec289"]:c21(),["SharedCodec290"]:c22(),["SharedCodec291"]:c23(),["SharedCodec292"]:c24(),["SharedCodec293"]:c25(),["SharedCodec294"]:c26(),["SharedCodec295"]:c27(),["SharedCodec299"]:c28(),["SharedCodec300"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
