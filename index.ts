type Test1 = {
    a: string;
    b: number;
    c: boolean;
}

interface Test2 {
    [key: string]: string;
}

let testObj2: Test2 = {
    a: 'a'
};
console.log('INITIAL', testObj2);
console.log('and 12 MORE')