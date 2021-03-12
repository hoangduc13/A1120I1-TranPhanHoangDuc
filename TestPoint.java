package Point;

import com.sun.javaws.IconUtil;

public class TestPoint {
    public static void main(String[] args) {
        Point2D point2D_1 = new Point2D();
        System.out.println(point2D_1);
        point2D_1.setXY(1,5);
        System.out.println(point2D_1);
        Point3D point3D_1 = new Point3D();
        System.out.println(point3D_1);
        point3D_1.setXYZ(3,3,5);
        System.out.println(point3D_1);
    }
}
