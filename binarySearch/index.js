const arr = prompt("Enter array elements").split(',');
const ele = prompt("Enter element to search");
function BS(arr, ele){

    let start = 0;
    let end = arr.length - 1;
    let mid = start + Math.floor((end - start)/2);
    while(start <= end){
        if(arr[mid] == ele){
            return mid;
        }else if(arr[mid] > ele){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
        mid = start + (end - start) / 2;
    }
    return -1;
}
const index = BS(arr, ele);

if (index !== -1) {
    const ans = "Element " + ele + " found at index " + index;
    document.getElementById("demo").textContent = ans;
} else {
    document.getElementById("demo").textContent = "Element not found in the array";
}