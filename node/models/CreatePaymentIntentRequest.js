import { d314 as c0 } from '../descriptors/data/18.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5911 as c1 } from '../descriptors/data/267.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d5784 as c2 } from '../descriptors/data/258.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7914 as c3, d7915 as c4 } from '../descriptors/data/380.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7803 as c5 } from '../descriptors/data/374.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6122 as c6 } from '../descriptors/data/279.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d6898 as c7 } from '../descriptors/data/324.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7950 as c8, d7951 as c9, d7952 as c10 } from '../descriptors/data/382.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d7953 as c11, d7954 as c12, d7955 as c13, d7956 as c14, d7957 as c15, d7958 as c16, d7959 as c17, d7960 as c18, d7961 as c19, d7962 as c20, d7963 as c21, d7964 as c22 } from '../descriptors/data/383.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { d314 as d314 } from '../descriptors/data/18.js?sdk=bb0d7e74351abfed942ea144dbe99f50da6117785add7c8de338b21bf11fbc5a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d314;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePaymentIntentRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["OrderPaymentSourceCardSelection"]:c3(),["OrderPaymentSourceSelection"]:c4(),["PaymentSplitRequest"]:c5(),["PlatformFeeRequest"]:c6(),["SharedCodec136"]:c7(),["SharedCodec359"]:c8(),["SharedCodec360"]:c9(),["SharedCodec361"]:c10(),["SharedCodec362"]:c11(),["SharedCodec363"]:c12(),["SharedCodec364"]:c13(),["SharedCodec365"]:c14(),["SharedCodec366"]:c15(),["SharedCodec367"]:c16(),["SharedCodec368"]:c17(),["SharedCodec369"]:c18(),["SharedCodec370"]:c19(),["SharedCodec371"]:c20(),["SharedCodec372"]:c21(),["SharedCodec373"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
