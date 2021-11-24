function smallestDiff(A, B, m, n)
{
     
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
 
    let a = 0, b = 0;
 
    let result = Number.MAX_SAFE_INTEGER;
 
    while (a < m && b < n)
    {
        if (Math.abs(A[a] - B[b]) < result)
            result = Math.abs(A[a] - B[b]);
 
        if (A[a] < B[b])
            a++;
        else
            b++;
    }
 
    return result;
}
 
let A = [ 10, 20, 14, 16,18 ];
 let B = [ 30, 23, 54, 33, 96];
 

let m = A.length;
let n = B.length;
 

console.log(smallestDiff(
    A, B, m, n));