import { d735 as c0 } from '../descriptors/data/39.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d5814 as c1 } from '../descriptors/data/259.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6928 as c2 } from '../descriptors/data/325.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6939 as c3, d6940 as c4, d6941 as c5, d6942 as c6, d6943 as c7, d6944 as c8, d6945 as c9, d6946 as c10, d6947 as c11, d6948 as c12, d6949 as c13, d6950 as c14 } from '../descriptors/data/326.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6951 as c15, d6952 as c16, d6953 as c17, d6954 as c18, d6955 as c19, d6956 as c20, d6957 as c21, d6958 as c22, d6959 as c23, d6960 as c24, d6961 as c25, d6962 as c26 } from '../descriptors/data/327.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d735 as d735 } from '../descriptors/data/39.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d735;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InitialGiftCardFunding"]:c0(),["MoneyValue"]:c1(),["SharedCodec136"]:c2(),["SharedCodec266"]:c3(),["SharedCodec267"]:c4(),["SharedCodec268"]:c5(),["SharedCodec269"]:c6(),["SharedCodec270"]:c7(),["SharedCodec271"]:c8(),["SharedCodec272"]:c9(),["SharedCodec273"]:c10(),["SharedCodec274"]:c11(),["SharedCodec275"]:c12(),["SharedCodec276"]:c13(),["SharedCodec277"]:c14(),["SharedCodec278"]:c15(),["SharedCodec279"]:c16(),["SharedCodec280"]:c17(),["SharedCodec281"]:c18(),["SharedCodec282"]:c19(),["SharedCodec283"]:c20(),["SharedCodec284"]:c21(),["SharedCodec285"]:c22(),["SharedCodec286"]:c23(),["SharedCodec287"]:c24(),["SharedCodec288"]:c25(),["SharedCodec289"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInitialGiftCardFunding(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
