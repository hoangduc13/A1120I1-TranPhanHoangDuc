package Point;

public class TestMovablePoint {
    public static void main(String[] args) {
        MovablePoint m1 = new MovablePoint(2,4);
        System.out.println(m1);
        m1.move();
        System.out.println(m1);
    }
}
