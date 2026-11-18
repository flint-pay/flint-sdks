import { d8014 as c0, d8015 as c4 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7885 as c1 } from '../descriptors/data/337.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9858 as c2 } from '../descriptors/data/451.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9867 as c3 } from '../descriptors/data/452.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8111 as c5 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9905 as c6, d9906 as c7, d9907 as c8, d9908 as c9, d9909 as c10, d9910 as c11, d9911 as c12, d9912 as c13, d9913 as c14, d9914 as c16 } from '../descriptors/data/454.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9767 as c15 } from '../descriptors/data/446.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8689 as c17, d8681 as c18, d8690 as c19, d8682 as c20, d8683 as c21 } from '../descriptors/data/383.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9955 as c22, d9956 as c23, d9957 as c24 } from '../descriptors/data/456.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7944 as c25 } from '../descriptors/data/341.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7753 as c26 } from '../descriptors/data/325.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7753 as d7753 } from '../descriptors/data/325.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7753;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec3072"]:c4(),["SharedCodec3075"]:c5(),["SharedCodec3107"]:c6(),["SharedCodec3108"]:c7(),["SharedCodec3109"]:c8(),["SharedCodec3110"]:c9(),["SharedCodec3111"]:c10(),["SharedCodec3112"]:c11(),["SharedCodec3113"]:c12(),["SharedCodec3114"]:c13(),["SharedCodec3115"]:c14(),["SharedCodec3116"]:c15(),["SharedCodec3117"]:c16(),["SharedCodec479"]:c17(),["SharedCodec480"]:c18(),["SharedCodec481"]:c19(),["SharedCodec482"]:c20(),["SharedCodec483"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
