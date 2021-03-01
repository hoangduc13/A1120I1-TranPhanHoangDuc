package geometry;

public class Rectangle {
    private double width;
    private double height;
    public Rectangle(){}
    public Rectangle(int width, int height){
        this.width = width;
        this.height = height;
    }

    public double getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }
    public double getArea(){
        return this.height*this.width;
    }
    public double getPerimeter(){
        return (this.height+this.width)*2;
    }
    public static void main(String[] args){
        Rectangle hinh_1 = new Rectangle(1,2);
        System.out.println(hinh_1.getArea());
        System.out.println(hinh_1.getPerimeter());
    }
}

