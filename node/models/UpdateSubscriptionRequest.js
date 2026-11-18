import { d8114 as c0, d8112 as c3, d8113 as c12 } from '../descriptors/data/352.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8802 as c1 } from '../descriptors/data/389.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9686 as c2, d9688 as c27 } from '../descriptors/data/442.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8224 as c4, d8225 as c5 } from '../descriptors/data/358.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10948 as c6, d10949 as c7, d10929 as c22, d10930 as c23, d10931 as c24 } from '../descriptors/data/515.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d9608 as c8, d9609 as c9, d9610 as c26 } from '../descriptors/data/438.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10925 as c10, d10926 as c11 } from '../descriptors/data/514.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8016 as c13, d8017 as c14, d8015 as c15 } from '../descriptors/data/346.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d8235 as c16, d8236 as c17 } from '../descriptors/data/359.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10954 as c18, d10955 as c19, d10956 as c20, d10957 as c21 } from '../descriptors/data/516.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d10983 as c25 } from '../descriptors/data/518.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7804 as c28 } from '../descriptors/data/330.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { d7804 as d7804 } from '../descriptors/data/330.js?sdk=2fdad7cfcd1c92049468fb02e68ab24a81da669c248e8713cf6a7575952568a5';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7804;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["AddressRequest"]:c0(),["DeliverySelectionRecipientRequest"]:c1(),["SharedCodec169"]:c2(),["SharedCodec2"]:c3(),["SharedCodec232"]:c4(),["SharedCodec233"]:c5(),["SharedCodec2873"]:c6(),["SharedCodec2874"]:c7(),["SharedCodec2892"]:c8(),["SharedCodec2893"]:c9(),["SharedCodec2979"]:c10(),["SharedCodec2980"]:c11(),["SharedCodec3"]:c12(),["SharedCodec3070"]:c13(),["SharedCodec3071"]:c14(),["SharedCodec3072"]:c15(),["SharedCodec313"]:c16(),["SharedCodec314"]:c17(),["SharedCodec3206"]:c18(),["SharedCodec3207"]:c19(),["SharedCodec3208"]:c20(),["SharedCodec3209"]:c21(),["SharedCodec590"]:c22(),["SharedCodec591"]:c23(),["SharedCodec592"]:c24(),["SubscriptionBillingScheduleUpdateRequest"]:c25(),["SubscriptionDeliveryDestinationRequest"]:c26(),["SubscriptionDeliveryRequest"]:c27(),["UpdateSubscriptionRequest"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateSubscriptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
