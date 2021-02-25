public class deleteElementArray {
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
    public static void ouputArray(int[] array){
        System.out.printf("%-20s%s", "Elements in array: ", "");
        for (int j = 0; j < array.length; j++) {
            System.out.print(array[j] + "\t");
        }
    }
    public static int[] deleteArray(int[] arr){
        int x;
        boolean t = true;
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print("Enter a element delete: ");
        x = scanner.nextInt();
        System.out.print("Element "+x+" appears in the index: ");
        for (int i=0;i<arr.length;i++){
            if (arr[i]==x){
                System.out.print(i+" ");
                t = false;
            }
        }
        if(t) System.out.println(x+" Not in Array");
        else{
            for(int i=0;i<arr.length; i++){
                if (arr[i] ==x){
                    for (int j=i;j<arr.length -1;j++ )
                        arr[j] = arr[j+1];
                }
                arr[arr.length-1]=0;
            }
            System.out.println("Array after delete "+x);
            ouputArray(arr);
        }
        return arr;
    }
    public static void main(String[] args){
    int[] array = inputArray();
    ouputArray(array);
    deleteArray(array);
    }
}
