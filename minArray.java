public class minArray {
    public static int minValue(int[] array){
       int minIndex = 0;
       int min = array[0];
       for(int i=1;i<array.length;i++){
           if  (array[i]<min){
               minIndex = i;
               min = array[i];
           }
       }
        return minIndex;
    }
    public static void main(String[] args) {
        int []arr = {4, 12, 7, 8, 1, 6, 9};
        int index = minValue(arr);
        System.out.println("The smallest element in the array is: " + arr[index]);
    }
}