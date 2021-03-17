package geometry;

public class TestCircle {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[3];
        shapes[0] = new ComparableCircle(1,"Red",true);
        shapes[1] = new ComparableCircle(2,"Red",true);
        shapes[2] = new ComparableCircle(3,"Red",true);
        //for(int i =0; i<shapes.length;i++){
            //shapes[i].resize(Math.random()*100+1);
           //if (shapes[i] instanceof Square)
            //System.out.println(shapes[i].howToColor());
       // }
        Circle c1 = new ComparableCircle(1);
        Circle c2 = new ComparableCircle(2);
        System.out.println(c1.compareTo(c2));
        System.out.println(shapes[2].compare((ComparableCircle) shapes[0]));
    }
}