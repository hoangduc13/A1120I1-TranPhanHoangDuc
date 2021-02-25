public class compressionAray {
    public static int[] inputArray() {
        int[] arr;
        int size;
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print("Enter a size: ");
        size = scanner.nextInt();
        arr = new int[size];
        int i = 0;
        while (i < arr.length) {
            System.out.print("Enter element " + (i + 1) + " :");
            arr[i] = scanner.nextInt();
            i++;
        }
        return arr;
    }
    public static int[] newArray(int[] arr1, int[] arr2) {
        int[] newArray = new int[arr1.length + arr2.length];
       for (int i = 0; i < arr1.length; i++) {
            newArray[i] = arr1[i];
        }
       int j = 0;
        for (int index = arr1.length; index < newArray.length; index++) {
            newArray[index] = arr2[j];
            j++;
        }
        return newArray;
    }

    public static void ouputArray(int[] array){
        System.out.printf("%-20s%s", "Elements in array: ", "");
        for (int j = 0; j < array.length; j++) {
            System.out.print(array[j] + "\t");
        }
    }
    public static void main(String[] args){
        int[] array1 = inputArray();
        ouputArray(array1);
        int[] array2 = inputArray();
        ouputArray(array2);
        int[] array3 = newArray(array1,array2);
        ouputArray(array3);
    }
}
