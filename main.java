package StopWatch;

import java.util.Arrays;

public class main {
    public static void main(String[] args) {
        int[] numbers = new int[1000000];
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = (int) (Math.random()*1000000);
        }
        StopWatch stopWatch = new StopWatch();
        Arrays.sort(numbers);
        stopWatch.stop();
        System.out.println("Millis: " + stopWatch.getElapsedTime());
    }
}
