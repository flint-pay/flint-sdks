import { d262 as c0 } from '../descriptors/data/13.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6948 as c1 } from '../descriptors/data/327.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5786 as c2 } from '../descriptors/data/258.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6900 as c3 } from '../descriptors/data/324.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6911 as c4, d6912 as c5, d6913 as c6, d6914 as c7, d6915 as c8, d6916 as c9, d6917 as c10, d6918 as c11, d6919 as c12, d6920 as c13, d6921 as c14, d6922 as c15 } from '../descriptors/data/325.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6923 as c16, d6924 as c17, d6925 as c18, d6926 as c19, d6927 as c20, d6928 as c21, d6929 as c22, d6930 as c23, d6931 as c24, d6932 as c25, d6933 as c26, d6934 as c27 } from '../descriptors/data/326.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6984 as c28, d6985 as c29 } from '../descriptors/data/328.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d262 as d262 } from '../descriptors/data/13.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d262;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec136"]:c3(),["SharedCodec266"]:c4(),["SharedCodec267"]:c5(),["SharedCodec268"]:c6(),["SharedCodec269"]:c7(),["SharedCodec270"]:c8(),["SharedCodec271"]:c9(),["SharedCodec272"]:c10(),["SharedCodec273"]:c11(),["SharedCodec274"]:c12(),["SharedCodec275"]:c13(),["SharedCodec276"]:c14(),["SharedCodec277"]:c15(),["SharedCodec278"]:c16(),["SharedCodec279"]:c17(),["SharedCodec280"]:c18(),["SharedCodec281"]:c19(),["SharedCodec282"]:c20(),["SharedCodec283"]:c21(),["SharedCodec284"]:c22(),["SharedCodec285"]:c23(),["SharedCodec286"]:c24(),["SharedCodec287"]:c25(),["SharedCodec288"]:c26(),["SharedCodec289"]:c27(),["SharedCodec293"]:c28(),["SharedCodec294"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
