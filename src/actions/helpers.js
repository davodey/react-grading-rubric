export function mapArr(arr, fn) {
   return arr.map((item) => {
       return fn(item);
    });
}
