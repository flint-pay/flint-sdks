import { d702 as c0 } from '../descriptors/data/38.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6943 as c1, d6944 as c2, d6945 as c3, d6946 as c4, d6947 as c5, d6948 as c6, d6949 as c7, d6950 as c8 } from '../descriptors/data/326.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d6951 as c9, d6952 as c10, d6953 as c11, d6954 as c12, d6955 as c13, d6956 as c14, d6957 as c15, d6958 as c16, d6959 as c17 } from '../descriptors/data/327.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { d702 as d702 } from '../descriptors/data/38.js?sdk=05421896ae8c65a817376929cd993713654de9690307609677ba6b62f76c9668';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d702;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardFundingSourceRequest"]:c0(),["SharedCodec270"]:c1(),["SharedCodec271"]:c2(),["SharedCodec272"]:c3(),["SharedCodec273"]:c4(),["SharedCodec274"]:c5(),["SharedCodec275"]:c6(),["SharedCodec276"]:c7(),["SharedCodec277"]:c8(),["SharedCodec278"]:c9(),["SharedCodec279"]:c10(),["SharedCodec280"]:c11(),["SharedCodec281"]:c12(),["SharedCodec282"]:c13(),["SharedCodec283"]:c14(),["SharedCodec284"]:c15(),["SharedCodec285"]:c16(),["SharedCodec286"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardFundingSourceRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
