const array = [1,2,3];
// PACKED_SMI_ELEMENTS

const array = [1,2,3,4.5]
// PACKED_DOUBLE_ELEMENTS```

const array = [1,2,3,4.5, 'string']
// PACKED_ELEMENTS

const array = [1,2, , 4]
// HOLEY_SMI_ELEMENTS

const array = [1,2, , 4, 5.2]
// HOLEY_DOUBLE_ELEMENTS

const array = [1,2, , 4,'string']
// HOLEY_ELEMENTS