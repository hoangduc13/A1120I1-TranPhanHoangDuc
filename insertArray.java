public class insertArray {
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
    public static int[] newArray(int[] oldArr) {
        int[] newArray = new int[oldArr.length + 1];
        for (int index = 0; index < oldArr.length; index++) {
            newArray[index] = oldArr[index];
        }
        return newArray;
    }
    public static int[] insertArr(int[] a){
        int elementInsert;
        int indexInsert;
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        System.out.print("Enter a element insert: ");
        elementInsert = scanner.nextInt();
        do{
            System.out.print("Enter a index insert(-1 < index < "+a.length+"): ");
            indexInsert = scanner.nextInt();
        }while((indexInsert<-1)||(indexInsert>a.length));
        a = newArray(a);
        for (int i= a.length-1;i>indexInsert;i--){
            a[i]=a[i-1];
        }
        a[indexInsert]=elementInsert;
        ouputArray(a);
        return a;
    }
    public static void ouputArray(int[] array){
        System.out.printf("%-20s%s", "Elements in array: ", "");
        for (int j = 0; j < array.length; j++) {
            System.out.print(array[j] + "\t");
        }
    }
    public static void main(String[] args){
        int[] array = inputArray();
        ouputArray(array);
        insertArr(array);
    }
}
