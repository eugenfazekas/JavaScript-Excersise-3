const nums3 = [0,1,2,3,4,5,7,8,9];

nums3.copyWithin(0);

console.log(nums3);



const nums4 = [0,1,2,3,4,5,7,8,9];

nums4.copyWithin(1);

console.log(nums4); //[0, 0, 1, 2, 3, 4, 5, 7, 8]
 



const nums5 = [0,1,2,3,4,5,7,8,9];

nums5.copyWithin(5,0,4); //startposition i, from i to i;

console.log(nums5); //[0, 1, 2, 3, 4, 0, 1, 2, 3]




const matrix1 = [[1,2,3],[4,5,6]];

const flatArray1 = matrix1.flat(1);

console.log(flatArray1);  // [1, 2, 3, 4, 5, 6]



const matrix2 = [[1,2,3],[1,[[[[[4]]]]]]];

const flatArray2 = matrix2.flat(Infinity);

console.log(flatArray2); // [1, 2, 3, 4, 5, 6]



const matrix3 = [[1,1],[1,[[[[[1]]]]]]];

const flatArray3 = matrix3.flat(Infinity).reduce((a,v) => v , 0);

console.log(flatArray3); // 1



const nums1 = [1,2,3];

const strs1 = ['one','two','three'];

const mapped1 = nums1.map((val,index) => [val,strs1[index]]);

console.log(mapped1);


const nums2 = [1,2,3];

const strs2 = ['one','two','three'];

const mapped2 = nums2.flatMap((val,index) => [val,strs2[index]]);

console.log(mapped2);


const strs3 = ['B','e','s','t'];

let best = strs3.reduce((c,v) => c + v);

//let best = strs3.reduceRigth((c,v) => c + v);

console.log(best);






 