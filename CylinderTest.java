package geometry;

public class CylinderTest {
    public static void main(String[] args){
        Cylinder cyl = new Cylinder();
        Cylinder cyl_1 = new Cylinder(2.0,5.0);
        System.out.println(cyl);
        System.out.println(cyl_1.getVolume());
    }
}
