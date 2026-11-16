import { d264 as c0 } from '../descriptors/data/13.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6976 as c1 } from '../descriptors/data/328.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c2 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c3 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6939 as c4, d6940 as c5, d6941 as c6, d6942 as c7, d6943 as c8, d6944 as c9, d6945 as c10, d6946 as c11, d6947 as c12, d6948 as c13, d6949 as c14, d6950 as c15 } from '../descriptors/data/326.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6951 as c16, d6952 as c17, d6953 as c18, d6954 as c19, d6955 as c20, d6956 as c21, d6957 as c22, d6958 as c23, d6959 as c24, d6960 as c25, d6961 as c26, d6962 as c27 } from '../descriptors/data/327.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d7012 as c28, d7013 as c29 } from '../descriptors/data/329.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d264 as d264 } from '../descriptors/data/13.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d264;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRequest"]:c0(),["GiftCardNotificationRecipient"]:c1(),["MoneyValue"]:c2(),["SharedCodec136"]:c3(),["SharedCodec266"]:c4(),["SharedCodec267"]:c5(),["SharedCodec268"]:c6(),["SharedCodec269"]:c7(),["SharedCodec270"]:c8(),["SharedCodec271"]:c9(),["SharedCodec272"]:c10(),["SharedCodec273"]:c11(),["SharedCodec274"]:c12(),["SharedCodec275"]:c13(),["SharedCodec276"]:c14(),["SharedCodec277"]:c15(),["SharedCodec278"]:c16(),["SharedCodec279"]:c17(),["SharedCodec280"]:c18(),["SharedCodec281"]:c19(),["SharedCodec282"]:c20(),["SharedCodec283"]:c21(),["SharedCodec284"]:c22(),["SharedCodec285"]:c23(),["SharedCodec286"]:c24(),["SharedCodec287"]:c25(),["SharedCodec288"]:c26(),["SharedCodec289"]:c27(),["SharedCodec293"]:c28(),["SharedCodec294"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
